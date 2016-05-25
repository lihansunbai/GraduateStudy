/**
 * 
 * @param {type} options
 * usage: var mapctl = new Mapcontrol({
 *  div:"divid"
 * });
 * @returns {MapControl}
 */
MapControl = function (options) {
    var me = this;
    
    //for a comprihensive information to database
    //this get geometry number
    //and a information string 
    me.pointCount = 0;
    me.linestringCount = 0;
    me.polygonCount = 0;
    me.geoString = null;

    me.options = $.extend({div: null}, options);

    if (!me.options.div) {
        console.log("you must sepcify a div name of mapcontrol!");
        return null;
    }

    me.gMapID = $.uuid();
    me.olMapID = $.uuid();

    var html = "";
    if (me.options.googleEnable) {
        html += "<div id='" + me.gMapID + "' class='full' style='position:absolute;'></div>";
    }
    html += "<div id='" + me.olMapID + "' class='full' style='position:absolute;'></div>";
    $(html).appendTo($("#" + me.options.div));


    if (me.options.googleEnable) {
        me.gmap = new google.maps.Map(document.getElementById(me.gMapID), {
            disableDefaultUI: true,
            keyboardShortcuts: false,
            draggable: false,
            disableDoubleClickZoom: true,
            scrollwheel: false,
            streetViewControl: false,
            mapTypeId: google.maps.MapTypeId.SATELLITE
        });
    }

    var view = new ol.View({
//        center:ol.proj.transform([112.9, 28.15], 'EPSG:4326', 'EPSG:3857'),
        zoom: 13,
        maxZoom: 21
    });
    view.on('change:center', function () {
        var center = ol.proj.transform(view.getCenter(), 'EPSG:3857', 'EPSG:4326');
        if (me.gmap) {
            me.gmap.setCenter(new google.maps.LatLng(center[1], center[0]));
        }
    });
    view.on('change:resolution', function () {
        if (me.gmap) {
            me.gmap.setZoom(view.getZoom());
        }
    });

    me.backgroundMap = {
        "GAODE": new ol.layer.Tile({
            source: new ol.source.GaoDe({
            }),
            visible: true
        }),
        "QQ_MAP": new ol.layer.Tile({
            source: new ol.source.QQ({
            }),
            visible: false
        }),
        "QQ_SATELLITE": new ol.layer.Tile({
            source: new ol.source.QQ({
                maptype: "satellite"
            }),
            visible: false
        })
    };
    me.olMap = new ol.Map({
        layers: [
            me.backgroundMap["GAODE"],
            me.backgroundMap["QQ_MAP"],
            me.backgroundMap["QQ_SATELLITE"]
        ],
        target: me.olMapID,
        interactions: ol.interaction.defaults({
            altShiftDragRotate: false,
            dragPan: false,
            rotate: false
        }).extend([new ol.interaction.DragPan({kinetic: null})]),
        view: view
    });
    view.setCenter(ol.proj.transform([112.9, 28.15], 'EPSG:4326', 'EPSG:3857'));
    view.setZoom(13);


    if (me.gmap) {
        me.gmap.controls[google.maps.ControlPosition.TOP_LEFT].push(document.getElementById(me.olMapID));
    }

    me.setBackgroundType("GAODE");

    if (me.options.editorTools) {
        me.options.editorTools.map = me;
    }

    $(window).resize(function () {
        me.updateSize();
    });

    //as the documentation says we need a FeatureOverlayer
    //not vector and soure layers to containt all gemonetry feature.

    // The features are not added to a regular vector layer/source,
    // but to a feature overlay which holds a collection of features.
    // This collection is passed to the modify and also the draw
    // interaction, so that both can add or modify features.
    me.featureOverlay = new ol.FeatureOverlay({
        style: new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(255, 255, 255, 0.2)'
            }),
            stroke: new ol.style.Stroke({
                color: '#ffcc33',
                width: 2
            }),
            image: new ol.style.Circle({
                radius: 7,
                fill: new ol.style.Fill({
                    color: '#ffcc33'
                })
            })
        })
    });
    me.featureOverlay.setMap(me.olMap);
};



MapControl.prototype.setBackgroundType = function (type) {
    var me = this;
    for (var key in me.backgroundMap) {
        me.backgroundMap[key].setVisible(false);
    }
    if (type !== "GOOGLE_MAP" && type !== "GOOGLE_SATELLITE") {
        me.backgroundMap[type].setVisible(true);
        if (me.gmap) {
            me.gmap.setMapTypeId("");
        }
    } else if (me.gmap && type === "GOOGLE_MAP") {
        me.gmap.setMapTypeId(google.maps.MapTypeId.ROADMAP);
    } else if (me.gmap && type === "GOOGLE_SATELLITE") {
        me.gmap.setMapTypeId(google.maps.MapTypeId.SATELLITE);
    }
};


MapControl.prototype.updateSize = function () {
    var me = this;
    me.olMap.updateSize();
};


MapControl.prototype.setCurrentDrawOperation = function (op) {
    var me = this;
    if (me.currentDrawOperation) {
        me.olMap.removeInteraction(me.currentDrawOperation);
    }
    if (op === 'Point' || op === 'LineString' || op === 'Polygon') {
        me.currentDrawOperation = new ol.interaction.Draw({
            features: me.featureOverlay.getFeatures(),
            type: op
        });
        me.olMap.addInteraction(me.currentDrawOperation);
    }
    //here is the modify function
    else if (op === 'Modify') {
        me.modify = new ol.interaction.Modify({
            features: me.featureOverlay.getFeatures(),
            deleteCondition: function (event) {
                return ol.events.condition.shiftKeyOnly(event) &&
                        ol.events.condition.singleClick(event);
            }
        });
        me.olMap.addInteraction(me.modify);

        //modify geometry
        me.typeSelect = document.getElementById(op);

        me.typeSelect.onchange = function (e) {
            me.olMap.removeInteraction(me.currentDrawOperation);
            addInteraction();
        };

        addInteraction();
    }
    
    me.currentDrawOperation.on("Drawend",function(e){
        var geo = me.geometryNumber(op);
        
        var feature = new ol.format.TKW();
        var coor = {
            type : geo,
            coor : feature.writeFeature(e.feature)
        };
        
        alert(coor);
        
        me.saveToDB(coor);
        
        //delete the information
        me.geoString = null;
    });  
    
};

MapControl.prototype.geometryNumber = function(options){
  var me = this;
  
  //need a solution about modify
  if(options === 'Point'){
      me.pointCount++;
      me.geoString = 'Point_'+ me.pointCount;   
  }else if(options === 'LineString'){
      me.linestringCount++;
      me.geoString = 'LineString_'+ me.linestringCount;   
  }else if(options === 'Polygon'){
      me.polygonCount++;
      me.geoString = 'Polygon_'+ me.polygonCount;   
  }else{
      me.geoString = 'unknow';
  }
  
};

MapControl.prototype.saveToDB = function(options){
    var me = this;
    
    var option = $.extend({
        type : null,
        coor : null},options);
    
    $.ajax({
        url : '/jsp/Server.jsp',
        type : 'POST',
        data : option,
        success : function(message){},
        error : function(xhr,msg){
            alert("网络错误");
        }   
    });   
};
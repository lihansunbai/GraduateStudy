/**
 * 
 * @param {type} options
 * usage: var mapctl = new Mapcontrol({
 *  div:"divid"
 * });
 * @returns {MapControl}
 */
MapControl = function(options) {
    var me = this;

    me.options = $.extend({div: null}, options);

    if (!me.options.div) {
        console.log("you must sepcify a div name of mapcontrol!");
        return null;
    }

    me.gMapID = $.uuid();
    me.olMapID = $.uuid();

    var html = "";
    html += "<div id='" + me.gMapID + "' class='fill' style='position:absolute;'></div>";
    html += "<div id='" + me.olMapID + "' class='fill' style='position:absolute;'></div>";
    $(html).appendTo($("#" + me.options.div));



    me.gmap = new google.maps.Map(document.getElementById(me.gMapID), {
        disableDefaultUI: true,
        keyboardShortcuts: false,
        draggable: false,
        disableDoubleClickZoom: true,
        scrollwheel: false,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });



    var view = new ol.View({
//        center:ol.proj.transform([112.9, 28.15], 'EPSG:4326', 'EPSG:3857'),
        zoom: 13,
        maxZoom: 21
    });
    view.on('change:center', function() {
        var center = ol.proj.transform(view.getCenter(), 'EPSG:3857', 'EPSG:4326');
        me.gmap.setCenter(new google.maps.LatLng(center[1], center[0]));
    });
    view.on('change:resolution', function() {
        me.gmap.setZoom(view.getZoom());
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
            me.backgroundMap["QQ_SATELLITE"],
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

//    document.getElementById(me.options.div).removeChild(document.getElementById(me.olMapID));
    me.gmap.controls[google.maps.ControlPosition.TOP_LEFT].push(document.getElementById(me.olMapID));
};



MapControl.prototype.setBackgroundType = function(type) {
    var me = this;
    for (var key in me.backgroundMap) {
        me.backgroundMap[key].setVisible(false);
    }
    if(type !== "GOOGLE_MAP" && type !== "GOOGLE_SATELLITE"){
        me.backgroundMap[type].setVisible(true);
        me.gmap.setMapTypeId("");
    }else if (type === "GOOGLE_MAP"){
        me.gmap.setMapTypeId(google.maps.MapTypeId.ROADMAP);
    }else if(type === "GOOGLE_SATELLITE"){
        me.gmap.setMapTypeId(google.maps.MapTypeId.SATELLITE);
    }
};
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

    me.options = $.extend({
        div: null,
        googleEnable: false
    }, options);

    if (!me.options.div) {
        console.log("you must sepcify a div name of mapcontrol!");
        return null;
    }

    me.olMapID = $.uuid();
    var html = "";
    if (me.options.googleEnable === true) {

    }
    html += "<div id='" + me.olMapID + "' class='fill'></div>";
    $(html).appendTo($("#" + me.options.div));

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


    me.sketchSource = new ol.source.Vector();
    me.sketchLayer = new ol.layer.Vector({
        source: me.sketchSource,
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

    me.currentInteraction = null;

    me.olMap = new ol.Map({
        layers: [
            me.backgroundMap["GAODE"],
            me.backgroundMap["QQ_MAP"],
            me.backgroundMap["QQ_SATELLITE"],
            me.sketchLayer
        ],
        target: me.olMapID,
        view: new ol.View({
            center: ol.proj.transform([112.9, 28.15], 'EPSG:4326', 'EPSG:3857'),
            zoom: 13
        })
    });
};



MapControl.prototype.setBackgroundType = function (type) {
    var me = this;
    for (var key in me.backgroundMap) {
        me.backgroundMap[key].setVisible(false);
    }
    me.backgroundMap[type].setVisible(true);
};


MapControl.prototype.setCurrentDrawType = function (op) {
    var me = this;
    if(me.currentInteraction){
        me.olMap.removeInteraction(me.currentInteraction);
    }
    if (op !== 'None') {
        me.currentInteraction = new ol.interaction.Draw({
            source: me.sketchSource,
            type: op
        });
        me.olMap.addInteraction(me.currentInteraction);
        me.currentInteraction.on("drawend",function(e){
            var writer = new ol.format.WKT();
            alert(writer.writeFeature(e.feature));
        });
    }
};
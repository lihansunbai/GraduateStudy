ol.source.GaoDe = function(opt_options) {

    var options = goog.isDef(opt_options) ? opt_options : {};

    var attributions;
    if (goog.isDef(options.attributions)) {
        attributions = options.attributions;
    } else {
        attributions = ol.source.GaoDe.ATTRIBUTIONS;
    }

    var crossOrigin = goog.isDef(options.crossOrigin) ?
            options.crossOrigin : 'anonymous';


    goog.base(this, {
        attributions: attributions,
        crossOrigin: crossOrigin,
        opaque: true,
        maxZoom: goog.isDef(options.maxZoom) ? options.maxZoom : 19,
        tileLoadFunction: options.tileLoadFunction,

        urls: [
            "http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}",
            "http://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}",
            "http://webrd03.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}",
            "http://webrd04.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}"
        ]
    });

};
goog.inherits(ol.source.GaoDe, ol.source.XYZ);

/**
 * @const
 * @type {ol.Attribution}
 * @api
 */
ol.source.GaoDe.DATA_ATTRIBUTION = new ol.Attribution({
    html: 'Data &copy; <a href="http://www.autonavi.com/">高德地图</a> '
});


/**
 * @const
 * @type {ol.Attribution}
 * @api
 */
ol.source.GaoDe.TILE_ATTRIBUTION = new ol.Attribution({
    html: 'Data &copy; <a href="http://www.autonavi.com/">高德地图</a> '
});


/**
 * @const
 * @type {Array.<ol.Attribution>}
 */
ol.source.GaoDe.ATTRIBUTIONS = [
    ol.source.GaoDe.TILE_ATTRIBUTION,
    ol.source.GaoDe.DATA_ATTRIBUTION
];
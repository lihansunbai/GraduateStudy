ol.source.QQ = function(opt_options) {

    var options = goog.isDef(opt_options) ? opt_options : {};

    var attributions;
    if (goog.isDef(options.attributions)) {
        attributions = options.attributions;
    } else {
        attributions = ol.source.QQ.ATTRIBUTIONS;
    }

    var crossOrigin = goog.isDef(options.crossOrigin) ?
            options.crossOrigin : 'anonymous';

    var maptype = options.maptype ? options.maptype : "map";


    goog.base(this, {
        attributions: attributions,
        crossOrigin: crossOrigin,
        opaque: true,
        maxZoom: goog.isDef(options.maxZoom) ? options.maxZoom : 19,
        tileLoadFunction: options.tileLoadFunction,
        tileUrlFunction: function(tileCoord, pixelRatio, projection) {
            var x = tileCoord[1], y = tileCoord[2], z = tileCoord[0];
            var scope = new Array(0, 0, 0, 0, 0, 3, 0, 3, 0, 3, 0, 3, 0, 7, 0, 7, 0, 15, 0, 15, 0, 31, 0, 31, 0, 63, 4, 59, 0, 127, 12, 115, 0, 225, 28, 227, 356, 455, 150, 259, 720, 899, 320, 469, 1440, 1799, 650, 929, 2880, 3589, 1200, 2069, 5760, 7179, 2550, 3709, 11520, 14349, 5100, 7999, 23060, 28689, 10710, 15429, 46120, 57369, 20290, 29849, 89990, 124729, 41430, 60689, 184228, 229827, 84169, 128886);
            var f = z * 4;
            var i = scope[f++];
            var j = scope[f++];
            var l = scope[f++];
            var scope = scope[f];

            if (x >= i && x <= j && y >= l && y <= scope) {
                y = Math.pow(2, z) - 1 - y;
            }


            var idx = Math.floor(Math.random() * (4));
            var t = "maptilesv3";
            var myurl = "";
            if (maptype === "satellite") {
                t = "sateTiles";
                myurl = "http://p" + idx + ".map.gtimg.com/sateTiles/" + z + "/" + Math.floor(x / 16)
                        + "/" + Math.floor(y / 16) + "/" + x + "_" + y + ".jpg";
            } else {
                myurl = "http://p" + idx + ".map.gtimg.com/maptilesv3/" + z + "/" + Math.floor(x / 16)
                        + "/" + Math.floor(y / 16) + "/" + x + "_" + y + ".png";
            }
            return myurl;
        }
    });

};
goog.inherits(ol.source.QQ, ol.source.XYZ);


//ol.source.QQ.prototype.tileUrlFunction = function(tileCoord, pixelRatio, projection) {
//    var x = tileCoord[1], y = tileCoord[2], z = tileCoord[0];
//    var scope = new Array(0, 0, 0, 0, 0, 3, 0, 3, 0, 3, 0, 3, 0, 7, 0, 7, 0, 15, 0, 15, 0, 31, 0, 31, 0, 63, 4, 59, 0, 127, 12, 115, 0, 225, 28, 227, 356, 455, 150, 259, 720, 899, 320, 469, 1440, 1799, 650, 929, 2880, 3589, 1200, 2069, 5760, 7179, 2550, 3709, 11520, 14349, 5100, 7999, 23060, 28689, 10710, 15429, 46120, 57369, 20290, 29849, 89990, 124729, 41430, 60689, 184228, 229827, 84169, 128886);
//    var f = z * 4;
//    var i = scope[f++];
//    var j = scope[f++];
//    var l = scope[f++];
//    var scope = scope[f];
//
//    if (x >= i && x <= j && y >= l && y <= scope) {
//        y = Math.pow(2, z) - 1 - y;
//    }
////    return "http://p0.map.gtimg.com/maptilesv3/13/416/298/6668_4768.png";
//
//    return "http://p1.map.gtimg.com/maptilesv3/" + z + "/" + Math.floor(x / 16)
//            + "/" + Math.floor(y / 16) + "/" + x + "_" + y + ".png";
//};

//ol.source.QQ.prototype.getTile = function(z, x, y, pixelRatio, projection) {
//    var tileX = x, tileY = y, tileZ = z;
//    var tileCoord = [z, x, y];
//    var scope = new Array(0, 0, 0, 0, 0, 3, 0, 3, 0, 3, 0, 3, 0, 7, 0, 7, 0, 15, 0, 15, 0, 31, 0, 31, 0, 63, 4, 59, 0, 127, 12, 115, 0, 225, 28, 227, 356, 455, 150, 259, 720, 899, 320, 469, 1440, 1799, 650, 929, 2880, 3589, 1200, 2069, 5760, 7179, 2550, 3709, 11520, 14349, 5100, 7999, 23060, 28689, 10710, 15429, 46120, 57369, 20290, 29849, 89990, 124729, 41430, 60689, 184228, 229827, 84169, 128886);
//    var f = tileZ * 4;
//    var i = scope[f++];
//    var j = scope[f++];
//    var l = scope[f++];
//    var scope = scope[f];
//
//    if (tileX >= i && tileX <= j && tileY >= l && tileY <= scope) {
//        tileY = Math.pow(2, tileZ) - 1 - tileY;
//    }
//    tileCoord = [tileZ, tileX, tileY];
//
//
//    var tileCoordKey = this.getKeyZXY(tileZ, tileX, tileY);
//    if (this.tileCache.containsKey(tileCoordKey)) {
//        return /** @type {!ol.Tile} */ (this.tileCache.get(tileCoordKey));
//    } else {
//
//        var tileUrl = this.tileUrlFunction(tileCoord, pixelRatio, projection);
//        var tile = new this.tileClass(
//                tileCoord,
//                goog.isDef(tileUrl) ? ol.TileState.IDLE : ol.TileState.EMPTY,
//                goog.isDef(tileUrl) ? tileUrl : '',
//                this.crossOrigin,
//                this.tileLoadFunction);
//        this.tileCache.set(tileCoordKey, tile);
//        return tile;
//    }
//};

/**
 * @const
 * @type {ol.Attribution}
 * @api
 */
ol.source.QQ.DATA_ATTRIBUTION = new ol.Attribution({
    html: 'Data &copy; <a href="http://map.qq.com/">腾讯地图</a> '
});


/**
 * @const
 * @type {ol.Attribution}
 * @api
 */
ol.source.QQ.TILE_ATTRIBUTION = new ol.Attribution({
    html: 'Data &copy; <a href="http://map.qq.com/">腾讯地图</a> '
});


/**
 * @const
 * @type {Array.<ol.Attribution>}
 */
ol.source.QQ.ATTRIBUTIONS = [
    ol.source.QQ.TILE_ATTRIBUTION,
    ol.source.QQ.DATA_ATTRIBUTION
];
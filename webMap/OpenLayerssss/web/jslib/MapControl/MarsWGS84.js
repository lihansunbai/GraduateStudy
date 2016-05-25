MarsWGS84 = function()
{
    var me = this;
    me.a = 6378245.0;
    me.ee = 0.00669342162296594323;
    me.PI = 3.14159265358979324;
};


MarsWGS84.prototype.outOfChina = function(x, y) {
    if (x < 72.004 || x > 137.8347)
        return true;
    if (y < 0.8293 || y > 55.8271)
        return true;
    return false;
};




MarsWGS84.prototype.marsFromLat = function(x, y) {
    var me = this;
    var ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));
    ret += (20.0 * Math.sin(6.0 * x * me.PI) + 20.0 * Math.sin(2.0 * x * me.PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(y * me.PI) + 40.0 * Math.sin(y / 3.0 * me.PI)) * 2.0 / 3.0;
    ret += (160.0 * Math.sin(y / 12.0 * me.PI) + 320 * Math.sin(y * me.PI / 30.0)) * 2.0 / 3.0;
    return ret;
};

MarsWGS84.prototype.marsFromLon = function(x, y) {
    var me = this;
    var ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));
    ret += (20.0 * Math.sin(6.0 * x * me.PI) + 20.0 * Math.sin(2.0 * x * me.PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(x * me.PI) + 40.0 * Math.sin(x / 3.0 * me.PI)) * 2.0 / 3.0;
    ret += (150.0 * Math.sin(x / 12.0 * me.PI) + 300.0 * Math.sin(x / 30.0 * me.PI)) * 2.0 / 3.0;
    return ret;
};


MarsWGS84.prototype.marsToWGS84 = function(pt) {
    var me = this;
    var x = pt[0];
    var y = pt[1];
    var step = 0.1;
    var epsilon = 0.000001;

    var left, right, bottom, top;
    left = x - step;
    right = x + step;
    bottom = y - step;
    top = y + step;


    var cx = x;
    var cy = y;


    while (true) {
        cx = (left + right) * 0.5;
        cy = (bottom + top) * 0.5;
        var ret = me.wgs84ToMars([cx, cy]);
        var mycx = ret[0];
        var mycy = ret[1];
        if (Math.abs(mycx - x) < epsilon && Math.abs(mycy - y) < epsilon) {
            break;
        }

        if (mycx < x) {
            left = cx;
        } else {
            right = cx;
        }

        if (mycy < y) {
            bottom = cy;
        } else {
            top = cy;
        }

    }

    cx = (Math.round(cx * 100000000)) / 100000000.0;
    cy = (Math.round(cy * 100000000)) / 100000000.0;
    pt = [cx,cy];
    return pt;

};



MarsWGS84.prototype.wgs84ToMars = function(pt) {
    var me = this;
    var wgLat, wgLon, mgLat, mgLon;
    var x = pt[0];
    var y = pt[1];
    wgLon = x;
    wgLat = y;

    if (me.outOfChina(x, y)) {
        return;
    }
    var dLat = me.marsFromLat(wgLon - 105.0, wgLat - 35.0);
    var dLon = me.marsFromLon(wgLon - 105.0, wgLat - 35.0);
    var radLat = wgLat / 180.0 * me.PI;
    var magic = Math.sin(radLat);
    magic = 1 - me.ee * magic * magic;
    var sqrtMagic = Math.sqrt(magic);
    dLat = (dLat * 180.0) / ((me.a * (1 - me.ee)) / (magic * sqrtMagic) * me.PI);
    dLon = (dLon * 180.0) / (me.a / sqrtMagic * Math.cos(radLat) * me.PI);

    mgLat = wgLat + dLat;
    mgLon = wgLon + dLon;
    pt = [mgLon, mgLat];
    return pt;
};



MarsWGS84.prototype.wgs84ToMarsGeometry = function(geo) {
    var me = this;
    var type = geo.getType();
    if (type === "Point") {
        me.wgs84ToMarsPoint(geo);
    } else if (type === "LineString") {
        me.wgs84ToMarsLineString(geo);
    } else if (type === "Polygon") {
        me.wgs84ToMarsPolygon(geo);
    } else if (type === "MultiPoint") {
        me.wgs84ToMarsMultiPoint(geo);
    } else if (type === "MultiLineString") {
        me.wgs84ToMarsMultiLineString(geo);
    } else if (type === "MultiPolygon") {
        me.wgs84ToMarsMultiPolygon(geo);
    } else if (type === "GeometryCollection") {
        me.wgs84ToMarsGeometryCollection(geo);
    } else if (type === "Circle") {
        me.wgs84ToMarsCircle(geo);
    }
};


MarsWGS84.prototype.wgs84ToMarsPoint = function(geo) {
    var me = this;
    var coord = me.wgs84ToMars(geo.getCoordinates());
    geo.setCoordinates(coord);
};


MarsWGS84.prototype.wgs84ToMarsLineString = function(geo) {
    var me = this;
    var coords = geo.getCoordinates();
    for (var i = 0; i < coords.length; i++) {
        coords[i] = me.wgs84ToMars(coords[i]);
    }
    geo.setCoordinates(coords);
};

MarsWGS84.prototype.wgs84ToMarsPolygon = function(geo) {
    var me = this;
    var coordsarr = geo.getCoordinates();
    for (var i = 0; i < coordsarr.length; i++) {
        for (var j = 0; j < coordsarr[i].length; j++) {
            coordsarr[i][j] = me.wgs84ToMars(coordsarr[i][j]);
        }
    }
    geo.setCoordinates(coordsarr);
};

MarsWGS84.prototype.wgs84ToMarsMultiPoint = function(geo) {
    var me = this;
    me.wgs84ToMarsLineString(geo);
};

MarsWGS84.prototype.wgs84ToMarsMultiLineString = function(geo) {
    var me = this;
    me.wgs84ToMarsPolygon(geo);
};

MarsWGS84.prototype.wgs84ToMarsMultiPolygon = function(geo) {
    var me = this;
    var coords = geo.getCoordinates();
    for (var i = 0; i < coords.length; i++) {
        for (var j = 0; j < coords[i].length; j++) {
            for(var k=0; k<coords[i][j].length; k++)
            coords[i][j][k] = me.wgs84ToMars(coords[i][j][k]);
        }
    }
    geo.setCoordinates(coords);
};

MarsWGS84.prototype.wgs84ToMarsGeometryCollection = function(geo) {
    var me = this;
    var geos = geo.getGeometries();
    for(var i=0; i<geos.length; i++){
        me.wgs84ToMarsGeometry(geos[i]);
    }
    geo.setGeometries(geos);
};

MarsWGS84.prototype.wgs84ToMarsCircle = function(geo) {

};



MarsWGS84.prototype.marsToWGS84Geometry = function(geo) {
    var me = this;
    var type = geo.getType();
    if (type === "Point") {
        me.marsToWGS84Point(geo);
    } else if (type === "LineString") {
        me.marsToWGS84LineString(geo);
    } else if (type === "Polygon") {
        me.marsToWGS84Polygon(geo);
    } else if (type === "MultiPoint") {
        me.marsToWGS84MultiPoint(geo);
    } else if (type === "MultiLineString") {
        me.marsToWGS84MultiLineString(geo);
    } else if (type === "MultiPolygon") {
        me.marsToWGS84MultiPolygon(geo);
    } else if (type === "GeometryCollection") {
        me.marsToWGS84GeometryCollection(geo);
    } else if (type === "Circle") {
        me.marsToWGS84Circle(geo);
    }
};


MarsWGS84.prototype.marsToWGS84Point = function(geo) {
    var me = this;
    var coord = me.marsToWGS84(geo.getCoordinates());
    geo.setCoordinates(coord);

};


MarsWGS84.prototype.marsToWGS84LineString = function(geo) {
    var me = this;
    var coords = geo.getCoordinates();
    for (var i = 0; i < coords.length; i++) {
        coords[i] = me.marsToWGS84(coords[i]);
    }
    geo.setCoordinates(coords);
};

MarsWGS84.prototype.marsToWGS84Polygon = function(geo) {
    var me = this;
    var coordsarr = geo.getCoordinates();
    for (var i = 0; i < coordsarr.length; i++) {
        for (var j = 0; j < coordsarr[i].length; j++) {
            coordsarr[i][j] = me.marsToWGS84(coordsarr[i][j]);
        }
    }
    geo.setCoordinates(coordsarr);
};

MarsWGS84.prototype.marsToWGS84MultiPoint = function(geo) {
    var me = this;
    me.marsToWGS84LineString(geo);
};

MarsWGS84.prototype.marsToWGS84MultiLineString = function(geo) {
    var me = this;
    me.marsToWGS84Polygon(geo);
};

MarsWGS84.prototype.marsToWGS84MultiPolygon = function(geo) {
    var me = this;
    var coords = geo.getCoordinates();
    for (var i = 0; i < coords.length; i++) {
        for (var j = 0; j < coords[i].length; j++) {
            for(var k=0; k<coords[i][j].length; k++)
            coords[i][j][k] = me.marsToWGS84(coords[i][j][k]);
        }
    }
    geo.setCoordinates(coords);
};

MarsWGS84.prototype.marsToWGS84GeometryCollection = function(geo) {
    var me = this;
    var geos = geo.getGeometries();
    for(var i=0; i<geos.length; i++){
        me.marsToWGS84Geometry(geos[i]);
    }
    geo.setGeometries(geos);
};

MarsWGS84.prototype.marsToWGS84Circle = function(geo) {

};
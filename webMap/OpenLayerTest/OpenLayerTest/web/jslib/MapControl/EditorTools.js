EditorTools = function (options) {
    var me = this;

    me.options = $.extend({div: null}, options);

    if (!me.options.div) {
        return null;
    }
    me.div = $("#" + me.options.div);

    me.mapCtlID = $.uuid();
    me.pointID = $.uuid();
    me.linestringID = $.uuid();
    me.polygonID = $.uuid();
    //modify geometry control
    me.modifyID = $.uuid();


    var html = '<button id="' + me.pointID + '">点</button>'
            + '<button id="' + me.linestringID + '">线</button>'
            + '<button id="' + me.polygonID + '">多边形</button>'
            + '<button id="' + me.modifyID + '">修改对象</button>';

    $(html).appendTo(me.div);


    $("#" + me.pointID).on("click", function () {
        if (me.map) {
            me.map.setCurrentDrawOperation('Point');
        }
    });
    $("#" + me.linestringID).on("click", function () {
        if (me.map) {
            me.map.setCurrentDrawOperation('LineString');
        }
    });
    $("#" + me.polygonID).on("click", function () {
        if (me.map) {
            me.map.setCurrentDrawOperation('Polygon');
        }
    });
    $("#" + me.modifyID).on("click", function () {
        if (me.map) {
            me.map.setCurrentDrawOperation('Modify');
        }
    });
};

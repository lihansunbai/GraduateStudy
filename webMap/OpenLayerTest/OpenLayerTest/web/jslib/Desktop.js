Desktop = function(options) {
    var me = this;

    me.options = $.extend({div: null}, options);

    if (!me.options.div) {
        return null;
    }
    me.div = $("#" + me.options.div);

    me.mapCtlID = $.uuid();
    me.editorToolsID = $.uuid();
    var html = '<div class="ui-layout-center" id="' + me.mapCtlID + '" style="margin:0;padding:0!important;"></div>'
            + '<div class="ui-layout-north" id="' + me.editorToolsID + '" style="margin:0;padding:0!important;" >&nbsp;</div>'
            + '<div class="ui-layout-west">west</div>'
            + '<div class="ui-layout-east">east</div>';

    $(html).appendTo(me.div);
    me.div.layout({
        applyDefaultStyles: true,
        onresize: function(e) {
            if (e === "center") {
                me.mapControl.updateSize();
            }
        }
    });

    
    me.editorTools = new EditorTools({
        div:me.editorToolsID
    });
    me.mapControl = new MapControl({
        div: me.mapCtlID
        ,googleEnable:true
        ,editorTools:me.editorTools
    });
    me.mapControl.setCurrentDrawOperation("Point");
    me.mapControl.setBackgroundType("GOOGLE_SATELLITE");
};

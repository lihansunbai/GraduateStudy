/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


FriendDialog = function (options) {
    var me = this;

    me.dlgID = uuid();
    me.friendPanelID = uuid();

    me.html = '<div id = "' + me.dlgID + '">' +
            '<div>' +
            '<ul id="' + me.friendPanelID + '"></ul>' +
            '</div>' +
            '</div>';
    $(me.html).appendTo("body");
    $("#" + me.dlgID).dialog().hide();
    me._init();
}

FriendDialog.prototype.show = function () {
    var me = this;

    $("#qqfrienddialog").dialog();
}

FriendDialog.prototype._init = function () {
    var me = this;

    $.ajax({
        url: Configuration.server,
        type: "POST",
        data: {
            params: JSON.stringify({
                type: "USER_GET_FRIENDS"
            })
        },
        success: function (data) {
            var obj = JSON.parse(data);
            if (obj.success) {
                var friendpanel = $("#" + friendPanelID);
                for (var i = 0; i < obj.data.length; i++) {
                    $("<li>").appendTo(friendpanel).append(
                            $('<button>' + obj.data[i].realname + '</button>')
                            .attr("friendid", obj.data[i].friendid).click(
                            function () {
                                alert($(this).attr("friendid"));
                            })
                            );

                }
            } else {
                alert(obj.errmsg);
            }
        },
    });

}
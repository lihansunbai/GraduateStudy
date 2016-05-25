/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

LoginDialog = function() {
    var me = this;
    me.usernameID = uuid();
    me.passwordID = uuid();
    me.loginID = uuid();
    me.dlgID = uuid();

    me.html =
            '<div id="' + me.dlgID + '" title="Login for Map">' +
            '    <table>' +
            '        <tr><td>UserName</td><td><input type="text" style="width:160px;" id="' + me.usernameID + '"/></td></tr>' +
            '        <tr><td>Password</td><td><input type="password" style="width:160px;" id="' + me.passwordID + '"/></td></tr>' +
            '        <tr><td></td><td><button id="' + me.loginID + '">Login</button></td></tr>' +
            '    </table>' +
            '</div>';
    $(me.html).appendTo($("body"));

    $("#" + me.loginID).click(function() {
        me.onLogin();
    });
};

LoginDialog.prototype.onLogin = function() {
    var me = this;
    var user = {
        username: $("#" + me.usernameID).val(),
        password: $("#" + me.passwordID).val()
    };

    $.ajax({
        url: "Service.php",
        type: "POST",
        data: {
            params: JSON.stringify({
                type: "USER_LOGIN",
                user: user
            })
        },
        success: function(data) {
            var obj = JSON.parse(data);
            if (obj.success) {
                me.destroy();
                $("#selections").html("<li><a>" + obj.data[0].username + "</a></li><li><a href='t1.php'>退出</a></li>");
            } else {
                alert(obj.errmsg);
            }
        },
        error: function(xhr, msg) {
            alert(msg);
        }
    });
};

LoginDialog.prototype.show = function() {
    var me = this;
    $("#" + me.dlgID).dialog({
      modal: true
    });
};

LoginDialog.prototype.destroy = function() {
    var me = this;

    $("#" + me.dlgID).remove();
};


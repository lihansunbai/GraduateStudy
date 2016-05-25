LoginDialog = function() {
    var me = this;

    me.usernameID = uuid();
    me.passwordID = uuid();
    me.loginID = uuid();
    me.html =
            '<div id="dialog" title="Basic dialog">' +
            '    <table>' +
            '        <tr><td>UserName</td><td><input type="text" id="' + me.usernameID + '"/></td></tr>' +
            '        <tr><td>Password</td><td><input type="password" id="' + me.passwordID + '"/></td></tr>' +
            '        <tr><td></td><td><button id="' + me.loginID + '">Login</button></td></tr>' +
            '    </table>' +
            '</div>';
    $(me.html).appendTo($("body"));

    $("#" + me.loginID).click(function(){
        me.onLogin();
    });
};

LoginDialog.prototype.onLogin = function() {
    var me = this;
    var user = {
        username: $("#" + me.usernameID).val(),
        password: $("#" + me.passwordID).val()
    };
    alert(JSON.stringify(user));
};

LoginDialog.prototype.show = function() {
    var me = this;
    $("#dialog").dialog();
};


/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

qqLogin = function (options) {
    var me = this;
    
    me.options = $.extend({
       loginSuccess : false 
    },options);

    me.qqnum = uid();
    me.qqpassword = uid();
    me.login = uid();
    me.cancel = uid();

    me.html = '<div id="qqlogin" title="QQ LOGIN">' +
            '<table>' +
            '<tr>' +
            '<td>QQ</td>' +
            '<td>' +
            '<input type="text" id="' + me.qqnum + '">' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td>PASSWORD</td>' +
            '<td>' +
            '<input type="text" id="' + me.qqpassword + '">' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td>' +
            '<button id="' + me.login + '">LOGIN</button>' +
            '</td>' +
            '<td>' +
            '<button id="' + me.cancel + '">CANCEL</button>' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '</div>';
    $(me.html).appendTo("body");

    $("#" + me.login).click(function () {
        me.onlogin();
    });

    $("#" + me.cancel).click(function () {
        me.oncancel();
    });
};

qqLogin.prototype.onlogin = function () {
    var me = this;
    var user = {
        username: $("#" + me.qqnum).val(),
        password: $("#" + me.qqpassword).val()
    };

//    <--show login information-->
//    alert(JSON.stringify(user));
    
    $.ajax({
        url: "server.php",
        type: "POST",
        data: {
            params: JSON.stringify({
                type: "USER_LOGIN",
                user: user
            })
        },
        success: function (data) {
            var obj = JSON.stringify(data);
            if(obj.success){
                if(me.options.loginSuccess){
                    me.options.loginSuccess(obj);
                }else{
                    alert(obj.errmsg);
                }
            }else{
                alert(obj.errmsg)
            }

        },
        error: function (xhr, msg) {
            alert(msg);
        }
    });

};

qqLogin.prototype.oncancel = function () {
    window.opener = null;
    window.open('', '_self');
    window.close();
};

qqLogin.prototype.show = function () {
    var me = this;

    $("#qqlogin").dialog();

};

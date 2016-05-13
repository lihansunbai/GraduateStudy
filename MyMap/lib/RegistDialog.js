/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
RegistDialog = function() {
    var me = this;
    me.usernameID = uuid();
    me.passwordID = uuid();
    me.registID = uuid();
    me.dlgID = uuid();

    me.html =
            '<div id="' + me.dlgID + '" title="Regist for Map">' +
            '    <table>' +
            '        <tr><td>UserName</td><td><input type="text" style="width:160px;" id="' + me.usernameID + '"/></td></tr>' +
            '        <tr><td>RealName</td><td><input type="text" style="width:160px;" id="' + me.realnameID + '"/></td></tr>' +
            '        <tr><td>Password</td><td><input type="password" style="width:160px;" id="' + me.passwordID + '"/></td></tr>' +
            '        <tr><td></td><td><button id="' + me.registID + '">Regist</button></td></tr>' +
            '    </table>' +
            '</div>';
    $(me.html).appendTo($("body"));

    $("#" + me.registID).click(function() {
        me.onLogin();
    });
};

RegistDialog.prototype.onLogin = function() {
	var me = this;
	var user = {
		username: $("#" + me.usernameID).val(),
                realname: $("#" + me.realnameID).val(),
		password: $("#" + me.passwordID).val()
	};

	$.ajax({
		url:" Service.php",
		type: "POST",                        
		data: {
			params: JSON.stringify({
				type: "REGIST_LOGIN",
				user: user
			})
		},
		success: function(data) {
			var obj = JSON.parse(data);
			if (obj.success) {
                            me.destroy();
                            $("#selections").html("<li><a>"+obj.data[0]+"</a></li><li><a href='t1.php'>退出</a></li>");
			} else {
				alert(obj.errmsg);
			}                 
		},
		error: function(xhr, msg) {
			alert(msg);
		}
	});
};

RegistDialog.prototype.show = function() {
    var me = this;
    $("#" + me.dlgID).dialog({
      modal: true
    });
};

RegistDialog.prototype.destroy=function(){
    var me = this;
    $("#" + me.dlgID).remove();
};


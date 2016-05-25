FriendDialog = function(options) {
	var me = this;
	me.dlgID = uuid();
	me.friendPanelID = uuid();
	var html =
			'<div id="' + me.dlgID + '">' +
			'	<div>' +
			'		<ul  id="' + me.friendPanelID + '"></ul>'
	'	<div>' +
			'</div>';
	$(html).appendTo($("body"));
	$("#" + me.dlgID).dialog().hide();
	me._init();
};

FriendDialog.prototype.show = function() {
	var me = this;
	$("#" + me.dlgID).dialog().show();
};


FriendDialog.prototype._init = function() {
	var me = this;

	$.ajax({
		url: Configuration.server,
		type: "POST",
		data: {
			params: JSON.stringify({
			type: "USER_GET_FRIENDS",
			})
		},
		success: function(data) {
			var obj = JSON.parse(data);
			if (obj.success) {
				var friendpanel = $("#" + me.friendPanelID);
				for (var i = 0; i < obj.data.length; i++) {
					$("<li>").appendTo(friendpanel).append(
							$('<button>' + obj.data[i].realname + '</button>')
							.attr("friendid",obj.data[i].friendid).click(
							function() {
								alert($(this).attr("friendid"));
							})
							);

				}
			} else {
				alert(obj.errmsg);
			}
		},
		error: function(xhr, msg) {
			alert(msg);
		}
	});
};



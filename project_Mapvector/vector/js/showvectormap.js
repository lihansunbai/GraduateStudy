/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
showvectormap = function () {
    var me = this;

    me.line = new mouseline();
    me.point = new mousepoint();
    me.polygon = new mousepolygon();

    me.username = false;

    me.lgotpoint = [];
    me.lnum = [];
}

//this function will do actual draw work in html SVG
showvectormap.prototype.drawvector = function () {
    var me = this;

    me.getdata();
    me.toSvg();
}


//this function get data from database.
showvectormap.prototype.getdata = function () {
    var me = this;

    $.ajax({
        url: "service.php",
        type: "POST",
        async: false,
        data: {params: JSON.stringify({
                type: "SHOW",
                username: "admin"
            })
        },
        success: function (data) {
            var obj = JSON.parse(data);
            if (obj.success) {
                for (var i = 0; i < obj.linedata.length; i++) {
                    var ltemp = obj.linedata[i];
                    me.lgotpoint[ltemp.lineid] = [];
                    me.lgotpoint[ltemp.lineid][ltemp.lpointid] 
                            = [ltemp.lineid, ltemp.lpointid, ltemp.x, ltemp.y, ltemp.flag];
                }
                for (var i = 0; i < obj.linenumdata.length; i++) {
                    var ltemp = obj.linenumdata[i];
                    me.lnum[i] = [ltemp.lineid, ltemp.pointnum];
                }

            } else {
                alert("Read data cant be convert error!");
            }
        },
        error: function (xhr, msg) {
            alert(msg);
        }
    });

}

//this function convert data from database to SVG format.
showvectormap.prototype.toSvg = function () {
    var me = this;
    var position = null;
    var move = 0;


    for (var i = 1; i <=  me.lnum.length; i++) {
        move = me.lnum[i][1];
        for (var j = 0; j < move; j++) {
            position = {
                x: me.lgotpoint[i][j][2],
                y: me.lgotpoint[i][j][3]
            }
            me.line.draw(position);
        }
        var shapenode = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
        shapenode.setAttribute("points", me.line.svgpath);
        shapenode.setAttribute("id", "line:" + me.lnum[i][0]);
        shapenode.setAttribute("style", "fill:none;stroke:black;stroke-width:1");
        document.getElementById("sv").appendChild(shapenode);
        alert(me.line.svgpath);
        
        me.line.svgpath = null;
    }
}
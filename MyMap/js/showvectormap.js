/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
showvectormap = function () {
    var me = this;

    me.line = [];
    me.point = [];
    me.polygon = [];

    me.username = false;
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
        url: "Service.php",
        type: "POST",
        async: false,
        data: {params: JSON.stringify({
                type: "SHOW"
//                username: "admin"
            })
        },
        success: function (data) {
            var obj = JSON.parse(data);
            if (obj.success) {
                for (var i = 0; i < (obj.linedata.length); i++) {
                    var ltemp = obj.linedata[i];
                    me.line[i] = [ltemp.lineid, ltemp.thegeom];
                }
                for (var i = 0; i < (obj.polygondata.length); i++) {
                    var ltemp = obj.polygondata[i];
                    me.polygon[i] = [ltemp.polygonid, ltemp.thegeom];
                }
                for (var i = 0; i < (obj.pointdata.length); i++) {
                    var ltemp = obj.pointdata[i];
                    me.point[i] = [ltemp.pointid, ltemp.thegeomx, ltemp.thegeomy];
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
    //line
    for ($i = 0; $i < me.line.length; $i++) {
        if (me.line.length == 0) {
            return;
        }
        var shapenode = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
        shapenode.setAttribute("points", me.line[$i][1]);
        shapenode.setAttribute("id", "line:" + me.line[$i][0]);
        shapenode.setAttribute("style", "fill:none;stroke:black;stroke-width:1");
        document.getElementById("sv").appendChild(shapenode);
    }

    //polygon
    for ($i = 0; $i < me.polygon.length; $i++) {
        if(me.polygon.length == 0){
            return;
        }
        var shapenode = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        shapenode.setAttribute("points", me.polygon[$i][1]);
        shapenode.setAttribute("id", "polygon:" + me.polygon[$i][0]);
        shapenode.setAttribute("style", "fill:none;stroke:black;stroke-width:1");
        document.getElementById("sv").appendChild(shapenode);
    }

    //point
    for ($i = 0; $i < me.point.length; $i++) {
        if (me.point.length == 0) {
            return;
        }
        var shapenode = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        shapenode.setAttribute("cx", me.point[$i][1]);
        shapenode.setAttribute("cy", me.point[$i][2]);
        shapenode.setAttribute("r", '1');
        shapenode.setAttribute("id", "point:" + me.point[$i][0]);
        shapenode.setAttribute("stroke", 'black');
        document.getElementById("sv").appendChild(shapenode);
    }
}
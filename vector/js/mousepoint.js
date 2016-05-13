/* 
 * This is supercalss of vectorization.
 * Use class to collect position on screen,
 * and draw it on screen.
 */
mousepoint = function () {
    var me = this;

    me.position = {
        x: 0,
        y: 0
    };
    //point numbers
    me.numofpoints = 0;

//this array save all point into database
    me.points = [];
}

//check single or double click
mousepoint.prototype.checkclick = function (event) {
    var me = this;
    if (event.type == 'click') {
        this.onsclick(event.offsetX, event.offsetY);
        return;
    }
}

//click just save and send
mousepoint.prototype.onsclick = function (x, y) {
    var me = this;
    var tempx = x.valueOf();
    var tempy = y.valueOf();

    me.position = {
        x: tempx,
        y: tempy
    };

    //save points
    me.points[0] = [me.numofpoints, [tempx, tempy]];
    me.numofpoints++;

    var shapenode = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    shapenode.setAttribute("cx", me.position.x);
    shapenode.setAttribute("cy", me.position.y);
    shapenode.setAttribute("r", '1');
    shapenode.setAttribute("stroke", 'black');
    document.getElementById("sv").appendChild(shapenode);

    me.todatabase(me.points);
}

//sent data to database
mousepoint.prototype.todatabase = function (points) {
    var me = this;
    $.ajax({
        url: "service.php",
        type: "POST",
        data: {
            params: JSON.stringify({
                username: "admin",
                type: "POINT",
                points: me.points
            })
        },
        success: function (data) {
            alert("success!")
        },
        error: function (xhr, msg) {
            alert(msg);
        }
    });
}


//double click save point, finish work and send
//point DO NOT NEED DOUBLE CLICK
//mousepoint.prototype.ondclick = function (x, y) {
//    var me = this;
//
//    var shapenode = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//    shapenode.setAttribute("cx", me.position.x);
//    shapenode.setAttribute("cy", me.position.y);
//    shapenode.setAttribute("r", '1');
//    shapenode.setAttribute("stroke", 'black');
//    document.getElementById("sv").appendChild(shapenode);
//
//    alert(me.points.toString());
//    return me.destruct();
//}

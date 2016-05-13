/* 
 * This is supercalss of vectorization.
 * Use class to collect position on screen,
 * and draw it on screen.
 */
mousepolygon = function () {
    var me = this;


    //this is globe var saveing the start position.
    me.startposition = {
        x: 0,
        y: 0
    };
    me.position = {
        x: 0,
        y: 0
    };

    //save SVG fromat string
    me.svgpath = null;

    //save "Lxxx,xxx" path
    //warning this var must be initialize with a space!!!
    //do not do initialize it with "null"!!!
    me.path = ' ';

    //point numbers
    me.numofpoints = 0;
//this array save all point into database
    me.points = [];
}

mousepolygon.prototype.destruct = function () {
    var me = this;

    me.numofpoints = 0;
    me.svgpath = null;
    me.path = ' ';
}

//check single or double click
mousepolygon.prototype.checkclick = function (event) {
    var me = this;
    if (event.type == 'click') {
        this.onsclick(event.offsetX, event.offsetY);
        return;
    }
    if (event.type == 'dblclick') {
        this.ondclick(event.offsetX, event.offsetY);
        return;
    }

}

//click just save and send
mousepolygon.prototype.onsclick = function (x, y) {
    var me = this;
    var tempx = x.valueOf();
    var tempy = y.valueOf();
    me.position = {
        x: tempx,
        y: tempy
    };

    //record start point
    if (me.numofpoints == 0) {
        me.startposition.x = me.position.x;
        me.startposition.y = me.position.y;
    }

    //save points
    me.points[me.numofpoints] = [me.numofpoints, [tempx, tempy]];
    this.draw(me.position);
    me.numofpoints++;
}


//double click save point, finish work and send
mousepolygon.prototype.ondclick = function (x, y) {
    var me = this;

    var shapenode = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    shapenode.setAttribute("points", me.svgpath);
    shapenode.setAttribute("style", "fill:none;stroke:black;stroke-width:1");
    document.getElementById("sv").appendChild(shapenode);

    me.todatabase(me.points);
    alert(me.points.toString());
    return me.destruct();
}

//is it a function draw the path?
mousepolygon.prototype.draw = function (position) {
    var me = this;
    this.makepath(position);

    return me.svgpath = me.startposition.x + ',' +
            me.startposition.y + me.path;

}

//make a SVG form path
mousepolygon.prototype.makepath = function (position) {
    var me = this;

    return me.path += position.x + ',' + position.y + ' ';
}

//sent data to database
mousepolygon.prototype.todatabase = function (points) {
    var me = this;
    $.ajax({
        url: "Service.php",
        type: "POST",
        data: {
            params: JSON.stringify({
//                username: "admin", 
                type: "POLYGON",
                num: me.numofpoints,
                polygon: me.points
            })
        },
        success: function (data) {
            alert("success!");

        },
        error: function (xhr, msg) {
            alert(msg);
        }
    });
}
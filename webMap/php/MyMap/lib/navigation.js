/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function() {
    $("#accordion").accordion({
        event: "click hoverintent"
    });
    $("#accordion1").accordion({
        event: "click hoverintent"
    });
    $("#vectors").buttonset();

    $( "#Add_point" ).button({
      text: false,
      icons: {
        primary: "ui-icon-pencil"
      }
    })
    .click(function() {
        op = 1;
        
    });
    
     $( "#Delete_point" ).button({
      text: false,
      icons: {
        primary: "ui-icon-trash"
      }
    })
    .click(function() {
    });
    
    $( "#Add_line" ).button({
      text: false,
      icons: {
        primary: "ui-icon-pencil"
      }
    })
    .click(function() {
        op = 2;
    });    
     $( "#Delete_line" ).button({
      text: false,
      icons: {
        primary: "ui-icon-trash"
      }
    })
    .click(function() {
    });
    
    $( "#Add_polygon" ).button({
      text: false,
      icons: {
        primary: "ui-icon-pencil"
      }
    })
    .click(function() {
       op = 3;
    });
    
     $( "#Delete_polygon" ).button({
      text: false,
      icons: {
        primary: "ui-icon-trash"
      }
    })
    .click(function() {
    });
});

$.event.special.hoverintent = {
    setup: function() {
        $(this).bind("mouseover", jQuery.event.special.hoverintent.handler);
    },
    teardown: function() {
        $(this).unbind("mouseover", jQuery.event.special.hoverintent.handler);
    },
    handler: function(event) {
        var currentX, currentY, timeout,
                args = arguments,
                target = $(event.target),
                previousX = event.pageX,
                previousY = event.pageY;

        function track(event) {
            currentX = event.pageX;
            currentY = event.pageY;
        }
        ;

        function clear() {
            target
                    .unbind("mousemove", track)
                    .unbind("mouseout", clear);
            clearTimeout(timeout);
        }

        function handler() {
            var prop,
                    orig = event;

            if ((Math.abs(previousX - currentX) +
                    Math.abs(previousY - currentY)) < 7) {
                clear();

                event = $.Event("hoverintent");
                for (prop in orig) {
                    if (!(prop in event)) {
                        event[ prop ] = orig[ prop ];
                    }
                }

                delete event.originalEvent;

                target.trigger(event);
            } else {
                previousX = currentX;
                previousY = currentY;
                timeout = setTimeout(handler, 100);
            }
        }

        timeout = setTimeout(handler, 100);
        target.bind({
            mousemove: track,
            mouseout: clear
        });
    }
};


﻿;
if (!window.console) {
    window.console = {};
    window.console.log = function (a) {
    };
    window.console.dir = function (a) {
    }
}
if (window.opera) {
    window.console.log = function (a) {
        opera.postError(a)
    };
    window.console.dir = function (a) {
    }
}
(function () {
    var a = jQuery.fn.attr, b = "http://www.w3.org/2000/svg";
    jQuery.fn.attr = function (o, l) {
        var g = this.length;
        if (!g) {
            return this
        }
        for (var f = 0; f < g; f++) {
            var c = this[f];
            if (c.namespaceURI === b) {
                if (l !== undefined) {
                    c.setAttribute(o, l)
                } else {
                    if ($.isArray(o)) {
                        var d = o.length, e = {};
                        while (d--) {
                            var k = o[d];
                            var h = c.getAttribute(k);
                            if (h || h === "0") {
                                h = isNaN(h) ? h : h - 0
                            }
                            e[k] = h
                        }
                        return e
                    } else {
                        if (typeof o === "object") {
                            for (var m in o) {
                                c.setAttribute(m, o[m])
                            }
                        } else {
                            var h = c.getAttribute(o);
                            if (h || h === "0") {
                                h = isNaN(h) ? h : h - 0
                            }
                            return h
                        }
                    }
                }
            } else {
                return a.apply(this, arguments)
            }
        }
        return this
    }
}());
$.SvgCanvas = function (aL, ay) {
    var k = !!window.opera, aC = navigator.userAgent.indexOf("AppleWebKit") != -1, a0 = {}, aF = {a: ["class", "clip-path", "clip-rule", "fill", "fill-opacity", "fill-rule", "filter", "id", "mask", "opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform", "xlink:href", "xlink:title"], circle: ["class", "clip-path", "clip-rule", "cx", "cy", "fill", "fill-opacity", "fill-rule", "filter", "id", "mask", "opacity", "r", "requiredFeatures", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform"], clipPath: ["class", "clipPathUnits", "id"], defs: [], desc: [], ellipse: ["class", "clip-path", "clip-rule", "cx", "cy", "fill", "fill-opacity", "fill-rule", "filter", "id", "mask", "opacity", "requiredFeatures", "rx", "ry", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform"], feGaussianBlur: ["class", "color-interpolation-filters", "id", "requiredFeatures", "stdDeviation"], filter: ["class", "color-interpolation-filters", "filterRes", "filterUnits", "height", "id", "primitiveUnits", "requiredFeatures", "width", "x", "xlink:href", "y"], foreignObject: ["class", "font-size", "height", "id", "opacity", "requiredFeatures", "style", "transform", "width", "x", "y"], g: ["class", "clip-path", "clip-rule", "id", "display", "fill", "fill-opacity", "fill-rule", "filter", "mask", "opacity", "requiredFeatures", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform"], image: ["class", "clip-path", "clip-rule", "filter", "height", "id", "mask", "opacity", "requiredFeatures", "style", "systemLanguage", "transform", "width", "x", "xlink:href", "xlink:title", "y"], line: ["class", "clip-path", "clip-rule", "fill", "fill-opacity", "fill-rule", "filter", "id", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "requiredFeatures", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform", "x1", "x2", "y1", "y2"], linearGradient: ["class", "id", "gradientTransform", "gradientUnits", "requiredFeatures", "spreadMethod", "systemLanguage", "x1", "x2", "xlink:href", "y1", "y2"], marker: ["id", "class", "markerHeight", "markerUnits", "markerWidth", "orient", "preserveAspectRatio", "refX", "refY", "systemLanguage", "viewBox"], mask: ["class", "height", "id", "maskContentUnits", "maskUnits", "width", "x", "y"], metadata: ["class", "id"], path: ["class", "clip-path", "clip-rule", "d", "fill", "fill-opacity", "fill-rule", "filter", "id", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "requiredFeatures", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform"], pattern: ["class", "height", "id", "patternContentUnits", "patternTransform", "patternUnits", "requiredFeatures", "style", "systemLanguage", "width", "x", "xlink:href", "y"], polygon: ["class", "clip-path", "clip-rule", "id", "fill", "fill-opacity", "fill-rule", "filter", "id", "class", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "points", "requiredFeatures", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform"], polyline: ["class", "clip-path", "clip-rule", "id", "fill", "fill-opacity", "fill-rule", "filter", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "points", "requiredFeatures", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform"], radialGradient: ["class", "cx", "cy", "fx", "fy", "gradientTransform", "gradientUnits", "id", "r", "requiredFeatures", "spreadMethod", "systemLanguage", "xlink:href"], rect: ["class", "clip-path", "clip-rule", "fill", "fill-opacity", "fill-rule", "filter", "height", "id", "mask", "opacity", "requiredFeatures", "rx", "ry", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform", "width", "x", "y"], stop: ["class", "id", "offset", "requiredFeatures", "stop-color", "stop-opacity", "style", "systemLanguage"], svg: ["class", "clip-path", "clip-rule", "filter", "id", "height", "mask", "preserveAspectRatio", "requiredFeatures", "style", "systemLanguage", "viewBox", "width", "x", "xmlns", "xmlns:se", "xmlns:xlink", "y"], "switch": ["class", "id", "requiredFeatures", "systemLanguage"], symbol: ["class", "fill", "fill-opacity", "fill-rule", "filter", "font-family", "font-size", "font-style", "font-weight", "id", "opacity", "preserveAspectRatio", "requiredFeatures", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "transform", "viewBox"], text: ["class", "clip-path", "clip-rule", "fill", "fill-opacity", "fill-rule", "filter", "font-family", "font-size", "font-style", "font-weight", "id", "mask", "opacity", "requiredFeatures", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "text-anchor", "transform", "x", "xml:space", "y"], textPath: ["class", "id", "method", "requiredFeatures", "spacing", "startOffset", "style", "systemLanguage", "transform", "xlink:href"], title: [], tspan: ["class", "clip-path", "clip-rule", "dx", "dy", "fill", "fill-opacity", "fill-rule", "filter", "font-family", "font-size", "font-style", "font-weight", "id", "mask", "opacity", "requiredFeatures", "rotate", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "systemLanguage", "text-anchor", "textLength", "transform", "x", "xml:space", "y"], use: ["class", "clip-path", "clip-rule", "fill", "fill-opacity", "fill-rule", "filter", "height", "id", "mask", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "transform", "width", "x", "xlink:href", "y"], annotation: ["encoding"], "annotation-xml": ["encoding"], maction: ["actiontype", "other", "selection"], math: ["class", "id", "display", "xmlns"], menclose: ["notation"], merror: [], mfrac: ["linethickness"], mi: ["mathvariant"], mmultiscripts: [], mn: [], mo: ["fence", "lspace", "maxsize", "minsize", "rspace", "stretchy"], mover: [], mpadded: ["lspace", "width"], mphantom: [], mprescripts: [], mroot: [], mrow: ["xlink:href", "xlink:type", "xmlns:xlink"], mspace: ["depth", "height", "width"], msqrt: [], mstyle: ["displaystyle", "mathbackground", "mathcolor", "mathvariant", "scriptlevel"], msub: [], msubsup: [], msup: [], mtable: ["align", "columnalign", "columnlines", "columnspacing", "displaystyle", "equalcolumns", "equalrows", "frame", "rowalign", "rowlines", "rowspacing", "width"], mtd: ["columnalign", "columnspan", "rowalign", "rowspan"], mtext: [], mtr: ["columnalign", "rowalign"], munder: [], munderover: [], none: [], semantics: []}, aB = {pathNodeTooltip: "Drag node to move it. Double-click node to change segment type", pathCtrlPtTooltip: "Drag control point to adjust curve properties", exportNoBlur: "Blurred elements will appear as un-blurred", exportNoImage: "Image elements will not appear", exportNoforeignObject: "foreignObject elements will not appear", exportNoDashArray: "Strokes will appear filled", exportNoText: "Text may not appear as expected"}, J = {show_outside_canvas: true, dimensions: [640, 480]};
    if (ay) {
        $.extend(J, ay)
    }
    var aw = this.Utils = function () {
        var bg = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        return{toXml: function (bh) {
                return $("<p/>").text(bh).html()
            }, fromXml: function (bh) {
                return $("<p/>").html(bh).text()
            }, encode64: function (bk) {
                bk = aw.convertToXMLReferences(bk);
                if (window.btoa) {
                    return window.btoa(bk)
                }
                var bi = new Array(Math.floor((bk.length + 2) / 3) * 4);
                var br, bp, bn;
                var bq, bo, bm, bl;
                var bj = 0, bh = 0;
                do {
                    br = bk.charCodeAt(bj++);
                    bp = bk.charCodeAt(bj++);
                    bn = bk.charCodeAt(bj++);
                    bq = br >> 2;
                    bo = ((br & 3) << 4) | (bp >> 4);
                    bm = ((bp & 15) << 2) | (bn >> 6);
                    bl = bn & 63;
                    if (isNaN(bp)) {
                        bm = bl = 64
                    } else {
                        if (isNaN(bn)) {
                            bl = 64
                        }
                    }
                    bi[bh++] = bg.charAt(bq);
                    bi[bh++] = bg.charAt(bo);
                    bi[bh++] = bg.charAt(bm);
                    bi[bh++] = bg.charAt(bl)
                } while (bj < bk.length);
                return bi.join("")
            }, decode64: function (bj) {
                if (window.atob) {
                    return window.atob(bj)
                }
                var bh = "";
                var bq, bo, bm = "";
                var bp, bn, bl, bk = "";
                var bi = 0;
                bj = bj.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                do {
                    bp = bg.indexOf(bj.charAt(bi++));
                    bn = bg.indexOf(bj.charAt(bi++));
                    bl = bg.indexOf(bj.charAt(bi++));
                    bk = bg.indexOf(bj.charAt(bi++));
                    bq = (bp << 2) | (bn >> 4);
                    bo = ((bn & 15) << 4) | (bl >> 2);
                    bm = ((bl & 3) << 6) | bk;
                    bh = bh + String.fromCharCode(bq);
                    if (bl != 64) {
                        bh = bh + String.fromCharCode(bo)
                    }
                    if (bk != 64) {
                        bh = bh + String.fromCharCode(bm)
                    }
                    bq = bo = bm = "";
                    bp = bn = bl = bk = ""
                } while (bi < bj.length);
                return unescape(bh)
            }, convertToXMLReferences: function (bi) {
                var bh = "";
                for (var bk = 0; bk < bi.length; bk++) {
                    var bj = bi.charCodeAt(bk);
                    if (bj < 128) {
                        bh += bi[bk]
                    } else {
                        if (bj > 127) {
                            bh += ("&#" + bj + ";")
                        }
                    }
                }
                return bh
            }, rectsIntersect: function (bi, bh) {
                return bh.x < (bi.x + bi.width) && (bh.x + bh.width) > bi.x && bh.y < (bi.y + bi.height) && (bh.y + bh.height) > bi.y
            }, snapToAngle: function (bi, bq, bh, bo) {
                var bk = Math.PI / 4;
                var bs = bh - bi;
                var br = bo - bq;
                var bj = Math.atan2(br, bs);
                var bm = Math.sqrt(bs * bs + br * br);
                var bl = Math.round(bj / bk) * bk;
                var bp = bi + bm * Math.cos(bl);
                var bn = bq + bm * Math.sin(bl);
                return{x: bp, y: bn, a: bl}
            }, text2xml: function (bi) {
                var bh;
                try {
                    var bk = ($.browser.msie) ? new ActiveXObject("Microsoft.XMLDOM") : new DOMParser();
                    bk.async = false
                } catch (bj) {
                    throw new Error("XML Parser could not be instantiated")
                }
                try {
                    if ($.browser.msie) {
                        bh = (bk.loadXML(bi)) ? bk : false
                    } else {
                        bh = bk.parseFromString(bi, "text/xml")
                    }
                } catch (bj) {
                    throw new Error("Error parsing XML string")
                }
                return bh
            }}
    }();
    var bc = this, aK = "http://www.w3.org/2000/svg", aE = "http://www.w3.org/1999/xlink", W = "http://www.w3.org/XML/1998/namespace", bf = "http://www.w3.org/2000/xmlns/", al = "http://svg-edit.googlecode.com", O = "http://www.w3.org/1999/xhtml", f = "http://www.w3.org/1998/Math/MathML", I = {em: 0, ex: 0, px: 1, cm: 35.43307, mm: 3.543307, "in": 90, pt: 1.25, pc: 15, "%": 0}, m = Math.floor(Math.random() * 100001), q = false, aM = aL.ownerDocument, w = J.dimensions, G = aM.importNode(aw.text2xml('<svg id="svgroot" xmlns="' + aK + '" xlinkns="' + aE + '" width="' + w[0] + '" height="' + w[1] + '" x="' + w[0] + '" y="' + w[1] + '" overflow="visible"><defs><filter id="canvashadow" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur"/><feOffset in="blur" dx="5" dy="5" result="offsetBlur"/><feMerge><feMergeNode in="offsetBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs></svg>').documentElement, true);
    aL.appendChild(G);
    var ai = aM.createElementNS(aK, "svg");
    $(ai).attr({id: "svgcontent", width: w[0], height: w[1], x: w[0], y: w[1], overflow: J.show_outside_canvas ? "visible" : "hidden", xmlns: aK, "xmlns:se": al, "xmlns:xlink": aE}).appendTo(G);
    if (q) {
        ai.setAttributeNS(al, "se:nonce", m)
    }
    var am = {};
    am[aE] = "xlink";
    am[W] = "xml";
    am[bf] = "xmlns";
    am[al] = "se";
    am[O] = "xhtml";
    am[f] = "mathml";
    var ba = {};
    $.each(am, function (bg, bh) {
        ba[bh] = bg
    });
    var h = {};
    $.each(aF, function (bg, bi) {
        var bh = {};
        $.each(bi, function (bl, bk) {
            if (bk.indexOf(":") != -1) {
                var bj = bk.split(":");
                bh[bj[1]] = ba[bj[0]]
            } else {
                bh[bk] = bk == "xmlns" ? bf : null
            }
        });
        h[bg] = bh
    });
    var N = document.createElementNS(aK, "animate");
    $(N).attr({attributeName: "opacity", begin: "indefinite", dur: 1, fill: "freeze"}).appendTo(G);
    var a2, an, ab;
    (function () {
        var bg = ["x", "x1", "cx", "rx", "width"];
        var bh = ["y", "y1", "cy", "ry", "height"];
        var bi = $.merge(["r", "radius"], bg);
        $.merge(bi, bh);
        a2 = function (bj, bn) {
            if (!isNaN(bn)) {
                return bn - 0
            }
            if (bn.substr(-1) === "%") {
                var bk = bn.substr(0, bn.length - 1) / 100;
                var bl = d();
                if ($.inArray(bj, bg) !== -1) {
                    return bk * bl.w
                } else {
                    if ($.inArray(bj, bh) !== -1) {
                        return bk * bl.h
                    } else {
                        return bk * Math.sqrt((bl.w * bl.w) + (bl.h * bl.h)) / Math.sqrt(2)
                    }
                }
            } else {
                var bm = bn.substr(-2);
                var bk = bn.substr(0, bn.length - 2);
                return bk * I[bm]
            }
        };
        ab = function (bn, bj, bo) {
            if (!isNaN(bo)) {
                var bl = bn.getAttribute(bj);
                if (bl !== null && isNaN(bl)) {
                    var bm;
                    if (bl.substr(-1) === "%") {
                        var bk = d();
                        bm = "%";
                        bo *= 100;
                        if ($.inArray(bj, bg) !== -1) {
                            bo = bo / bk.w
                        } else {
                            if ($.inArray(bj, bh) !== -1) {
                                bo = bo / bk.h
                            } else {
                                return bo / Math.sqrt((bk.w * bk.w) + (bk.h * bk.h)) / Math.sqrt(2)
                            }
                        }
                    } else {
                        bm = bl.substr(-2);
                        bo = bo / I[bm]
                    }
                    bo += bm
                }
            }
            bn.setAttribute(bj, bo)
        };
        bc.isValidUnit = function (bk, bo) {
            var bm = false;
            if ($.inArray(bk, bi) != -1) {
                if (!isNaN(bo)) {
                    bm = true
                } else {
                    bo = bo.toLowerCase();
                    $.each(I, function (bq) {
                        if (bm) {
                            return
                        }
                        var bp = new RegExp("^-?[\\d\\.]+" + bq + "$");
                        if (bp.test(bo)) {
                            bm = true
                        }
                    })
                }
            } else {
                if (bk == "id") {
                    var bj = false;
                    try {
                        var bl = b(bo);
                        bj = (bl == null)
                    } catch (bn) {
                    }
                    return bj
                } else {
                    bm = true
                }
            }
            return bm
        }
    })();
    this.undoCmd = {};
    var av = this.undoCmd.changeElement = function (bi, bh, bj) {
        this.elem = bi;
        this.text = bj ? ("Change " + bi.tagName + " " + bj) : ("Change " + bi.tagName);
        this.newValues = {};
        this.oldValues = bh;
        for (var bg in bh) {
            if (bg == "#text") {
                this.newValues[bg] = bi.textContent
            } else {
                if (bg == "#href") {
                    this.newValues[bg] = bi.getAttributeNS(aE, "href")
                } else {
                    this.newValues[bg] = bi.getAttribute(bg)
                }
            }
        }
        this.apply = function () {
            var bn = false;
            for (var bl in this.newValues) {
                if (this.newValues[bl]) {
                    if (bl == "#text") {
                        this.elem.textContent = this.newValues[bl]
                    } else {
                        if (bl == "#href") {
                            this.elem.setAttributeNS(aE, "xlink:href", this.newValues[bl])
                        } else {
                            this.elem.setAttribute(bl, this.newValues[bl])
                        }
                    }
                } else {
                    if (bl == "#text") {
                        this.elem.textContent = ""
                    } else {
                        this.elem.setAttribute(bl, "");
                        this.elem.removeAttribute(bl)
                    }
                }
                if (bl == "transform") {
                    bn = true
                } else {
                    if (bl == "stdDeviation") {
                        bc.setBlurOffsets(this.elem.parentNode, this.newValues[bl])
                    }
                }
            }
            if (!bn) {
                var bp = aq(bi);
                if (bp) {
                    var bo = bi.getBBox();
                    var bk = bo.x + bo.width / 2, bq = bo.y + bo.height / 2;
                    var bm = ["rotate(", bp, " ", bk, ",", bq, ")"].join("");
                    if (bm != bi.getAttribute("transform")) {
                        bi.setAttribute("transform", bm)
                    }
                }
            }
            if (this.elem.tagName == "title" && this.elem.parentNode.parentNode == ai) {
                Y()
            }
            return true
        };
        this.unapply = function () {
            var bn = false;
            for (var bl in this.oldValues) {
                if (this.oldValues[bl]) {
                    if (bl == "#text") {
                        this.elem.textContent = this.oldValues[bl]
                    } else {
                        if (bl == "#href") {
                            this.elem.setAttributeNS(aE, "xlink:href", this.oldValues[bl])
                        } else {
                            this.elem.setAttribute(bl, this.oldValues[bl])
                        }
                    }
                    if (bl == "stdDeviation") {
                        bc.setBlurOffsets(this.elem.parentNode, this.oldValues[bl])
                    }
                } else {
                    if (bl == "#text") {
                        this.elem.textContent = ""
                    } else {
                        this.elem.removeAttribute(bl)
                    }
                }
                if (bl == "transform") {
                    bn = true
                }
            }
            if (!bn) {
                var bp = aq(bi);
                if (bp) {
                    var bo = bi.getBBox();
                    var bk = bo.x + bo.width / 2, bq = bo.y + bo.height / 2;
                    var bm = ["rotate(", bp, " ", bk, ",", bq, ")"].join("");
                    if (bm != bi.getAttribute("transform")) {
                        bi.setAttribute("transform", bm)
                    }
                }
            }
            if (this.elem.tagName == "title" && this.elem.parentNode.parentNode == ai) {
                Y()
            }
            if (T[this.elem.id]) {
                delete T[this.elem.id]
            }
            return true
        };
        this.elements = function () {
            return[this.elem]
        }
    };
    var a = this.undoCmd.insertElement = function (bg, bh) {
        this.elem = bg;
        this.text = bh || ("Create " + bg.tagName);
        this.parent = bg.parentNode;
        this.apply = function () {
            this.elem = this.parent.insertBefore(this.elem, this.elem.nextSibling);
            if (this.parent == ai) {
                Y()
            }
        };
        this.unapply = function () {
            this.parent = this.elem.parentNode;
            this.elem = this.elem.parentNode.removeChild(this.elem);
            if (this.parent == ai) {
                Y()
            }
        };
        this.elements = function () {
            return[this.elem]
        }
    };
    var R = this.undoCmd.removeElement = function (bh, bg, bi) {
        this.elem = bh;
        this.text = bi || ("Delete " + bh.tagName);
        this.parent = bg;
        this.apply = function () {
            if (T[this.elem.id]) {
                delete T[this.elem.id]
            }
            this.parent = this.elem.parentNode;
            this.elem = this.parent.removeChild(this.elem);
            if (this.parent == ai) {
                Y()
            }
        };
        this.unapply = function () {
            if (T[this.elem.id]) {
                delete T[this.elem.id]
            }
            this.elem = this.parent.insertBefore(this.elem, this.elem.nextSibling);
            if (this.parent == ai) {
                Y()
            }
        };
        this.elements = function () {
            return[this.elem]
        };
        if (T[bh.id]) {
            delete T[bh.id]
        }
    };
    var S = this.undoCmd.moveElement = function (bh, bi, bg, bj) {
        this.elem = bh;
        this.text = bj ? ("Move " + bh.tagName + " to " + bj) : ("Move " + bh.tagName);
        this.oldNextSibling = bi;
        this.oldParent = bg;
        this.newNextSibling = bh.nextSibling;
        this.newParent = bh.parentNode;
        this.apply = function () {
            this.elem = this.newParent.insertBefore(this.elem, this.newNextSibling);
            if (this.newParent == ai) {
                Y()
            }
        };
        this.unapply = function () {
            this.elem = this.oldParent.insertBefore(this.elem, this.oldNextSibling);
            if (this.oldParent == ai) {
                Y()
            }
        };
        this.elements = function () {
            return[this.elem]
        }
    };
    var aA = this.undoCmd.batch = function (bg) {
        this.text = bg || "Batch Command";
        this.stack = [];
        this.apply = function () {
            var bh = this.stack.length;
            for (var bi = 0; bi < bh; ++bi) {
                this.stack[bi].apply()
            }
        };
        this.unapply = function () {
            for (var bh = this.stack.length - 1; bh >= 0; bh--) {
                this.stack[bh].unapply()
            }
        };
        this.elements = function () {
            var bh = [];
            var bk = this.stack.length;
            while (bk--) {
                var bj = this.stack[bk].elements();
                var bi = bj.length;
                while (bi--) {
                    if (bh.indexOf(bj[bi]) == -1) {
                        bh.push(bj[bi])
                    }
                }
            }
            return bh
        };
        this.addSubCommand = function (bh) {
            this.stack.push(bh)
        };
        this.isEmpty = function () {
            return this.stack.length == 0
        }
    };
    var aJ, aT;
    (function (bi) {
        var bg = 0, bh = [];
        aJ = function () {
            bh = [];
            bg = 0
        };
        bi.undoMgr = {getUndoStackSize: function () {
                return bg
            }, getRedoStackSize: function () {
                return bh.length - bg
            }, getNextUndoCommandText: function () {
                if (bg > 0) {
                    return bh[bg - 1].text
                }
                return""
            }, getNextRedoCommandText: function () {
                if (bg < bh.length) {
                    return bh[bg].text
                }
                return""
            }, undo: function () {
                if (bg > 0) {
                    bi.clearSelection();
                    var bj = bh[--bg];
                    bj.unapply();
                    z.clear();
                    call("changed", bj.elements())
                }
            }, redo: function () {
                if (bg < bh.length && bh.length > 0) {
                    bi.clearSelection();
                    var bj = bh[bg++];
                    bj.apply();
                    z.clear();
                    call("changed", bj.elements())
                }
            }};
        aT = bi.undoCmd.add = function (bj) {
            if (bg < bh.length && bh.length > 0) {
                bh = bh.splice(0, bg)
            }
            bh.push(bj);
            bg = bh.length
        }
    }(bc));
    (function (bi) {
        var bh = -1;
        var bg = [];
        bi.beginUndoableChange = function (bm, bk) {
            var bp = ++bh;
            var bl = bk.length;
            var bj = new Array(bl), bo = new Array(bl);
            while (bl--) {
                var bn = bk[bl];
                if (bn == null) {
                    continue
                }
                bo[bl] = bn;
                bj[bl] = bn.getAttribute(bm)
            }
            bg[bp] = {attrName: bm, oldValues: bj, elements: bo}
        };
        bi.finishUndoableChange = function () {
            var bo = bh--;
            var bp = bg[bo];
            var bl = bp.elements.length;
            var bk = bp.attrName;
            var bj = new aA("Change " + bk);
            while (bl--) {
                var bn = bp.elements[bl];
                if (bn == null) {
                    continue
                }
                var bm = {};
                bm[bk] = bp.oldValues[bl];
                if (bm[bk] != bn.getAttribute(bk)) {
                    bj.addSubCommand(new av(bn, bm, bk))
                }
            }
            bg[bo] = null;
            return bj
        }
    }(bc));
    var bd;
    (function () {
        function bg(bj, bi) {
            this.id = bj;
            this.selectedElement = bi;
            this.locked = true;
            this.reset = function (bk) {
                this.locked = true;
                this.selectedElement = bk;
                this.resize();
                this.selectorGroup.setAttribute("display", "inline")
            };
            this.selectorGroup = c({element: "g", attr: {id: ("selectorGroup" + this.id)}});
            this.selectorRect = this.selectorGroup.appendChild(c({element: "path", attr: {id: ("selectedBox" + this.id), fill: "none", stroke: "#22C", "stroke-width": "1", "stroke-dasharray": "5,5", style: "pointer-events:none"}}));
            this.selectorGrips = {nw: null, n: null, ne: null, e: null, se: null, s: null, sw: null, w: null};
            this.rotateGripConnector = this.selectorGroup.appendChild(c({element: "line", attr: {id: ("selectorGrip_rotateconnector_" + this.id), stroke: "#22C", "stroke-width": "1"}}));
            this.rotateGrip = this.selectorGroup.appendChild(c({element: "circle", attr: {id: ("selectorGrip_rotate_" + this.id), fill: "lime", r: 4, stroke: "#22C", "stroke-width": 2, style: "cursor:url(" + J.imgPath + "rotate.png) 12 12, auto;"}}));
            for (var bh in this.selectorGrips) {
                this.selectorGrips[bh] = this.selectorGroup.appendChild(c({element: "circle", attr: {id: ("selectorGrip_resize_" + bh + "_" + this.id), fill: "#22C", r: 4, style: ("cursor:" + bh + "-resize"), "stroke-width": 2, "pointer-events": "all", display: "none"}}))
            }
            this.showGrips = function (bk) {
                var bm = bk ? "inline" : "none";
                this.rotateGrip.setAttribute("display", bm);
                this.rotateGripConnector.setAttribute("display", bm);
                var bn = this.selectedElement;
                for (var bl in this.selectorGrips) {
                    this.selectorGrips[bl].setAttribute("display", bm)
                }
                if (bn) {
                    this.updateGripCursors(aq(bn))
                }
            };
            this.updateGripCursors = function (bo) {
                var bn = [];
                var bk = Math.round(bo / 45);
                if (bk < 0) {
                    bk += 8
                }
                for (var bl in this.selectorGrips) {
                    bn.push(bl)
                }
                while (bk > 0) {
                    bn.push(bn.shift());
                    bk--
                }
                var bm = 0;
                for (var bl in this.selectorGrips) {
                    this.selectorGrips[bl].setAttribute("style", ("cursor:" + bn[bm] + "-resize"));
                    bm++
                }
            };
            this.resize = function () {
                var bk = this.selectorRect, br = this.selectorGrips, bH = this.selectedElement, bF = bH.getAttribute("stroke-width");
                var bx = 1 / ac;
                if (bH.getAttribute("stroke") != "none" && !isNaN(bF)) {
                    bx += (bF / 2)
                }
                if (bH.tagName == "text") {
                    bx += 2 / ac
                }
                var bl = au(bH);
                if (bH.tagName == "g") {
                    var bw = ag(bH.childNodes);
                    $.each(bl, function (bP, bQ) {
                        bl[bP] = bw[bP]
                    })
                }
                var bI = B(bH);
                bI.e *= ac;
                bI.f *= ac;
                var bJ = bl.x - bx, bC = bl.y - bx, bB = bl.width + (bx * 2), bL = bl.height + (bx * 2), bl = {x: bJ, y: bC, width: bB, height: bL};
                var bN = be(bJ * ac, bC * ac, bB * ac, bL * ac, bI), bn = bN.aabox.x, bm = bN.aabox.y, bo = bN.aabox.width, bA = bN.aabox.height;
                var bq = bn + bo / 2, bp = bm + bA / 2;
                var bM = aq(bH);
                if (bM) {
                    var bz = G.createSVGTransform();
                    bz.setRotate(-bM, bq, bp);
                    var bD = bz.matrix;
                    bN.tl = P(bN.tl.x, bN.tl.y, bD);
                    bN.tr = P(bN.tr.x, bN.tr.y, bD);
                    bN.bl = P(bN.bl.x, bN.bl.y, bD);
                    bN.br = P(bN.br.x, bN.br.y, bD);
                    var bv = bN.tl.x, bu = bN.tl.y, bt = bN.tl.x, bs = bN.tl.y;
                    bv = Math.min(bv, Math.min(bN.tr.x, Math.min(bN.bl.x, bN.br.x)));
                    bu = Math.min(bu, Math.min(bN.tr.y, Math.min(bN.bl.y, bN.br.y)));
                    bt = Math.max(bt, Math.max(bN.tr.x, Math.max(bN.bl.x, bN.br.x)));
                    bs = Math.max(bs, Math.max(bN.tr.y, Math.max(bN.bl.y, bN.br.y)));
                    bn = bv;
                    bm = bu;
                    bo = (bt - bv);
                    bA = (bs - bu)
                }
                var bO = G.suspendRedraw(100);
                var bE = "M" + bn + "," + bm + " L" + (bn + bo) + "," + bm + " " + (bn + bo) + "," + (bm + bA) + " " + bn + "," + (bm + bA) + "z";
                az(bk, {d: bE});
                var by = {nw: [bn, bm], ne: [bn + bo, bm], sw: [bn, bm + bA], se: [bn + bo, bm + bA], n: [bn + (bo) / 2, bm], w: [bn, bm + (bA) / 2], e: [bn + bo, bm + (bA) / 2], s: [bn + (bo) / 2, bm + bA]};
                if (bH == aR[0]) {
                    for (var bG in by) {
                        var bK = by[bG];
                        az(br[bG], {cx: bK[0], cy: bK[1]})
                    }
                }
                if (bM) {
                    this.selectorGroup.setAttribute("transform", "rotate(" + [bM, bq, bp].join(",") + ")")
                } else {
                    this.selectorGroup.setAttribute("transform", "")
                }
                az(this.rotateGripConnector, {x1: bn + (bo) / 2, y1: bm, x2: bn + (bo) / 2, y2: bm - 20});
                az(this.rotateGrip, {cx: bn + (bo) / 2, cy: bm - 20});
                G.unsuspendRedraw(bO)
            };
            this.reset(bi)
        }
        bd = function () {
            this.selectorParentGroup = null;
            this.rubberBandBox = null;
            this.selectors = [];
            this.selectorMap = {};
            var bh = this;
            this.initGroup = function () {
                if (bh.selectorParentGroup && bh.selectorParentGroup.parentNode) {
                    bh.selectorParentGroup.parentNode.removeChild(bh.selectorParentGroup)
                }
                bh.selectorParentGroup = aM.createElementNS(aK, "g");
                bh.selectorParentGroup.setAttribute("id", "selectorParentGroup");
                G.appendChild(bh.selectorParentGroup);
                bh.selectorMap = {};
                bh.selectors = [];
                bh.rubberBandBox = null;
                if ($("#canvasBackground").length) {
                    return
                }
                var bi = aM.createElementNS(aK, "svg");
                var bk = J.dimensions;
                az(bi, {id: "canvasBackground", width: bk[0], height: bk[1], x: 0, y: 0, overflow: "visible", style: "pointer-events:none"});
                var bj = aM.createElementNS(aK, "rect");
                az(bj, {width: "100%", height: "100%", x: 0, y: 0, "stroke-width": 1, stroke: "#000", fill: "#FFF", style: "pointer-events:none"});
                bi.appendChild(bj);
                G.insertBefore(bi, ai)
            };
            this.requestSelector = function (bj) {
                if (bj == null) {
                    return null
                }
                var bk = this.selectors.length;
                if (typeof (this.selectorMap[bj.id]) == "object") {
                    this.selectorMap[bj.id].locked = true;
                    return this.selectorMap[bj.id]
                }
                for (var bi = 0; bi < bk; ++bi) {
                    if (this.selectors[bi] && !this.selectors[bi].locked) {
                        this.selectors[bi].locked = true;
                        this.selectors[bi].reset(bj);
                        this.selectorMap[bj.id] = this.selectors[bi];
                        return this.selectors[bi]
                    }
                }
                this.selectors[bk] = new bg(bk, bj);
                this.selectorParentGroup.appendChild(this.selectors[bk].selectorGroup);
                this.selectorMap[bj.id] = this.selectors[bk];
                return this.selectors[bk]
            };
            this.releaseSelector = function (bj) {
                if (bj == null) {
                    return
                }
                var bm = this.selectors.length, bk = this.selectorMap[bj.id];
                for (var bi = 0; bi < bm; ++bi) {
                    if (this.selectors[bi] && this.selectors[bi] == bk) {
                        if (bk.locked == false) {
                            console.log("WARNING! selector was released but was already unlocked")
                        }
                        delete this.selectorMap[bj.id];
                        bk.locked = false;
                        bk.selectedElement = null;
                        bk.showGrips(false);
                        try {
                            bk.selectorGroup.setAttribute("display", "none")
                        } catch (bl) {
                        }
                        break
                    }
                }
            };
            this.getRubberBandBox = function () {
                if (this.rubberBandBox == null) {
                    this.rubberBandBox = this.selectorParentGroup.appendChild(c({element: "rect", attr: {id: "selectorRubberBand", fill: "#22C", "fill-opacity": 0.15, stroke: "#22C", "stroke-width": 0.5, display: "none", style: "pointer-events:none"}}))
                }
                return this.rubberBandBox
            };
            this.initGroup()
        }
    }());
    var T = {};
    var H = function (bh) {
        function bg(bk) {
            var bj = bk.matrix, bm = "";
            switch (bk.type) {
                case 1:
                    bm = "matrix(" + [bj.a, bj.b, bj.c, bj.d, bj.e, bj.f].join(",") + ")";
                    break;
                case 2:
                    bm = "translate(" + bj.e + "," + bj.f + ")";
                    break;
                case 3:
                    if (bj.a == bj.d) {
                        bm = "scale(" + bj.a + ")"
                    } else {
                        bm = "scale(" + bj.a + "," + bj.d + ")"
                    }
                    break;
                case 4:
                    var bi = 0, bn = 0;
                    if (bk.angle != 0) {
                        var bl = 1 - bj.a;
                        bn = (bl * bj.f + bj.b * bj.e) / (bl * bl + bj.b * bj.b);
                        bi = (bj.e - bj.b * bn) / bl
                    }
                    bm = "rotate(" + bk.angle + " " + bi + "," + bn + ")";
                    break
            }
            return bm
        }
        this._elem = bh || null;
        this._xforms = [];
        this._update = function () {
            var bk = "";
            var bj = G.createSVGMatrix();
            for (var bl = 0; bl < this.numberOfItems; ++bl) {
                var bi = this._list.getItem(bl);
                bk += bg(bi) + " "
            }
            this._elem.setAttribute("transform", bk)
        };
        this._list = this;
        this._init = function () {
            var br = this._elem.getAttribute("transform");
            if (!br) {
                return
            }
            var bv = /\s*((scale|matrix|rotate|translate)\s*\(.*?\))\s*,?\s*/;
            var bo = [];
            var bn = true;
            while (bn) {
                bn = br.match(bv);
                br = br.replace(bv, "");
                if (bn && bn[1]) {
                    var bs = bn[1];
                    var bu = bs.split(/\s*\(/);
                    var bi = bu[0];
                    var bm = bu[1].match(/\s*(.*?)\s*\)/);
                    var bk = bm[1].split(/[, ]+/);
                    var bp = "abcdef".split("");
                    var bj = G.createSVGMatrix();
                    $.each(bk, function (bw, bx) {
                        bk[bw] = parseFloat(bx);
                        if (bi == "matrix") {
                            bj[bp[bw]] = bk[bw]
                        }
                    });
                    var bq = G.createSVGTransform();
                    var bl = "set" + bi.charAt(0).toUpperCase() + bi.slice(1);
                    var bt = bi == "matrix" ? [bj] : bk;
                    if (bi == "scale" && bt.length == 1) {
                        bt.push(bt[0])
                    } else {
                        if (bi == "translate" && bt.length == 1) {
                            bt.push(0)
                        }
                    }
                    bq[bl].apply(bq, bt);
                    this._list.appendItem(bq)
                }
            }
        };
        this.numberOfItems = 0;
        this.clear = function () {
            this.numberOfItems = 0;
            this._xforms = []
        };
        this.initialize = function (bi) {
            this.numberOfItems = 1;
            this._xforms = [bi]
        };
        this.getItem = function (bi) {
            if (bi < this.numberOfItems && bi >= 0) {
                return this._xforms[bi]
            }
            return null
        };
        this.insertItemBefore = function (bl, bj) {
            var bn = null;
            if (bj >= 0) {
                if (bj < this.numberOfItems) {
                    var bm = new Array(this.numberOfItems + 1);
                    for (var bk = 0; bk < bj; ++bk) {
                        bm[bk] = this._xforms[bk]
                    }
                    bm[bk] = bl;
                    for (var bi = bk + 1; bk < this.numberOfItems; ++bi, ++bk) {
                        bm[bi] = this._xforms[bk]
                    }
                    this.numberOfItems++;
                    this._xforms = bm;
                    bn = bl;
                    this._list._update()
                } else {
                    bn = this._list.appendItem(bl)
                }
            }
            return bn
        };
        this.replaceItem = function (bj, bi) {
            var bk = null;
            if (bi < this.numberOfItems && bi >= 0) {
                this._xforms[bi] = bj;
                bk = bj;
                this._list._update()
            }
            return bk
        };
        this.removeItem = function (bj) {
            var bm = null;
            if (bj < this.numberOfItems && bj >= 0) {
                var bm = this._xforms[bj];
                var bl = new Array(this.numberOfItems - 1);
                for (var bk = 0; bk < bj; ++bk) {
                    bl[bk] = this._xforms[bk]
                }
                for (var bi = bk; bi < this.numberOfItems - 1; ++bi, ++bk) {
                    bl[bi] = this._xforms[bk + 1]
                }
                this.numberOfItems--;
                this._xforms = bl;
                this._list._update()
            }
            return bm
        };
        this.appendItem = function (bi) {
            this._xforms.push(bi);
            this.numberOfItems++;
            this._list._update();
            return bi
        }
    };
    function at(bi, bg) {
        if (bi && bi.nodeType == 1) {
            bg(bi);
            var bh = bi.childNodes.length;
            while (bh--) {
                at(bi.childNodes.item(bh), bg)
            }
        }
    }
    function a9(bi, bg) {
        if (bi && bi.nodeType == 1) {
            var bh = bi.childNodes.length;
            while (bh--) {
                at(bi.childNodes.item(bh), bg)
            }
            bg(bi)
        }
    }
    var az = this.assignAttributes = function (bl, bi, bh, bg) {
        if (!bh) {
            bh = 0
        }
        var bm = null;
        if (!window.opera) {
            G.suspendRedraw(bh)
        }
        for (var bj in bi) {
            var bk = (bj.substr(0, 4) == "xml:" ? W : bj.substr(0, 6) == "xlink:" ? aE : null);
            if (bk || !bg) {
                bl.setAttributeNS(bk, bj, bi[bj])
            } else {
                ab(bl, bj, bi[bj])
            }
        }
        if (!window.opera) {
            G.unsuspendRedraw(bm)
        }
    };
    var ar = this.cleanupElement = function (bh) {
        var bi = G.suspendRedraw(60);
        var bj = {"fill-opacity": 1, "stop-opacity": 1, opacity: 1, stroke: "none", "stroke-dasharray": "none", "stroke-linejoin": "miter", "stroke-linecap": "butt", "stroke-opacity": 1, "stroke-width": 1, rx: 0, ry: 0};
        for (var bg in bj) {
            var bk = bj[bg];
            if (bh.getAttribute(bg) == bk) {
                bh.removeAttribute(bg)
            }
        }
        G.unsuspendRedraw(bi)
    };
    var c = this.addSvgElementFromJson = function (bh) {
        var bg = b(bh.attr.id);
        if (bg && bh.element != bg.tagName) {
            V.removeChild(bg);
            bg = null
        }
        if (!bg) {
            bg = aM.createElementNS(aK, bh.element);
            if (V) {
                V.appendChild(bg)
            }
        }
        if (bh.curStyles) {
            az(bg, {fill: aN.fill, stroke: aN.stroke, "stroke-width": aN.stroke_width, "stroke-dasharray": aN.stroke_dasharray, "stroke-linejoin": aN.stroke_linejoin, "stroke-linecap": aN.stroke_linecap, "stroke-opacity": aN.stroke_opacity, "fill-opacity": aN.fill_opacity, opacity: aN.opacity / 2, style: "pointer-events:inherit"}, 100)
        }
        az(bg, bh.attr, 100);
        ar(bg);
        return bg
    };
    (function () {
        var bg = aM.createComment(" Created with SVG-edit - http://svg-edit.googlecode.com/ ");
        ai.appendChild(bg)
    })();
    var aS = [], aX = {}, ad = J.imgPath + "logo.png", V = null, ah = {round_digits: 5}, aG = false, a4 = 1, aj = null, a1 = "select", aa = "none", U = {shape: {fill: "#" + J.initFill.color, fill_paint: null, fill_opacity: J.initFill.opacity, stroke: "#" + J.initStroke.color, stroke_paint: null, stroke_opacity: J.initStroke.opacity, stroke_width: J.initStroke.width, stroke_dasharray: "none", stroke_linejoin: "miter", stroke_linecap: "butt", opacity: J.initOpacity}};
    U.text = $.extend(true, {}, U.shape);
    $.extend(U.text, {fill: "#000000", stroke_width: 0, font_size: 24, font_family: "serif"});
    var aN = U.shape, a6 = U.text, r = aN, ac = 1, aR = new Array(1), u = new Array(1), K = null, F = new bd(), j = null, aH = [], e = {};
    var aI = this.runExtensions = function (bh, bj, bi) {
        var bg = false;
        if (bi) {
            bg = []
        }
        $.each(e, function (bk, bl) {
            if (bh in bl) {
                if (bi) {
                    bg.push(bl[bh](bj))
                } else {
                    bg = bl[bh](bj)
                }
            }
        });
        return bg
    };
    this.addExtension = function (bg, bi) {
        if (!(bg in e)) {
            if ($.isFunction(bi)) {
                var bh = bi($.extend(bc.getPrivateMethods(), {svgroot: G, svgcontent: ai, nonce: m, selectorManager: F}))
            } else {
                var bh = bi
            }
            e[bg] = bh;
            call("extension_added", bh)
        } else {
            console.log('Cannot add extension "' + bg + '", an extension by that name already exists"')
        }
    };
    var a3 = function (bh) {
        var bg = ah.round_digits;
        if (!isNaN(bh)) {
            return Number(Number(bh).toFixed(bg))
        } else {
            if ($.isArray(bh)) {
                return a3(bh[0]) + "," + a3(bh[1])
            }
        }
    };
    var Q = this.round = function (bg) {
        return parseInt(bg * ac) / ac
    };
    var aW = this.getIntersectionList = function (bj) {
        if (j == null) {
            return null
        }
        if (!aH.length) {
            aH = aO(V, true)
        }
        var bg = null;
        try {
            bg = V.getIntersectionList(bj, null)
        } catch (bk) {
        }
        if (bg == null || typeof (bg.item) != "function") {
            bg = [];
            var bi = j.getBBox();
            $.each(bi, function (bl, bm) {
                bi[bl] = bm / ac
            });
            var bh = aH.length;
            while (bh--) {
                if (!bi.width || !bi.width) {
                    continue
                }
                if (aw.rectsIntersect(bi, aH[bh].bbox)) {
                    bg.push(aH[bh].elem)
                }
            }
        }
        return bg
    };
    var ag = this.getStrokedBBox = function (bh) {
        if (!bh) {
            bh = aO()
        }
        if (!bh.length) {
            return false
        }
        var bi = function (br) {
            try {
                var bw = au(br);
                var bs = aq(br);
                if ((bs && bs % 90) || aP(aQ(br))) {
                    var bv = false;
                    var by = ["ellipse", "path", "line", "polyline", "polygon"];
                    if ($.inArray(br.tagName, by) != -1) {
                        bw = bv = bc.convertToPath(br, true)
                    } else {
                        if (br.tagName == "rect") {
                            var bq = br.getAttribute("rx");
                            var bp = br.getAttribute("ry");
                            if (bq || bp) {
                                bw = bv = bc.convertToPath(br, true)
                            }
                        }
                    }
                    if (!bv) {
                        var bt = document.createElementNS(aK, "g");
                        var bx = br.parentNode;
                        bx.replaceChild(bt, br);
                        bt.appendChild(br);
                        bw = bt.getBBox();
                        bx.insertBefore(br, bt);
                        bx.removeChild(bt)
                    }
                }
                return bw
            } catch (bu) {
                console.log(br, bu);
                return null
            }
        };
        var bm;
        $.each(bh, function () {
            if (bm) {
                return
            }
            if (!this.parentNode) {
                return
            }
            bm = bi(this)
        });
        if (bm == null) {
            return null
        }
        var bg = bm.x + bm.width;
        var bo = bm.y + bm.height;
        var bl = bm.x;
        var bk = bm.y;
        var bn = function (bq) {
            var bp = bq.getAttribute("stroke-width");
            var br = 0;
            if (bq.getAttribute("stroke") != "none" && !isNaN(bp)) {
                br += bp / 2
            }
            return br
        };
        var bj = [];
        $.each(bh, function (bq, br) {
            var bp = bi(br);
            if (bp) {
                var bs = bn(br);
                bl = Math.min(bl, bp.x - bs);
                bk = Math.min(bk, bp.y - bs);
                bj.push(bp)
            }
        });
        bm.x = bl;
        bm.y = bk;
        $.each(bh, function (bq, br) {
            var bp = bj[bq];
            if (bp && br.nodeType == 1) {
                var bs = bn(br);
                bg = Math.max(bg, bp.x + bp.width + bs);
                bo = Math.max(bo, bp.y + bp.height + bs)
            }
        });
        bm.width = bg - bl;
        bm.height = bo - bk;
        return bm
    };
    var aO = this.getVisibleElements = function (bg, bh) {
        if (!bg) {
            bg = $(ai).children()
        }
        var bi = [];
        $(bg).children().each(function (bj, bm) {
            try {
                var bl = bm.getBBox();
                if (bl) {
                    var bk = bh ? {elem: bm, bbox: ag([bm])} : bm;
                    bi.push(bk)
                }
            } catch (bn) {
            }
        });
        return bi.reverse()
    };
    var ap = function (bh) {
        var bi = document.createElementNS(bh.namespaceURI, bh.nodeName);
        $.each(bh.attributes, function (bk, bj) {
            if (bj.localName != "-moz-math-font-style") {
                bi.setAttributeNS(bj.namespaceURI, bj.nodeName, bj.nodeValue)
            }
        });
        bi.removeAttribute("id");
        bi.id = a7();
        a4++;
        if ((aC) && bh.nodeName == "path") {
            var bg = z.convertPath(bh);
            bi.setAttribute("d", bg)
        }
        $.each(bh.childNodes, function (bj, bk) {
            switch (bk.nodeType) {
                case 1:
                    bi.appendChild(ap(bk));
                    break;
                case 3:
                    bi.textContent = bk.nodeValue;
                    break;
                default:
                    break
                }
        });
        if (bi.tagName == "image") {
            aV(bi)
        }
        return bi
    };
    function b(bg) {
        if (G.querySelector) {
            return G.querySelector("#" + bg)
        } else {
            if (aM.evaluate) {
                return aM.evaluate('svg:svg[@id="svgroot"]//svg:*[@id="' + bg + '"]', aL, function () {
                    return"http://www.w3.org/2000/svg"
                }, 9, null).singleNodeValue
            } else {
                return $(G).find("[id=" + bg + "]")[0]
            }
        }
    }
    var C, a7;
    (function (bi) {
        var bg = {};
        var bh = "svg_";
        C = bi.getId = function () {
            if (bg.getid) {
                return call("getid", a4)
            }
            if (q) {
                return bh + m + "_" + a4
            } else {
                return bh + a4
            }
        };
        a7 = bi.getNextId = function () {
            var bj = C();
            while (b(bj)) {
                a4++;
                bj = C()
            }
            return bj
        };
        call = bi.call = function (bk, bj) {
            if (bg[bk]) {
                return bg[bk](this, bj)
            }
        };
        bi.bind = function (bk, bl) {
            var bj = bg[bk];
            bg[bk] = bl;
            return bj
        };
        bi.setIdPrefix = function (bj) {
            bh = bj
        }
    }(bc));
    var M = this.sanitizeSvg = function (bl) {
        if (bl.nodeType == 3) {
            bl.nodeValue = bl.nodeValue.replace(/^\s+|\s+$/g, "");
            if (!bl.nodeValue.length) {
                bl.parentNode.removeChild(bl)
            }
        }
        if (bl.nodeType != 1) {
            return
        }
        var bt = bl.ownerDocument;
        var bu = bl.parentNode;
        if (!bt || !bu) {
            return
        }
        var bq = aF[bl.nodeName];
        var bk = h[bl.nodeName];
        if (bq != undefined) {
            var bj = [];
            var bm = bl.attributes.length;
            while (bm--) {
                var bp = bl.attributes.item(bm);
                var bs = bp.nodeName;
                var bn = bp.localName;
                var bv = bp.namespaceURI;
                if (!(bk.hasOwnProperty(bn) && bv == bk[bn] && bv != bf) && !(bv == bf && am[bp.nodeValue])) {
                    if (bs.indexOf("se:") == 0) {
                        bj.push([bs, bp.nodeValue])
                    }
                    bl.removeAttributeNS(bv, bn)
                }
                if (bl.nodeName == "path" && bs == "d") {
                    bl.setAttribute("d", z.convertPath(bl));
                    z.fixEnd(bl)
                }
                if (bs == "style") {
                    var br = bp.nodeValue.split(";"), bh = br.length;
                    while (bh--) {
                        var bo = br[bh].split(":");
                        if (bq.indexOf(bo[0]) != -1) {
                            bl.setAttribute(bo[0], bo[1])
                        }
                    }
                    bl.removeAttribute("style")
                }
            }
            $.each(bj, function (bx, bw) {
                bl.setAttributeNS(al, bw[0], bw[1])
            });
            var bg = bl.getAttributeNS(aE, "href");
            if (bg && $.inArray(bl.nodeName, ["filter", "linearGradient", "pattern", "radialGradient", "textPath", "use"]) != -1) {
                if (bg[0] != "#") {
                    bl.setAttributeNS(aE, "xlink:href", "");
                    bl.removeAttributeNS(aE, "href")
                }
            }
            if (bl.nodeName == "use" && !bl.getAttributeNS(aE, "href")) {
                bu.removeChild(bl);
                return
            }
            $.each(["clip-path", "fill", "filter", "marker-end", "marker-mid", "marker-start", "mask", "stroke"], function (bx, bw) {
                var by = bl.getAttribute(bw);
                if (by) {
                    by = ak(by);
                    if (by && by[0] != "#") {
                        bl.setAttribute(bw, "");
                        bl.removeAttribute(bw)
                    }
                }
            });
            bm = bl.childNodes.length;
            while (bm--) {
                M(bl.childNodes.item(bm))
            }
        } else {
            var bi = [];
            while (bl.hasChildNodes()) {
                bi.push(bu.insertBefore(bl.firstChild, bl))
            }
            bu.removeChild(bl);
            var bm = bi.length;
            while (bm--) {
                M(bi[bm])
            }
        }
    };
    var ak = this.getUrlFromAttr = function (bg) {
        if (bg) {
            if (bg.indexOf('url("') == 0) {
                return bg.substring(5, bg.indexOf('"', 6))
            } else {
                if (bg.indexOf("url('") == 0) {
                    return bg.substring(5, bg.indexOf("'", 6))
                } else {
                    if (bg.indexOf("url(") == 0) {
                        return bg.substring(4, bg.indexOf(")"))
                    }
                }
            }
        }
        return null
    };
    var au = this.getBBox = function (bj) {
        var bi = bj || aR[0];
        if (bj.nodeType != 1) {
            return null
        }
        var bg = null;
        if (bj.nodeName == "text" && bi.textContent == "") {
            bi.textContent = "a";
            bg = bi.getBBox();
            bi.textContent = ""
        } else {
            if (bj.nodeName == "path" && aC) {
                bg = bb(bi)
            } else {
                if (bj.nodeName == "use" && !aC) {
                    bg = bi.getBBox();
                    bg.x += parseFloat(bi.getAttribute("x") || 0);
                    bg.y += parseFloat(bi.getAttribute("y") || 0)
                } else {
                    if (bj.nodeName == "foreignObject") {
                        bg = bi.getBBox();
                        bg.x += parseFloat(bi.getAttribute("x") || 0);
                        bg.y += parseFloat(bi.getAttribute("y") || 0)
                    } else {
                        try {
                            bg = bi.getBBox()
                        } catch (bk) {
                            var bh = $(bi).closest("foreignObject");
                            if (bh.length) {
                                try {
                                    bg = bh[0].getBBox()
                                } catch (bk) {
                                    bg = null
                                }
                            } else {
                                bg = null
                            }
                        }
                    }
                }
            }
        }
        return bg
    };
    var g = function (bg) {
        if (navigator.userAgent.indexOf("Gecko/") == -1) {
            return bg
        }
        var bh = bg.cloneNode(true);
        bg.parentNode.insertBefore(bh, bg);
        bg.parentNode.removeChild(bg);
        F.releaseSelector(bg);
        aR[0] = bh;
        F.requestSelector(bh).showGrips(true);
        return bh
    };
    var bb = function (bv) {
        var bA = bv.pathSegList;
        var bt = bA.numberOfItems;
        var bn = [[], []];
        var bm = bA.getItem(0);
        var bl = [bm.x, bm.y];
        for (var bx = 0; bx < bt; bx++) {
            var bz = bA.getItem(bx);
            if (!bz.x) {
                continue
            }
            bn[0].push(bl[0]);
            bn[1].push(bl[1]);
            if (bz.x1) {
                var bk = [bz.x1, bz.y1], bj = [bz.x2, bz.y2], bh = [bz.x, bz.y];
                for (var bw = 0; bw < 2; bw++) {
                    var bg = function (bE) {
                        return Math.pow(1 - bE, 3) * bl[bw] + 3 * Math.pow(1 - bE, 2) * bE * bk[bw] + 3 * (1 - bE) * Math.pow(bE, 2) * bj[bw] + Math.pow(bE, 3) * bh[bw]
                    };
                    var bC = 6 * bl[bw] - 12 * bk[bw] + 6 * bj[bw];
                    var bD = -3 * bl[bw] + 9 * bk[bw] - 9 * bj[bw] + 3 * bh[bw];
                    var bB = 3 * bk[bw] - 3 * bl[bw];
                    if (bD == 0) {
                        if (bC == 0) {
                            continue
                        }
                        var bu = -bB / bC;
                        if (0 < bu && bu < 1) {
                            bn[bw].push(bg(bu))
                        }
                        continue
                    }
                    var bi = Math.pow(bC, 2) - 4 * bB * bD;
                    if (bi < 0) {
                        continue
                    }
                    var br = (-bC + Math.sqrt(bi)) / (2 * bD);
                    if (0 < br && br < 1) {
                        bn[bw].push(bg(br))
                    }
                    var bp = (-bC - Math.sqrt(bi)) / (2 * bD);
                    if (0 < bp && bp < 1) {
                        bn[bw].push(bg(bp))
                    }
                }
                bl = bh
            } else {
                bn[0].push(bz.x);
                bn[1].push(bz.y)
            }
        }
        var bq = Math.min.apply(null, bn[0]);
        var bs = Math.max.apply(null, bn[0]) - bq;
        var bo = Math.min.apply(null, bn[1]);
        var by = Math.max.apply(null, bn[1]) - bo;
        return{x: bq, y: bo, width: bs, height: by}
    };
    var aq = this.getRotationAngle = function (bk, bh) {
        var bj = bk || aR[0];
        var bm = aQ(bj);
        if (!bm) {
            return 0
        }
        var bl = bm.numberOfItems;
        for (var bi = 0; bi < bl; ++bi) {
            var bg = bm.getItem(bi);
            if (bg.type == 4) {
                return bh ? bg.angle * Math.PI / 180 : bg.angle
            }
        }
        return 0
    };
    this.setRotationAngle = function (bi, bq) {
        bi = parseFloat(bi);
        var bj = aR[0];
        var bn = bj.getAttribute("transform");
        var bt = au(bj);
        var bm = bt.x + bt.width / 2, bl = bt.y + bt.height / 2;
        var bp = aQ(bj);
        if (bp.numberOfItems > 0) {
            var bs = bp.getItem(0);
            if (bs.type == 4) {
                bp.removeItem(0)
            }
        }
        if (bi != 0) {
            var bg = P(bm, bl, s(bp).matrix);
            var br = G.createSVGTransform();
            br.setRotate(bi, bg.x, bg.y);
            bp.insertItemBefore(br, 0)
        } else {
            if (bp.numberOfItems == 0) {
                bj.removeAttribute("transform")
            }
        }
        if (!bq) {
            var bh = bj.getAttribute("transform");
            bj.setAttribute("transform", bn);
            A("transform", bh, aR)
        }
        var bo = b("pathpointgrip_container");
        var bk = F.requestSelector(aR[0]);
        bk.resize();
        bk.updateGripCursors(bi)
    };
    var aQ = this.getTransformList = function (bh) {
        if (aC) {
            var bi = bh.id;
            if (!bi) {
                bi = "temp"
            }
            var bg = T[bi];
            if (!bg || bi == "temp") {
                T[bi] = new H(bh);
                T[bi]._init();
                bg = T[bi]
            }
            return bg
        } else {
            if (bh.transform) {
                return bh.transform.baseVal
            } else {
                if (bh.gradientTransform) {
                    return bh.gradientTransform.baseVal
                }
            }
        }
        return null
    };
    var aY = this.recalculateAllSelectedDimensions = function () {
        var bk = (aa == "none" ? "position" : "size");
        var bg = new aA(bk);
        var bh = aR.length;
        while (bh--) {
            var bi = aR[bh];
            var bj = l(bi);
            if (bj) {
                bg.addSubCommand(bj)
            }
        }
        if (!bg.isEmpty()) {
            aT(bg);
            call("changed", aR)
        }
    };
    var E = [0, "z", "M", "m", "L", "l", "C", "c", "Q", "q", "A", "a", "H", "h", "V", "v", "S", "s", "T", "t"];
    var ax = function (bg) {
        console.log([bg.a, bg.b, bg.c, bg.d, bg.e, bg.f])
    };
    var D = this.remapElement = function (bv, bI, by) {
        var bl = function (bJ, bK) {
            return P(bJ, bK, by)
        }, bk = function (bJ) {
            return by.a * bJ
        }, bt = function (bJ) {
            return by.d * bJ
        }, bq = au(bv);
        switch (bv.tagName) {
            case"line":
                var bo = bl(bI.x1, bI.y1), bn = bl(bI.x2, bI.y2);
                bI.x1 = bo.x;
                bI.y1 = bo.y;
                bI.x2 = bn.x;
                bI.y2 = bn.y;
                break;
            case"circle":
                var bH = bl(bI.cx, bI.cy);
                bI.cx = bH.x;
                bI.cy = bH.y;
                var bB = be(bq.x, bq.y, bq.width, bq.height, by);
                var br = bB.tr.x - bB.tl.x, bF = bB.bl.y - bB.tl.y;
                bI.r = Math.min(br / 2, bF / 2);
                break;
            case"ellipse":
                var bH = bl(bI.cx, bI.cy);
                bI.cx = bH.x;
                bI.cy = bH.y;
                bI.rx = bk(bI.rx);
                bI.ry = bt(bI.ry);
                break;
            case"foreignObject":
            case"rect":
            case"image":
                var bo = bl(bI.x, bI.y);
                bI.x = bo.x;
                bI.y = bo.y;
                bI.width = bk(bI.width);
                bI.height = bt(bI.height);
                break;
            case"use":
                var bo = bl(bI.x, bI.y);
                bI.x = bo.x;
                bI.y = bo.y;
                break;
            case"text":
                if (by.a == 1 && by.b == 0 && by.c == 0 && by.d == 1 && (by.e != 0 || by.f != 0)) {
                    var bu = s(bv).matrix, bp = af(bu.inverse(), by, bu);
                    bI.x = parseFloat(bI.x) + bp.e;
                    bI.y = parseFloat(bI.y) + bp.f
                } else {
                    var bh = aQ(bv);
                    var bw = G.createSVGTransform();
                    bw.setMatrix(af(s(bh).matrix, by));
                    bh.clear();
                    bh.appendItem(bw)
                }
                break;
            case"polygon":
            case"polyline":
                var bE = bI.points.length;
                for (var bD = 0; bD < bE; ++bD) {
                    var bx = bI.points[bD];
                    bx = bl(bx.x, bx.y);
                    bI.points[bD].x = bx.x;
                    bI.points[bD].y = bx.y
                }
                break;
            case"path":
                var bg = bv.pathSegList;
                var bE = bg.numberOfItems;
                bI.d = new Array(bE);
                for (var bD = 0; bD < bE; ++bD) {
                    var bG = bg.getItem(bD);
                    bI.d[bD] = {type: bG.pathSegType, x: bG.x, y: bG.y, x1: bG.x1, y1: bG.y1, x2: bG.x2, y2: bG.y2, r1: bG.r1, r2: bG.r2, angle: bG.angle, largeArcFlag: bG.largeArcFlag, sweepFlag: bG.sweepFlag}
                }
                var bE = bI.d.length, bj = bI.d[0], bz = bl(bj.x, bj.y);
                bI.d[0].x = bz.x;
                bI.d[0].y = bz.y;
                for (var bD = 1; bD < bE; ++bD) {
                    var bG = bI.d[bD];
                    var bi = bG.type;
                    if (bi % 2 == 0) {
                        var bC = (bG.x != undefined) ? bG.x : bz.x, bA = (bG.y != undefined) ? bG.y : bz.y, bx = bl(bC, bA), bo = bl(bG.x1, bG.y1), bn = bl(bG.x2, bG.y2);
                        bG.x = bx.x;
                        bG.y = bx.y;
                        bG.x1 = bo.x;
                        bG.y1 = bo.y;
                        bG.x2 = bn.x;
                        bG.y2 = bn.y;
                        bG.r1 = bk(bG.r1), bG.r2 = bt(bG.r2)
                    } else {
                        bG.x = bk(bG.x);
                        bG.y = bt(bG.y);
                        bG.x1 = bk(bG.x1);
                        bG.y1 = bt(bG.y1);
                        bG.x2 = bk(bG.x2);
                        bG.y2 = bt(bG.y2);
                        bG.r1 = bk(bG.r1), bG.r2 = bt(bG.r2)
                    }
                    if (bG.x) {
                        bz.x = bG.x
                    }
                    if (bG.y) {
                        bz.y = bG.y
                    }
                }
                break
        }
        switch (bv.tagName) {
            case"foreignObject":
            case"rect":
            case"image":
                bI.x = bI.x - 0 + Math.min(0, bI.width);
                bI.y = bI.y - 0 + Math.min(0, bI.height);
                bI.width = Math.abs(bI.width);
                bI.height = Math.abs(bI.height);
                az(bv, bI, 1000, true);
                break;
            case"use":
                az(bv, bI, 1000, true);
                break;
            case"ellipse":
                bI.rx = Math.abs(bI.rx);
                bI.ry = Math.abs(bI.ry);
            case"circle":
                if (bI.r) {
                    bI.r = Math.abs(bI.r)
                }
            case"line":
            case"text":
                az(bv, bI, 1000, true);
                break;
            case"polyline":
            case"polygon":
                var bE = bI.points.length;
                var bm = "";
                for (var bD = 0; bD < bE; ++bD) {
                    var bx = bI.points[bD];
                    bm += bx.x + "," + bx.y + " "
                }
                bv.setAttribute("points", bm);
                break;
            case"path":
                var bs = "";
                var bE = bI.d.length;
                for (var bD = 0; bD < bE; ++bD) {
                    var bG = bI.d[bD];
                    var bi = bG.type;
                    bs += E[bi];
                    switch (bi) {
                        case 13:
                        case 12:
                            bs += bG.x + " ";
                            break;
                        case 15:
                        case 14:
                            bs += bG.y + " ";
                            break;
                        case 3:
                        case 5:
                        case 19:
                        case 2:
                        case 4:
                        case 18:
                            bs += bG.x + "," + bG.y + " ";
                            break;
                        case 7:
                        case 6:
                            bs += bG.x1 + "," + bG.y1 + " " + bG.x2 + "," + bG.y2 + " " + bG.x + "," + bG.y + " ";
                            break;
                        case 9:
                        case 8:
                            bs += bG.x1 + "," + bG.y1 + " " + bG.x + "," + bG.y + " ";
                            break;
                        case 11:
                        case 10:
                            bs += bG.r1 + "," + bG.r2 + " " + bG.angle + " " + Number(bG.largeArcFlag) + " " + Number(bG.sweepFlag) + " " + bG.x + "," + bG.y + " ";
                            break;
                        case 17:
                        case 16:
                            bs += bG.x2 + "," + bG.y2 + " " + bG.x + "," + bG.y + " ";
                            break
                        }
                }
                bv.setAttribute("d", bs);
                break
            }
    };
    var l = this.recalculateDimensions = function (bI) {
        if (bI == null) {
            return null
        }
        var bQ = aQ(bI);
        if (bQ && bQ.numberOfItems > 0) {
            var b9 = bQ.numberOfItems;
            while (b9--) {
                var bY = bQ.getItem(b9);
                if (bY.type == 0) {
                    bQ.removeItem(b9)
                } else {
                    if (bY.type == 1) {
                        if (a8(bY.matrix)) {
                            bQ.removeItem(b9)
                        }
                    } else {
                        if (bY.type == 4) {
                            if (bY.angle == 0) {
                                bQ.removeItem(b9)
                            }
                        }
                    }
                }
            }
            if (bQ.numberOfItems == 1 && aq(bI)) {
                return null
            }
        }
        if (!bQ || bQ.numberOfItems == 0) {
            bI.removeAttribute("transform");
            return null
        }
        var bh = new aA("Transform");
        var bC = {}, ch = null, bq = [];
        switch (bI.tagName) {
            case"line":
                bq = ["x1", "y1", "x2", "y2"];
                break;
            case"circle":
                bq = ["cx", "cy", "r"];
                break;
            case"ellipse":
                bq = ["cx", "cy", "rx", "ry"];
                break;
            case"foreignObject":
            case"rect":
            case"image":
                bq = ["width", "height", "x", "y"];
                break;
            case"use":
                bq = ["x", "y"];
                break;
            case"text":
                bq = ["x", "y"];
                break;
            case"polygon":
            case"polyline":
                ch = {};
                ch.points = bI.getAttribute("points");
                var bB = bI.points;
                var bz = bB.numberOfItems;
                bC.points = new Array(bz);
                for (var cc = 0; cc < bz; ++cc) {
                    var br = bB.getItem(cc);
                    bC.points[cc] = {x: br.x, y: br.y}
                }
                break;
            case"path":
                ch = {};
                ch.d = bI.getAttribute("d");
                bC.d = bI.getAttribute("d");
                break
        }
        if (bq.length) {
            bC = $(bI).attr(bq);
            $.each(bC, function (cm, cn) {
                bC[cm] = a2(cm, cn)
            })
        }
        if (ch == null) {
            ch = $.extend(true, {}, bC);
            $.each(ch, function (cm, cn) {
                ch[cm] = a2(cm, cn)
            })
        }
        ch.transform = aj ? aj : "";
        if (bI.tagName == "g" || bI.tagName == "a") {
            var bm = au(bI), ck = {x: bm.x + bm.width / 2, y: bm.y + bm.height / 2}, bj = P(bm.x + bm.width / 2, bm.y + bm.height / 2, s(bQ).matrix), b3 = G.createSVGMatrix();
            var bG = aq(bI);
            if (bG) {
                var ci = bG * Math.PI / 180;
                if (Math.abs(ci) > (1e-10)) {
                    var bV = Math.sin(ci) / (1 - Math.cos(ci))
                } else {
                    var bV = 2 / ci
                }
                for (var cc = 0; cc < bQ.numberOfItems; ++cc) {
                    var bY = bQ.getItem(cc);
                    if (bY.type == 4) {
                        var bO = bY.matrix;
                        ck.y = (bV * bO.e + bO.f) / 2;
                        ck.x = (bO.e - bV * bO.f) / 2;
                        bQ.removeItem(cc);
                        break
                    }
                }
            }
            var ca = 0, b8 = 0, bP = 0, bo = bQ.numberOfItems;
            if (bo) {
                var b7 = bQ.getItem(0).matrix
            }
            if (bo >= 3 && bQ.getItem(bo - 2).type == 3 && bQ.getItem(bo - 3).type == 2 && bQ.getItem(bo - 1).type == 2) {
                bP = 3;
                var cl = bQ.getItem(bo - 3).matrix, bt = bQ.getItem(bo - 2).matrix, b1 = bQ.getItem(bo - 1).matrix;
                var bw = bI.childNodes;
                var cg = bw.length;
                while (cg--) {
                    var bl = bw.item(cg);
                    ca = 0;
                    b8 = 0;
                    if (bl.nodeType == 1) {
                        var bA = aQ(bl);
                        if (!bA) {
                            continue
                        }
                        var b3 = s(bA).matrix;
                        var by = aq(bl);
                        var bU = aj;
                        var b4 = [];
                        aj = bl.getAttribute("transform");
                        if (by || aP(bA)) {
                            var bT = G.createSVGTransform();
                            bT.setMatrix(af(cl, bt, b1, b3));
                            bA.clear();
                            bA.appendItem(bT);
                            b4.push(bT)
                        } else {
                            var bk = af(b3.inverse(), b1, b3);
                            var bK = G.createSVGMatrix();
                            bK.e = -bk.e;
                            bK.f = -bk.f;
                            var cf = af(bK.inverse(), b3.inverse(), cl, bt, b1, b3, bk.inverse());
                            var cj = G.createSVGTransform(), bM = G.createSVGTransform(), bs = G.createSVGTransform();
                            cj.setTranslate(bk.e, bk.f);
                            bM.setScale(cf.a, cf.d);
                            bs.setTranslate(bK.e, bK.f);
                            bA.appendItem(bs);
                            bA.appendItem(bM);
                            bA.appendItem(cj);
                            b4.push(bs);
                            b4.push(bM);
                            b4.push(cj);
                            ax(bs.matrix);
                            ax(bM.matrix)
                        }
                        bh.addSubCommand(l(bl));
                        aj = bU
                    }
                }
                bQ.removeItem(bo - 1);
                bQ.removeItem(bo - 2);
                bQ.removeItem(bo - 3)
            } else {
                if (bo >= 3 && bQ.getItem(bo - 1).type == 1) {
                    bP = 3;
                    b3 = s(bQ).matrix;
                    var bT = G.createSVGTransform();
                    bT.setMatrix(b3);
                    bQ.clear();
                    bQ.appendItem(bT)
                } else {
                    if ((bo == 1 || (bo > 1 && bQ.getItem(1).type != 3)) && bQ.getItem(0).type == 2) {
                        bP = 2;
                        var bF = s(bQ).matrix;
                        bQ.removeItem(0);
                        var bL = s(bQ).matrix.inverse();
                        var bv = af(bL, bF);
                        ca = bv.e;
                        b8 = bv.f;
                        if (ca != 0 || b8 != 0) {
                            var bw = bI.childNodes;
                            var cg = bw.length;
                            while (cg--) {
                                var bl = bw.item(cg);
                                if (bl.nodeType == 1) {
                                    var bU = aj;
                                    aj = bl.getAttribute("transform");
                                    var bA = aQ(bl);
                                    if (bA) {
                                        var bJ = G.createSVGTransform();
                                        bJ.setTranslate(ca, b8);
                                        bA.insertItemBefore(bJ, 0);
                                        bh.addSubCommand(l(bl));
                                        var bH = bI.getElementsByTagNameNS(aK, "use");
                                        var bE = "#" + bl.id;
                                        var bS = bH.length;
                                        while (bS--) {
                                            var bR = bH.item(bS);
                                            if (bE == bR.getAttributeNS(aE, "href")) {
                                                var cd = G.createSVGTransform();
                                                cd.setTranslate(-ca, -b8);
                                                aQ(bR).insertItemBefore(cd, 0);
                                                bh.addSubCommand(l(bR))
                                            }
                                        }
                                        aj = bU
                                    }
                                }
                            }
                            aj = bU
                        }
                    } else {
                        if (bo == 1 && bQ.getItem(0).type == 1 && !bG) {
                            bP = 1;
                            var b3 = bQ.getItem(0).matrix, bw = bI.childNodes, cg = bw.length;
                            while (cg--) {
                                var bl = bw.item(cg);
                                if (bl.nodeType == 1) {
                                    var bU = aj;
                                    aj = bl.getAttribute("transform");
                                    var bA = aQ(bl);
                                    var cb = af(b3, s(bA).matrix);
                                    var b0 = G.createSVGTransform();
                                    b0.setMatrix(cb);
                                    bA.clear();
                                    bA.appendItem(b0, 0);
                                    bh.addSubCommand(l(bl));
                                    aj = bU
                                }
                            }
                            bQ.clear()
                        } else {
                            if (bG) {
                                var bi = G.createSVGTransform();
                                bi.setRotate(bG, bj.x, bj.y);
                                bQ.insertItemBefore(bi, 0)
                            }
                            if (bQ.numberOfItems == 0) {
                                bI.removeAttribute("transform")
                            }
                            return null
                        }
                    }
                }
            }
            if (bP == 2) {
                if (bG) {
                    bj = {x: ck.x + b7.e, y: ck.y + b7.f};
                    var bi = G.createSVGTransform();
                    bi.setRotate(bG, bj.x, bj.y);
                    bQ.insertItemBefore(bi, 0)
                }
            } else {
                if (bP == 3) {
                    var b3 = s(bQ).matrix;
                    var bg = G.createSVGTransform();
                    bg.setRotate(bG, ck.x, ck.y);
                    var bN = bg.matrix;
                    var b2 = G.createSVGTransform();
                    b2.setRotate(bG, bj.x, bj.y);
                    var bD = b2.matrix.inverse(), b6 = b3.inverse(), bX = af(b6, bD, bN, b3);
                    ca = bX.e;
                    b8 = bX.f;
                    if (ca != 0 || b8 != 0) {
                        var bw = bI.childNodes;
                        var cg = bw.length;
                        while (cg--) {
                            var bl = bw.item(cg);
                            if (bl.nodeType == 1) {
                                var bU = aj;
                                aj = bl.getAttribute("transform");
                                var bA = aQ(bl);
                                var bJ = G.createSVGTransform();
                                bJ.setTranslate(ca, b8);
                                bA.insertItemBefore(bJ, 0);
                                bh.addSubCommand(l(bl));
                                aj = bU
                            }
                        }
                    }
                    if (bG) {
                        bQ.insertItemBefore(b2, 0)
                    }
                }
            }
        } else {
            var bm = au(bI);
            if (!bm) {
                return null
            }
            var ck = {x: bm.x + bm.width / 2, y: bm.y + bm.height / 2}, bj = P(bm.x + bm.width / 2, bm.y + bm.height / 2, s(bQ).matrix), b3 = G.createSVGMatrix(), by = aq(bI);
            if (by) {
                var ci = by * Math.PI / 180;
                if (Math.abs(ci) > (1e-10)) {
                    var bV = Math.sin(ci) / (1 - Math.cos(ci))
                } else {
                    var bV = 2 / ci
                }
                for (var cc = 0; cc < bQ.numberOfItems; ++cc) {
                    var bY = bQ.getItem(cc);
                    if (bY.type == 4) {
                        var bO = bY.matrix;
                        ck.y = (bV * bO.e + bO.f) / 2;
                        ck.x = (bO.e - bV * bO.f) / 2;
                        bQ.removeItem(cc);
                        break
                    }
                }
            }
            var bP = 0;
            var bo = bQ.numberOfItems;
            if (!aC) {
                var bu = bI.getAttribute("fill");
                if (bu && bu.indexOf("url(") === 0) {
                    var bx = b(ak(bu).substr(1));
                    if (bx.getAttribute("gradientUnits") === "userSpaceOnUse") {
                        var bx = $(bx);
                        b3 = s(bQ).matrix;
                        var bZ = aQ(bx[0]);
                        var b5 = s(bZ).matrix;
                        b3 = af(b3, b5);
                        var bW = "matrix(" + [b3.a, b3.b, b3.c, b3.d, b3.e, b3.f].join(",") + ")";
                        bx.attr("gradientTransform", bW)
                    }
                }
            }
            if (bo >= 3 && bQ.getItem(bo - 2).type == 3 && bQ.getItem(bo - 3).type == 2 && bQ.getItem(bo - 1).type == 2 && bI.nodeName != "use") {
                bP = 3;
                b3 = s(bQ, bo - 3, bo - 1).matrix;
                bQ.removeItem(bo - 1);
                bQ.removeItem(bo - 2);
                bQ.removeItem(bo - 3)
            } else {
                if (bo == 4 && bQ.getItem(bo - 1).type == 1) {
                    bP = 3;
                    b3 = s(bQ).matrix;
                    var bT = G.createSVGTransform();
                    bT.setMatrix(b3);
                    bQ.clear();
                    bQ.appendItem(bT);
                    b3 = G.createSVGMatrix()
                } else {
                    if ((bo == 1 || (bo > 1 && bQ.getItem(1).type != 3)) && bQ.getItem(0).type == 2) {
                        bP = 2;
                        var ce = bQ.getItem(0).matrix, bp = s(bQ, 1).matrix, bn = bp.inverse();
                        b3 = af(bn, ce, bp);
                        bQ.removeItem(0)
                    } else {
                        if (bo == 1 && bQ.getItem(0).type == 1 && !by) {
                            b3 = s(bQ).matrix;
                            switch (bI.tagName) {
                                case"line":
                                    bC = $(bI).attr(["x1", "y1", "x2", "y2"]);
                                case"polyline":
                                case"polygon":
                                    bC.points = bI.getAttribute("points");
                                    if (bC.points) {
                                        var bB = bI.points;
                                        var bz = bB.numberOfItems;
                                        bC.points = new Array(bz);
                                        for (var cc = 0; cc < bz; ++cc) {
                                            var br = bB.getItem(cc);
                                            bC.points[cc] = {x: br.x, y: br.y}
                                        }
                                    }
                                case"path":
                                    bC.d = bI.getAttribute("d");
                                    bP = 1;
                                    bQ.clear();
                                    break;
                                default:
                                    break
                                }
                        } else {
                            bP = 4;
                            if (by) {
                                var bi = G.createSVGTransform();
                                bi.setRotate(by, bj.x, bj.y);
                                bQ.insertItemBefore(bi, 0)
                            }
                            if (bQ.numberOfItems == 0) {
                                bI.removeAttribute("transform")
                            }
                            return null
                        }
                    }
                }
            }
            if (bP == 1 || bP == 2 || bP == 3) {
                D(bI, bC, b3)
            }
            if (bP == 2) {
                if (by) {
                    bj = {x: ck.x + b3.e, y: ck.y + b3.f};
                    var bi = G.createSVGTransform();
                    bi.setRotate(by, bj.x, bj.y);
                    bQ.insertItemBefore(bi, 0)
                }
            } else {
                if (bP == 3) {
                    var b3 = s(bQ).matrix;
                    var bg = G.createSVGTransform();
                    bg.setRotate(by, ck.x, ck.y);
                    var bN = bg.matrix;
                    var b2 = G.createSVGTransform();
                    b2.setRotate(by, bj.x, bj.y);
                    var bD = b2.matrix.inverse();
                    var b6 = b3.inverse();
                    var bX = af(b6, bD, bN, b3);
                    D(bI, bC, bX);
                    if (by) {
                        bQ.insertItemBefore(b2, 0)
                    }
                }
            }
        }
        if (bQ.numberOfItems == 0) {
            bI.removeAttribute("transform")
        }
        bh.addSubCommand(new av(bI, ch));
        return bh
    };
    var p = null;
    var P = function (bh, bi, bg) {
        return{x: bg.a * bh + bg.c * bi + bg.e, y: bg.b * bh + bg.d * bi + bg.f}
    };
    var a8 = function (bg) {
        return(bg.a == 1 && bg.b == 0 && bg.c == 0 && bg.d == 1 && bg.e == 0 && bg.f == 0)
    };
    var af = this.matrixMultiply = function () {
        var bh = 1e-14, bl = function (bo, bn) {
            var bm = G.createSVGMatrix();
            bm.a = bo.a * bn.a + bo.c * bn.b;
            bm.b = bo.b * bn.a + bo.d * bn.b, bm.c = bo.a * bn.c + bo.c * bn.d, bm.d = bo.b * bn.c + bo.d * bn.d, bm.e = bo.a * bn.e + bo.c * bn.f + bo.e, bm.f = bo.b * bn.e + bo.d * bn.f + bo.f;
            return bm
        }, bj = arguments, bk = bj.length, bg = bj[bk - 1];
        while (bk-- > 1) {
            var bi = bj[bk - 1];
            bg = bl(bi, bg)
        }
        if (Math.abs(bg.a) < bh) {
            bg.a = 0
        }
        if (Math.abs(bg.b) < bh) {
            bg.b = 0
        }
        if (Math.abs(bg.c) < bh) {
            bg.c = 0
        }
        if (Math.abs(bg.d) < bh) {
            bg.d = 0
        }
        if (Math.abs(bg.e) < bh) {
            bg.e = 0
        }
        if (Math.abs(bg.f) < bh) {
            bg.f = 0
        }
        return bg
    };
    var s = this.transformListToTransform = function (bm, bl, bh) {
        var bl = bl == undefined ? 0 : bl;
        var bh = bh == undefined ? (bm.numberOfItems - 1) : bh;
        bl = parseInt(bl);
        bh = parseInt(bh);
        if (bl > bh) {
            var bi = bh;
            bh = bl;
            bl = bi
        }
        var bg = G.createSVGMatrix();
        for (var bk = bl; bk <= bh; ++bk) {
            var bj = (bk >= 0 && bk < bm.numberOfItems ? bm.getItem(bk).matrix : G.createSVGMatrix());
            bg = af(bg, bj)
        }
        return G.createSVGTransformFromMatrix(bg)
    };
    var aP = this.hasMatrixTransform = function (bi) {
        if (!bi) {
            return false
        }
        var bh = bi.numberOfItems;
        while (bh--) {
            var bg = bi.getItem(bh);
            if (bg.type == 1 && !a8(bg.matrix)) {
                return true
            }
        }
        return false
    };
    var B = function (bg) {
        var bh = aQ(bg);
        return s(bh).matrix
    };
    var be = this.transformBox = function (bi, bs, bp, bj, bh) {
        var bl = {x: bi, y: bs}, bm = {x: (bi + bp), y: bs}, bg = {x: (bi + bp), y: (bs + bj)}, bk = {x: bi, y: (bs + bj)};
        bl = P(bl.x, bl.y, bh);
        var br = bl.x, bo = bl.x, bq = bl.y, bn = bl.y;
        bm = P(bm.x, bm.y, bh);
        br = Math.min(br, bm.x);
        bo = Math.max(bo, bm.x);
        bq = Math.min(bq, bm.y);
        bn = Math.max(bn, bm.y);
        bk = P(bk.x, bk.y, bh);
        br = Math.min(br, bk.x);
        bo = Math.max(bo, bk.x);
        bq = Math.min(bq, bk.y);
        bn = Math.max(bn, bk.y);
        bg = P(bg.x, bg.y, bh);
        br = Math.min(br, bg.x);
        bo = Math.max(bo, bg.x);
        bq = Math.min(bq, bg.y);
        bn = Math.max(bn, bg.y);
        return{tl: bl, tr: bm, bl: bk, br: bg, aabox: {x: br, y: bq, width: (bo - br), height: (bn - bq)}}
    };
    var aZ = this.clearSelection = function (bj) {
        if (aR[0] != null) {
            var bg = aR.length;
            for (var bh = 0; bh < bg; ++bh) {
                var bi = aR[bh];
                if (bi == null) {
                    break
                }
                F.releaseSelector(bi);
                aR[bh] = null
            }
            u[0] = null
        }
        if (!bj) {
            call("selected", aR)
        }
    };
    var a5 = this.addToSelection = function (bg, bk) {
        if (bg.length == 0) {
            return
        }
        var bh = 0;
        while (bh < aR.length) {
            if (aR[bh] == null) {
                break
            }
            ++bh
        }
        var bi = bg.length;
        while (bi--) {
            var bj = bg[bi];
            if (!bj || !au(bj)) {
                continue
            }
            if (aR.indexOf(bj) == -1) {
                aR[bh] = bj;
                if (bh == 0) {
                    u[bh] = au(bj)
                }
                bh++;
                var bl = F.requestSelector(bj);
                if (aR.length > 1) {
                    bl.showGrips(false)
                }
            }
        }
        if (aR[0] && aR.length === 1 && aR[0].tagName == "a") {
            aR[0] = aR[0].firstChild
        }
        call("selected", aR);
        if (bk || aR.length == 1) {
            F.requestSelector(aR[0]).showGrips(true)
        } else {
            F.requestSelector(aR[0]).showGrips(false)
        }
        aR.sort(function (bn, bm) {
            if (bn && bm && bn.compareDocumentPosition) {
                return 3 - (bm.compareDocumentPosition(bn) & 6)
            } else {
                if (bn == null) {
                    return 1
                }
            }
        });
        while (aR[0] == null) {
            aR.shift(0)
        }
    };
    var ao = this.removeFromSelection = function (bh) {
        if (aR[0] == null) {
            return
        }
        if (bh.length == 0) {
            return
        }
        var bk = new Array(aR.length), bm = new Array(u.length), bi = 0, bg = aR.length;
        for (var bj = 0; bj < bg; ++bj) {
            var bl = aR[bj];
            if (bl) {
                if (bh.indexOf(bl) == -1) {
                    bk[bi] = bl;
                    if (bi == 0) {
                        bm[bi] = u[bj]
                    }
                    bi++
                } else {
                    F.releaseSelector(bl)
                }
            }
        }
        aR = bk;
        u = bm
    };
    this.selectAllInCurrentLayer = function () {
        if (V) {
            aZ();
            a5($(V).children());
            a1 = "select";
            call("selected", aR)
        }
    };
    var X = this.smoothControlPoints = function (bg, bw, bv) {
        var bi = bg.x - bv.x, bu = bg.y - bv.y, bh = bw.x - bv.x, bs = bw.y - bv.y;
        if ((bi != 0 || bu != 0) && (bh != 0 || bs != 0)) {
            var bo = Math.atan2(bu, bi), bn = Math.atan2(bs, bh), bk = Math.sqrt(bi * bi + bu * bu), bj = Math.sqrt(bh * bh + bs * bs), bm = G.createSVGPoint(), bl = G.createSVGPoint();
            if (bo < 0) {
                bo += 2 * Math.PI
            }
            if (bn < 0) {
                bn += 2 * Math.PI
            }
            var bt = Math.abs(bo - bn), bq = Math.abs(Math.PI - bt) / 2;
            var br, bp;
            if (bo - bn > 0) {
                br = bt < Math.PI ? (bo + bq) : (bo - bq);
                bp = bt < Math.PI ? (bn - bq) : (bn + bq)
            } else {
                br = bt < Math.PI ? (bo - bq) : (bo + bq);
                bp = bt < Math.PI ? (bn + bq) : (bn - bq)
            }
            bm.x = bk * Math.cos(br) + bv.x;
            bm.y = bk * Math.sin(br) + bv.y;
            bl.x = bj * Math.cos(bp) + bv.x;
            bl.y = bj * Math.sin(bp) + bv.y;
            return[bm, bl]
        }
        return undefined
    };
    var Z = this.getMouseTarget = function (bg) {
        if (bg == null) {
            return null
        }
        var bh = bg.target;
        if (bh.correspondingUseElement) {
            bh = bh.correspondingUseElement
        }
        if ($.inArray(bh.namespaceURI, [f, O]) != -1 && bh.id != "svgcanvas") {
            while (bh.nodeName != "foreignObject") {
                bh = bh.parentNode
            }
        }
        while (bh.parentNode.parentNode.tagName == "g") {
            bh = bh.parentNode
        }
        if (bh.nodeName.toLowerCase() == "div") {
            bh = G
        }
        return bh
    };
    (function () {
        var bg = null, bn = null, bm = null, bl = {}, bh = {minx: null, miny: null, maxx: null, maxy: null};
        var bj = function (bE) {
            if (bE.button === 1 || bc.spaceKey) {
                return
            }
            p = ai.getScreenCTM().inverse();
            var bF = P(bE.pageX, bE.pageY, p), bz = bF.x * ac, by = bF.y * ac;
            bE.preventDefault();
            var bD = bz / ac, bB = by / ac, bq = Z(bE);
            bn = bD;
            bm = bB;
            if (bq.parentNode == F.selectorParentGroup && aR[0] != null) {
                var bC = bE.target.id, bx = bC.substr(0, 20);
                if (bx == "selectorGrip_rotate_") {
                    a1 = "rotate"
                } else {
                    if (bx == "selectorGrip_resize_") {
                        a1 = "resize";
                        aa = bC.substr(20, bC.indexOf("_", 20) - 20)
                    }
                }
                bq = aR[0]
            }
            aj = bq.getAttribute("transform");
            var bu = aQ(bq);
            switch (a1) {
                case"select":
                    aG = true;
                    aa = "none";
                    if (bq != G) {
                        if (aR.indexOf(bq) == -1) {
                            if (!bE.shiftKey) {
                                aZ(true)
                            }
                            a5([bq]);
                            K = bq;
                            z.clear()
                        }
                        for (var bs = 0; bs < aR.length; ++bs) {
                            if (aR[bs] == null) {
                                continue
                            }
                            var bw = aQ(aR[bs]);
                            bw.insertItemBefore(G.createSVGTransform(), 0)
                        }
                    } else {
                        aZ();
                        a1 = "multiselect";
                        if (j == null) {
                            j = F.getRubberBandBox()
                        }
                        bn *= ac;
                        bm *= ac;
                        az(j, {x: bn, y: bm, width: 0, height: 0, display: "inline"}, 100)
                    }
                    break;
                case"zoom":
                    aG = true;
                    bn = bD;
                    bm = bB;
                    if (j == null) {
                        j = F.getRubberBandBox()
                    }
                    az(j, {x: bn * ac, y: bm * ac, width: 0, height: 0, display: "inline"}, 100);
                    break;
                case"resize":
                    aG = true;
                    bn = bD;
                    bm = bB;
                    bl = au($("#selectedBox0")[0]);
                    $.each(bl, function (bG, bH) {
                        bl[bG] = bH / ac
                    });
                    var bA = aq(bq) ? 1 : 0;
                    if (aP(bu)) {
                        bu.insertItemBefore(G.createSVGTransform(), bA);
                        bu.insertItemBefore(G.createSVGTransform(), bA);
                        bu.insertItemBefore(G.createSVGTransform(), bA)
                    } else {
                        bu.appendItem(G.createSVGTransform());
                        bu.appendItem(G.createSVGTransform());
                        bu.appendItem(G.createSVGTransform())
                    }
                    break;
                case"fhellipse":
                case"fhrect":
                case"fhpath":
                    aG = true;
                    bn = bD;
                    bm = bB;
                    bg = bD + "," + bB + " ";
                    var br = aN.stroke_width == 0 ? 1 : aN.stroke_width;
                    c({element: "polyline", curStyles: true, attr: {points: bg, id: a7(), fill: "none", opacity: aN.opacity / 2, "stroke-linecap": "round", style: "pointer-events:none"}});
                    bh.minx = bD;
                    bh.maxx = bD;
                    bh.miny = bB;
                    bh.maxy = bB;
                    break;
                case"image":
                    aG = true;
                    bn = bD;
                    bm = bB;
                    var bv = c({element: "image", attr: {x: bD, y: bB, width: 0, height: 0, id: a7(), opacity: aN.opacity / 2, style: "pointer-events:inherit"}});
                    bv.setAttributeNS(aE, "xlink:href", ad);
                    aV(bv);
                    break;
                case"square":
                case"rect":
                    aG = true;
                    bn = bD;
                    bm = bB;
                    c({element: "rect", curStyles: true, attr: {x: bD, y: bB, width: 0, height: 0, id: a7(), opacity: aN.opacity / 2}});
                    break;
                case"line":
                    aG = true;
                    var br = aN.stroke_width == 0 ? 1 : aN.stroke_width;
                    c({element: "line", curStyles: true, attr: {x1: bD, y1: bB, x2: bD, y2: bB, id: a7(), stroke: aN.stroke, "stroke-width": br, "stroke-dasharray": aN.stroke_dasharray, "stroke-linejoin": aN.stroke_linejoin, "stroke-linecap": aN.stroke_linecap, "stroke-opacity": aN.stroke_opacity, fill: "none", opacity: aN.opacity / 2, style: "pointer-events:none"}});
                    break;
                case"circle":
                    aG = true;
                    c({element: "circle", curStyles: true, attr: {cx: bD, cy: bB, r: 0, id: a7(), opacity: aN.opacity / 2}});
                    break;
                case"ellipse":
                    aG = true;
                    c({element: "ellipse", curStyles: true, attr: {cx: bD, cy: bB, rx: 0, ry: 0, id: a7(), opacity: aN.opacity / 2}});
                    break;
                case"text":
                    aG = true;
                    var bt = c({element: "text", curStyles: true, attr: {x: bD, y: bB, id: a7(), fill: a6.fill, "stroke-width": a6.stroke_width, "font-size": a6.font_size, "font-family": a6.font_family, "text-anchor": "middle", "xml:space": "preserve"}});
                    break;
                case"path":
                case"pathedit":
                    bn *= ac;
                    bm *= ac;
                    z.mouseDown(bE, bq, bn, bm);
                    aG = true;
                    break;
                case"textedit":
                    bn *= ac;
                    bm *= ac;
                    L.mouseDown(bE, bq, bn, bm);
                    aG = true;
                    break;
                case"rotate":
                    aG = true;
                    bc.beginUndoableChange("transform", aR);
                    break;
                default:
                    break
            }
            var bp = aI("mouseDown", {event: bE, start_x: bn, start_y: bm, selectedElements: aR}, true);
            $.each(bp, function (bG, bH) {
                if (bH && bH.started) {
                    aG = true
                }
            })
        };
        var bo = function (bV) {
            if (!aG) {
                return
            }
            if (bV.button === 1 || bc.spaceKey) {
                return
            }
            var bT = aR[0], bC = P(bV.pageX, bV.pageY, p), b2 = bC.x * ac, b1 = bC.y * ac, bN = b(C());
            x = b2 / ac;
            y = b1 / ac;
            bV.preventDefault();
            switch (a1) {
                case"select":
                    if (aR[0] != null) {
                        var bu = x - bn;
                        var bt = y - bm;
                        if (bV.shiftKey) {
                            var bW = aw.snapToAngle(bn, bm, x, y);
                            x = bW.x;
                            y = bW.y
                        }
                        if (bu != 0 || bt != 0) {
                            var bL = aR.length;
                            for (var b9 = 0; b9 < bL; ++b9) {
                                var bT = aR[b9];
                                if (bT == null) {
                                    break
                                }
                                if (b9 == 0) {
                                    var by = au(bT)
                                }
                                var b4 = G.createSVGTransform();
                                var bZ = aQ(bT);
                                b4.setTranslate(bu, bt);
                                if (bZ.numberOfItems) {
                                    bZ.replaceItem(b4, 0)
                                } else {
                                    bZ.appendItem(b4)
                                }
                                F.requestSelector(bT).resize()
                            }
                        }
                    }
                    break;
                case"multiselect":
                    x *= ac;
                    y *= ac;
                    az(j, {x: Math.min(bn, x), y: Math.min(bm, y), width: Math.abs(x - bn), height: Math.abs(y - bm)}, 100);
                    var bU = [], b8 = [], bv = aW(), bL = aR.length;
                    for (var b9 = 0; b9 < bL; ++b9) {
                        var ca = bv.indexOf(aR[b9]);
                        if (ca == -1) {
                            bU.push(aR[b9])
                        } else {
                            bv[ca] = null
                        }
                    }
                    bL = bv.length;
                    for (b9 = 0; b9 < bL; ++b9) {
                        if (bv[b9]) {
                            b8.push(bv[b9])
                        }
                    }
                    if (bU.length > 0) {
                        bc.removeFromSelection(bU)
                    }
                    if (b8.length > 0) {
                        a5(b8)
                    }
                    break;
                case"resize":
                    var bZ = aQ(bT), bD = aP(bZ), by = bD ? bl : au(bT), bw = by.x, bx = by.y, bp = by.width, br = by.height, bu = (x - bn), bt = (y - bm);
                    var bK = aq(bT);
                    if (bK) {
                        var b3 = Math.sqrt(bu * bu + bt * bt), bM = Math.atan2(bt, bu) - bK * Math.PI / 180;
                        bu = b3 * Math.cos(bM);
                        bt = b3 * Math.sin(bM)
                    }
                    if (aa.indexOf("n") == -1 && aa.indexOf("s") == -1) {
                        bt = 0
                    }
                    if (aa.indexOf("e") == -1 && aa.indexOf("w") == -1) {
                        bu = 0
                    }
                    var cc = null, b7 = 0, b6 = 0, bA = br ? (br + bt) / br : 1, bB = bp ? (bp + bu) / bp : 1;
                    if (aa.indexOf("n") != -1) {
                        bA = br ? (br - bt) / br : 1;
                        b6 = br
                    }
                    if (aa.indexOf("w") != -1) {
                        bB = bp ? (bp - bu) / bp : 1;
                        b7 = bp
                    }
                    var ch = G.createSVGTransform(), bX = G.createSVGTransform(), bE = G.createSVGTransform();
                    ch.setTranslate(-(bw + b7), -(bx + b6));
                    if (bV.shiftKey) {
                        if (bB == 1) {
                            bB = bA
                        } else {
                            bA = bB
                        }
                    }
                    bX.setScale(bB, bA);
                    bE.setTranslate(bw + b7, bx + b6);
                    if (bD) {
                        var bS = bK ? 1 : 0;
                        bZ.replaceItem(ch, 2 + bS);
                        bZ.replaceItem(bX, 1 + bS);
                        bZ.replaceItem(bE, 0 + bS)
                    } else {
                        var bz = bZ.numberOfItems;
                        bZ.replaceItem(bE, bz - 3);
                        bZ.replaceItem(bX, bz - 2);
                        bZ.replaceItem(ch, bz - 1)
                    }
                    var bF = u[0];
                    bF.x = bw;
                    bF.y = bx;
                    if (b7) {
                        bF.x += bu
                    }
                    if (b6) {
                        bF.y += bt
                    }
                    F.requestSelector(bT).resize();
                    break;
                case"zoom":
                    x *= ac;
                    y *= ac;
                    az(j, {x: Math.min(bn * ac, x), y: Math.min(bm * ac, y), width: Math.abs(x - bn * ac), height: Math.abs(y - bm * ac)}, 100);
                    break;
                case"text":
                    az(bN, {x: x, y: y}, 1000);
                    break;
                case"line":
                    var bO = null;
                    if (!window.opera) {
                        G.suspendRedraw(1000)
                    }
                    var bI = x;
                    var cf = y;
                    if (bV.shiftKey) {
                        var bW = aw.snapToAngle(bn, bm, bI, cf);
                        bI = bW.x;
                        cf = bW.y
                    }
                    bN.setAttributeNS(null, "x2", bI);
                    bN.setAttributeNS(null, "y2", cf);
                    if (!window.opera) {
                        G.unsuspendRedraw(bO)
                    }
                    break;
                case"foreignObject":
                case"square":
                case"rect":
                case"image":
                    var ce = (a1 == "square") || bV.shiftKey, b0 = Math.abs(x - bn), cb = Math.abs(y - bm), bH, bG;
                    if (ce) {
                        b0 = cb = Math.max(b0, cb);
                        bH = bn < x ? bn : bn - b0;
                        bG = bm < y ? bm : bm - cb
                    } else {
                        bH = Math.min(bn, x);
                        bG = Math.min(bm, y)
                    }
                    az(bN, {width: b0, height: cb, x: bH, y: bG}, 1000);
                    break;
                case"circle":
                    var cd = $(bN).attr(["cx", "cy"]);
                    var bQ = cd.cx, bP = cd.cy, bs = Math.sqrt((x - bQ) * (x - bQ) + (y - bP) * (y - bP));
                    bN.setAttributeNS(null, "r", bs);
                    break;
                case"ellipse":
                    var cd = $(bN).attr(["cx", "cy"]);
                    var bQ = cd.cx, bP = cd.cy;
                    bO = null;
                    if (!window.opera) {
                        G.suspendRedraw(1000)
                    }
                    bN.setAttributeNS(null, "rx", Math.abs(x - bQ));
                    var bR = Math.abs(bV.shiftKey ? (x - bQ) : (y - bP));
                    bN.setAttributeNS(null, "ry", bR);
                    if (!window.opera) {
                        G.unsuspendRedraw(bO)
                    }
                    break;
                case"fhellipse":
                case"fhrect":
                    bh.minx = Math.min(x, bh.minx);
                    bh.maxx = Math.max(x, bh.maxx);
                    bh.miny = Math.min(y, bh.miny);
                    bh.maxy = Math.max(y, bh.maxy);
                case"fhpath":
                    bn = x;
                    bm = y;
                    bg += +x + "," + y + " ";
                    bN.setAttributeNS(null, "points", bg);
                    break;
                case"path":
                case"pathedit":
                    x *= ac;
                    y *= ac;
                    if (bV.shiftKey) {
                        var bJ = path.dragging ? path.dragging[0] : bn;
                        var cg = path.dragging ? path.dragging[1] : bm;
                        var bW = aw.snapToAngle(bJ, cg, x, y);
                        x = bW.x;
                        y = bW.y
                    }
                    if (j && j.getAttribute("display") != "none") {
                        az(j, {x: Math.min(bn, x), y: Math.min(bm, y), width: Math.abs(x - bn), height: Math.abs(y - bm)}, 100)
                    }
                    z.mouseMove(x, y);
                    break;
                case"textedit":
                    x *= ac;
                    y *= ac;
                    L.mouseMove(b2, b1);
                    break;
                case"rotate":
                    var by = au(bT), bQ = by.x + by.width / 2, bP = by.y + by.height / 2, b5 = B(bT), bq = P(bQ, bP, b5);
                    bQ = bq.x;
                    bP = bq.y;
                    var bK = ((Math.atan2(bP - y, bQ - x) * (180 / Math.PI)) - 90) % 360;
                    if (bV.shiftKey) {
                        var bY = 45;
                        bK = Math.round(bK / bY) * bY
                    }
                    bc.setRotationAngle(bK < -180 ? (360 + bK) : bK, true);
                    call("changed", aR);
                    break;
                default:
                    break
            }
            aI("mouseMove", {event: bV, mouse_x: b2, mouse_y: b1, selected: bT})
        };
        var bk = function (bz) {
            if (bz.button === 1) {
                return
            }
            var bu = K;
            K = null;
            if (!aG) {
                return
            }
            var bC = P(bz.pageX, bz.pageY, p), bq = bC.x * ac, bp = bC.y * ac, bw = bq / ac, bv = bp / ac, bs = b(C()), bI = false;
            aG = false;
            switch (a1) {
                case"resize":
                case"multiselect":
                    if (j != null) {
                        j.setAttribute("display", "none");
                        aH = []
                    }
                    a1 = "select";
                case"select":
                    if (aR[0] != null) {
                        if (aR[1] == null) {
                            var bB = aR[0];
                            if (bB.tagName != "g" && bB.tagName != "image" && bB.tagName != "foreignObject") {
                                r.fill = bB.getAttribute("fill");
                                r.fill_opacity = bB.getAttribute("fill-opacity");
                                r.stroke = bB.getAttribute("stroke");
                                r.stroke_opacity = bB.getAttribute("stroke-opacity");
                                r.stroke_width = bB.getAttribute("stroke-width");
                                r.stroke_dasharray = bB.getAttribute("stroke-dasharray");
                                r.stroke_linejoin = bB.getAttribute("stroke-linejoin");
                                r.stroke_linecap = bB.getAttribute("stroke-linecap")
                            }
                            if (bB.tagName == "text") {
                                a6.font_size = bB.getAttribute("font-size");
                                a6.font_family = bB.getAttribute("font-family")
                            }
                            F.requestSelector(bB).showGrips(true)
                        }
                        aY();
                        if (bw != bn || bv != bm) {
                            var bG = aR.length;
                            for (var bF = 0; bF < bG; ++bF) {
                                if (aR[bF] == null) {
                                    break
                                }
                                if (aR[bF].tagName != "g") {
                                    F.requestSelector(aR[bF]).resize()
                                }
                            }
                        } else {
                            var by = bz.target;
                            if (aR[0].nodeName == "path" && aR[1] == null) {
                                z.select(by)
                            } else {
                                if (aR[0].nodeName == "text" && aR[1] == null) {
                                    L.select(by, bw, bv)
                                } else {
                                    if (bz.shiftKey) {
                                        if (bu != by) {
                                            bc.removeFromSelection([by])
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return;
                    break;
                case"zoom":
                    if (j != null) {
                        j.setAttribute("display", "none")
                    }
                    var bA = bz.shiftKey ? 0.5 : 2;
                    call("zoomed", {x: Math.min(bn, bw), y: Math.min(bm, bv), width: Math.abs(bw - bn), height: Math.abs(bv - bm), factor: bA});
                    return;
                case"fhpath":
                    var bE = bs.getAttribute("points");
                    var bt = bE.indexOf(",");
                    if (bt >= 0) {
                        bI = bE.indexOf(",", bt + 1) >= 0
                    } else {
                        bI = bE.indexOf(" ", bE.indexOf(" ") + 1) >= 0
                    }
                    if (bI) {
                        bs = z.smoothPolylineIntoPath(bs)
                    }
                    break;
                case"line":
                    var bD = $(bs).attr(["x1", "x2", "y1", "y2"]);
                    bI = (bD.x1 != bD.x2 || bD.y1 != bD.y2);
                    break;
                case"foreignObject":
                case"square":
                case"rect":
                case"image":
                    var bD = $(bs).attr(["width", "height"]);
                    bI = (bD.width != 0 || bD.height != 0) || a1 === "image";
                    break;
                case"circle":
                    bI = (bs.getAttribute("r") != 0);
                    break;
                case"ellipse":
                    var bD = $(bs).attr(["rx", "ry"]);
                    bI = (bD.rx != null || bD.ry != null);
                    break;
                case"fhellipse":
                    if ((bh.maxx - bh.minx) > 0 && (bh.maxy - bh.miny) > 0) {
                        bs = c({element: "ellipse", curStyles: true, attr: {cx: (bh.minx + bh.maxx) / 2, cy: (bh.miny + bh.maxy) / 2, rx: (bh.maxx - bh.minx) / 2, ry: (bh.maxy - bh.miny) / 2, id: C()}});
                        call("changed", [bs]);
                        bI = true
                    }
                    break;
                case"fhrect":
                    if ((bh.maxx - bh.minx) > 0 && (bh.maxy - bh.miny) > 0) {
                        bs = c({element: "rect", curStyles: true, attr: {x: bh.minx, y: bh.miny, width: (bh.maxx - bh.minx), height: (bh.maxy - bh.miny), id: C()}});
                        call("changed", [bs]);
                        bI = true
                    }
                    break;
                case"text":
                    bI = true;
                    a5([bs]);
                    L.start(bs);
                    break;
                case"path":
                    bs = null;
                    aG = true;
                    var bK = z.mouseUp(bz, bs, bq, bp);
                    bs = bK.element;
                    bI = bK.keep;
                    break;
                case"pathedit":
                    bI = true;
                    bs = null;
                    z.mouseUp(bz);
                    break;
                case"textedit":
                    bI = false;
                    bs = null;
                    L.mouseUp(bz, bq, bp);
                    break;
                case"rotate":
                    bI = true;
                    bs = null;
                    a1 = "select";
                    var bx = bc.finishUndoableChange();
                    if (!bx.isEmpty()) {
                        aT(bx)
                    }
                    aY();
                    break;
                default:
                    break
            }
            var bH = aI("mouseUp", {event: bz, mouse_x: bq, mouse_y: bp}, true);
            $.each(bH, function (bL, bM) {
                if (bM) {
                    bI = bM.keep || bI;
                    bs = bM.element;
                    aG = bM.started || aG
                }
            });
            if (!bI && bs != null) {
                bs.parentNode.removeChild(bs);
                bs = null;
                var by = bz.target;
                while (by.parentNode.parentNode.tagName == "g") {
                    by = by.parentNode
                }
                if ((a1 != "path" || current_path_pts.length == 0) && by.parentNode.id != "selectorParentGroup" && by.id != "svgcanvas" && by.id != "svgroot") {
                    a5([by], true);
                    bc.setMode("select")
                }
            } else {
                if (bs != null) {
                    bc.addedNew = true;
                    var bJ = 0.2, br;
                    if (N.beginElement && bs.getAttribute("opacity") != aN.opacity) {
                        br = $(N).clone().attr({to: aN.opacity, dur: bJ}).appendTo(bs);
                        br[0].beginElement()
                    } else {
                        bJ = 0
                    }
                    setTimeout(function () {
                        if (br) {
                            br.remove()
                        }
                        bs.setAttribute("opacity", aN.opacity);
                        bs.setAttribute("style", "pointer-events:inherit");
                        ar(bs);
                        if (a1 == "path") {
                            z.toEditMode(bs)
                        } else {
                            if (a1 == "text" || a1 == "image" || a1 == "foreignObject") {
                                a5([bs], true)
                            }
                        }
                        aT(new a(bs));
                        call("changed", [bs])
                    }, bJ * 1000)
                }
            }
            aj = null
        };
        var bi = function (bp) {
            bp.preventDefault();
            return false
        };
        $(aL).mousedown(bj).mousemove(bo).click(bi);
        $(window).mouseup(bk);
        $(aL).bind("mousewheel DOMMouseScroll", function (bq) {
            if (!bq.shiftKey) {
                return
            }
            bq.preventDefault();
            p = ai.getScreenCTM().inverse();
            var bp = P(bq.pageX, bq.pageY, p);
            var br = {x: bp.x, y: bp.y, width: 0, height: 0};
            if (bq.wheelDelta) {
                if (bq.wheelDelta >= 120) {
                    br.factor = 2
                } else {
                    if (bq.wheelDelta <= -120) {
                        br.factor = 0.5
                    }
                }
            } else {
                if (bq.detail) {
                    if (bq.detail > 0) {
                        br.factor = 0.5
                    } else {
                        if (bq.detail < 0) {
                            br.factor = 2
                        }
                    }
                }
            }
            if (!br.factor) {
                return
            }
            call("zoomed", br)
        })
    }());
    var aV = function (bg) {
        $(bg).click(function (bh) {
            bh.preventDefault()
        })
    };
    var L = bc.textActions = function () {
        var bp, bt;
        var bv;
        var bl;
        var bs;
        var bm;
        var bA = [];
        var bB, bu;
        var bw;
        var bi, bg;
        var bj;
        function bC(bD) {
            var bE = (bv.value === "");
            if (!arguments.length) {
                if (bE) {
                    bD = 0
                } else {
                    if (bv.selectionEnd !== bv.selectionStart) {
                        return
                    }
                    bD = bv.selectionEnd
                }
            }
            var bF;
            bF = bA[bD];
            if (!bE) {
                bv.setSelectionRange(bD, bD)
            }
            bl = b("text_cursor");
            if (!bl) {
                bl = document.createElementNS(aK, "line");
                az(bl, {id: "text_cursor", stroke: "#333", "stroke-width": 1});
                bl = b("selectorParentGroup").appendChild(bl)
            }
            if (!bm) {
                bm = setInterval(function () {
                    var bI = (bl.getAttribute("display") === "none");
                    bl.setAttribute("display", bI ? "inline" : "none")
                }, 600)
            }
            var bH = bq(bF.x, bB.y);
            var bG = bq(bF.x, (bB.y + bB.height));
            az(bl, {x1: bH.x, y1: bH.y, x2: bG.x, y2: bG.y, visibility: "visible", display: "inline"});
            if (bs) {
                bs.setAttribute("d", "")
            }
        }
        function bn(bD, bG, bF) {
            if (bD === bG) {
                bC(bG);
                return
            }
            if (!bF) {
                bv.setSelectionRange(bD, bG)
            }
            bs = b("text_selectblock");
            if (!bs) {
                bs = document.createElementNS(aK, "path");
                az(bs, {id: "text_selectblock", fill: "green", opacity: 0.5, style: "pointer-events:none"});
                b("selectorParentGroup").appendChild(bs)
            }
            var bJ = bA[bD];
            var bK = bA[bG];
            bl.setAttribute("visibility", "hidden");
            var bM = bq(bJ.x, bB.y), bI = bq(bJ.x + (bK.x - bJ.x), bB.y), bE = bq(bJ.x, bB.y + bB.height), bL = bq(bJ.x + (bK.x - bJ.x), bB.y + bB.height);
            var bH = "M" + bM.x + "," + bM.y + " L" + bI.x + "," + bI.y + " " + bL.x + "," + bL.y + " " + bE.x + "," + bE.y + "z";
            az(bs, {d: bH, display: "inline"})
        }
        function bo(bE, bD) {
            var bG = G.createSVGPoint();
            bG.x = bE;
            bG.y = bD;
            if (bA.length == 1) {
                return 0
            }
            var bI = bp.getCharNumAtPosition(bG);
            if (bI < 0) {
                bI = bA.length - 2;
                if (bE <= bA[0].x) {
                    bI = 0
                }
            } else {
                if (bI >= bA.length - 2) {
                    bI = bA.length - 2
                }
            }
            var bH = bA[bI];
            var bF = bH.x + (bH.width / 2);
            if (bE > bF) {
                bI++
            }
            return bI
        }
        function by(bE, bD) {
            bC(bo(bE, bD))
        }
        function bx(bD, bJ, bF) {
            var bH = bv.selectionStart;
            var bG = bo(bD, bJ);
            var bI = Math.min(bH, bG);
            var bE = Math.max(bH, bG);
            bn(bI, bE, !bF)
        }
        function br(bG, bE) {
            var bD = {x: bG, y: bE};
            bD.x /= ac;
            bD.y /= ac;
            if (bw) {
                var bF = P(bD.x, bD.y, bw.inverse());
                bD.x = bF.x;
                bD.y = bF.y
            }
            return bD
        }
        function bq(bG, bE) {
            var bD = {x: bG, y: bE};
            if (bw) {
                var bF = P(bD.x, bD.y, bw);
                bD.x = bF.x;
                bD.y = bF.y
            }
            bD.x *= ac;
            bD.y *= ac;
            return bD
        }
        function bh() {
            if (bl) {
                bl.setAttribute("visibility", "hidden")
            }
        }
        function bz(bD) {
            bn(0, bp.textContent.length);
            $(this).unbind(bD)
        }
        function bk(bK) {
            if (!bj) {
                return
            }
            var bL = P(bK.pageX, bK.pageY, p), bI = bL.x * ac, bG = bL.y * ac;
            var bM = br(bI, bG);
            var bF = bo(bM.x, bM.y);
            var bH = bp.textContent;
            var bE = bH.substr(0, bF).replace(/[a-z0-9]+$/i, "").length;
            var bD = bH.substr(bF).match(/^[a-z0-9]+/i);
            var bJ = (bD ? bD[0].length : 0) + bF;
            bn(bE, bJ);
            $(bK.target).click(bz);
            setTimeout(function () {
                $(bK.target).unbind("click", bz)
            }, 300)
        }
        return{select: function (bE, bD, bF) {
                if (bt == bE) {
                    bp = bE;
                    L.toEditMode(bD, bF)
                } else {
                    bt = bE
                }
            }, start: function (bD) {
                bp = bD;
                L.toEditMode()
            }, mouseDown: function (bE, bG, bF, bD) {
                var bH = br(bF, bD);
                bv.focus();
                by(bH.x, bH.y);
                bi = bF;
                bg = bD
            }, mouseMove: function (bE, bD) {
                var bF = br(bE, bD);
                bx(bF.x, bF.y)
            }, mouseUp: function (bF, bE, bD) {
                var bG = br(bE, bD);
                bx(bG.x, bG.y, true);
                if (bi === bE && bg === bD && bF.target !== bp) {
                    L.toSelectMode(true)
                }
            }, setCursor: bC, toEditMode: function (bD, bF) {
                bj = false;
                a1 = "textedit";
                F.requestSelector(bp).showGrips(false);
                L.init();
                $(bp).css("cursor", "text");
                if (!arguments.length) {
                    bC()
                } else {
                    var bE = br(bD, bF);
                    by(bE.x, bE.y)
                }
                setTimeout(function () {
                    bj = true
                }, 300)
            }, toSelectMode: function (bD) {
                a1 = "select";
                clearInterval(bm);
                bm = null;
                if (bs) {
                    $(bs).attr("display", "none")
                }
                if (bl) {
                    $(bl).attr("visibility", "hidden")
                }
                $(bp).css("cursor", "move");
                if (bD) {
                    aZ();
                    $(bp).css("cursor", "move");
                    call("selected", [bp]);
                    a5([bp], true)
                }
                if (bp && !bp.textContent.length) {
                    bc.deleteSelectedElements()
                }
                $(bv).blur();
                bp = false
            }, setInputElem: function (bD) {
                bv = bD;
                $(bv).blur(bh)
            }, clear: function () {
                bt = null;
                if (a1 == "textedit") {
                    L.toSelectMode()
                }
            }, init: function (bH) {
                if (!bp) {
                    return
                }
                if (!bp.parentNode) {
                    bp = aR[0];
                    F.requestSelector(bp).showGrips(false)
                }
                var bI = bp.textContent;
                var bE = bI.length;
                var bD = bp.getAttribute("transform");
                bB = au(bp);
                bw = bD ? B(bp) : null;
                bA = Array(bE);
                bv.focus();
                $(bp).unbind("dblclick", bk).dblclick(bk);
                if (!bE) {
                    var bF = {x: bB.x + (bB.width / 2), width: 0}
                }
                for (var bG = 0; bG < bE; bG++) {
                    var bJ = bp.getStartPositionOfChar(bG);
                    var bF = bp.getEndPositionOfChar(bG);
                    bA[bG] = {x: bJ.x, y: bB.y, width: bF.x - bJ.x, height: bB.height}
                }
                bA.push({x: bF.x, width: 0});
                bn(bv.selectionStart, bv.selectionEnd, true)
            }}
    }();
    var z = this.pathActions = function () {
        var bg = false;
        var bz = {};
        var bv;
        var bt;
        var bl = {2: ["x", "y"], 4: ["x", "y"], 6: ["x", "y", "x1", "y1", "x2", "y2"], 8: ["x", "y", "x1", "y1"], 10: ["x", "y", "r1", "r2", "angle", "largeArcFlag", "sweepFlag"], 12: ["x"], 14: ["y"]};
        function bE() {
            return bt
        }
        function bm(bG) {
            bG.setAttribute("d", z.convertPath(bG))
        }
        function bq(bL, bN, bI) {
            var bM = bL.pathSegList;
            if (a0.pathInsertItemBefore) {
                bM.insertItemBefore(bN, bI);
                return
            }
            var bH = bM.numberOfItems;
            var bG = [];
            for (var bK = 0; bK < bH; bK++) {
                var bJ = bM.getItem(bK);
                bG.push(bJ)
            }
            bM.clear();
            for (var bK = 0; bK < bH; bK++) {
                if (bK == bI) {
                    bM.appendItem(bN)
                }
                bM.appendItem(bG[bK])
            }
        }
        function bp(bL, bI) {
            var bH = bl[bL], bG = bH.length;
            var bJ = Array(bG);
            for (var bK = 0; bK < bG; bK++) {
                bJ[bK] = bI[bH[bK]]
            }
            return bJ
        }
        function bo() {
            var bH = b("pathpointgrip_container");
            if (!bH) {
                var bG = b("selectorParentGroup");
                bH = bG.appendChild(document.createElementNS(aK, "g"));
                bH.id = "pathpointgrip_container"
            }
            return bH
        }
        var br = function (bI, bG, bL) {
            var bK = bo();
            var bJ = b("pathpointgrip_" + bI);
            if (!bJ) {
                bJ = document.createElementNS(aK, "circle");
                az(bJ, {id: "pathpointgrip_" + bI, display: "none", r: 4, fill: "#0FF", stroke: "#00F", "stroke-width": 2, cursor: "move", style: "pointer-events:all", "xlink:title": aB.pathNodeTooltip});
                bJ = bK.appendChild(bJ);
                var bH = $("#pathpointgrip_" + bI);
                bH.dblclick(function () {
                    if (bt) {
                        bt.setSegType()
                    }
                })
            }
            if (bG && bL) {
                az(bJ, {cx: bG, cy: bL, display: "inline"})
            }
            return bJ
        };
        var bA = function (bG, bK) {
            var bH = bG.index;
            var bI = br(bH);
            if (bK) {
                var bJ = bk(bG);
                az(bI, {cx: bJ.x, cy: bJ.y, display: "inline"})
            }
            return bI
        };
        var bw = function (bI, bH) {
            var bL = bI.index;
            var bM = b("segline_" + bL);
            if (!bM) {
                var bK = bo();
                bM = document.createElementNS(aK, "path");
                az(bM, {id: "segline_" + bL, display: "none", fill: "none", stroke: "#0FF", "stroke-width": 2, style: "pointer-events:none", d: "M0,0 0,0"});
                bK.appendChild(bM)
            }
            if (bH) {
                var bG = bI.prev;
                if (!bG) {
                    bM.setAttribute("display", "none");
                    return bM
                }
                var bO = bk(bG);
                bj(2, 0, [bO.x, bO.y], bM);
                var bN = bp(bI.type, bI.item, true);
                for (var bJ = 0; bJ < bN.length; bJ += 2) {
                    var bO = bk(bI, {x: bN[bJ], y: bN[bJ + 1]});
                    bN[bJ] = bO.x;
                    bN[bJ + 1] = bO.y
                }
                bj(bI.type, 1, bN, bM)
            }
            return bM
        };
        var bh = function (bK) {
            var bQ = bK.item;
            var bO = bK.index;
            if (!("x1" in bQ) || !("x2" in bQ)) {
                return null
            }
            var bM = {};
            var bN = bo();
            var bH = bt.segs[bO - 1].item;
            var bJ = [bH, bQ];
            for (var bL = 1; bL < 3; bL++) {
                var bG = bO + "c" + bL;
                var bS = bM["c" + bL + "_line"] = b("ctrlLine_" + bG);
                if (!bS) {
                    bS = document.createElementNS(aK, "line");
                    az(bS, {id: "ctrlLine_" + bG, stroke: "#555", "stroke-width": 1, style: "pointer-events:none"});
                    bN.appendChild(bS)
                }
                var bR = bk(bK, {x: bQ["x" + bL], y: bQ["y" + bL]});
                var bI = bk(bK, {x: bJ[bL - 1].x, y: bJ[bL - 1].y});
                az(bS, {x1: bR.x, y1: bR.y, x2: bI.x, y2: bI.y, display: "inline"});
                bM["c" + bL + "_line"] = bS;
                var bP = bM["c" + bL] = b("ctrlpointgrip_" + bG);
                if (!bP) {
                    bP = document.createElementNS(aK, "circle");
                    az(bP, {id: "ctrlpointgrip_" + bG, display: "none", r: 4, fill: "#0FF", stroke: "#55F", "stroke-width": 1, cursor: "move", style: "pointer-events:all", "xlink:title": aB.pathCtrlPtTooltip});
                    bN.appendChild(bP)
                }
                az(bP, {cx: bR.x, cy: bR.y, display: "inline"});
                bM["c" + bL] = bP
            }
            return bM
        };
        function bk(bG, bK) {
            var bH = {x: bK ? bK.x : bG.item.x, y: bK ? bK.y : bG.item.y}, bJ = bG.path;
            if (bJ.matrix) {
                var bI = P(bH.x, bH.y, bJ.matrix);
                bH = bI
            }
            bH.x *= ac;
            bH.y *= ac;
            return bH
        }
        function by(bI, bH) {
            var bG = {x: bI.x, y: bI.y};
            if (bH.matrix) {
                var bI = P(bG.x, bG.y, bH.imatrix);
                bG.x = bI.x;
                bG.y = bI.y
            }
            bG.x /= ac;
            bG.y /= ac;
            return bG
        }
        function bu(bH, bJ) {
            var bI = this;
            bI.index = bH;
            bI.selected = false;
            bI.type = bJ.pathSegType;
            var bG;
            bI.addGrip = function () {
                bG = bI.ptgrip = bA(bI, true);
                bI.ctrlpts = bh(bI, true);
                bI.segsel = bw(bI, true)
            };
            bI.item = bJ;
            bI.show = function (bK) {
                if (bG) {
                    bG.setAttribute("display", bK ? "inline" : "none");
                    bI.segsel.setAttribute("display", bK ? "inline" : "none");
                    bI.showCtrlPts(bK)
                }
            };
            bI.select = function (bK) {
                if (bG) {
                    bG.setAttribute("stroke", bK ? "#0FF" : "#00F");
                    bI.segsel.setAttribute("display", bK ? "inline" : "none");
                    if (bI.ctrlpts) {
                        bI.selectCtrls(bK)
                    }
                    bI.selected = bK
                }
            };
            bI.selectCtrls = function (bK) {
                $("#ctrlpointgrip_" + bI.index + "c1, #ctrlpointgrip_" + bI.index + "c2").attr("fill", bK ? "#0FF" : "#EEE")
            };
            bI.update = function (bK) {
                bJ = bI.item;
                if (bG) {
                    var bL = bk(bI);
                    az(bG, {cx: bL.x, cy: bL.y});
                    bw(bI, true);
                    if (bI.ctrlpts) {
                        if (bK) {
                            bI.item = bt.elem.pathSegList.getItem(bI.index);
                            bI.type = bI.item.pathSegType
                        }
                        bh(bI)
                    }
                }
            };
            bI.move = function (bM, bL) {
                var bO = bI.item;
                var bR = bI;
                if (bR.ctrlpts) {
                    var bK = [bO.x += bM, bO.y += bL, bO.x1, bO.y1, bO.x2 += bM, bO.y2 += bL]
                } else {
                    var bK = [bO.x += bM, bO.y += bL]
                }
                bj(bR.type, bR.index, bK);
                if (bI.next && bI.next.ctrlpts) {
                    var bN = bI.next.item;
                    var bP = [bN.x, bN.y, bN.x1 += bM, bN.y1 += bL, bN.x2, bN.y2];
                    bj(bI.next.type, bI.next.index, bP)
                }
                if (bI.mate) {
                    var bO = bI.mate.item;
                    var bQ = [bO.x += bM, bO.y += bL];
                    bj(bI.mate.type, bI.mate.index, bQ)
                }
                bI.update(true);
                if (bI.next) {
                    bI.next.update(true)
                }
            };
            bI.setLinked = function (bL) {
                var bK, bP, bN;
                if (bL == 2) {
                    bP = 1;
                    bK = bI.next;
                    if (!bK) {
                        return
                    }
                    bN = bI.item
                } else {
                    bP = 2;
                    bK = bI.prev;
                    if (!bK) {
                        return
                    }
                    bN = bK.item
                }
                var bM = bK.item;
                bM["x" + bP] = bN.x + (bN.x - bI.item["x" + bL]);
                bM["y" + bP] = bN.y + (bN.y - bI.item["y" + bL]);
                var bO = [bM.x, bM.y, bM.x1, bM.y1, bM.x2, bM.y2];
                bj(bK.type, bK.index, bO);
                bK.update(true)
            };
            bI.moveCtrl = function (bM, bL, bK) {
                var bN = bI.item;
                bN["x" + bM] += bL;
                bN["y" + bM] += bK;
                var bO = [bN.x, bN.y, bN.x1, bN.y1, bN.x2, bN.y2];
                bj(bI.type, bI.index, bO);
                bI.update(true)
            };
            bI.setType = function (bL, bK) {
                bj(bL, bH, bK);
                bI.type = bL;
                bI.item = bt.elem.pathSegList.getItem(bH);
                bI.showCtrlPts(bL === 6);
                bI.ctrlpts = bh(bI);
                bI.update(true)
            };
            bI.showCtrlPts = function (bL) {
                if (bI.ctrlpts) {
                    for (var bK in bI.ctrlpts) {
                        bI.ctrlpts[bK].setAttribute("display", bL ? "inline" : "none")
                    }
                }
            }
        }
        function bC(bG) {
            if (!bG || bG.tagName !== "path") {
                return false
            }
            var bH = bt = this;
            this.elem = bG;
            this.segs = [];
            this.selected_pts = [];
            this.init = function () {
                $(bo()).find("*").attr("display", "none");
                var bL = bG.pathSegList;
                var bR = bL.numberOfItems;
                bH.segs = [];
                bH.selected_pts = [];
                bH.first_seg = null;
                for (var bO = 0; bO < bR; bO++) {
                    var bS = bL.getItem(bO);
                    var bP = new bu(bO, bS);
                    bP.path = bH;
                    bH.segs.push(bP)
                }
                var bJ = bH.segs;
                var bQ = null;
                for (var bO = 0; bO < bR; bO++) {
                    var bN = bJ[bO];
                    var bM = (bO + 1) >= bR ? null : bJ[bO + 1];
                    var bI = (bO - 1) < 0 ? null : bJ[bO - 1];
                    if (bN.type === 2) {
                        if (bI && bI.type !== 1) {
                            var bK = bJ[bQ];
                            bK.next = bJ[bQ + 1];
                            bK.next.prev = bK;
                            bK.addGrip()
                        }
                        bQ = bO
                    } else {
                        if (bM && bM.type === 1) {
                            bN.next = bJ[bQ + 1];
                            bN.next.prev = bN;
                            bN.mate = bJ[bQ];
                            bN.addGrip();
                            if (bH.first_seg == null) {
                                bH.first_seg = bN
                            }
                        } else {
                            if (!bM) {
                                if (bN.type !== 1) {
                                    var bK = bJ[bQ];
                                    bK.next = bJ[bQ + 1];
                                    bK.next.prev = bK;
                                    bK.addGrip();
                                    bN.addGrip();
                                    if (!bH.first_seg) {
                                        bH.first_seg = bJ[bQ]
                                    }
                                }
                            } else {
                                if (bN.type !== 1) {
                                    bN.addGrip();
                                    if (bM && bM.type !== 2) {
                                        bN.next = bM;
                                        bN.next.prev = bN
                                    }
                                }
                            }
                        }
                    }
                }
                return bH
            };
            this.init();
            this.update = function () {
                if (aq(bH.elem)) {
                    bH.matrix = B(bt.elem);
                    bH.imatrix = bH.matrix.inverse()
                }
                bH.eachSeg(function (bI) {
                    this.item = bG.pathSegList.getItem(bI);
                    this.update()
                });
                return bH
            };
            this.eachSeg = function (bL) {
                var bI = bH.segs.length;
                for (var bK = 0; bK < bI; bK++) {
                    var bJ = bL.call(bH.segs[bK], bK);
                    if (bJ === false) {
                        break
                    }
                }
            };
            this.addSeg = function (bT) {
                var bS = bH.segs[bT];
                if (!bS.prev) {
                    return
                }
                var bP = bS.prev;
                var bO;
                switch (bS.item.pathSegType) {
                    case 4:
                        var bV = (bS.item.x + bP.item.x) / 2;
                        var bU = (bS.item.y + bP.item.y) / 2;
                        bO = bG.createSVGPathSegLinetoAbs(bV, bU);
                        break;
                    case 6:
                        var bX = (bP.item.x + bS.item.x1) / 2;
                        var bN = (bS.item.x1 + bS.item.x2) / 2;
                        var bR = (bS.item.x2 + bS.item.x) / 2;
                        var bM = (bX + bN) / 2;
                        var bK = (bN + bR) / 2;
                        var bV = (bM + bK) / 2;
                        var bW = (bP.item.y + bS.item.y1) / 2;
                        var bL = (bS.item.y1 + bS.item.y2) / 2;
                        var bQ = (bS.item.y2 + bS.item.y) / 2;
                        var bJ = (bW + bL) / 2;
                        var bI = (bL + bQ) / 2;
                        var bU = (bJ + bI) / 2;
                        bO = bG.createSVGPathSegCurvetoCubicAbs(bV, bU, bX, bW, bM, bJ);
                        var bY = [bS.item.x, bS.item.y, bK, bI, bR, bQ];
                        bj(bS.type, bT, bY);
                        break
                }
                bq(bG, bO, bT)
            };
            this.deleteSeg = function (bJ) {
                var bI = bH.segs[bJ];
                var bM = bG.pathSegList;
                bI.show(false);
                var bK = bI.next;
                if (bI.mate) {
                    var bN = [bK.item.x, bK.item.y];
                    bj(2, bK.index, bN);
                    bj(4, bI.index, bN);
                    bM.removeItem(bI.mate.index)
                } else {
                    if (!bI.prev) {
                        var bL = bI.item;
                        var bN = [bK.item.x, bK.item.y];
                        bj(2, bI.next.index, bN);
                        bM.removeItem(bJ)
                    } else {
                        bM.removeItem(bJ)
                    }
                }
            };
            this.endChanges = function (bJ) {
                if (aC) {
                    bm(bH.elem)
                }
                var bI = new av(bG, {d: bH.last_d}, bJ);
                aT(bI);
                call("changed", [bG])
            };
            this.subpathIsClosed = function (bJ) {
                var bI = false;
                bt.eachSeg(function (bK) {
                    if (bK <= bJ) {
                        return true
                    }
                    if (this.type === 2) {
                        return false
                    } else {
                        if (this.type === 1) {
                            bI = true;
                            return false
                        }
                    }
                });
                return bI
            };
            this.addPtsToSelection = function (bK) {
                if (!$.isArray(bK)) {
                    bK = [bK]
                }
                for (var bL = 0; bL < bK.length; bL++) {
                    var bJ = bK[bL];
                    var bI = bH.segs[bJ];
                    if (bI.ptgrip) {
                        if ($.inArray(bJ, bH.selected_pts) == -1 && bJ >= 0) {
                            bH.selected_pts.push(bJ)
                        }
                    }
                }
                bH.selected_pts.sort();
                var bL = bH.selected_pts.length, bN = new Array(bL);
                while (bL--) {
                    var bM = bH.selected_pts[bL];
                    var bI = bH.segs[bM];
                    bI.select(true);
                    bN[bL] = bI.ptgrip
                }
                z.canDeleteNodes = true;
                z.closed_subpath = bH.subpathIsClosed(bH.selected_pts[0]);
                call("selected", bN)
            };
            this.removePtFromSelection = function (bI) {
                var bJ = $.inArray(bI, bH.selected_pts);
                if (bJ == -1) {
                    return
                }
                bH.segs[bI].select(false);
                bH.selected_pts.splice(bJ, 1)
            };
            this.clearSelection = function () {
                bH.eachSeg(function (bI) {
                    this.select(false)
                });
                bH.selected_pts = []
            };
            this.selectPt = function (bJ, bI) {
                bH.clearSelection();
                if (bJ == null) {
                    bH.eachSeg(function (bK) {
                        if (this.prev) {
                            bJ = bK
                        }
                    })
                }
                bH.addPtsToSelection(bJ);
                if (bI) {
                    bH.dragctrl = bI;
                    if (bs) {
                        bH.segs[bJ].setLinked(bI)
                    }
                }
            };
            this.storeD = function () {
                this.last_d = bG.getAttribute("d")
            };
            this.show = function (bI) {
                bH.eachSeg(function () {
                    this.show(bI)
                });
                if (bI) {
                    bH.selectPt(bH.first_seg.index)
                }
                return bH
            };
            this.movePts = function (bL, bK) {
                var bJ = bH.selected_pts.length;
                while (bJ--) {
                    var bI = bH.segs[bH.selected_pts[bJ]];
                    bI.move(bL, bK)
                }
            };
            this.moveCtrl = function (bK, bJ) {
                var bI = bH.segs[bH.selected_pts[0]];
                bI.moveCtrl(bH.dragctrl, bK, bJ);
                if (bs) {
                    bI.setLinked(bH.dragctrl)
                }
            };
            this.setSegType = function (bP) {
                bH.storeD();
                var bY = bH.selected_pts.length;
                var bU;
                while (bY--) {
                    var bW = bH.selected_pts[bY];
                    var bJ = bH.segs[bW];
                    var bV = bJ.prev;
                    if (!bV) {
                        continue
                    }
                    if (!bP) {
                        bU = "Toggle Path Segment Type";
                        var bT = bJ.type;
                        bP = (bT == 6) ? 4 : 6
                    }
                    bP = bP - 0;
                    var bQ = bJ.item.x;
                    var bO = bJ.item.y;
                    var bL = bV.item.x;
                    var bK = bV.item.y;
                    var bX;
                    switch (bP) {
                        case 6:
                            if (bJ.olditem) {
                                var bI = bJ.olditem;
                                bX = [bQ, bO, bI.x1, bI.y1, bI.x2, bI.y2]
                            } else {
                                var bS = bQ - bL;
                                var bR = bO - bK;
                                var bN = (bL + (bS / 3));
                                var bM = (bK + (bR / 3));
                                var b0 = (bQ - (bS / 3));
                                var bZ = (bO - (bR / 3));
                                bX = [bQ, bO, bN, bM, b0, bZ]
                            }
                            break;
                        case 4:
                            bX = [bQ, bO];
                            bJ.olditem = bJ.item;
                            break
                    }
                    bJ.setType(bP, bX)
                }
                bt.endChanges(bU);
                return
            }
        }
        function bi(bG) {
            var bH = bz[bG.id];
            if (!bH) {
                bH = bz[bG.id] = new bC(bG)
            }
            return bH
        }
        var bx = [], bv = null, bD = [], bs = false, bB = false;
        var bn = function (bJ) {
            var bP = bJ.points;
            var bN = bP.numberOfItems;
            if (bN >= 4) {
                var bH = bP.getItem(0), bL = null;
                var bO = [];
                bO.push(["M", bH.x, ",", bH.y, " C"].join(""));
                for (var bK = 1; bK <= (bN - 4); bK += 3) {
                    var bG = bP.getItem(bK);
                    var bS = bP.getItem(bK + 1);
                    var bI = bP.getItem(bK + 2);
                    if (bL) {
                        var bQ = X(bL, bG, bH);
                        if (bQ && bQ.length == 2) {
                            var bM = bO[bO.length - 1].split(",");
                            bM[2] = bQ[0].x;
                            bM[3] = bQ[0].y;
                            bO[bO.length - 1] = bM.join(",");
                            bG = bQ[1]
                        }
                    }
                    bO.push([bG.x, bG.y, bS.x, bS.y, bI.x, bI.y].join(","));
                    bH = bI;
                    bL = bS
                }
                bO.push("L");
                for (; bK < bN; ++bK) {
                    var bR = bP.getItem(bK);
                    bO.push([bR.x, bR.y].join(","))
                }
                bO = bO.join(" ");
                bJ = c({element: "path", curStyles: true, attr: {id: C(), d: bO, fill: "none"}});
                call("changed", [bJ])
            }
            return bJ
        };
        var bj = function (bP, bO, bQ, bG) {
            var bR = bG || bE().elem;
            var bH = "createSVGPathSeg" + bx[bP];
            var bK = bR[bH].apply(bR, bQ);
            if (a0.pathReplaceItem) {
                bR.pathSegList.replaceItem(bK, bO)
            } else {
                var bI = bR.pathSegList;
                var bN = bI.numberOfItems;
                var bM = [];
                for (var bL = 0; bL < bN; bL++) {
                    var bJ = bI.getItem(bL);
                    bM.push(bJ)
                }
                bI.clear();
                for (var bL = 0; bL < bN; bL++) {
                    if (bL == bO) {
                        bI.appendItem(bK)
                    } else {
                        bI.appendItem(bM[bL])
                    }
                }
            }
        };
        var bF = function () {
            var bR = bt.elem;
            var bW = aq(bR, true);
            if (!bW) {
                return
            }
            u[0] = bt.oldbbox;
            var bM = au(bR), bQ = u[0], bH = bQ.x + bQ.width / 2, bG = bQ.y + bQ.height / 2, b0 = bM.x + bM.width / 2, bY = bM.y + bM.height / 2, bO = b0 - bH, bN = bY - bG, bP = Math.sqrt(bO * bO + bN * bN), bK = Math.atan2(bN, bO) + bW;
            b0 = bP * Math.cos(bK) + bH;
            bY = bP * Math.sin(bK) + bG;
            var bU = function (b1, b2) {
                bO = b1 - bH;
                bN = b2 - bG;
                bP = Math.sqrt(bO * bO + bN * bN);
                bK = Math.atan2(bN, bO) + bW;
                bO = bP * Math.cos(bK) + bH;
                bN = bP * Math.sin(bK) + bG;
                bO -= b0;
                bN -= bY;
                bP = Math.sqrt(bO * bO + bN * bN);
                bK = Math.atan2(bN, bO) - bW;
                return{x: (bP * Math.cos(bK) + b0) / 1, y: (bP * Math.sin(bK) + bY) / 1}
            };
            var bX = bR.pathSegList, bT = bX.numberOfItems;
            while (bT) {
                bT -= 1;
                var bV = bX.getItem(bT), bJ = bV.pathSegType;
                if (bJ == 1) {
                    continue
                }
                var bZ = bU(bV.x, bV.y), bS = [bZ.x, bZ.y];
                if (bV.x1 != null && bV.x2 != null) {
                    c_vals1 = bU(bV.x1, bV.y1);
                    c_vals2 = bU(bV.x2, bV.y2);
                    bS.splice(bS.length, 0, c_vals1.x, c_vals1.y, c_vals2.x, c_vals2.y)
                }
                bj(bJ, bT, bS)
            }
            bM = au(bR);
            u[0].x = bM.x;
            u[0].y = bM.y;
            u[0].width = bM.width;
            u[0].height = bM.height;
            var bI = G.createSVGTransform(), bL = aQ(bR);
            bI.setRotate((bW * 180 / Math.PI), b0, bY);
            bL.replaceItem(bI, 0)
        };
        return{init: function () {
                bx = [0, "ClosePath"];
                var bG = ["Moveto", "Lineto", "CurvetoCubic", "CurvetoQuadratic", "Arc", "LinetoHorizontal", "LinetoVertical", "CurvetoCubicSmooth", "CurvetoQuadraticSmooth"];
                $.each(bG, function (bH, bI) {
                    bx.push(bI + "Abs");
                    bx.push(bI + "Rel")
                })
            }, getPath: function () {
                return bt
            }, mouseDown: function (bO, bI, bN, bM) {
                if (a1 == "path") {
                    return
                }
                if (!bt) {
                    return
                }
                bt.storeD();
                var bG = bO.target.id;
                if (bG.substr(0, 14) == "pathpointgrip_") {
                    var bH = bt.cur_pt = parseInt(bG.substr(14));
                    bt.dragging = [bN, bM];
                    var bL = bt.segs[bH];
                    if (!bO.shiftKey) {
                        if (bt.selected_pts.length <= 1 || !bL.selected) {
                            bt.clearSelection()
                        }
                        bt.addPtsToSelection(bH)
                    } else {
                        if (bL.selected) {
                            bt.removePtFromSelection(bH)
                        } else {
                            bt.addPtsToSelection(bH)
                        }
                    }
                } else {
                    if (bG.indexOf("ctrlpointgrip_") == 0) {
                        bt.dragging = [bN, bM];
                        var bK = bG.split("_")[1].split("c");
                        var bH = bK[0] - 0;
                        var bJ = bK[1] - 0;
                        bt.selectPt(bH, bJ)
                    }
                }
                if (!bt.dragging) {
                    if (j == null) {
                        j = F.getRubberBandBox()
                    }
                    az(j, {x: bN * ac, y: bM * ac, width: 0, height: 0, display: "inline"}, 100)
                }
            }, mouseMove: function (bJ, bG) {
                bB = true;
                if (a1 == "path") {
                    var bI = b("path_stretch_line");
                    if (bI) {
                        bI.setAttribute("x2", bJ);
                        bI.setAttribute("y2", bG)
                    }
                    return
                }
                if (bt.dragging) {
                    var bM = by({x: bt.dragging[0], y: bt.dragging[1]}, bt);
                    var bH = by({x: bJ, y: bG}, bt);
                    var bL = bH.x - bM.x;
                    var bK = bH.y - bM.y;
                    bt.dragging = [bJ, bG];
                    if (bt.dragctrl) {
                        bt.moveCtrl(bL, bK)
                    } else {
                        bt.movePts(bL, bK)
                    }
                } else {
                    bt.selected_pts = [];
                    bt.eachSeg(function (bP) {
                        var bN = this;
                        if (!bN.next && !bN.prev) {
                            return
                        }
                        var bQ = bN.item;
                        var bO = j.getBBox();
                        var bT = bk(bN);
                        var bS = {x: bT.x, y: bT.y, width: 0, height: 0};
                        var bR = aw.rectsIntersect(bO, bS);
                        this.select(bR);
                        if (bR) {
                            bt.selected_pts.push(bN.index)
                        }
                    })
                }
            }, mouseUp: function (bR, bI, bH, bG) {
                if (a1 == "path") {
                    var bO = bH / ac, bN = bG / ac, bJ = b("path_stretch_line");
                    if (!bJ) {
                        bJ = document.createElementNS(aK, "line");
                        az(bJ, {id: "path_stretch_line", stroke: "#22C", "stroke-width": "0.5"});
                        bJ = b("selectorParentGroup").appendChild(bJ)
                    }
                    bJ.setAttribute("display", "inline");
                    var b1 = null;
                    if (bD.length == 0) {
                        bD.push(bO);
                        bD.push(bN);
                        d_attr = "M" + bO + "," + bN + " ";
                        c({element: "path", curStyles: true, attr: {d: d_attr, id: a7(), opacity: aN.opacity / 2, }});
                        az(bJ, {x1: bH, y1: bG, x2: bH, y2: bG});
                        var bL = bg ? bt.segs.length : 0;
                        br(bL, bH, bG)
                    } else {
                        var bX = bD.length;
                        var bK = 6 / ac;
                        var bW = false;
                        while (bX) {
                            bX -= 2;
                            var bS = bD[bX], bQ = bD[bX + 1];
                            if (bO >= (bS - bK) && bO <= (bS + bK) && bN >= (bQ - bK) && bN <= (bQ + bK)) {
                                bW = true;
                                break
                            }
                        }
                        var bU = C();
                        if (bU in bz) {
                            delete bz[bU]
                        }
                        var b0 = b(bU);
                        var bZ = bD.length;
                        if (bW) {
                            if (bX == 0 && bZ >= 6) {
                                var b3 = bD[0];
                                var b2 = bD[1];
                                d_attr += ["L", b3, ",", b2, "z"].join("");
                                b0.setAttribute("d", d_attr)
                            } else {
                                if (bZ < 3) {
                                    b1 = false;
                                    return b1
                                }
                            }
                            $(bJ).remove();
                            bI = b0;
                            bD = [];
                            aG = false;
                            if (bg) {
                                if (bt.matrix) {
                                    D(b0, {}, bt.matrix.inverse())
                                }
                                var b4 = b0.getAttribute("d");
                                var bY = $(bt.elem).attr("d");
                                $(bt.elem).attr("d", bY + b4);
                                $(b0).remove();
                                if (bt.matrix) {
                                    bF()
                                }
                                bt.init();
                                z.toEditMode(bt.elem);
                                bt.selectPt();
                                return false
                            }
                        } else {
                            if (!$.contains(aL, Z(bR))) {
                                console.log("Clicked outside canvas");
                                return false
                            }
                            var bV = bD[bZ - 2], bT = bD[bZ - 1];
                            if (bR.shiftKey) {
                                var bP = aw.snapToAngle(bV, bT, bO, bN);
                                bO = bP.x;
                                bN = bP.y
                            }
                            bD.push(bO);
                            bD.push(bN);
                            d_attr += "L" + Q(bO) + "," + Q(bN) + " ";
                            b0.setAttribute("d", d_attr);
                            bO *= ac;
                            bN *= ac;
                            az(bJ, {x1: bO, y1: bN, x2: bO, y2: bN});
                            var bL = (bD.length / 2 - 1);
                            if (bg) {
                                bL += bt.segs.length
                            }
                            br(bL, bO, bN)
                        }
                        b1 = true
                    }
                    return{keep: b1, element: bI}
                }
                if (bt.dragging) {
                    var bM = bt.cur_pt;
                    bt.dragging = false;
                    bt.dragctrl = false;
                    bt.update();
                    if (bB) {
                        bt.endChanges("Move path point(s)")
                    }
                    if (!bR.shiftKey && !bB) {
                        bt.selectPt(bM)
                    }
                } else {
                    if (j && j.getAttribute("display") != "none") {
                        j.setAttribute("display", "none");
                        if (j.getAttribute("width") <= 2 && j.getAttribute("height") <= 2) {
                            z.toSelectMode(bR.target)
                        }
                    } else {
                        z.toSelectMode(bR.target)
                    }
                }
                bB = false
            }, clearData: function () {
                bz = {}
            }, toEditMode: function (bG) {
                bt = bi(bG);
                a1 = "pathedit";
                aZ();
                bt.show(true).update();
                bt.oldbbox = au(bt.elem);
                bg = false
            }, toSelectMode: function (bG) {
                var bH = (bG == bt.elem);
                a1 = "select";
                bt.show(false);
                bv = false;
                aZ();
                if (bt.matrix) {
                    bF()
                }
                if (bH) {
                    call("selected", [bG]);
                    a5([bG], true)
                }
            }, addSubPath: function (bG) {
                if (bG) {
                    a1 = "path";
                    bg = true
                } else {
                    z.clear(true);
                    z.toEditMode(bt.elem)
                }
            }, select: function (bG) {
                if (bv == bG) {
                    z.toEditMode(bG);
                    a1 = "pathedit"
                } else {
                    bv = bG
                }
            }, reorient: function () {
                var bI = aR[0];
                if (!bI) {
                    return
                }
                var bJ = aq(bI);
                if (bJ == 0) {
                    return
                }
                var bG = new aA("Reorient path");
                var bH = {d: bI.getAttribute("d"), transform: bI.getAttribute("transform")};
                bG.addSubCommand(new av(bI, bH));
                aZ();
                this.resetOrientation(bI);
                aT(bG);
                bi(bI).show(false).matrix = null;
                this.clear();
                a5([bI], true);
                call("changed", aR)
            }, clear: function (bG) {
                bv = null;
                if (a1 == "path" && bD.length > 0) {
                    var bH = b(C());
                    $(b("path_stretch_line")).remove();
                    $(bH).remove();
                    $(b("pathpointgrip_container")).find("*").attr("display", "none");
                    bD = [];
                    aG = false
                } else {
                    if (a1 == "pathedit") {
                        this.toSelectMode()
                    }
                }
                if (bt) {
                    bt.init().show(false)
                }
            }, resetOrientation: function (bO) {
                if (bO == null || bO.nodeName != "path") {
                    return false
                }
                var bK = aQ(bO);
                var bG = s(bK).matrix;
                bK.clear();
                bO.removeAttribute("transform");
                var bH = bO.pathSegList;
                var bL = bH.numberOfItems;
                for (var bJ = 0; bJ < bL; ++bJ) {
                    var bI = bH.getItem(bJ);
                    var bM = bI.pathSegType;
                    if (bM == 1) {
                        continue
                    }
                    var bN = [];
                    $.each(["", 1, 2], function (bQ, bT) {
                        var bP = bI["x" + bT], bS = bI["y" + bT];
                        if (bP && bS) {
                            var bR = P(bP, bS, bG);
                            bN.splice(bN.length, 0, bR.x, bR.y)
                        }
                    });
                    bj(bM, bJ, bN, bO)
                }
            }, zoomChange: function () {
                if (a1 == "pathedit") {
                    bt.update()
                }
            }, getNodePoint: function () {
                var bH = bt.selected_pts.length ? bt.selected_pts[0] : 1;
                var bG = bt.segs[bH];
                return{x: bG.item.x, y: bG.item.y, type: bG.type}
            }, linkControlPoints: function (bG) {
                bs = bG
            }, clonePathNode: function () {
                bt.storeD();
                var bH = bt.selected_pts;
                var bG = bt.segs;
                var bI = bH.length;
                var bK = [];
                while (bI--) {
                    var bJ = bH[bI];
                    bt.addSeg(bJ);
                    bK.push(bJ + bI);
                    bK.push(bJ + bI + 1)
                }
                bt.init().addPtsToSelection(bK);
                bt.endChanges("Clone path node(s)")
            }, opencloseSubPath: function () {
                var bG = bt.selected_pts;
                if (bG.length !== 1) {
                    return
                }
                var bJ = bt.elem;
                var bQ = bJ.pathSegList;
                var bP = bQ.numberOfItems;
                var bO = bG[0];
                var bR = null;
                var bI = null;
                bt.eachSeg(function (bW) {
                    if (this.type === 2 && bW <= bO) {
                        bI = this.item
                    }
                    if (bW <= bO) {
                        return true
                    }
                    if (this.type === 2) {
                        bR = bW;
                        return false
                    } else {
                        if (this.type === 1) {
                            bR = false;
                            return false
                        }
                    }
                });
                if (bR == null) {
                    bR = bt.segs.length - 1
                }
                if (bR !== false) {
                    var bK = bJ.createSVGPathSegLinetoAbs(bI.x, bI.y);
                    var bT = bJ.createSVGPathSegClosePath();
                    if (bR == bt.segs.length - 1) {
                        bQ.appendItem(bK);
                        bQ.appendItem(bT)
                    } else {
                        bq(bJ, bT, bR);
                        bq(bJ, bK, bR)
                    }
                    bt.init().selectPt(bR + 1);
                    return
                }
                var bL = bt.segs[bO];
                if (bL.mate) {
                    bQ.removeItem(bO);
                    bQ.removeItem(bO);
                    bt.init().selectPt(bO - 1);
                    return
                }
                var bH, bV;
                for (var bM = 0; bM < bQ.numberOfItems; bM++) {
                    var bS = bQ.getItem(bM);
                    if (bS.pathSegType === 2) {
                        bH = bM
                    } else {
                        if (bM === bO) {
                            bQ.removeItem(bH)
                        } else {
                            if (bS.pathSegType === 1 && bO < bM) {
                                bV = bM - 1;
                                bQ.removeItem(bM);
                                break
                            }
                        }
                    }
                }
                var bN = (bO - bH) - 1;
                while (bN--) {
                    bq(bJ, bQ.getItem(bH), bV)
                }
                var bU = bQ.getItem(bH);
                bj(2, bH, [bU.x, bU.y]);
                var bM = bO;
                bt.init().selectPt(0)
            }, deletePathNode: function () {
                if (!z.canDeleteNodes) {
                    return
                }
                bt.storeD();
                var bG = bt.selected_pts;
                var bH = bG.length;
                while (bH--) {
                    var bK = bG[bH];
                    bt.deleteSeg(bK)
                }
                var bI = function () {
                    var bN = bt.elem.pathSegList;
                    var bM = bN.numberOfItems;
                    var bL = function (bT, bS) {
                        while (bS--) {
                            bN.removeItem(bT)
                        }
                    };
                    if (bM <= 1) {
                        return true
                    }
                    while (bM--) {
                        var bQ = bN.getItem(bM);
                        if (bQ.pathSegType === 1) {
                            var bP = bN.getItem(bM - 1);
                            var bO = bN.getItem(bM - 2);
                            if (bP.pathSegType === 2) {
                                bL(bM - 1, 2);
                                bI();
                                break
                            } else {
                                if (bO.pathSegType === 2) {
                                    bL(bM - 2, 3);
                                    bI();
                                    break
                                }
                            }
                        } else {
                            if (bQ.pathSegType === 2) {
                                if (bM > 0) {
                                    var bR = bN.getItem(bM - 1).pathSegType;
                                    if (bR === 2) {
                                        bL(bM - 1, 1);
                                        bI();
                                        break
                                    } else {
                                        if (bR === 1 && bN.numberOfItems - 1 === bM) {
                                            bL(bM, 1);
                                            bI();
                                            break
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return false
                };
                bI();
                if (bt.elem.pathSegList.numberOfItems <= 1) {
                    z.toSelectMode(bt.elem);
                    bc.deleteSelectedElements();
                    return
                }
                bt.init();
                bt.clearSelection();
                if (window.opera) {
                    var bJ = $(bt.elem);
                    bJ.attr("d", bJ.attr("d"))
                }
                bt.endChanges("Delete path node(s)")
            }, smoothPolylineIntoPath: bn, setSegType: function (bG) {
                bt.setSegType(bG)
            }, moveNode: function (bG, bK) {
                var bI = bt.selected_pts;
                if (!bI.length) {
                    return
                }
                bt.storeD();
                var bH = bt.segs[bI[0]];
                var bJ = {x: 0, y: 0};
                bJ[bG] = bK - bH.item[bG];
                bH.move(bJ.x, bJ.y);
                bt.endChanges("Move path point")
            }, fixEnd: function (bM) {
                var bI = bM.pathSegList;
                var bH = bI.numberOfItems;
                var bG;
                for (var bJ = 0; bJ < bH; ++bJ) {
                    var bL = bI.getItem(bJ);
                    if (bL.pathSegType === 2) {
                        bG = bL
                    }
                    if (bL.pathSegType === 1) {
                        var bK = bI.getItem(bJ - 1);
                        if (bK.x != bG.x || bK.y != bG.y) {
                            var bN = bM.createSVGPathSegLinetoAbs(bG.x, bG.y);
                            bq(bM, bN, bJ);
                            z.fixEnd(bM);
                            break
                        }
                    }
                }
                if (aC) {
                    bm(bM)
                }
            }, convertPath: function (bP, bO) {
                var bG = bP.pathSegList;
                var bT = bG.numberOfItems;
                var bR = 0, bQ = 0;
                var bX = "";
                var bL = null;
                for (var bS = 0; bS < bT; ++bS) {
                    var bV = bG.getItem(bS);
                    var bN = bV.x || 0, bM = bV.y || 0, bW = bV.x1 || 0, bI = bV.y1 || 0, bU = bV.x2 || 0, bH = bV.y2 || 0;
                    var bJ = bV.pathSegType;
                    var bY = E[bJ]["to" + (bO ? "Lower" : "Upper") + "Case"]();
                    var bK = function (bZ, b0, b1) {
                        var b2 = "";
                        var b0 = b0 ? " " + b0.join(" ") : "";
                        var b1 = b1 ? a3(b1) : "";
                        $.each(bZ, function (b3, b4) {
                            bZ[b3] = a3(b4)
                        });
                        bX += bY + bZ.join(" ") + b0 + b1
                    };
                    switch (bJ) {
                        case 1:
                            bX += "z";
                            break;
                        case 12:
                            bN -= bR;
                        case 13:
                            if (bO) {
                                bR += bN
                            } else {
                                bN += bR;
                                bR = bN
                            }
                            bK([[bN]]);
                            break;
                        case 14:
                            bM -= bQ;
                        case 15:
                            if (bO) {
                                bQ += bM
                            } else {
                                bM += bQ;
                                bQ = bM
                            }
                            bK([[bM]]);
                            break;
                        case 2:
                        case 4:
                        case 18:
                            bN -= bR;
                            bM -= bQ;
                        case 5:
                        case 3:
                            if (bL && bG.getItem(bS - 1).pathSegType === 1 && !bO) {
                                bR = bL[0];
                                bQ = bL[1]
                            }
                        case 19:
                            if (bO) {
                                bR += bN;
                                bQ += bM
                            } else {
                                bN += bR;
                                bM += bQ;
                                bR = bN;
                                bQ = bM
                            }
                            if (bJ === 3) {
                                bL = [bR, bQ]
                            }
                            bK([[bN, bM]]);
                            break;
                        case 6:
                            bN -= bR;
                            bW -= bR;
                            bU -= bR;
                            bM -= bQ;
                            bI -= bQ;
                            bH -= bQ;
                        case 7:
                            if (bO) {
                                bR += bN;
                                bQ += bM
                            } else {
                                bN += bR;
                                bW += bR;
                                bU += bR;
                                bM += bQ;
                                bI += bQ;
                                bH += bQ;
                                bR = bN;
                                bQ = bM
                            }
                            bK([[bW, bI], [bU, bH], [bN, bM]]);
                            break;
                        case 8:
                            bN -= bR;
                            bW -= bR;
                            bM -= bQ;
                            bI -= bQ;
                        case 9:
                            if (bO) {
                                bR += bN;
                                bQ += bM
                            } else {
                                bN += bR;
                                bW += bR;
                                bM += bQ;
                                bI += bQ;
                                bR = bN;
                                bQ = bM
                            }
                            bK([[bW, bI], [bN, bM]]);
                            break;
                        case 10:
                            bN -= bR;
                            bM -= bQ;
                        case 11:
                            if (bO) {
                                bR += bN;
                                bQ += bM
                            } else {
                                bN += bR;
                                bM += bQ;
                                bR = bN;
                                bQ = bM
                            }
                            bK([[bV.r1, bV.r2]], [bV.angle, (bV.largeArcFlag ? 1 : 0), (bV.sweepFlag ? 1 : 0)], [bN, bM]);
                            break;
                        case 16:
                            bN -= bR;
                            bU -= bR;
                            bM -= bQ;
                            bH -= bQ;
                        case 17:
                            if (bO) {
                                bR += bN;
                                bQ += bM
                            } else {
                                bN += bR;
                                bU += bR;
                                bM += bQ;
                                bH += bQ;
                                bR = bN;
                                bQ = bM
                            }
                            bK([[bU, bH], [bN, bM]]);
                            break
                        }
                }
                return bX
            }}
    }();
    z.init();
    var v = this.removeUnusedDefElems = function () {
        var bp = ai.getElementsByTagNameNS(aK, "defs");
        if (!bp || !bp.length) {
            return 0
        }
        var bt = [], br = 0;
        var bu = ["fill", "stroke", "filter", "marker-start", "marker-mid", "marker-end"];
        var bn = bu.length;
        var bv = ai.getElementsByTagNameNS(aK, "*");
        var bi = bv.length;
        for (var bq = 0; bq < bi; bq++) {
            var bk = bv[bq];
            for (var bo = 0; bo < bn; bo++) {
                var bl = ak(bk.getAttribute(bu[bo]));
                if (bl) {
                    bt.push(bl.substr(1))
                }
            }
            var bg = bk.getAttributeNS(aE, "href");
            if (bg && bg.indexOf("#") == 0) {
                bt.push(bg.substr(1))
            }
        }
        var bm = $(ai).find("linearGradient, radialGradient, filter, marker");
        defelem_ids = [], bq = bm.length;
        while (bq--) {
            var bs = bm[bq];
            var bh = bs.id;
            if ($.inArray(bh, bt) == -1) {
                bs.parentNode.removeChild(bs);
                br++
            }
        }
        var bq = bp.length;
        while (bq--) {
            var bj = bp[bq];
            if (!bj.getElementsByTagNameNS(aK, "*").length) {
                bj.parentNode.removeChild(bj)
            }
        }
        return br
    };
    var i = this.svgCanvasToString = function () {
        while (v() > 0) {
        }
        z.clear(true);
        $.each(ai.childNodes, function (bh, bi) {
            if (bh && bi.nodeType == 8 && bi.data.indexOf("Created with") != -1) {
                ai.insertBefore(bi, ai.firstChild)
            }
        });
        var bg = aU(ai, 0);
        return bg
    };
    var aU = this.svgToString = function (bi, bh) {
        var bj = new Array(), bn = aw.toXml;
        if (bi) {
            ar(bi);
            var bu = bi.attributes, bq, bl, bs = bi.childNodes;
            for (var bl = 0; bl < bh; bl++) {
                bj.push(" ")
            }
            bj.push("<");
            bj.push(bi.nodeName);
            if (bi.id == "svgcontent") {
                var br = d();
                bj.push(' width="' + br.w + '" height="' + br.h + '" xmlns="' + aK + '"');
                var bm = {};
                $(bi).find("*").andSelf().each(function () {
                    var bv = this;
                    $.each(this.attributes, function (bx, bw) {
                        var by = bw.namespaceURI;
                        if (by && !bm[by] && am[by] !== "xmlns" && am[by] !== "xml") {
                            bm[by] = true;
                            bj.push(" xmlns:" + am[by] + '="' + by + '"')
                        }
                    })
                });
                var bl = bu.length;
                while (bl--) {
                    bq = bu.item(bl);
                    var bp = bn(bq.nodeValue);
                    if (bq.nodeName.indexOf("xmlns:") === 0) {
                        continue
                    }
                    if (bp != "" && $.inArray(bq.localName, ["width", "height", "xmlns", "x", "y", "viewBox", "id", "overflow"]) == -1) {
                        if (!bq.namespaceURI || am[bq.namespaceURI]) {
                            bj.push(" ");
                            bj.push(bq.nodeName);
                            bj.push('="');
                            bj.push(bp);
                            bj.push('"')
                        }
                    }
                }
            } else {
                for (var bl = bu.length - 1; bl >= 0; bl--) {
                    bq = bu.item(bl);
                    var bp = bn(bq.nodeValue);
                    if ($.inArray(bq.localName, ["-moz-math-font-style", "_moz-math-font-style"]) !== -1) {
                        continue
                    }
                    if (bp != "") {
                        if (bp.indexOf("pointer-events") == 0) {
                            continue
                        }
                        if (bq.localName == "class" && bp.indexOf("se_") == 0) {
                            continue
                        }
                        bj.push(" ");
                        if (bq.localName == "d") {
                            bp = z.convertPath(bi, true)
                        }
                        if (!isNaN(bp)) {
                            bp = a3(bp)
                        }
                        if (ah.apply && bi.nodeName == "image" && bq.localName == "href" && ah.images && ah.images == "embed") {
                            var bk = aX[bp];
                            if (bk) {
                                bp = bk
                            }
                        }
                        if (!bq.namespaceURI || bq.namespaceURI == aK || am[bq.namespaceURI]) {
                            bj.push(bq.nodeName);
                            bj.push('="');
                            bj.push(bp);
                            bj.push('"')
                        }
                    }
                }
            }
            if (bi.hasChildNodes()) {
                bj.push(">");
                bh++;
                var bo = false;
                for (var bl = 0; bl < bs.length; bl++) {
                    var bg = bs.item(bl);
                    switch (bg.nodeType) {
                        case 1:
                            bj.push("\n");
                            bj.push(aU(bs.item(bl), bh));
                            break;
                        case 3:
                            var bt = bg.nodeValue.replace(/^\s+|\s+$/g, "");
                            if (bt != "") {
                                bo = true;
                                bj.push(bn(bt) + "")
                            }
                            break;
                        case 8:
                            bj.push("\n");
                            bj.push(new Array(bh + 1).join(" "));
                            bj.push("<!--");
                            bj.push(bg.data);
                            bj.push("-->");
                            break
                        }
                }
                bh--;
                if (!bo) {
                    bj.push("\n");
                    for (var bl = 0; bl < bh; bl++) {
                        bj.push(" ")
                    }
                }
                bj.push("</");
                bj.push(bi.nodeName);
                bj.push(">")
            } else {
                bj.push("/>")
            }
        }
        return bj.join("")
    };
    this.embedImage = function (bg, bh) {
        $(new Image()).load(function () {
            var bi = document.createElement("canvas");
            bi.width = this.width;
            bi.height = this.height;
            bi.getContext("2d").drawImage(this, 0, 0);
            try {
                var bj = ";svgedit_url=" + encodeURIComponent(bg);
                bj = bi.toDataURL().replace(";base64", bj + ";base64");
                aX[bg] = bj
            } catch (bk) {
                aX[bg] = false
            }
            ad = bg;
            if (bh) {
                bh(aX[bg])
            }
        }).attr("src", bg)
    };
    this.setGoodImage = function (bg) {
        ad = bg
    };
    this.open = function () {
    };
    this.save = function (bg) {
        aZ();
        if (bg) {
            $.extend(ah, bg)
        }
        ah.apply = true;
        var bh = i();
        call("saved", bh)
    };
    this.rasterExport = function () {
        aZ();
        var bh = [];
        var bg = {feGaussianBlur: aB.exportNoBlur, image: aB.exportNoImage, foreignObject: aB.exportNoforeignObject, "[stroke-dasharray]": aB.exportNoDashArray};
        var bi = $(ai);
        if (!("font" in $("<canvas>")[0].getContext("2d"))) {
            bg.text = aB.exportNoText
        }
        $.each(bg, function (bk, bl) {
            if (bi.find(bk).length) {
                bh.push(bl)
            }
        });
        var bj = i();
        call("exported", {svg: bj, issues: bh})
    };
    this.getSvgString = function () {
        ah.apply = false;
        return i()
    };
    this.randomizeIds = function () {
        if (arguments.length > 0 && arguments[0] == false) {
            q = false;
            if (e.Arrows) {
                call("unsetarrownonce")
            }
        } else {
            q = true;
            if (!ai.getAttributeNS(al, "nonce")) {
                ai.setAttributeNS(al, "se:nonce", m);
                if (e.Arrows) {
                    call("setarrownonce", m)
                }
            }
        }
    };
    this.setSvgString = function (bk) {
        try {
            var bn = aw.text2xml(bk);
            M(bn.documentElement);
            var bg = new aA("Change Source");
            var bj = G.removeChild(ai);
            bg.addSubCommand(new R(bj, G));
            ai = G.appendChild(aM.importNode(bn.documentElement, true));
            n = ai.getAttributeNS(al, "nonce");
            if (n) {
                q = true;
                m = n;
                if (e.Arrows) {
                    call("setarrownonce", n)
                }
            } else {
                if (q) {
                    ai.setAttributeNS(bf, "xmlns:se", al);
                    ai.setAttributeNS(al, "se:nonce", m);
                    if (e.Arrows) {
                        call("setarrownonce", m)
                    }
                }
            }
            $(ai).find("image").each(function () {
                var br = this;
                aV(br);
                var bs = this.getAttributeNS(aE, "href");
                if (bs.indexOf("data:") === 0) {
                    var bp = bs.match(/svgedit_url=(.*?);/);
                    if (bp) {
                        var bq = decodeURIComponent(bp[1]);
                        $(new Image()).load(function () {
                            br.setAttributeNS(aE, "xlink:href", bq)
                        }).attr("src", bq)
                    }
                }
                bc.embedImage(bs)
            });
            $(ai).find("linearGradient, radialGradient").each(function () {
                var bs = this;
                if ($(bs).attr("gradientUnits") === "userSpaceOnUse") {
                    var bp = $(ai).find("[fill=url(#" + bs.id + ")],[stroke=url(#" + bs.id + ")]");
                    if (!bp.length) {
                        return
                    }
                    var br = bp[0].getBBox();
                    if (bs.tagName === "linearGradient") {
                        var bq = $(bs).attr(["x1", "y1", "x2", "y2"]);
                        $(bs).attr({x1: (bq.x1 - br.x) / br.width, y1: (bq.y1 - br.y) / br.height, x2: (bq.x2 - br.x) / br.width, y2: (bq.y1 - br.y) / br.height});
                        bs.removeAttribute("gradientUnits")
                    } else {
                    }
                }
            });
            a9(ai, function (bq) {
                try {
                    l(bq)
                } catch (bp) {
                    console.log(bp)
                }
            });
            var bi = $(ai);
            var bo = {id: "svgcontent", overflow: J.show_outside_canvas ? "visible" : "hidden"};
            if (bi.attr("viewBox")) {
                var bl = bi.attr("viewBox").split(" ");
                bo.width = bl[2];
                bo.height = bl[3]
            } else {
                $.each(["width", "height"], function (bp, bq) {
                    var br = bi.attr(bq) || 100;
                    if ((br + "").substr(-1) === "%") {
                        bo[bq] = parseInt(br)
                    } else {
                        bo[bq] = a2(bq, br)
                    }
                })
            }
            bi.attr(bo);
            this.contentW = bo.width;
            this.contentH = bo.height;
            bg.addSubCommand(new a(ai));
            var bm = bi.attr(["width", "height"]);
            bg.addSubCommand(new av(G, bm));
            ac = 1;
            Y();
            T = {};
            aZ();
            z.clearData();
            G.appendChild(F.selectorParentGroup);
            aT(bg);
            call("changed", [ai])
        } catch (bh) {
            console.log(bh);
            return false
        }
        return true
    };
    this.importSvgString = function (bp) {
        try {
            var bz = aw.text2xml(bp);
            M(bz.documentElement);
            var bn = new aA("Change Source");
            var bh = aM.importNode(bz.documentElement, true);
            if (V) {
                var bj = bh.getAttribute("width"), bo = bh.getAttribute("height"), bk = bh.getAttribute("viewBox"), bi = bk ? bk.split(" ") : [0, 0, bj, bo];
                for (var bw = 0; bw < 4; ++bw) {
                    bi[bw] = Number(bi[bw])
                }
                var br = Number(ai.getAttribute("width")), bC = Number(ai.getAttribute("height"));
                if (bo > bj) {
                    var bg = "scale(" + (bC / 3) / bi[3] + ")"
                } else {
                    var bg = "scale(" + (bC / 3) / bi[2] + ")"
                }
                bg = "translate(0) " + bg + " translate(0)";
                var by = aM.createElementNS(aK, "g");
                while (bh.hasChildNodes()) {
                    by.appendChild(bh.firstChild)
                }
                if (bg) {
                    by.setAttribute("transform", bg)
                }
                var bu = {};
                at(by, function (bF) {
                    if (bF.nodeType == 1) {
                        if (bF.id) {
                            if (!(bF.id in bu)) {
                                bu[bF.id] = {elem: null, attrs: [], hrefs: []}
                            }
                            bu[bF.id]["elem"] = bF
                        }
                        $.each(["clip-path", "fill", "filter", "marker-end", "marker-mid", "marker-start", "mask", "stroke"], function (bI, bG) {
                            var bK = bF.getAttributeNode(bG);
                            if (bK) {
                                var bH = ak(bK.value), bJ = bH ? bH.substr(1) : null;
                                if (bJ) {
                                    if (!(bJ in bu)) {
                                        bu[bJ] = {elem: null, attrs: [], hrefs: []}
                                    }
                                    bu[bJ]["attrs"].push(bK)
                                }
                            }
                        });
                        var bD = bF.getAttributeNS(aE, "href");
                        if (bD && $.inArray(bF.nodeName, ["filter", "linearGradient", "pattern", "radialGradient", "textPath", "use"]) != -1) {
                            var bE = bD.substr(1);
                            if (!(bE in bu)) {
                                bu[bE] = {elem: null, attrs: [], hrefs: []}
                            }
                            bu[bE]["hrefs"].push(bF)
                        }
                    }
                });
                for (var bm in bu) {
                    var bB = bu[bm]["elem"];
                    if (bB) {
                        var bl = a7();
                        a4++;
                        bB.id = bl;
                        var bq = bu[bm]["attrs"];
                        var bw = bq.length;
                        while (bw--) {
                            var bt = bq[bw];
                            bt.ownerElement.setAttribute(bt.name, "url(#" + bl + ")")
                        }
                        var bx = bu[bm]["hrefs"];
                        var bv = bx.length;
                        while (bv--) {
                            var bs = bx[bv];
                            bs.setAttributeNS(aE, "xlink:href", "#" + bl)
                        }
                    }
                }
                by.id = a7();
                a4++;
                V.appendChild(by)
            }
            a9(ai, function (bE) {
                try {
                    l(bE)
                } catch (bD) {
                    console.log(bD)
                }
            });
            bn.addSubCommand(new a(ai));
            T = {};
            aZ();
            aT(bn);
            call("changed", [ai])
        } catch (bA) {
            console.log(bA);
            return false
        }
        return true
    };
    var Y = function () {
        aS = [];
        var bo = ai.childNodes.length;
        var bi = [], bp = [];
        for (var bl = 0; bl < bo; ++bl) {
            var bh = ai.childNodes.item(bl);
            if (bh && bh.nodeType == 1) {
                if (bh.tagName == "g") {
                    var bg = $("title", bh).text();
                    if (!bg && k && bh.querySelectorAll) {
                        bg = $(bh.querySelectorAll("title")).text()
                    }
                    if (bg) {
                        bp.push(bg);
                        aS.push([bg, bh]);
                        V = bh;
                        at(bh, function (bq) {
                            bq.setAttribute("style", "pointer-events:inherit")
                        });
                        V.setAttribute("style", "pointer-events:none")
                    } else {
                        bi.push(bh)
                    }
                } else {
                    if (au(bh) && bh.nodeName != "defs") {
                        var bn = au(bh);
                        bi.push(bh)
                    }
                }
            }
        }
        if (bi.length > 0) {
            var bl = 1;
            while ($.inArray(("Layer " + bl), bp) != -1) {
                bl++
            }
            var bj = "Layer " + bl;
            V = aM.createElementNS(aK, "g");
            var bm = aM.createElementNS(aK, "title");
            bm.textContent = bj;
            V.appendChild(bm);
            for (var bk = 0; bk < bi.length; ++bk) {
                V.appendChild(bi[bk])
            }
            V = ai.appendChild(V);
            aS.push([bj, V])
        }
        at(V, function (bq) {
            bq.setAttribute("style", "pointer-events:inherit")
        });
        V.setAttribute("style", "pointer-events:all")
    };
    this.createLayer = function (bi) {
        var bh = new aA("Create Layer");
        var bg = aM.createElementNS(aK, "g");
        var bj = aM.createElementNS(aK, "title");
        bj.textContent = bi;
        bg.appendChild(bj);
        bg = ai.appendChild(bg);
        bh.addSubCommand(new a(bg));
        aT(bh);
        aZ();
        Y();
        bc.setCurrentLayer(bi);
        call("changed", [bg])
    };
    this.deleteCurrentLayer = function () {
        if (V && aS.length > 1) {
            var bg = new aA("Delete Layer");
            var bh = V.parentNode;
            bg.addSubCommand(new R(V, bh));
            bh.removeChild(V);
            aT(bg);
            aZ();
            Y();
            bc.setCurrentLayer(aS[aS.length - 1][0]);
            call("changed", [ai]);
            return true
        }
        return false
    };
    this.getNumLayers = function () {
        return aS.length
    };
    this.getLayer = function (bg) {
        if (bg >= 0 && bg < bc.getNumLayers()) {
            return aS[bg][0]
        }
        return""
    };
    this.getCurrentLayer = function () {
        for (var bg = 0; bg < aS.length; ++bg) {
            if (aS[bg][1] == V) {
                return aS[bg][0]
            }
        }
        return""
    };
    this.setCurrentLayer = function (bg) {
        bg = aw.toXml(bg);
        for (var bh = 0; bh < aS.length; ++bh) {
            if (bg == aS[bh][0]) {
                if (V != aS[bh][1]) {
                    aZ();
                    V.setAttribute("style", "pointer-events:none");
                    V = aS[bh][1];
                    V.setAttribute("style", "pointer-events:all")
                }
                return true
            }
        }
        return false
    };
    this.renameCurrentLayer = function (bk) {
        if (V) {
            var bh = V;
            if (!bc.setCurrentLayer(bk)) {
                var bi = new aA("Rename Layer");
                for (var bj = 0; bj < aS.length; ++bj) {
                    if (aS[bj][1] == bh) {
                        break
                    }
                }
                var bl = aS[bj][0];
                aS[bj][0] = aw.toXml(bk);
                var bg = bh.childNodes.length;
                for (var bj = 0; bj < bg; ++bj) {
                    var bm = bh.childNodes.item(bj);
                    if (bm && bm.tagName == "title") {
                        while (bm.firstChild) {
                            bm.removeChild(bm.firstChild)
                        }
                        bm.textContent = bk;
                        bi.addSubCommand(new av(bm, {"#text": bl}));
                        aT(bi);
                        call("changed", [bh]);
                        return true
                    }
                }
            }
            V = bh
        }
        return false
    };
    this.setCurrentLayerPosition = function (bi) {
        if (V && bi >= 0 && bi < aS.length) {
            for (var bg = 0; bg < aS.length; ++bg) {
                if (aS[bg][1] == V) {
                    break
                }
            }
            if (bg == aS.length) {
                return false
            }
            if (bg != bi) {
                var bj = null;
                var bh = V.nextSibling;
                if (bi > bg) {
                    if (bi < aS.length - 1) {
                        bj = aS[bi + 1][1]
                    }
                } else {
                    bj = aS[bi][1]
                }
                ai.insertBefore(V, bj);
                aT(new S(V, bh, ai));
                Y();
                bc.setCurrentLayer(aS[bi][0]);
                return true
            }
        }
        return false
    };
    this.getLayerVisibility = function (bi) {
        var bh = null;
        for (var bg = 0; bg < aS.length; ++bg) {
            if (aS[bg][0] == bi) {
                bh = aS[bg][1];
                break
            }
        }
        if (!bh) {
            return false
        }
        return(bh.getAttribute("display") != "none")
    };
    this.setLayerVisibility = function (bj, bg) {
        var bi = null;
        for (var bh = 0; bh < aS.length; ++bh) {
            if (aS[bh][0] == bj) {
                bi = aS[bh][1];
                break
            }
        }
        if (!bi) {
            return false
        }
        var bk = bi.getAttribute("display");
        if (!bk) {
            bk = "inline"
        }
        bi.setAttribute("display", bg ? "inline" : "none");
        aT(new av(bi, {display: bk}, "Layer Visibility"));
        if (bi == V) {
            aZ();
            z.clear()
        }
        return true
    };
    this.moveSelectedToLayer = function (bm) {
        var bk = null;
        for (var bj = 0; bj < aS.length; ++bj) {
            if (aS[bj][0] == bm) {
                bk = aS[bj][1];
                break
            }
        }
        if (!bk) {
            return false
        }
        var bi = new aA("Move Elements to Layer");
        var bh = aR;
        var bj = bh.length;
        while (bj--) {
            var bl = bh[bj];
            if (!bl) {
                continue
            }
            var bn = bl.nextSibling;
            var bg = bl.parentNode;
            bk.appendChild(bl);
            bi.addSubCommand(new S(bl, bn, bg))
        }
        aT(bi);
        return true
    };
    this.getLayerOpacity = function (bj) {
        for (var bh = 0; bh < aS.length; ++bh) {
            if (aS[bh][0] == bj) {
                var bi = aS[bh][1];
                var bg = bi.getAttribute("opacity");
                if (!bg) {
                    bg = "1.0"
                }
                return parseFloat(bg)
            }
        }
        return null
    };
    this.setLayerOpacity = function (bj, bg) {
        if (bg < 0 || bg > 1) {
            return
        }
        for (var bh = 0; bh < aS.length; ++bh) {
            if (aS[bh][0] == bj) {
                var bi = aS[bh][1];
                bi.setAttribute("opacity", bg);
                break
            }
        }
    };
    this.clear = function () {
        z.clear();
        var bh = ai.childNodes;
        var bg = ai.childNodes.length;
        var bi = 0;
        aZ();
        for (var bj = 0; bj < bg; bj++) {
            if (bh[bi].nodeType == 1) {
                ai.removeChild(bh[bi])
            } else {
                bi++
            }
        }
        aS = [];
        bc.createLayer("Layer 1");
        aJ();
        F.initGroup();
        j = F.getRubberBandBox();
        call("cleared")
    };
    this.linkControlPoints = z.linkControlPoints;
    this.getContentElem = function () {
        return ai
    };
    this.getRootElem = function () {
        return G
    };
    this.getSelectedElems = function () {
        return aR
    };
    var d = this.getResolution = function () {
        return{w: ai.getAttribute("width") / ac, h: ai.getAttribute("height") / ac, zoom: ac}
    };
    this.getZoom = function () {
        return ac
    };
    this.getVersion = function () {
        return"svgcanvas.js ($Rev: 1738 $)"
    };
    this.setUiStrings = function (bg) {
        $.extend(aB, bg)
    };
    this.setConfig = function (bg) {
        $.extend(J, bg)
    };
    this.getDocumentTitle = function () {
        var bh = ai.childNodes;
        for (var bg = 0; bg < bh.length; bg++) {
            if (bh[bg].nodeName == "title") {
                return bh[bg].textContent
            }
        }
        return""
    };
    this.setDocumentTitle = function (bj) {
        var bk = ai.childNodes, bl = false, bi = "";
        var bg = new aA("Change Image Title");
        for (var bh = 0; bh < bk.length; bh++) {
            if (bk[bh].nodeName == "title") {
                bl = bk[bh];
                bi = bl.textContent;
                break
            }
        }
        if (!bl) {
            bl = aM.createElementNS(aK, "title");
            ai.insertBefore(bl, ai.firstChild)
        }
        if (bj.length) {
            bl.textContent = bj
        } else {
            bl.parentNode.removeChild(bl)
        }
        bg.addSubCommand(new av(bl, {"#text": bi}));
        aT(bg)
    };
    this.getEditorNS = function (bg) {
        if (bg) {
            ai.setAttribute("xmlns:se", al)
        }
        return al
    };
    this.setResolution = function (bn, bm) {
        var bl = d();
        var bo = bl.w, bi = bl.h;
        var bh;
        if (bn == "fit") {
            var bp = ag();
            if (bp) {
                bh = new aA("Fit Canvas to Content");
                var bj = aO();
                a5(bj);
                var br = [], bq = [];
                $.each(bj, function (bs, bt) {
                    br.push(bp.x * -1);
                    bq.push(bp.y * -1)
                });
                var bg = bc.moveSelectedElements(br, bq, true);
                bh.addSubCommand(bg);
                aZ();
                bn = Math.round(bp.width);
                bm = Math.round(bp.height)
            } else {
                return false
            }
        }
        if (bn != bo || bm != bi) {
            var bk = G.suspendRedraw(1000);
            if (!bh) {
                bh = new aA("Change Image Dimensions")
            }
            bn = a2("width", bn);
            bm = a2("height", bm);
            ai.setAttribute("width", bn);
            ai.setAttribute("height", bm);
            this.contentW = bn;
            this.contentH = bm;
            bh.addSubCommand(new av(ai, {width: bo, height: bi}));
            ai.setAttribute("viewBox", [0, 0, bn / ac, bm / ac].join(" "));
            bh.addSubCommand(new av(ai, {viewBox: ["0 0", bo, bi].join(" ")}));
            aT(bh);
            G.unsuspendRedraw(bk);
            call("changed", [ai])
        }
        return true
    };
    this.getOffset = function () {
        return $(ai).attr(["x", "y"])
    };
    this.setBBoxZoom = function (bh, bo, bi) {
        var bn = 0.85;
        var bm;
        var bk = function (bs) {
            if (!bs) {
                return false
            }
            var br = Math.round((bo / bs.width) * 100 * bn) / 100;
            var bp = Math.round((bi / bs.height) * 100 * bn) / 100;
            var bq = Math.min(br, bp);
            bc.setZoom(bq);
            return{zoom: bq, bbox: bs}
        };
        if (typeof bh == "object") {
            bm = bh;
            if (bm.width == 0 || bm.height == 0) {
                var bg = bm.zoom ? bm.zoom : ac * bm.factor;
                bc.setZoom(bg);
                return{zoom: ac, bbox: bm}
            }
            return bk(bm)
        }
        switch (bh) {
            case"selection":
                if (!aR[0]) {
                    return
                }
                var bj = $.map(aR, function (bp) {
                    if (bp) {
                        return bp
                    }
                });
                bm = ag(bj);
                break;
            case"canvas":
                var bl = d();
                bn = 0.95;
                bm = {width: bl.w, height: bl.h, x: 0, y: 0};
                break;
            case"content":
                bm = ag();
                break;
            case"layer":
                bm = ag(aO(V));
                break;
            default:
                return
        }
        return bk(bm)
    };
    this.setZoom = function (bg) {
        var bh = d();
        ai.setAttribute("viewBox", "0 0 " + bh.w / bg + " " + bh.h / bg);
        ac = bg;
        $.each(aR, function (bi, bj) {
            if (!bj) {
                return
            }
            F.requestSelector(bj).resize()
        });
        z.zoomChange();
        aI("zoomChanged", bg)
    };
    this.getMode = function () {
        return a1
    };
    this.setMode = function (bg) {
        z.clear(true);
        L.clear();
        r = (aR[0] && aR[0].nodeName == "text") ? a6 : aN;
        a1 = bg
    };
    this.getColor = function (bg) {
        return r[bg]
    };
    this.setColor = function (bj, bl, bh) {
        aN[bj] = bl;
        r[bj + "_paint"] = {type: "solidColor"};
        var bg = [];
        var bi = aR.length;
        while (bi--) {
            var bk = aR[bi];
            if (bk) {
                if (bk.tagName == "g") {
                    at(bk, function (bm) {
                        if (bm.nodeName != "g") {
                            bg.push(bm)
                        }
                    })
                } else {
                    if (bj == "fill") {
                        if (bk.tagName != "polyline" && bk.tagName != "line") {
                            bg.push(bk)
                        }
                    } else {
                        bg.push(bk)
                    }
                }
            }
        }
        if (bg.length > 0) {
            if (!bh) {
                A(bj, bl, bg);
                call("changed", bg)
            } else {
                o(bj, bl, bg)
            }
        }
    };
    var aD = function () {
        var bg = ai.getElementsByTagNameNS(aK, "defs");
        if (bg.length > 0) {
            bg = bg[0]
        } else {
            bg = ai.insertBefore(aM.createElementNS(aK, "defs"), ai.firstChild.nextSibling)
        }
        return bg
    };
    var ae = this.setGradient = function (bh) {
        if (!r[bh + "_paint"] || r[bh + "_paint"].type == "solidColor") {
            return
        }
        var bk = bc[bh + "Grad"];
        var bj = t(bk);
        var bg = aD();
        if (!bj) {
            var bi = bk;
            bk = bg.appendChild(aM.importNode(bk, true));
            bk.id = a7()
        } else {
            bk = bj
        }
        bc.setColor(bh, "url(#" + bk.id + ")")
    };
    var t = function (bo) {
        var bk = aD();
        var bq = $(bk).find("linearGradient, radialGradient");
        var bl = bq.length;
        var bh = ["r", "cx", "cy", "fx", "fy"];
        while (bl--) {
            var bs = bq[bl];
            if (bo.tagName == "linearGradient") {
                if (bo.getAttribute("x1") != bs.getAttribute("x1") || bo.getAttribute("y1") != bs.getAttribute("y1") || bo.getAttribute("x2") != bs.getAttribute("x2") || bo.getAttribute("y2") != bs.getAttribute("y2")) {
                    continue
                }
            } else {
                var bi = $(bo).attr(bh);
                var bp = $(bs).attr(bh);
                var bn = false;
                $.each(bh, function (bv, bu) {
                    if (bi[bu] != bp[bu]) {
                        bn = true
                    }
                });
                if (bn) {
                    continue
                }
            }
            var br = bo.getElementsByTagNameNS(aK, "stop");
            var bt = bs.getElementsByTagNameNS(aK, "stop");
            if (br.length != bt.length) {
                continue
            }
            var bj = br.length;
            while (bj--) {
                var bm = br[bj];
                var bg = bt[bj];
                if (bm.getAttribute("offset") != bg.getAttribute("offset") || bm.getAttribute("stop-opacity") != bg.getAttribute("stop-opacity") || bm.getAttribute("stop-color") != bg.getAttribute("stop-color")) {
                    break
                }
            }
            if (bj == -1) {
                return bs
            }
        }
        return null
    };
    this.setPaint = function (bg, bi) {
        var bh = new $.jGraduate.Paint(bi);
        this.setPaintOpacity(bg, bh.alpha / 100, true);
        r[bg + "_paint"] = bh;
        switch (bh.type) {
            case"solidColor":
                this.setColor(bg, bh.solidColor != "none" ? "#" + bh.solidColor : "none");
                break;
            case"linearGradient":
            case"radialGradient":
                bc[bg + "Grad"] = bh[bh.type];
                ae(bg);
                break;
            default:
            }
    };
    this.getStrokeWidth = function () {
        return r.stroke_width
    };
    this.setStrokeWidth = function (bj) {
        if (bj == 0 && $.inArray(a1, ["line", "path"]) != -1) {
            bc.setStrokeWidth(1);
            return
        }
        r.stroke_width = bj;
        var bg = [];
        var bh = aR.length;
        while (bh--) {
            var bi = aR[bh];
            if (bi) {
                if (bi.tagName == "g") {
                    at(bi, function (bk) {
                        if (bk.nodeName != "g") {
                            bg.push(bk)
                        }
                    })
                } else {
                    bg.push(bi)
                }
            }
        }
        if (bg.length > 0) {
            A("stroke-width", bj, bg);
            call("changed", aR)
        }
    };
    this.setStrokeAttr = function (bg, bk) {
        aN[bg.replace("-", "_")] = bk;
        var bh = [];
        var bi = aR.length;
        while (bi--) {
            var bj = aR[bi];
            if (bj) {
                if (bj.tagName == "g") {
                    at(bj, function (bl) {
                        if (bl.nodeName != "g") {
                            bh.push(bl)
                        }
                    })
                } else {
                    bh.push(bj)
                }
            }
        }
        if (bh.length > 0) {
            A(bg, bk, bh);
            call("changed", aR)
        }
    };
    this.getOpacity = function () {
        return aN.opacity
    };
    this.setOpacity = function (bg) {
        aN.opacity = bg;
        A("opacity", bg)
    };
    this.getFillOpacity = function () {
        return aN.fill_opacity
    };
    this.getStrokeOpacity = function () {
        return aN.stroke_opacity
    };
    this.setPaintOpacity = function (bh, bi, bg) {
        aN[bh + "_opacity"] = bi;
        if (!bg) {
            A(bh + "-opacity", bi)
        } else {
            o(bh + "-opacity", bi)
        }
    };
    this.getBlur = function (bg) {
        var bj = 0;
        if (bg) {
            var bh = bg.getAttribute("filter");
            if (bh) {
                var bi = b(bg.id + "_blur");
                if (bi) {
                    bj = bi.firstChild.getAttribute("stdDeviation")
                }
            }
        }
        return bj
    };
    (function () {
        var bi = null;
        var bj = null;
        var bg = false;
        bc.setBlurNoUndo = function (bk) {
            if (!bj) {
                bc.setBlur(bk);
                return
            }
            if (bk === 0) {
                o("filter", "");
                bg = true
            } else {
                if (bg) {
                    o("filter", "url(#" + aR[0].id + "_blur)")
                }
                o("stdDeviation", bk, [bj.firstChild]);
                bc.setBlurOffsets(bj, bk)
            }
        };
        function bh() {
            var bk = bc.finishUndoableChange();
            bi.addSubCommand(bk);
            aT(bi);
            bi = null;
            bj = null
        }
        bc.setBlurOffsets = function (bk, bl) {
            if (bl > 3) {
                az(bk, {x: "-50%", y: "-50%", width: "200%", height: "200%", }, 100)
            } else {
                bk.removeAttribute("x");
                bk.removeAttribute("y");
                bk.removeAttribute("width");
                bk.removeAttribute("height")
            }
        };
        bc.setBlur = function (bp, bl) {
            if (bi) {
                bh();
                return
            }
            var bo = aR[0];
            var bk = bo.id;
            bj = b(bk + "_blur");
            bp -= 0;
            var bm = new aA();
            if (bj) {
                if (bp === 0) {
                    bj = null
                }
            } else {
                var bq = c({element: "feGaussianBlur", attr: {"in": "SourceGraphic", stdDeviation: bp}});
                bj = c({element: "filter", attr: {id: bk + "_blur"}});
                bj.appendChild(bq);
                aD().appendChild(bj);
                bm.addSubCommand(new a(bj))
            }
            var bn = {filter: bo.getAttribute("filter")};
            if (bp === 0) {
                bo.removeAttribute("filter");
                bm.addSubCommand(new av(bo, bn));
                return
            } else {
                A("filter", "url(#" + bk + "_blur)");
                bm.addSubCommand(new av(bo, bn));
                bc.setBlurOffsets(bj, bp)
            }
            bi = bm;
            bc.beginUndoableChange("stdDeviation", [bj ? bj.firstChild : null]);
            if (bl) {
                bc.setBlurNoUndo(bp);
                bh()
            }
        }
    }());
    this.getBold = function () {
        var bg = aR[0];
        if (bg != null && bg.tagName == "text" && aR[1] == null) {
            return(bg.getAttribute("font-weight") == "bold")
        }
        return false
    };
    this.setBold = function (bg) {
        var bh = aR[0];
        if (bh != null && bh.tagName == "text" && aR[1] == null) {
            A("font-weight", bg ? "bold" : "normal")
        }
    };
    this.getItalic = function () {
        var bg = aR[0];
        if (bg != null && bg.tagName == "text" && aR[1] == null) {
            return(bg.getAttribute("font-style") == "italic")
        }
        return false
    };
    this.setItalic = function (bg) {
        var bh = aR[0];
        if (bh != null && bh.tagName == "text" && aR[1] == null) {
            A("font-style", bg ? "italic" : "normal")
        }
    };
    this.getFontFamily = function () {
        return a6.font_family
    };
    this.setFontFamily = function (bg) {
        a6.font_family = bg;
        A("font-family", bg)
    };
    this.getFontSize = function () {
        return a6.font_size
    };
    this.setFontSize = function (bg) {
        a6.font_size = bg;
        L.toSelectMode();
        A("font-size", bg)
    };
    this.getText = function () {
        var bg = aR[0];
        if (bg == null) {
            return""
        }
        return bg.textContent
    };
    this.setTextContent = function (bg) {
        A("#text", bg);
        L.init(bg);
        L.setCursor()
    };
    this.setImageURL = function (bl) {
        var bk = aR[0];
        if (!bk) {
            return
        }
        var bi = $(bk).attr(["width", "height"]);
        var bg = (!bi.width || !bi.height);
        var bj = bk.getAttributeNS(aE, "href");
        if (bj !== bl) {
            bg = true
        } else {
            if (!bg) {
                return
            }
        }
        var bh = new aA("Change Image URL");
        bk.setAttributeNS(aE, "xlink:href", bl);
        bh.addSubCommand(new av(bk, {"#href": bj}));
        if (bg) {
            $(new Image()).load(function () {
                var bm = $(bk).attr(["width", "height"]);
                $(bk).attr({width: this.width, height: this.height});
                F.requestSelector(bk).resize();
                bh.addSubCommand(new av(bk, bm));
                aT(bh);
                call("changed", bk)
            }).attr("src", bl)
        } else {
            aT(bh)
        }
    };
    this.setRectRadius = function (bi) {
        var bg = aR[0];
        if (bg != null && bg.tagName == "rect") {
            var bh = bg.getAttribute("rx");
            if (bh != bi) {
                bg.setAttribute("rx", bi);
                bg.setAttribute("ry", bi);
                aT(new av(bg, {rx: bh, ry: bh}, "Radius"));
                call("changed", [bg])
            }
        }
    };
    this.setSegType = function (bg) {
        z.setSegType(bg)
    };
    this.convertToPath = function (bz, bA) {
        if (bz == null) {
            var bF = aR;
            $.each(aR, function (bG, bH) {
                if (bH) {
                    bc.convertToPath(bH)
                }
            });
            return
        }
        if (!bA) {
            var bs = new aA("Convert element to Path")
        }
        var bw = bA ? {} : {fill: aN.fill, "fill-opacity": aN.fill_opacity, stroke: aN.stroke, "stroke-width": aN.stroke_width, "stroke-dasharray": aN.stroke_dasharray, "stroke-linejoin": aN.stroke_linejoin, "stroke-linecap": aN.stroke_linecap, "stroke-opacity": aN.stroke_opacity, opacity: aN.opacity, visibility: "hidden"};
        $.each(["marker-start", "marker-end", "marker-mid", "filter", "clip-path"], function () {
            if (bz.getAttribute(this)) {
                bw[this] = bz.getAttribute(this)
            }
        });
        var bu = c({element: "path", attr: bw});
        var bD = bz.getAttribute("transform");
        if (bD) {
            bu.setAttribute("transform", bD)
        }
        var bv = bz.id;
        var bp = bz.parentNode;
        if (bz.nextSibling) {
            bp.insertBefore(bu, bz)
        } else {
            bp.appendChild(bu)
        }
        var bB = "";
        var bl = function (bG) {
            $.each(bG, function (bJ, bI) {
                var bH = bI[0], bL = bI[1];
                bB += bH;
                for (var bK = 0; bK < bL.length; bK += 2) {
                    bB += (bL[bK] + "," + bL[bK + 1]) + " "
                }
            })
        };
        var bm = 1.81;
        switch (bz.tagName) {
            case"ellipse":
            case"circle":
                var bE = $(bz).attr(["rx", "ry", "cx", "cy"]);
                var bh = bE.cx, bg = bE.cy, bj = bE.rx, bi = bE.ry;
                if (bz.tagName == "circle") {
                    bj = bi = $(bz).attr("r")
                }
                bl([["M", [(bh - bj), (bg)]], ["C", [(bh - bj), (bg - bi / bm), (bh - bj / bm), (bg - bi), (bh), (bg - bi)]], ["C", [(bh + bj / bm), (bg - bi), (bh + bj), (bg - bi / bm), (bh + bj), (bg)]], ["C", [(bh + bj), (bg + bi / bm), (bh + bj / bm), (bg + bi), (bh), (bg + bi)]], ["C", [(bh - bj / bm), (bg + bi), (bh - bj), (bg + bi / bm), (bh - bj), (bg)]], ["Z", []]]);
                break;
            case"path":
                bB = bz.getAttribute("d");
                break;
            case"line":
                var bE = $(bz).attr(["x1", "y1", "x2", "y2"]);
                bB = "M" + bE.x1 + "," + bE.y1 + "L" + bE.x2 + "," + bE.y2;
                break;
            case"polyline":
            case"polygon":
                bB = "M" + bz.getAttribute("points");
                break;
            case"rect":
                var bt = $(bz).attr(["rx", "ry"]);
                var bj = bt.rx, bi = bt.ry;
                var bC = bz.getBBox();
                var bq = bC.x, bo = bC.y, br = bC.width, bx = bC.height;
                var bm = 4 - bm;
                if (!bj && !bi) {
                    bl([["M", [bq, bo]], ["L", [bq + br, bo]], ["L", [bq + br, bo + bx]], ["L", [bq, bo + bx]], ["L", [bq, bo]], ["Z", []]])
                } else {
                    bl([["M", [bq, bo + bi]], ["C", [bq, bo + bi / bm, bq + bj / bm, bo, bq + bj, bo]], ["L", [bq + br - bj, bo]], ["C", [bq + br - bj / bm, bo, bq + br, bo + bi / bm, bq + br, bo + bi]], ["L", [bq + br, bo + bx - bi]], ["C", [bq + br, bo + bx - bi / bm, bq + br - bj / bm, bo + bx, bq + br - bj, bo + bx]], ["L", [bq + bj, bo + bx]], ["C", [bq + bj / bm, bo + bx, bq, bo + bx - bi / bm, bq, bo + bx - bi]], ["L", [bq, bo + bi]], ["Z", []]])
                }
                break;
            default:
                bu.parentNode.removeChild(bu);
                break
        }
        if (bB) {
            bu.setAttribute("d", bB)
        }
        if (!bA) {
            if (bD) {
                var bn = aQ(bu);
                if (aP(bn)) {
                    z.resetOrientation(bu)
                }
            }
            bs.addSubCommand(new R(bz, bp));
            bs.addSubCommand(new a(bu));
            aZ();
            bz.parentNode.removeChild(bz);
            bu.setAttribute("id", bv);
            bu.removeAttribute("visibility");
            a5([bu], true);
            aT(bs)
        } else {
            z.resetOrientation(bu);
            var bk = false;
            try {
                bk = bu.getBBox()
            } catch (by) {
            }
            bu.parentNode.removeChild(bu);
            return bk
        }
    };
    var o = function (br, bp, bz) {
        var bw = G.suspendRedraw(1000);
        if (a1 == "pathedit") {
            z.moveNode(br, bp)
        }
        var bz = bz || aR;
        var bt = bz.length;
        while (bt--) {
            var bv = bz[bt];
            if (bv == null) {
                continue
            }
            if (a1 === "textedit" && br !== "#text") {
                L.toSelectMode(bv)
            }
            if ((br == "x" || br == "y") && $.inArray(bv.tagName, ["g", "polyline", "path"]) != -1) {
                var bg = ag([bv]);
                var bm = br == "x" ? bp - bg.x : 0;
                var bl = br == "y" ? bp - bg.y : 0;
                bc.moveSelectedElements(bm * ac, bl * ac, true);
                continue
            }
            if (bv.tagName == "g" && $.inArray(br, ["transform", "opacity", "filter"]) !== -1) {
            }
            var bk = br == "#text" ? bv.textContent : bv.getAttribute(br);
            if (bk == null) {
                bk = ""
            }
            if (bk != String(bp)) {
                if (br == "#text") {
                    var bs = au(bv).width;
                    bv.textContent = bp;
                    bv = g(bv)
                } else {
                    if (br == "#href") {
                        bv.setAttributeNS(aE, "xlink:href", bp)
                    } else {
                        bv.setAttribute(br, bp)
                    }
                }
                if (bt == 0) {
                    u[bt] = au(bv)
                }
                if (bv.nodeName == "text") {
                    if ((bp + "").indexOf("url") == 0 || $.inArray(br, ["font-size", "font-family", "x", "y"]) != -1) {
                        bv = g(bv)
                    }
                }
                if ($.inArray(bv, aR) != -1) {
                    setTimeout(function () {
                        if (!bv.parentNode) {
                            return
                        }
                        F.requestSelector(bv).resize()
                    }, 0)
                }
                var bu = aq(bv);
                if (bu != 0 && br != "transform") {
                    var bn = aQ(bv);
                    var bq = bn.numberOfItems;
                    while (bq--) {
                        var bi = bn.getItem(bq);
                        if (bi.type == 4) {
                            bn.removeItem(bq);
                            var bo = au(bv);
                            var by = P(bo.x + bo.width / 2, bo.y + bo.height / 2, s(bn).matrix);
                            var bj = by.x, bh = by.y;
                            var bx = G.createSVGTransform();
                            bx.setRotate(bu, bj, bh);
                            bn.insertItemBefore(bx, bq);
                            break
                        }
                    }
                }
            }
        }
        G.unsuspendRedraw(bw)
    };
    var A = this.changeSelectedAttribute = function (bg, bk, bi) {
        var bi = bi || aR;
        bc.beginUndoableChange(bg, bi);
        var bj = bi.length;
        o(bg, bk, bi);
        var bh = bc.finishUndoableChange();
        if (!bh.isEmpty()) {
            aT(bh)
        }
    };
    this.deleteSelectedElements = function () {
        var bi = new aA("Delete Elements");
        var bh = aR.length;
        var bg = [];
        for (var bk = 0; bk < bh; ++bk) {
            var bm = aR[bk];
            if (bm == null) {
                break
            }
            var bl = bm.parentNode;
            var bj = bm;
            F.releaseSelector(bj);
            var bn = bl.removeChild(bj);
            bg.push(bm);
            aR[bk] = null;
            bi.addSubCommand(new R(bn, bl))
        }
        if (!bi.isEmpty()) {
            aT(bi)
        }
        call("changed", bg);
        aZ()
    };
    this.groupSelectedElements = function () {
        var bg = new aA("Group Elements");
        var bk = c({element: "g", attr: {id: a7()}});
        bg.addSubCommand(new a(bk));
        var bi = aR.length;
        while (bi--) {
            var bj = aR[bi];
            if (bj == null) {
                continue
            }
            var bl = bj.nextSibling;
            var bh = bj.parentNode;
            bk.appendChild(bj);
            bg.addSubCommand(new S(bj, bl, bh))
        }
        if (!bg.isEmpty()) {
            aT(bg)
        }
        aZ();
        a5([bk], true)
    };
    this.ungroupSelectedElement = function () {
        var bO = aR[0];
        if (bO.tagName == "g") {
            var bg = new aA("Ungroup Elements");
            var bo = bO.parentNode;
            var bj = bO.previousSibling;
            var bv = new Array(bO.childNodes.length);
            var bI = bO.getAttribute("transform");
            var bp = aQ(bO);
            var bK = s(bp).matrix;
            var bN = 0;
            var bB = aq(bO);
            var bw = $(bO).attr(["filter", "opacity"]);
            var bM, bk;
            while (bO.firstChild) {
                var bJ = bO.firstChild;
                var bC = bJ.nextSibling;
                var bE = bJ.parentNode;
                bv[bN++] = bJ = bo.insertBefore(bJ, bj);
                bg.addSubCommand(new S(bJ, bC, bE));
                if (bw.opacity !== null && bw.opacity !== 1) {
                    var bR = bJ.getAttribute("opacity") || 1;
                    var bl = Math.round((bJ.getAttribute("opacity") || 1) * bw.opacity * 100) / 100;
                    A("opacity", bl, [bJ])
                }
                if (bw.filter) {
                    var bq = this.getBlur(bJ);
                    var bu = bq;
                    if (!bk) {
                        bk = this.getBlur(bO)
                    }
                    if (bq) {
                        bq = (bk - 0) + (bq - 0)
                    } else {
                        if (bq === 0) {
                            bq = bk
                        }
                    }
                    if (!bu) {
                        if (!bM) {
                            bM = b(ak(bw.filter).substr(1))
                        } else {
                            bM = ap(bM);
                            aD().appendChild(bM)
                        }
                    } else {
                        bM = b(ak(bJ.getAttribute("filter")).substr(1))
                    }
                    var bL = (bM.firstChild.tagName === "feGaussianBlur") ? "blur" : "filter";
                    bM.id = bJ.id + "_" + bL;
                    A("filter", "url(#" + bM.id + ")", [bJ]);
                    if (bq) {
                        A("stdDeviation", bq, [bM.firstChild]);
                        bc.setBlurOffsets(bM, bq)
                    }
                }
                var bD = aQ(bJ);
                if (bp.numberOfItems) {
                    if (bB && bp.numberOfItems == 1) {
                        var bh = bp.getItem(0).matrix;
                        var bt = G.createSVGMatrix();
                        var bA = aq(bJ);
                        if (bA) {
                            bt = bD.getItem(0).matrix
                        }
                        var bH = au(bJ);
                        var bP = s(bD).matrix;
                        var bs = P(bH.x + bH.width / 2, bH.y + bH.height / 2, bP);
                        var bF = bB + bA;
                        var br = G.createSVGTransform();
                        br.setRotate(bF, bs.x, bs.y);
                        var bm = af(bh, bt, br.matrix.inverse());
                        if (bA) {
                            bD.removeItem(0)
                        }
                        if (bF) {
                            bD.insertItemBefore(br, 0)
                        }
                        if (bm.e || bm.f) {
                            var bQ = G.createSVGTransform();
                            bQ.setTranslate(bm.e, bm.f);
                            bD.insertItemBefore(bQ, 0)
                        }
                    } else {
                        var bx = bJ.getAttribute("transform");
                        var by = {};
                        by.transform = bx ? bx : "";
                        var bi = G.createSVGTransform();
                        var bz = s(bD).matrix, bG = bz.inverse();
                        var bn = af(bG, bK, bz);
                        bi.setMatrix(bn);
                        bD.appendItem(bi)
                    }
                    bg.addSubCommand(l(bJ))
                }
            }
            if (bI) {
                var by = {};
                by.transform = bI;
                bO.setAttribute("transform", "");
                bO.removeAttribute("transform");
                bg.addSubCommand(new av(bO, by))
            }
            aZ();
            bO = bo.removeChild(bO);
            bg.addSubCommand(new R(bO, bo));
            if (!bg.isEmpty()) {
                aT(bg)
            }
            a5(bv)
        }
    };
    this.moveToTopSelectedElement = function () {
        var bi = aR[0];
        if (bi != null) {
            var bh = bi;
            var bg = bh.parentNode;
            var bj = bh.nextSibling;
            bh = bh.parentNode.appendChild(bh);
            aT(new S(bh, bj, bg, "top"))
        }
    };
    this.moveToBottomSelectedElement = function () {
        var bi = aR[0];
        if (bi != null) {
            var bh = bi;
            var bg = bh.parentNode;
            var bk = bh.nextSibling;
            var bj = bh.parentNode.firstChild;
            if (bj.tagName == "title") {
                bj = bj.nextSibling
            }
            if (bj.tagName == "defs") {
                bj = bj.nextSibling
            }
            bh = bh.parentNode.insertBefore(bh, bj);
            aT(new S(bh, bk, bg, "bottom"))
        }
    };
    this.moveSelectedElements = function (bo, bn, bl) {
        if (bo.constructor != Array) {
            bo /= ac;
            bn /= ac
        }
        var bl = bl || true;
        var bh = new aA("position");
        var bj = aR.length;
        while (bj--) {
            var bi = aR[bj];
            if (bi != null) {
                if (bj == 0) {
                    u[bj] = au(bi)
                }
                var bm = G.createSVGTransform();
                var bk = aQ(bi);
                if (bo.constructor == Array) {
                    if (bj == 0) {
                        u[bj].x += bo[bj];
                        u[bj].y += bn[bj]
                    }
                    bm.setTranslate(bo[bj], bn[bj])
                } else {
                    if (bj == 0) {
                        u[bj].x += bo;
                        u[bj].y += bn
                    }
                    bm.setTranslate(bo, bn)
                }
                bk.insertItemBefore(bm, 0);
                var bg = l(bi);
                if (bg) {
                    bh.addSubCommand(bg)
                }
                F.requestSelector(bi).resize()
            }
        }
        if (!bh.isEmpty()) {
            if (bl) {
                aT(bh)
            }
            call("changed", aR);
            return bh
        }
    };
    this.cloneSelectedElements = function () {
        var bh = new aA("Clone Elements");
        var bg = aR.length;
        for (var bi = 0; bi < bg; ++bi) {
            var bk = aR[bi];
            if (bk == null) {
                break
            }
        }
        var bj = aR.slice(0, bi);
        this.clearSelection();
        var bi = bj.length;
        while (bi--) {
            var bk = bj[bi] = ap(bj[bi]);
            V.appendChild(bk);
            bh.addSubCommand(new a(bk))
        }
        if (!bh.isEmpty()) {
            a5(bj.reverse());
            this.moveSelectedElements(20, 20, false);
            aT(bh);
            call("selected", aR)
        }
    };
    this.alignSelectedElements = function (bo, bu) {
        var bj = [], bm = [];
        var bs = Number.MAX_VALUE, bn = Number.MIN_VALUE, bq = Number.MAX_VALUE, bl = Number.MIN_VALUE;
        var bp = Number.MIN_VALUE, bk = Number.MIN_VALUE;
        var bi = aR.length;
        if (!bi) {
            return
        }
        for (var bh = 0; bh < bi; ++bh) {
            if (aR[bh] == null) {
                break
            }
            var bg = aR[bh];
            bj[bh] = ag([bg]);
            switch (bu) {
                case"smallest":
                    if ((bo == "l" || bo == "c" || bo == "r") && (bp == Number.MIN_VALUE || bp > bj[bh].width) || (bo == "t" || bo == "m" || bo == "b") && (bk == Number.MIN_VALUE || bk > bj[bh].height)) {
                        bs = bj[bh].x;
                        bq = bj[bh].y;
                        bn = bj[bh].x + bj[bh].width;
                        bl = bj[bh].y + bj[bh].height;
                        bp = bj[bh].width;
                        bk = bj[bh].height
                    }
                    break;
                case"largest":
                    if ((bo == "l" || bo == "c" || bo == "r") && (bp == Number.MIN_VALUE || bp < bj[bh].width) || (bo == "t" || bo == "m" || bo == "b") && (bk == Number.MIN_VALUE || bk < bj[bh].height)) {
                        bs = bj[bh].x;
                        bq = bj[bh].y;
                        bn = bj[bh].x + bj[bh].width;
                        bl = bj[bh].y + bj[bh].height;
                        bp = bj[bh].width;
                        bk = bj[bh].height
                    }
                    break;
                default:
                    if (bj[bh].x < bs) {
                        bs = bj[bh].x
                    }
                    if (bj[bh].y < bq) {
                        bq = bj[bh].y
                    }
                    if (bj[bh].x + bj[bh].width > bn) {
                        bn = bj[bh].x + bj[bh].width
                    }
                    if (bj[bh].y + bj[bh].height > bl) {
                        bl = bj[bh].y + bj[bh].height
                    }
                    break
                }
        }
        if (bu == "page") {
            bs = 0;
            bq = 0;
            bn = bc.contentW;
            bl = bc.contentH
        }
        var bv = new Array(bi);
        var bt = new Array(bi);
        for (var bh = 0; bh < bi; ++bh) {
            if (aR[bh] == null) {
                break
            }
            var bg = aR[bh];
            var br = bj[bh];
            bv[bh] = 0;
            bt[bh] = 0;
            switch (bo) {
                case"l":
                    bv[bh] = bs - br.x;
                    break;
                case"c":
                    bv[bh] = (bs + bn) / 2 - (br.x + br.width / 2);
                    break;
                case"r":
                    bv[bh] = bn - (br.x + br.width);
                    break;
                case"t":
                    bt[bh] = bq - br.y;
                    break;
                case"m":
                    bt[bh] = (bq + bl) / 2 - (br.y + br.height / 2);
                    break;
                case"b":
                    bt[bh] = bl - (br.y + br.height);
                    break
                }
        }
        this.moveSelectedElements(bv, bt)
    };
    this.contentW = d().w;
    this.contentH = d().h;
    this.updateCanvas = function (bj, bl) {
        G.setAttribute("width", bj);
        G.setAttribute("height", bl);
        var bk = $("#canvasBackground")[0];
        var bi = ai.getAttribute("x");
        var bn = ai.getAttribute("y");
        var bh = (bj / 2 - this.contentW * ac / 2);
        var bm = (bl / 2 - this.contentH * ac / 2);
        az(ai, {width: this.contentW * ac, height: this.contentH * ac, x: bh, y: bm, viewBox: "0 0 " + this.contentW + " " + this.contentH});
        az(bk, {width: ai.getAttribute("width"), height: ai.getAttribute("height"), x: bh, y: bm});
        F.selectorParentGroup.setAttribute("transform", "translate(" + bh + "," + bm + ")");
        return{x: bh, y: bm, old_x: bi, old_y: bn, d_x: bh - bi, d_y: bm - bn}
    };
    this.setBackground = function (bh, bj) {
        var bk = b("canvasBackground");
        var bi = $(bk).find("rect")[0];
        var bl = b("background_image");
        bi.setAttribute("fill", bh);
        if (bj) {
            if (!bl) {
                bl = aM.createElementNS(aK, "image");
                az(bl, {id: "background_image", width: "100%", height: "100%", preserveAspectRatio: "xMinYMin", style: "pointer-events:none"})
            }
            bl.setAttributeNS(aE, "xlink:href", bj);
            bk.appendChild(bl)
        } else {
            if (bl) {
                bl.parentNode.removeChild(bl)
            }
        }
    };
    this.cycleElement = function (bi) {
        var bl = aR[0];
        var bj = false;
        var bk = aO(V);
        if (bl == null) {
            var bg = bi ? bk.length - 1 : 0;
            bj = bk[bg]
        } else {
            var bh = bk.length;
            while (bh--) {
                if (bk[bh] == bl) {
                    var bg = bi ? bh - 1 : bh + 1;
                    if (bg >= bk.length) {
                        bg = 0
                    } else {
                        if (bg < 0) {
                            bg = bk.length - 1
                        }
                    }
                    bj = bk[bg];
                    break
                }
            }
        }
        aZ();
        a5([bj], true);
        call("selected", aR)
    };
    this.clear();
    this.getPrivateMethods = function () {
        var bg = {addCommandToHistory: aT, setGradient: ae, addSvgElementFromJson: c, assignAttributes: az, BatchCommand: aA, call: call, ChangeElementCommand: av, cleanupElement: ar, copyElem: ap, ffClone: g, findDefs: aD, findDuplicateGradient: t, getElem: b, getId: C, getIntersectionList: aW, getMouseTarget: Z, getNextId: a7, getPathBBox: bb, getUrlFromAttr: ak, hasMatrixTransform: aP, identifyLayers: Y, InsertElementCommand: a, isIdentity: a8, logMatrix: ax, matrixMultiply: af, MoveElementCommand: S, preventClickDefault: aV, recalculateAllSelectedDimensions: aY, recalculateDimensions: l, remapElement: D, RemoveElementCommand: R, removeUnusedDefElems: v, round: Q, runExtensions: aI, sanitizeSvg: M, SelectorManager: bd, shortFloat: a3, svgCanvasToString: i, SVGEditTransformList: H, svgToString: aU, toString: toString, transformBox: be, transformListToTransform: s, transformPoint: P, walkTree: at};
        return bg
    };
    (function () {
        var bl = document.createElementNS(aK, "path");
        bl.setAttribute("d", "M0,0 10,10");
        var bh = bl.pathSegList;
        var bg = bl.createSVGPathSegLinetoAbs(5, 5);
        try {
            bh.replaceItem(bg, 0);
            a0.pathReplaceItem = true
        } catch (bk) {
            a0.pathReplaceItem = false
        }
        try {
            bh.insertItemBefore(bg, 0);
            a0.pathInsertItemBefore = true
        } catch (bk) {
            a0.pathInsertItemBefore = false
        }
        a0.editableText = k;
        var bj = document.createElementNS(aK, "rect");
        bj.setAttribute("x", 0.1);
        var bi = bj.cloneNode(false);
        a0.goodDecimals = (bi.getAttribute("x").indexOf(",") == -1);
        if (!a0.goodDecimals) {
            $.alert("NOTE: This version of Opera is known to contain bugs in SVG-edit.\n		Please upgrade to the <a href='http://opera.com'>latest version</a> in which the problems have been fixed.")
        }
        var bj = document.createElementNS(aK, "rect");
        bj.setAttribute("width", "1em");
        bj.setAttribute("height", "1ex");
        ai.appendChild(bj);
        var bm = bj.getBBox();
        I.em = bm.width;
        I.ex = bm.height;
        ai.removeChild(bj)
    }())
};
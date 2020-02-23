/********************************************
   CS 331 - A3

   Your name(s):  Jacob Hein

                  Dan Kuphal

 ********************************************/

var fp = require('./fp');
if ( ! exports ) {
   var exports = [ ];
}

var removeLast = function (ns) {

    if (fp.isNull(fp.tl(ns)))
        return [];
    else {
        return fp.cons(fp.hd(ns), removeLast(fp.tl(ns)));
    }

};

var middle = function (ns) {

    if (fp.isNull(fp.tl(ns)))
        return fp.hd(ns);
    else if (fp.isNull(removeLast(fp.tl(ns)))) {
        return fp.hd(ns);
    }
    else {
        return middle(removeLast(fp.tl(ns)));
    }

};

var closest = function (ns, n) {

    /* to be completed */

};

var splitList = function (ns) {

    /* to be completed */

};

var addDigits = function (n) {

    /* to be completed */

};

var persistence = function (n) {

    /* to be completed */

};

exports.removeLast = removeLast;
exports.middle = middle;
exports.closest = closest;
exports.splitList = splitList;
exports.addDigits = addDigits;
exports.persistence = persistence;

/*************************************
   CS 331 - A4

   your name(s): Jacob Hein
                 Dan Kuphal

 *************************************/

var fp = require('./fp');
if ( ! exports ) {
   var exports = [ ];
}

var prune = function (ns) {

    if (fp.isNull(ns)) {
        return ns;
    } else if (fp.isNull(fp.tl(ns))) {
        return [];
    } else if (fp.isList(fp.hd(ns))) {
        return fp.cons(prune(fp.hd(ns)), prune(fp.tl(ns)));
    } else {
        return fp.cons(fp.hd(ns), prune(fp.tl(ns)));
    }

};

var hasMoreEvensHelper = function (ns, a) {

    if (fp.isNull(ns)) {
        return a;
    } else if (fp.isList(fp.hd(ns))) {
        return fp.add(hasMoreEvensHelper(fp.hd(ns), a), hasMoreEvensHelper(fp.tl(ns), a));
    } else if (fp.isEq(fp.rem(fp.hd(ns), 2), 0)) {
        return hasMoreEvensHelper(fp.tl(ns), fp.add(a, 1));
    } else {
        return hasMoreEvensHelper(fp.tl(ns), fp.add(a, -1));
    }

};

var hasMoreEvens = function (ns) {

    return fp.isGT(hasMoreEvensHelper(ns, 0), 0);

};

var max = function (ns) {

    return fp.reduce(fp.max, ns, fp.hd(ns));

};

var countEvens = function (ns) {

    return fp.reduce(function(x,y) {return fp.add(fp.rem(fp.add(1, y),2),x);}, ns, 0);

};

var getHeaviest = function (ns) {

    return fp.reduce(function(x,y) {
        if(fp.isNumber(y)){
            return fp.max(y, x);
        } else {
            return fp.max(fp.reduce(fp.add, y, 0), x);
        }
    },  ns, 0);

};

exports.hasMoreEvens = hasMoreEvens;
exports.prune = prune;
exports.countEvens = countEvens;
exports.max = max;
exports.getHeaviest = getHeaviest;

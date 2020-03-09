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
    } else { //hd of tl is not a list
        return fp.cons(fp.hd(ns), prune(fp.tl(ns)));
    }

};

var hasMoreEvensHelper = function (ns, a) {

    if (fp.isNull(ns)) { //ns is empty
        return a;
    } else if (fp.isList(fp.hd(ns))) { //head of ns is a list (add acc of head to acc of tail)
        return fp.add(hasMoreEvensHelper(fp.hd(ns), a), hasMoreEvensHelper(fp.tl(ns), a));
    } else if (fp.isEq(fp.rem(fp.hd(ns), 2), 0)) { //head isn't a list, determine polarity and add to acc
        return hasMoreEvensHelper(fp.tl(ns), fp.add(a, 1));
    } else {
        return hasMoreEvensHelper(fp.tl(ns), fp.add(a, -1));
    }

};

var hasMoreEvens = function (ns) {

    return fp.isGT(hasMoreEvensHelper(ns, 0), 0);

};

var max = function (ns) {

    return fp.reduce(fp.max, ns, fp.hd(ns)); //that was easy...

};

var countEvens = function (ns) {

    //return fp.reduce(fp.add, fp.reduceRight(fp.rem, ns, 2), 0);

};

var getHeaviest = function (ns) {

    /* to be completed */

};

exports.hasMoreEvens = hasMoreEvens;
exports.prune = prune;
exports.countEvens = countEvens;
exports.max = max;
exports.getHeaviest = getHeaviest;

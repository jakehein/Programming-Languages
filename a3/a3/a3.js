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

    if (fp.isNull(fp.tl(ns)))
        return fp.hd(ns);
    else if (fp.isEq(fp.hd(ns), n)) { // head isEQ n
        return fp.hd(ns);
    }
    else {
        if (fp.isLT(fp.hd(ns), n)) { // is first element < n
            if (fp.isLT(fp.hd(fp.tl(ns), n))) { // both < n
                if (fp.isLT(fp.sub(n, fp.hd(ns)), fp.sub(n, fp.hd(fp.tl(ns)))) { // first element is closer to n
                    return closest(fp.cons(fp.hd(ns), fp.tl(fp.tl(ns))), n); // makes list with head - 2nd element + rest.
                } else { // second element is closer to n
                    return closest(fp.tl(ns), n));
                }
            } else { //fp.isGT(fp.hd(fp.tl(ns), n))  // hd < n , hd.tl > n
                if (fp.isLT(fp.sub(n, fp.hd(ns)), fp.sub(fp.hd(fp.tl(ns)), n))) { // first element is closer to n
                    return closest(fp.cons(fp.hd(ns), fp.tl(fp.tl(ns))), n); // makes list with head - 2nd element + rest.
                } else { // second element is closer to n
                    return closest(fp.tl(ns), n)); // makes list with head - 2nd element + rest.
                }
            }
        } else { // is first element > n
            if (fp.isLT(fp.hd(fp.tl(ns), n))){ // hd > n , hd.tl < n
                if (fp.isLT(fp.sub(fp.hd(ns), n), fp.sub(n, fp.hd(fp.tl(ns)))) { // first element is closer to n
                    return closest(fp.cons(fp.hd(ns), fp.tl(fp.tl(ns))), n); // makes list with head - 2nd element + rest.
                } else { // second element is close to n
                    return closest(fp.tl(ns), n)); // makes list with head - 2nd element + rest.
                }
            } else { //fp.isGT(fp.hd(fp.tl(ns), n)) // both > n
                if (fp.isLT(fp.sub(fp.hd(ns), n), fp.sub(fp.hd(fp.tl(ns)), n)) { // first element is closer to n
                    return closest(fp.cons(fp.hd(ns), fp.tl(fp.tl(ns))), n); // makes list with head - 2nd element + rest.
                } else { // second element is close to n
                    return closest(fp.tl(ns), n)); // makes list with head - 2nd element + rest.
                }
            }
        }
    }
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

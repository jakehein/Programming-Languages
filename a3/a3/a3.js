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
            if (fp.isLT(fp.hd(fp.tl(ns)), n)) { // both < n
                if (fp.isLT(fp.sub(n, fp.hd(ns)), fp.sub(n, fp.hd(fp.tl(ns))))) { // first element is closer to n
                    return closest(fp.cons(fp.hd(ns), fp.tl(fp.tl(ns))), n); // makes list with head - 2nd element + rest.
                } else { // second element is closer to n
                    return closest(fp.tl(ns), n);
                }
            } else { //fp.isGT(fp.hd(fp.tl(ns), n))  // hd < n , hd.tl > n
                if (fp.isLT(fp.sub(n, fp.hd(ns)), fp.sub(fp.hd(fp.tl(ns)), n))) { // first element is closer to n
                    return closest(fp.cons(fp.hd(ns), fp.tl(fp.tl(ns))), n); // makes list with head - 2nd element + rest.
                } else { // second element is closer to n
                    return closest(fp.tl(ns), n); // makes list with head - 2nd element + rest.
                }
            }
        } else { // is first element > n
            if (fp.isLT(fp.hd(fp.tl(ns)), n)) { // hd > n , hd.tl < n
                if (fp.isLT(fp.sub(fp.hd(ns), n), fp.sub(n, fp.hd(fp.tl(ns))))) { // first element is closer to n
                    return closest(fp.cons(fp.hd(ns), fp.tl(fp.tl(ns))), n); // makes list with head - 2nd element + rest.
                } else { // second element is close to n
                    return closest(fp.tl(ns), n); // makes list with head - 2nd element + rest.
                }
            } else { //fp.isGT(fp.hd(fp.tl(ns), n)) // both > n
                if (fp.isLT(fp.sub(fp.hd(ns), n), fp.sub(fp.hd(fp.tl(ns)), n))) { // first element is closer to n
                    return closest(fp.cons(fp.hd(ns), fp.tl(fp.tl(ns))), n); // makes list with head - 2nd element + rest.
                } else { // second element is close to n
                    return closest(fp.tl(ns), n); // makes list with head - 2nd element + rest.
                }
            }
        }
    }

};

var splitList = function (ns) {

    if (fp.isNull(ns)) {
        return fp.makeList(ns);
    }
    else if (fp.isNull(fp.tl(ns))) {
        return fp.cons(ns, []);
    }
    else if (fp.isGT(fp.hd(ns), fp.hd(fp.tl(ns)))) {
        return fp.cons(fp.cons(fp.hd(ns), []), splitList(fp.tl(ns)));
    }
    else {
         return fp.cons(fp.cons(fp.hd(ns), fp.hd(splitList(fp.tl(ns)))), fp.tl(splitList(fp.tl(ns))));
    }

};

var addDigits = function (n) {

    if (fp.isLT(n, 10)){
        return n;
    } else {
        return fp.add(fp.rem(n,10), addDigits(fp.div(n, 10)));
    }

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

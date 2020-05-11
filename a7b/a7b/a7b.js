/*************************************************************
 * CS 331 - Assignment A7b
 * Student name(s) : Jacob Hein
 *                   Dan Kuphal
 *************************************************************/

var is = require('./is');

module.exports = { };

"use strict";

(function (exports) {

    // Do NOT modify this file above this point

    ///////////////////////////////////////////////////////////////////////////
    //                              Problem 1
    ///////////////////////////////////////////////////////////////////////////
    var makeSqrtSeq = function (num, guess) {
        return is.iterates(function(guess) {return (guess + num / guess) / 2; },
        guess);
};

    ///////////////////////////////////////////////////////////////////////////
    //                              Problem 2
    ///////////////////////////////////////////////////////////////////////////

    var sqrt = function (seq, eps) {
        if ((is.hd(is.tl(seq)) - is.hd(seq)) < 0)
            if ((is.hd(is.tl(seq)) - is.hd(seq)) * -1 < eps) {
                return is.hd(is.tl(seq));
            } else {
                return sqrt(is.tl(seq), eps);
        } else {
            if ((is.hd(is.tl(seq)) - is.hd(seq)) < eps) {
                return is.hd(is.tl(seq));
            } else {
                return sqrt(is.tl(seq), eps);
            }
        }
    };

    ///////////////////////////////////////////////////////////////////////////
    //                              Problem 3
    ///////////////////////////////////////////////////////////////////////////

    var cumulate = function (seq) {
        return is.cons(is.hd(seq), function() {
            return cumulate(is.cons(is.hd(seq) + is.hd(is.tl(seq)),
            function() { return is.tl(is.tl(seq));}));
        });
        };

    // Do NOT modify this file below this point

    exports.makeSqrtSeq = makeSqrtSeq;
    exports.sqrt = sqrt;
    exports.cumulate = cumulate;

}) (module.exports);

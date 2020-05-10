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
    //  x1 = (x0 + S / x0) / 2
    var makeSqrtSeq = function (num, guess) {
        return function (num, guess) {
            return ((guess + (num / guess)) / 2);
        };
        //return 1;
    }; // To be modified

    ///////////////////////////////////////////////////////////////////////////
    //                              Problem 2
    ///////////////////////////////////////////////////////////////////////////

    var sqrt = function () { return 1; }; // To be modified

    ///////////////////////////////////////////////////////////////////////////
    //                              Problem 3
    ///////////////////////////////////////////////////////////////////////////

    var cumulate = function () { return 1; }; // To be modified

    // Do NOT modify this file below this point

    exports.makeSqrtSeq = makeSqrtSeq;
    exports.sqrt = sqrt;
    exports.cumulate = cumulate;

}) (module.exports);

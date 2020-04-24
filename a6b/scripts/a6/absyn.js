/* global SLang : true */

(function() {

    "use strict";

    var exports = {};

    function createProgram(e) {
        return ["Program", e];
    }

    function isProgram(e) {
        return e[0] === "Program";
    }

    function getProgramExp(e) {
        if (isProgram(e)) {
            return e[1];
        } else {
            throw new Error("Interpreter error: " +
                "The argument of getProgramExp is not a program.");
        }
    }

    function createIfExp(first, second, then, el) {
        return ["IfExp", first, second, then, el];
    }

    function isIfExp(e) {
        return e[0] === "IfExp";
    }

    function getIfExp(e) {
        if (isIfExp(e)) {
            return [e[1], e[2], e[3], e[4]];
        } else {
            throw new Error("Interpreter error: " +
                "The argument of getIfExp is not an IfExp.");
        }
    }

    function createVarExp(v) {
        return ["VarExp", v];
    }

    function isVarExp(e) {
        return e[0] === "VarExp";
    }

    function getVarExpId(e) {
        if (isVarExp(e)) {
            return e[1];
        } else {
            throw new Error("Interpreter error: " +
                "The argument of getVarExpId is not a VarExp.");
        }
    }

    function createIntExp(n) {
        return ["IntExp", parseInt(n)];
    }

    function isIntExp(e) {
        return e[0] === "IntExp";
    }

    function getIntExpValue(e) {
        if (isIntExp(e)) {
            return e[1];
        } else {
            throw new Error("Interpreter error: " +
                "The argument of getIntExpValue is not an IntExp.");
        }
    }

    function createStringExp(n) {
        return ["StringExp", n.slice(1, n.length - 1)];
    }

    function isStringExp(e) {
        return e[0] === "StringExp";
    }

    function getStringExpValue(e) {
        if (isStringExp(e)) {
            return e[1];
        } else {
            throw new Error("Interpreter error: " +
                "The argument of getStringExpValue is not an StringExp.");
        }
    }

    function createFnExp(params, body) {
        return ["FnExp", params, body];
    }

    function isFnExp(e) {
        return e[0] === "FnExp";
    }

    function getFnExpParams(e) {
        if (isFnExp(e)) {
            return e[1];
        } else {
            throw new Error("Interpreter error: " +
                "The argument of getFnExpParams is not an FnExp.");
        }
    }

    function getFnExpBody(e) {
        if (isFnExp(e)) {
            return e[2];
        } else {
            throw new Error("Interpreter error: " +
                "The argument of getFnExpBody is not an FnExp.");
        }
    }

    function createAppExp(fn, args) {
        return ["AppExp", fn, args];
    }

    function isAppExp(e) {
        return e[0] === "AppExp";
    }

    function getAppExpFn(e) {
        if (isAppExp(e)) {
            return e[1];
        } else {
            throw new Error("Interpreter error: " +
                "The argument of getAppExpFn is not an AppExp.");
        }
    }

    function getAppExpArgs(e) {
        if (isAppExp(e)) {
            return e[2].slice(1); // eliminate the first element (i.e., "args")
        } else {
            throw new Error("Interpreter error: " +
                "The argument of getAppExpArgs is not an AppExp.");
        }
    }

    function createPrimAppExp(prim, args) {
        return ["PrimAppExp", prim, args];
    }

    function isPrimAppExp(e) {
        return e[0] === "PrimAppExp";
    }

    function getPrimAppExpPrim(e) {
        if (isPrimAppExp(e)) {
            return e[1];
        } else {
            throw new Error("Interpreter error: " +
                "The argument of getPrimAppExpPrim is not a PrimAppExp.");
        }
    }

    function getPrimAppExpArgs(e) {
        if (isPrimAppExp(e)) {
            return e[2];
        } else {
            throw new Error("Interpreter error: " +
                "The argument of getPrimAppExpArgs is not a PrimAppExp.");
        }
    }

    exports.createIfExp = createIfExp;
    exports.isIfExp = isIfExp;
    exports.getIfExp = getIfExp;
    exports.createProgram = createProgram;
    exports.isProgram = isProgram;
    exports.getProgramExp = getProgramExp;
    exports.createVarExp = createVarExp;
    exports.isVarExp = isVarExp;
    exports.getVarExpId = getVarExpId;
    exports.createIntExp = createIntExp;
    exports.isIntExp = isIntExp;
    exports.getIntExpValue = getIntExpValue;
    exports.createFnExp = createFnExp;
    exports.isFnExp = isFnExp;
    exports.getFnExpParams = getFnExpParams;
    exports.getFnExpBody = getFnExpBody;
    exports.createAppExp = createAppExp;
    exports.isAppExp = isAppExp;
    exports.getAppExpFn = getAppExpFn;
    exports.getAppExpArgs = getAppExpArgs;
    exports.createPrimAppExp = createPrimAppExp;
    exports.isPrimAppExp = isPrimAppExp;
    exports.getPrimAppExpPrim = getPrimAppExpPrim;
    exports.getPrimAppExpArgs = getPrimAppExpArgs;
    exports.createStringExp = createStringExp;
    exports.isStringExp = isStringExp;
    exports.getStringExpValue = getStringExpValue;

    window.SLang.absyn = exports;
}());

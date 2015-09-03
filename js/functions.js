function round (x, a) {
    return Math.floor(0.5 + x);
}

function sum () {
    var result = 0;
    
    for (var i = 0; i < arguments.length; i ++) {
        result += arguments[i];
    }
    
    return result;
}

var unique = function () {
    var i = 0;
    
    return function () {
        return ++ i;
    };
};
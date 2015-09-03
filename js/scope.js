var object = {
    a: 1,
    b: 2,
    getValue: function () {
        return this.a + this.b;
    }
};

var foo = {
    a: 2,
    b: 3
};

var getValue = object.getValue.bind(foo);

console.log(getValue());

var slice = Array.prototype.slice;

function sum () {
    return slice.call(arguments).reduce(function (a, b) { 
        return a + b;
    }, 0);
}
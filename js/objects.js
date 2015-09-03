var object = {
    a: 10,
    bar: {
        foo: 10
    }
};

console.log(object.a);

object.b = 20;

console.log(object.bar.foo);

for (var key in object) {
    console.log(key, object[key]);
}

Object.keys(object).forEach(function (key) {
    console.log(key, object[key]);
});
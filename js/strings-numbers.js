var quoted = "Isn't it right? ",
    single = 'Isn\'t it right?';

// Однострочные комментарии
// ------------------------

/* Находим строку в строке */
console.log(quoted.indexOf('right'));

console.log(quoted.substr(6));

console.log(quoted.toLowerCase());
console.log(quoted.toUpperCase());
console.log("   \n\t\nFoo bar\n\n\t\n       ".trim());

var result = quoted + single; 

console.log(result);

var answer = 42;

console.log(answer);
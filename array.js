// Array, index, set by index, indexOf

var arrayType = [10, 15, 20, 25, 30];

console.log(arrayType[0]);


// array index 
var arrayType2 = [10, 15, 20, 25, 30];
var two = arrayType2[3];
console.log(two);

// array index modify
var arrayType3 = [10, 15, 20, 25, 30];
arrayType3[3] = 50;

console.log(arrayType3.length);
arrayType3.push(100);
arrayType3.push(200);
console.log(arrayType3);

// last array person remuve
arrayType3.pop();
console.log(arrayType3);

// first array person remuve
arrayType3.shift();
console.log(arrayType3);



// array add and remove element from the beginning and slice

var arrayshift =['nomen', 'porosh', 'maruf', 'wasif'];
arrayshift.unshift('Name');
console.log(arrayshift);

// slice

var arrayshift =['nomen', 'porosh', 'maruf', 'wasif', 'hello'];
var slicepart = arrayshift.slice(2, 5);

console.log(slicepart);
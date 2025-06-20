
// toUpperCase
var toUpperCasep = "my Name is Porosh Hossain";
console.log(toUpperCasep.toUpperCase());

// indexOf
var indexoyP = "my name is porosh hossain ";
console.log(indexoyP.indexOf('is'));

// split
var splitP = "my name is porosh hossain ";
console.log(splitP.split(" "));


// ****Integer float parseInt parseFloat type conversion****

// parseFloat
var nambar1 = 5;
var nambar2 = '10.5';

// string = number 
nambar2=parseFloat(nambar2);

console.log( nambar1 +  nambar2);




// parseInt
var nambar1 = 5;
var nambar2 = '10.5';

// string = number but parseInt is not show .5
nambar2=parseInt(nambar2);

console.log( nambar1 +  nambar2);



// +parseFloat 
var nambar1 = 5;
var nambar2 = '20.5';

// string = number 
nambar2= +nambar2;

console.log( nambar1 +  nambar2);



// nambar = string
var nambar1 = 5;
var nambar2 = '20.5';

// nambar = string
nambar1=''+nambar1;

console.log( typeof nambar1);



// tofixed
var nambar1 = 0.1;
var nambar2 = 0.2;

var total = nambar1 + nambar2;

total = total.toFixed(1);

console.log( total);


// Math absolute round floor ceil random




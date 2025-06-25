// Calculate Factorial of a number using for loop

function myFactorial(n) {
    var myFactorial = 1;
    for(var i=1; i<=n; i++){
        myFactorial  = myFactorial*i;
    }
    return myFactorial;
}
var result = myFactorial(5);
console.log(result);

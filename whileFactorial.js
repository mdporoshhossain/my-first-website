// factorial using while

function factorial(n){
    let i =1;
    let factorial=1;
    while( i<=n){
        factorial= factorial*i;
        i++;
    }
    return factorial;
}
let vlue = factorial(5);
console.log(vlue);
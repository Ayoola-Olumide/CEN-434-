//Find the average of 10 numbers

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
let average = sum / numbers.length;
console.log(average);

//Find the factorial of 91 using a custom factorial function

function factorial(n) {
    // let result = 1;
    // for (let i = 2; i <= n; i++) {
    //     result *= i;
    // }
    // return result;
    if(n <= 1){
        return 1
    }
    else{
        return n*factorial(n-1)
    }
}


var last_two_digits = 91
var fact = factorial(last_two_digits)
console.log(fact)


//To find the xCy if x>y, yCx if y>x and x+1Cy if x=y

let x = 9;
let y = 1

function combination(x, y) {
    let x_factorial = factorial(x)
    let y_factorial = factorial(y)
    let xy_factorial = factorial(x - y)
    let comb = x_factorial / (y_factorial * xy_factorial)
    return comb
}

switch (true) {
    case x > y:
        console.log(combination(x, y))
        break;
    case y > x:
        console.log(combination(y, x))
        break;
    case x==y:
        console.log(combination(x+1, y))
        break;
    default:
        console.log("invalid input")
}




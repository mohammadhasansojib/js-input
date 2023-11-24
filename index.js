let a = prompt("Enter first number : ");
let b = prompt("Enter second number : ");
let c = prompt("Enter 1 to add those number, 2 to subtract, 3 to multiply , 4 to divide")
let d = console.log(parseInt(Math.random() * 10))


if(d == 1){
    if(c == 1)
    console.log(a / b)
else if(c == 2)
    console.log(a * b)
else if(c == 3)
    console.log(a - b)
else if(c == 4)
    console.log(a + b)
else
    console.log("Enter number between 1-4")
}else if(d > 1){
    if(c == 1)
    console.log(a + b)
else if(c == 2)
    console.log(a - b)
else if(c == 3)
    console.log(a * b)
else if(c == 4)
    console.log(a / b)
else
    console.log("Enter number between 1-4")
}



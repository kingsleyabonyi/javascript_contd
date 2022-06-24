// program that performs the basic arithmetic operations

var operator = prompt("Select Operator + Addition, - Sutraction, / Division, * Multiplication");
let num1 = prompt("Enter your fist number");
let num2 = prompt("Enter your second number");
var answer 
num1 *=1
num2 *=1


if(operator == "+"){
    answer = (num1 + num2);
    alert(answer);
}
else if(operator == "-"){
    answer = (num1 - num2);
    alert(answer);
}
else if(operator == "*"){
    answer = (num1 * num2);
    alert(answer);
}
else if(operator == "/"){
    answer = (num1 / num2);
    alert(answer);
}
else {
    answer = ("Invalid Operation");
    alert(answer);
}


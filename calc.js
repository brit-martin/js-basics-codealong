let operand1 = process.argv[2];
let operator = process.argv[3];
let operand2 = process.argv[4];

// let operand1 = "3";
// let operator = "*";
// let operand2 = "4";


if (operator === '+') {
    console.log(Number(operand1) + Number(operand2))
} else if (operator === "*"){
    console.log (operand1 * operand2)
} else if (operator === "-"){
    console.log (operand1 - operand2)
} else if (operator === "/" && operand2 === '0'){
     console.log('cannot divide by 0!')
} else if (operator === "/"){
    console.log (operand1 / operand2)
} 
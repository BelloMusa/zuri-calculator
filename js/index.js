
// Simple calculator
const operator = prompt('Enter operator ( either +, -, * or /): ');
// take the operand input
const firstOperand = prompt('Enter first number: ');
const secondOperand = prompt(`Enter second number: ${firstOperand} ${operator}`);

const result = eval(`${firstOperand} ${operator} ${secondOperand}`)

alert(`The result is ${result}`)


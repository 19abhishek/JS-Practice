const defaultResult = 0;
let currentResult = defaultResult;
function getUserInput(){
  return parseInt(userInput.value);
}

function diffOpperator(operator, initialResult, finalResult, ans){
  const calcDesc = `${initialResult} ${operator} ${finalResult}`;
  outputResult(ans, calcDesc);
}

function add() {
  const currentInput = getUserInput();
  const result = currentResult + currentInput;
  diffOpperator('+',currentResult,currentInput, result);
  currentResult = result;
  
}

function subtract() {
  const currentInput = getUserInput();
  const result = currentResult - currentInput;
  diffOpperator('-',currentResult,currentInput, result);
  currentResult = result;
  
}

function multiply() {
  const currentInput = getUserInput();
  const result = currentResult * currentInput;
  diffOpperator('*',currentResult,currentInput, result);
  currentResult = result;
  
}

function divide() {
  const currentInput = getUserInput();
  const result = currentResult / currentInput;
  diffOpperator('/',currentResult,currentInput, result);
  currentResult = result;
  
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);
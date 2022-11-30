const substract = (num1, num2) => num1 - num2;
const add = (num1, num2) => num1 + num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const displayValue = document.querySelector('.Display');
let workingValueArray1 = []
let workingValueArray2 = []
let operatorArray = []

const operate = (operator, num1, num2) => {
  let result = ""
  if 
    (operatorArray[operatorArray.length -1] === '+') 
    {
      operator = add
      num1 = parseInt(workingValueArray2.join(''))
      num2 = parseInt(workingValueArray1.join(''))
      result = operator(num1, num2)
    } else if 
    (operatorArray[operatorArray.length -1] === '-') {
      operator = substract
      num1 = parseInt(workingValueArray2.join(''))
      num2 = parseInt(workingValueArray1.join(''))
      result = operator(num1, num2)
    } else if 
    (operatorArray[operatorArray.length -1] === 'x') {
        operator = multiply
        num1 = parseInt(workingValueArray2.join(''))
        num2 = parseInt(workingValueArray1.join(''))
        result = operator(num1, num2)
    } else if 
    (operatorArray[operatorArray.length -1] === '÷') {
        operator = divide
        num1 = parseInt(workingValueArray2.join(''))
        num2 = parseInt(workingValueArray1.join(''))
        result = operator(num1, num2)
    }
  
  displayValue.textContent = result;
  clearArray(workingValueArray1)
  clearArray(workingValueArray2)
  clearArray(operatorArray)
  workingValueArray2.push(result)
  console.log(`the result is ${result}`)
}


const clearArray = (arr) => arr.length = 0;

const clearFields = () => {
    clearArray(workingValueArray1)
    clearArray(workingValueArray2)
    clearArray(operatorArray)
    displayValue.textContent = 0;
}

const deleteLastDigit = () => {
    displayValue.textContent = displayValue.textContent.slice(0, -1)
}

const changeDisplayValue = (input) => {
    displayValue.textContent === "0" ? (displayValue.textContent = input) : (displayValue.textContent += input)
}

const changeWorkingValueArray1 = (input) => {
    workingValueArray1.push(input)
}

const changeOperatorArray = (input) => {
  operatorArray.push(input)
}

const changeArrayToString = (arr) => arr.toString('')


const clearButton = document.querySelector('.Clear')
clearButton.onclick = () => {
    clearFields()
}


const numButtons = document.querySelectorAll('.button.num')
numButtons.forEach((button) => {
    button.addEventListener('click', () => {
      changeDisplayValue(button.textContent)
      changeWorkingValueArray1(button.textContent)
      console.log(`workingValueArray1 is ${workingValueArray1.join('')}`)
    });
  });


const operatorButtons = document.querySelectorAll('.button.operator')
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        displayValue.textContent = '';
        changeOperatorArray(button.textContent)
        for (let i of workingValueArray1) {
          workingValueArray2.push(i)
        }
        clearArray(workingValueArray1)
        console.log(`operator array is ${operatorArray}`);
        console.log(`workingValueArray2 is (2nd) ${workingValueArray2.join('')}`);
    });
  });

const equalsButton = document.querySelector('.equals')
equalsButton.onclick = () => {
  operate()
}




/*
const deleteButton = document.querySelector('.Delete')
  deleteButton.onclick = () => {
    deleteLastDigit();
  }


const decimalButton = document.querySelector('.decimal')
decimalButton.onclick = () => {
    if (displayValue.textContent.includes('.')) {
        alert('Error: decimal point already selected')
    } else {
      changeWorkingValueArray2('.')
      workingValue= workingValueArray2.join('')
      console.log(`working value is ${workingValue}`)
      displayValue.textContent += "."}
  }
*/
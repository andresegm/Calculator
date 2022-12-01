const substract = (num1, num2) => num1 - num2;
const add = (num1, num2) => num1 + num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => {
  if (parseFloat(num2) === 0) {
    alert ('error: cannot divide by 0');
    clearFields()
  } else {
    return num1/num2
  }
}


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
      num1 = parseFloat(workingValueArray2.join(''))
      num2 = parseFloat(workingValueArray1.join(''))
      result = operator(num1, num2)
    } else if 
    (operatorArray[operatorArray.length -1] === '-') {
      operator = substract
      num1 = parseFloat(workingValueArray2.join(''))
      num2 = parseFloat(workingValueArray1.join(''))
      result = operator(num1, num2)
    } else if 
    (operatorArray[operatorArray.length -1] === 'x') {
        operator = multiply
        num1 = parseFloat(workingValueArray2.join(''))
        num2 = parseFloat(workingValueArray1.join(''))
        result = operator(num1, num2)
    } else if 
    (operatorArray[operatorArray.length -1] === '÷') {
        operator = divide
        num1 = parseFloat(workingValueArray2.join(''))
        num2 = parseFloat(workingValueArray1.join(''))
        result = operator(num1, num2)
    }

  clearArray(workingValueArray1)
  clearArray(workingValueArray2)
  clearArray(operatorArray)

  if (result) {
    displayValue.textContent = result;
    workingValueArray1 = String(result).split('')
    console.log(`the result is ${result}`)
  } else{
    displayValue.textContent = 0;
  }
  
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
    workingValueArray1.pop()
    console.log(`working value is ${workingValueArray1.join('')}`)
}

const deleteButton = document.querySelector('.Delete')
  deleteButton.onclick = () => {
    deleteLastDigit();
  }

const changeDisplayValue = (input) => {
    displayValue.textContent === "0" ? (displayValue.textContent = input) : (displayValue.textContent += input);
    if (displayValue.textContent.length < 15) {
      displayValue.style.fontSize = "4vw"
    } else if (displayValue.textContent.length > 15 && displayValue.textContent.length < 30) {
      displayValue.style.fontSize = "2vw"
    } else if (displayValue.textContent.length > 30) {
      displayValue.style.fontSize = "1vw"
    }
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
      console.log(`working value is ${workingValueArray1.join('')}`)
    });
  });


const operatorButtons = document.querySelectorAll('.button.operator')
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (operatorArray.length > 0) {
          clearFields()
          alert('Error: cannot call operators back-to-back')
        } else {
        displayValue.textContent = 0;
        changeOperatorArray(button.textContent)
        for (let i of workingValueArray1) {
          workingValueArray2.push(i)
        }
        clearArray(workingValueArray1)
        console.log(`operator called is ${operatorArray}`);
        console.log(`stored value is ${workingValueArray2.join('')}`);
      }
    });
  });

const equalsButton = document.querySelector('.equals')
  equalsButton.onclick = () => {
  operate()
}

const decimalButton = document.querySelector('.decimal')
decimalButton.onclick = () => {
    if (displayValue.textContent.includes('.')) {
        alert('Error: decimal point already selected')
    } else {
      changeWorkingValueArray1('.')
      displayValue.textContent += "."}
  }


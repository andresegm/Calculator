const substract = (num1, num2) => num1 - num2;
const add = (num1, num2) => num1 + num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const operate = (operator, num1, num2) => operator(num1, num2);

const displayValue = document.querySelector('.Display');
const clearDisplayValue = () => {
    displayValue.textContent = 0;
}
const deleteLastDigit = () => {
    displayValue.textContent = displayValue.textContent.slice(0, -1)
}
const changeDisplayValue = (input) => {
    displayValue.textContent === "0" ? (displayValue.textContent = input) : (displayValue.textContent += input)
}


const clearButton = document.querySelector('.Clear')
clearButton.onclick = () => {
    clearDisplayValue()
}


const numButtons = document.querySelectorAll('.button.num')
numButtons.forEach((button) => {
    button.addEventListener('click', () => {
      changeDisplayValue(button.textContent)
    });
  });


  const deleteButton = document.querySelector('.Delete')
  deleteButton.onclick = () => {
    deleteLastDigit();
  }


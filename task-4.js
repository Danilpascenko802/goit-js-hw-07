console.log("TASK 4");
let counterValue = document.getElementById("value");
let count  = 0;
const plusButton = document.querySelector('[data-action="increment"]');
const minusButton = document.querySelector('[data-action="decrement"]');

const plus = function () {
  count += 1;
  counterValue.textContent = count;
};
const minus = function () {
    count -=1;
  counterValue.textContent = count;
};
console.log(counterValue.textContent);
const increment = plusButton.addEventListener("click", plus);
const decrement = minusButton.addEventListener("click", minus);
// DONE
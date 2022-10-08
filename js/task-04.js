const valueRef = document.querySelector("#value");
// console.log(valueRef);

const btnDecrement = document.querySelector('button[data-action="decrement"]');
// console.log(btnDecrement);

const btnIncrement = document.querySelector('button[data-action="increment"]');
// console.log(btnIncrement);

let counterValue = valueRef.textContent = 0;
const makeIncrement = () => {
    counterValue += 1;
    // console.log(counterValue);

    valueRef.textContent = counterValue;
};
const makeDecrement = () => {
    counterValue -= 1;
    // console.log(counterValue);

    valueRef.textContent = counterValue;
};

btnIncrement.addEventListener('click', makeIncrement);
btnDecrement.addEventListener('click', makeDecrement);
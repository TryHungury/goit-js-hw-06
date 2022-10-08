const inputRef = document.querySelector('#name-input');
// console.log("🚀inputRef", inputRef);

const outputRef = document.querySelector('#name-output');
// console.log("🚀outputRef", outputRef);


inputRef.addEventListener('input', (event) => {
    if (event.currentTarget.value) {
        outputRef.textContent = event.currentTarget.value;
    } else  {
        outputRef.textContent = 'Anonymous';
    }
    // console.log("event.currentTarget.value", event.currentTarget.value)
});
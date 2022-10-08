const inputRef = document.querySelector('#font-size-control');
// console.log("inputRef", inputRef);

const spanRef = document.querySelector('#text');
// console.log("spanRef", spanRef);

const changeValue = (event) => {
    let eventValue = event.currentTarget.value;
    // console.log("eventValue", eventValue)
    
    spanRef.style.fontSize = `${eventValue}px`;
};

inputRef.addEventListener('input', changeValue);

const inputRef = document.querySelector('#validation-input');
// console.log("inputRef", inputRef)

const makeValidation = (event) => {
    const ElClassList = inputRef.classList;

    if (event.currentTarget.value.length === 6) {
        ElClassList.remove("invalid");
        ElClassList.remove("valid");
        ElClassList.add("valid");
    } else {
        ElClassList.remove("invalid");
        ElClassList.remove("valid");
        ElClassList.add("invalid");
        // console.log(event.currentTarget.value.length);
    };
};     

inputRef.addEventListener('blur', makeValidation);

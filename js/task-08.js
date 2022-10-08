const formRef = document.querySelector('.login-form');
// console.log("formRef", formRef)

const inputRefs = formRef.querySelectorAll('input');
// console.log(InputRefs);

const makeSubmit = (event) => {
    event.preventDefault();

    let countEmpty = 0;  
    inputRefs.forEach((elem) => {
        if (elem.value === ''){
            countEmpty += 1;
        };
    });

    if (countEmpty > 0) {
        alert('Заповніть усі поля!!!')
    } else if (countEmpty === 0){
        makeDateObject();
        formRef.reset();
    };

};

const makeDateObject = () => {
        const dataObject = {};

        inputRefs.forEach((elem) => dataObject[elem.name] = elem.value);

        console.log(dataObject)
};

formRef.addEventListener('submit', makeSubmit);

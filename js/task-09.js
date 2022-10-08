function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector('.change-color');
// console.log("btnRef", btnRef)

const spanRef = document.querySelector('.color');
// console.log("spanRef", spanRef)

const changeColor = () => {
  let randomColor = getRandomHexColor()
  document.body.style.backgroundColor = randomColor;

  spanRef.textContent = randomColor;
  // console.log(randomColor);
}

btnRef.addEventListener('click', changeColor);

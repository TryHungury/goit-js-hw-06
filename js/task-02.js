const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulRef = document.querySelector('#ingredients');
console.log(ulRef);

function makeListName(ingredientsName) {
  // let nodeRef = ulRef;

  ingredientsName.forEach(name =>  {
    // console.log(name);
    
    const liItem = document.createElement('li');
    liItem.textContent = name;
    liItem.classList.add('item')
    
    ulRef.append(liItem);
    // console.log(ulRef);
  })

}

makeListName(ingredients);

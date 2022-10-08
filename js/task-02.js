const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulRef = document.querySelector('#ingredients');
// console.log(ulRef);


function makeListName(ingredientsName) {
  const arrMarkup = [];
  
  ingredientsName.forEach(name =>  {
    // console.log(name);
    
    const liItem = document.createElement('li');
    liItem.textContent = name;
    liItem.classList.add('item')
    
    arrMarkup.push(liItem)
  })
  ulRef.append(...arrMarkup);

}

makeListName(ingredients);

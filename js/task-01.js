
const ulRef = document.querySelector('#categories');
// console.log(ulRef);

const liCategoriesRef = ulRef.querySelectorAll('.item');
// console.log(liCategoriesRef);

const quantityCategories = liCategoriesRef.length;

console.log(`
=======================
Number of categories: ${quantityCategories}
=======================`);

function consoleCategoriesNameAndQuantity(liCategoriesRef) {
    // const result = 
    liCategoriesRef.forEach(element => {
        const h2Ref = element.querySelector('h2');
        // console.log('Category:', h2Ref.textContent);
        
        const quantityLi = element.querySelectorAll('li').length;
        // console.log("quantityLi", quantityLi)

        console.log(`
        *---------------------*
        Category: ${h2Ref.textContent}
        Elements: ${quantityLi}
        *---------------------*`)     
    });
}

consoleCategoriesNameAndQuantity(liCategoriesRef);

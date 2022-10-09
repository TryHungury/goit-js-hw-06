
// const ulRef = document.getElementById('#categories');
const ulRef = document.body.children[1];
// console.log("ulRef", ulRef)

const liCategoriesRef = ulRef.children;
// console.log(liCategoriesRef);

const quantityCategories = liCategoriesRef.length;

console.log(`
=======================
Number of categories: ${quantityCategories}
=======================`);

function consoleCategoriesNameAndQuantity(liCategoriesRef) {
    const result = [...liCategoriesRef] 
    result.forEach(element => {
        const h2Ref = element.firstElementChild;
        // console.log('Category:', h2Ref.textContent);
        
        const innerUlRef = element.lastElementChild;
        // console.log("innerUlRef", innerUlRef)

        const quantityLi = innerUlRef.children.length;
        // console.log("quantityLi", quantityLi)

        console.log(`
        *---------------------*
        Category: ${h2Ref.textContent}
        Elements: ${quantityLi}
        *---------------------*`)     
    });
}

consoleCategoriesNameAndQuantity(liCategoriesRef);

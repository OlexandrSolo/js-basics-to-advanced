
const list = document.querySelector('#categories')


const numbersCategories = list.children.length;
console.log(`Numbers of categories:${numbersCategories}`);

Array.from(list.children).forEach(item => {
    console.log(`Category: ${item.children[0].textContent}`);
    console.log(`Elements: ${item.children[1].children.length}`);
    Array.from(item.children[1].children).forEach(subItem => {
        console.log(subItem.textContent);
    });
});
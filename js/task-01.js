
const categories = document.querySelectorAll('#categories');
const items = document.querySelectorAll('.item');

console.log(`Namber of categories: ${items.length}`);

const categoryArray = Array.from(items);

categoryArray.forEach(item => {
    const title = item.firstElementChild.textContent;
    const elements = item.lastElementChild.children.length;
    console.log(title);
    console.log(elements);
});

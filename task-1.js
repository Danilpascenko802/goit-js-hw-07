console.log('TASK 1');
const categories = document.getElementById("categories");
console.log(`В списке ${categories.children.length} категории.`);
const categoriesItems = document.getElementsByClassName("item");
// console.log(categoriesItems);
const item = (Array.from(categoriesItems)).forEach((element)=>{
    console.log(`Категория ${element.children[0].textContent}`);
    console.log(`Количество ${element.children[1].children.length}`);
}) 
console.log("DONE");
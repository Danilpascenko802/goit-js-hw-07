let categories = document.getElementById("categories");
console.log(`В списке ${categories.children.length} категории.`);

// console.log(categories.childNodes);
// for( let i = 1; i < categories.childNodes.length; i += 2){
// console.log(categories.childNodes[i]);
// }

// console.log(categories.getAttribute());

let li = document.getElementsByClassName("item");
console.log(li);
for (let i = 0; i < li.length; i += 0) {
  console.log(i.children);
}

// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

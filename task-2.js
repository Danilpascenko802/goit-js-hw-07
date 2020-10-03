console.log('TASK 2');
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  for(let i=0; i< ingredients.length; i+=1){
      const list = document.getElementById('ingredients');
      let li = document.createElement('li')
      // console.log(li);
      let liText = li.textContent = ingredients[i];
      list.append(liText);
  }
console.log("DONE");

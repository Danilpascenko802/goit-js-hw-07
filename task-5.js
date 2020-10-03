console.log('TASK 5');
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
const input = document.getElementById('name-input');
// console.log(input.textContent);
const output = document.getElementById('name-output');
// console.log(output.textContent);


const writing = function(){
    if(input.textContent = ""){
        output.textContent = "незнакомец";
    }else{
        output.textContent = input.textContent;
    }
};
input.addEventListener('change', writing);

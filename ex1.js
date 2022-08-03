// Faça um código em js que imprima JavaScript para data atual
// Dica: https://www.w3schools.com/jsref/jsref_obj_date.asp
let hoje = new Date();
let dd = hoje.getDate();

let mm = hoje.getMonth()+1; 
const aaaa = hoje.getFullYear();
if(dd<10) 
{
    dd=`0${dd}`;
} 

if(mm<10) 
{
    mm=`0${mm}`;
} 

hoje = `${dd}/${mm}/${aaaa}`;
console.log(hoje);
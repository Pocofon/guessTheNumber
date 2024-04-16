const input = document.getElementById('in');
const btn = document.querySelector('.btn');
const out = document.querySelector('.out');
let chislo = Math.floor(Math.random()* 99) + 1;
console.log(chislo);

btn.addEventListener('click',guess);

function guess(){
    const value = input.value;
    if(value > chislo){
        out.textContent = "введите число поменьше";
    }
    else if(value < chislo){
        out.textContent = "введите число побольше";
    }else{
        out.textContent = "You win!";
        chislo = Math.floor(Math.random()* 99) + 1;
        console.log(chislo);
    }
}
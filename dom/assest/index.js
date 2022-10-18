/*Event DOM MOUSE
Global variable with reference to the ID in the HTML assigning to a constant areaV where through these we will do what we want. ID (area) HTML => CONST areaV 
Variável global com referência ao ID no HTML atribuindo a uma constante areaV onde atráves destas faremos o que desejarmos. ID (area) HTML => CONST areaV
const areaV = window.document.getElementById('area');
Shoot events whit arrow functions:
The addEventListener method is an event handler where it received the mouse event and calls its Arrow function to do something.
Atire eventos com funções de seta:
O método addEventListener é um manipulador de enventos onde recebeu o evento do mouse e que chama sua Arrow function para que faça algo.*/

areaV.addEventListener('mousedown', (toclick) => {
    areaV.innerText = 'Clicked';
    areaV.style.background = 'red';

});

areaV.addEventListener('mousecenter', (login) => {
    areaV.innerText = 'Came in'
});

areaV.addEventListener('mouseout', (goout) => {
    areaV.innerText = 'In went out';
    areaV.style.background = 'black';
});

areaV.addEventListener('click', (clicar) => {
    areaV.innerText = 'ssss';
    areaV.style.background = 'blue';
});
/*
function clicar() {
    areaV.innerText = 'Clicou';
    areaV.style.background = 'red';
}
function entrar() {
   areaV.innerText = 'Entrou';
}
function sair() {
   areaV.innerText = 'Saiu';
   areaV.style.background = 'black';
}
*/
let p1 = 5;
let p2 = 5;
document.getElementById("myBtn").addEventListener("click", function () {
    myFunction(p1, p2);
})
function myFunction(a, b) {
    document.getElementById("demo").innerHTML = a * b;
}




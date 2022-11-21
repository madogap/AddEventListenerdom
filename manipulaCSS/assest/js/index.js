let titulo = document.querySelector('h1')
titulo.textContent ='Aula 000000';
titulo.innerHTML = 'Aula manipular CSS';

let imagem = document.querySelector('#foto');
//Mudancas de propriedades

 //Manipular css
imagem.setAttribute('src', 'pride-fc.jpg');
imagem.setAttribute('width', '250px');
//USANDO DE MODO PRECISO
titulo.style.color = "red";
titulo.style.backgroundColor = "#000";
titulo.style.borderBottom = "2px solid red";
titulo.style.padding = "0.625rem";
titulo.style.borderRadius="5px";

document.querySelector('h1').style.color="red";
document.querySelector('h1').style.backgroundColor="#000";
document.querySelector('h1').style.borderBottom="2px solid red";


let box = document.querySelector('.box');
box[0].setAttribute('class', 'azul');
box[0].removeAttributes('class');//cuidado

let tela = document.querySelector('main');
let btnDark = document.querySelector('#btdark');
let btnLight =document.querySelector('#btLight');

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight);

function modoDark(){
    //event.preventDefault();
    console.log('modo dark');
    tela.classList.add("dark");
    tela.classList.remove("light");
}

function modoLight(){
     //event.preventDefault();
    console.log('modo light');
    tela.classList.add("light");
    tela.classList.remove("dark");
}



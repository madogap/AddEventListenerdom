/*Aula 11 de */

function carregou(){
    console.log('Pagina carregada com sucesso')
}
function focou(){
    console.log('Foco no título')
}

function rolouPagina(){
    console.log('Pagina rolando')
}

function focoNoCampo(){
    console.log('Foco no campo de texto')
}

function semFocoNoCampo(){
    console.log('Saiu o foco do campo')
}

let letras = document.querySelector('input[type=text]')
function avisarQueTeclou(){
    let numLetras = 1
    console.log('Está teclando ' + (letras.value.length + numLetras))
}

let botao1 = document.querySelector('#btn1')
let botao2 = document.querySelector('#btn2')
let botaoEnviar = document.querySelector('#btn3')

//MOUSEROVER A SETA DO MOUSE ESTA NO ELEMENTO
botao1.addEventListener('mouserover', function(){
    console.log('foco no botao1')
})

//focoout ou bluer quando sai o focu

botao2.addEventListener('bluer', function(){
    console.log('Foco no botao 2')
})

//1 click do mouse

botaoEnviar.addEventListener('click', function(event){
    event.preventDefault()
    console.log('Clicou nno botao enviar')

})
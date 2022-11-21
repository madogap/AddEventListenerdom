// create a couple of elements in an otherwise empty HTML page
var heading = document.createElement("h1");
var heading_text = document.createTextNode("Hahahahahahahah");
heading.appendChild(heading_text);
document.body.appendChild(heading);

var headin = document.createElement("h2");
var headin_text = document.createTextNode('A vida é Louca');
headin.appendChild(headin_text);

document.body.appendChild(headin);
//Pegar o elemento pelo ID// Tags p div h1
document.getElementById('custom3').innerText = "YOU!!!";
document.body.style.color= "none";

setTimeout(function () {
    document.getElementById('custom1').innerHTML = "<b>YOU</b>";
    document.getElementById('custom2').innerHTML = "<b>YOU!!!</b>";
}, 31000);

//Tras todos os nos tras como vetores (arrays)
document.getElementsByName('nameDiv')[0].innerHTML="<b>Div por name</b>";


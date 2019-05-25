function changeText(id){
  id.innerHTML="Olá,Sextou!!!!"
}

function displayDate(){
  document.getElementById("demo").innerHTML=Date();
}

function mOver(obj){
  obj.innerHTML="Fazer o que?"
}

function mOut(obj){
  obj.innerHTML="Não entendi o que ele falou!"
}

function mDown(obj){
  obj.style.backgroundColor="#AABBCC" // Passando o mouse em cima do objeto!
  obj.innerHTML="Partiu ficar em casa FDS!"
}

function mUp(obj){
  obj.style.backgroundColor="#DDA0DD" // Para alterar a cor do fundo!
  obj.innerHTML="Brota nenem!"
}

var nome;
var email;
var num=0;

function escrever(quadro){
    info="Usuario numero:" +(++num)+"\n\n";
    info+="Nome:" +nome+"\n";
    info+="Email:" +email+"\n";
    quadro.value+=info;
}

function mudaCor(cor){
  document.bgColor=cor;
}

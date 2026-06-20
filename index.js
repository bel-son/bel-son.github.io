function fazer(num){

var num = document.getElementById("numero").value;
var calculo = document.getElementById("java").value;

switch (calculo) {
  case '1':
  
  if (num == null || num == "") {
  alert('Digite qualquer número para te mostra a tabuada de 1 ate 100');
  document.body.style.background="black";
}
else {
  

for (var i = 1; i <= 100; i ++) {
  document.getElementById("texto").innerHTML+= num+" - "+i+" = "+(num-i)+"<br>";
  
}
}
    break;
  
// mostra subtração da operação da matemática 
    case '2':
  
  if (num == null || num == "") {
  alert('Digite qualquer número para te mostra a tabuada de 1 ate 100');
  }
  else{
    for (var i = 1; i <= 100; i ++) {
  document.getElementById("texto").innerHTML+= num+" x "+i+" = "+(num*i)+"<br>";
  
}
  }
  
  
    case '3':
  
  if (num == null || num == "") {
  alert('Digite qualquer número para te mostra a tabuada de 1 ate 100');
  document.body.style.background="black";
}
else {
  

for (var i = 1; i <= 100; i ++) {
  document.getElementById("texto").innerHTML+= num+" ÷ "+i+" = "+(num/i)+"<br>";
  
}
}
    break;
  
  
  default:
  alert("digite os nomes dos operadores que sai aplicados em Matemática quê são (multiplicação, divisão, subtração, somar)");
}
  }

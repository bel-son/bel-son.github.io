function enviar(){
  event.preventDefault();
  let nome = document.getElementById('nome_usuario').value;
  let email = document.getElementById('email_usuario').value;
  let alarme = document.getElementById("texto")
  alarme.innerHTML="Mensagem enviada"
  let telefone = "934427678";
  
  let mensagem = "ola Belson o que posso fazer porte! "+nome+" endereço do e-mail: "+email;
  
  let enviar = "https://wa.me/"+telefone+"?text="+encodeURIComponent(mensagem);
  
  window.open(enviar,'_blank');
}
 
 let som = new Audio('/AILÉ_-_Pela_Velha__feat._Léo_Ranny,_Portuga_Monstrinho,_BadiBanzelo_(128k).mp3')
 
 function tocar(){
   let paus = document.getElementById("pause")
   let go = document.getElementById("simbolo")
  paus.style="display: block;"
  go.style="display: none;"
 som.play()
 }
 function pause(){
   let paus = document.getElementById("pause")
   let go = document.getElementById("simbolo")
  paus.style="display: none;"
  go.style="display: block;"
   som.pause()
     }

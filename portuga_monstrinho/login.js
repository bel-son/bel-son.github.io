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

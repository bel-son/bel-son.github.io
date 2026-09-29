function jogo(){
    let jogo = document.getElementById("jogo")
    let topo = document.getElementById("topo")
    let musica = document.getElementById("musica")
    let guia = document.getElementById("guia")
    let beta = document.getElementById("betaA")
    let betaA = document.getElementById("beta")
   let paginaTopo = document.getElementById("paginaTopo")
     let paginaJogo = document.getElementById("paginaJogo")
     let paginaGuia = document.getElementById("paginaGuia")
     let paginaMusica = document.getElementById("paginaMusica")
     
   
    betaA.style="background: none;"
    beta.style="background: none;"
    paginaJogo.style="display: inline-block;"
    paginaTopo.style="display: none;"
    topo.style="background: white;"
    jogo.style="background: #868896;"
    musica.style="background: white;"
    guia.style="background: white;"
    
}
  function topo(){
    let jogo = document.getElementById("jogo")
    let topo = document.getElementById("topo")
    let musica = document.getElementById("musica")
    let guia = document.getElementById("guia")
    let beta = document.getElementById("betaA")
    let betaA = document.getElementById("beta")
    let paginaTopo = document.getElementById("paginaTopo")
     let paginaJogo = document.getElementById("paginaJogo")
     
    
    betaA.style="background: white;"
    beta.style="background: none;"
    paginaJogo.style="display: none;"
    paginaTopo.style="display: inline-block;"
    topo.style="background: #868896;"
    jogo.style="background: white;"
    musica.style="background: white;"
    guia.style="background: white;"
    
}

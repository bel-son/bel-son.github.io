let saida1 =  document.getElementById("saida1")
 let saida2 =  document.getElementById("saida2")
 let saida3 =  document.getElementById("saida3")
 let saida4 =  document.getElementById("saida4")
 let enviar = document.getElementById("tema")
 let retorne = document.getElementById("repara")
 let R1  = document.querySelector("#resposta1")
 let R2 = document.querySelector("#resposta2")
 let R3 = document.querySelector("#resposta3")
 let R4 = document.querySelector("#resposta4")
 let img1 = document.getElementById("img1")
 let choco = document.getElementById("choco")
 let tempo = document.getElementById('tempo')
 let dez = document.getElementById("dez")
 let zero = document.getElementById("zero")
let login = document.getElementById("foto")
let dix = document.getElementById("dix")
let ponto = document.getElementById("ponto")

let hino = new Audio("/Hino_Nacional_de_Angola(128k)_(1).mp3")
let matias = new Audio("/REDONE_Matias_Damasio___Amar_Angola_ANGOLAN_POP_MALE_KARAOKE_VR_WOBV(128k).mp3")
 let toque = new Audio("/toque.mp3")
 let certa = new Audio("/Resposta cerra.mp3")
 let errado = new Audio("/Resposta errada.mp3")
 setTimeout(function(){
 
 },3150)
 
 let program = document.getElementById("programadorSaiba")
 let informe = document.getElementById("informaJogo")
let escolhapronvincia = document.getElementById("EscolhaPersonagen")
 
let numeroDigitado=0;
let somaDosnumero;

 function jogar(){
   let tempo1 = document.getElementById("tempo1")
   let tempo2 = document.getElementById("tempo2")
   let tempo3 = document.getElementById("tempo3")
   let tempo4 = document.getElementById("tempo4")
   let tempo5 = document.getElementById("tempo5")
   let tempo6 = document.getElementById("tempo6")
   let tempo7 = document.getElementById("tempo7")
   let tempo8 = document.getElementById("tempo8")
   let tempo9 = document.getElementById("tempo9")
   let tempo10 = document.getElementById("tempo10")
   let tempo11 = document.getElementById("tempo11")
   let tempo12 = document.getElementById("tempo12")
   let tempo13 = document.getElementById("tempo13")
   let tempo14 = document.getElementById("tempo14")
   let tempo15 = document.getElementById("tempo15")
   let tempo16 = document.getElementById("tempo16")
   let tempo17 = document.getElementById("tempo17")
   let tempo18 = document.getElementById("tempo18")
   let tempo19 = document.getElementById("tempo19")
   let tempo20 = document.getElementById("tempo20")
   let tempo21 = document.getElementById("tempo21")
   let tempo22 = document.getElementById("tempo22")
   let tempo23 = document.getElementById("tempo23")
   let tempo24 = document.getElementById("tempo24")
   let tempo25 = document.getElementById("tempo25")
   let tempo26 = document.getElementById("tempo26")
   let tempo27 = document.getElementById("tempo27")
   let tempo28 = document.getElementById("tempo28")
   let tempo29 = document.getElementById("tempo29")
   let tempo30 = document.getElementById("tempo30")
   let tempo31 = document.getElementById("tempo31")
   let tempo32 = document.getElementById("tempo32")
   let tempo33 = document.getElementById("tempo33")
   let tempo34 = document.getElementById("tempo34")
   let tempo35 = document.getElementById("tempo35")
   let tempo36 = document.getElementById("tempo36")
   let tempo37 = document.getElementById("tempo37")
   let tempo38 = document.getElementById("tempo38")
   let tempo39 = document.getElementById("tempo39")
   let tempo40 = document.getElementById("tempo40")
   let tempo41 = document.getElementById("tempo41")
   let tempo42 = document.getElementById("tempo42")
   let tempo43 = document.getElementById("tempo43")
   let tempo44 = document.getElementById("tempo44")
   let tempo45 = document.getElementById("tempo45")
   let tempo46 = document.getElementById("tempo46")
   let tempo47 = document.getElementById("tempo47")
   let tempo48 = document.getElementById("tempo48")
   let tempo49 = document.getElementById("tempo49")
   let tempo50 = document.getElementById("tempo50")
   let tempo51 = document.getElementById("tempo51")
   let tempo52 = document.getElementById("tempo52")
   
   matias.play()
   hino.pause()
   
  setTimeout(function(){    
    enviar.style="display: inline-block; text-align: center;"
    choco.style="display: flex;"
    escolhapronvincia.style="display: none;"
    program.style="display: none;"
    informe.style="display: none;"
    
   document.body.style="background: black;"
   document.getElementById("texto").innerHTML="Qual foi o ano que segundo presidente de Angola assumiu o poder. qual foi o ano que reinicio o cargo de presidente."
   
    saida1.innerHTML="2006 - 1900"
     saida2.innerHTML="1979 - 2017"
    saida3.innerHTML="1979 - 2019"
    saida4.innerHTML="1975 - 1979"
    toque.play()
    
    let dix = document.getElementById("dix")
    let bet = document.getElementById("button")
    dix.style="display: inline-block;"
     bet.style="display: none;"
     ponto.style="display: flex; background: transparent; border-top: 2px solid white; border-bottom: 2px solid white; position: fixed; bottom: 0px; width: 100%;"
    belson =  setInterval(function(){
       let conta = document.getElementById('conta').innerHTML;
       var soma = parseInt(conta) + 1;
       document.getElementById("conta").innerHTML=soma;
       
       if (soma == 1) {
         tempo1.style="display: none;"
         tempo2.style="display: inline-block;"
       }
       if (soma == 2) {
         tempo2.style="display: none;"
         tempo3.style="display: inline-block;"
       }
       if (soma == 3) {
         tempo3.style="display: none;"
         tempo4.style="display: inline-block;"
       }
       if (soma == 4) {
         tempo4.style="display: none;"
         tempo5.style="display: inline-block;"
       }
       if (soma == 5) {
         tempo5.style="display: none;"
         tempo6.style="display: inline-block;"
       }
       if (soma == 6) {
         tempo6.style="display: none;"
         tempo7.style="display: inline-block;"
       }
       if (soma == 7) {
         tempo7.style="display: none;"
         tempo8.style="display: inline-block;"
       }
       if (soma == 8) {
         tempo8.style="display: none;"
         tempo9.style="display: inline-block;"
       }
       if (soma == 9) {
         tempo9.style="display: none;"
         tempo10.style="display: inline-block;"
       }
       if (soma == 10) {
         tempo10.style="display: none;"
         tempo11.style="display: inline-block;"
       }
       if (soma == 11) {
         tempo11.style="display: none;"
         tempo12.style="display: inline-block;"
       }
       if (soma == 12) {
         tempo12.style="display: none;"
         tempo13.style="display: inline-block;"
       }
       if (soma == 13) {
         tempo13.style="display: none;"
         tempo14.style="display: inline-block;"
       }
       if (soma == 14) {
         tempo14.style="display: none;"
         tempo15.style="display: inline-block;"
       }
       if (soma == 15) {
         tempo15.style="display: none;"
         tempo16.style="display: inline-block;"
       }
       if (soma == 16) {
         tempo16.style="display: none;"
         tempo17.style="display: inline-block;"
       }
       if (soma == 17) {
         tempo17.style="display: none;"
         tempo18.style="display: inline-block;"
       }
       if (soma == 18) {
         tempo18.style="display: none;"
         tempo19.style="display: inline-block;"
       }
       if (soma == 19) {
         tempo19.style="display: none;"
         tempo20.style="display: inline-block;"
       }
       if (soma == 20) {
         tempo20.style="display: none;"
         tempo21.style="display: inline-block;"
       }
       if (soma == 21) {
         tempo21.style="display: none;"
         tempo22.style="display: inline-block;"
       }
       if (soma == 22) {
         tempo22.style="display: none;"
         tempo23.style="display: inline-block;"
       }
       if (soma == 23) {
         tempo22.style="display: none;"
         tempo23.style="display: inline-block;"
       }
       if (soma == 24) {
         tempo23.style="display: none;"
         tempo24.style="display: inline-block;"
       }
       if (soma == 25) {
         tempo24.style="display: none;"
         tempo25.style="display: inline-block;"
       }
       if (soma == 26) {
         tempo25.style="display: none;"
         tempo26.style="display: inline-block;"
       }
       if (soma == 27) {
         tempo26.style="display: none;"
         tempo27.style="display: inline-block;"
       }
       if (soma == 28) {
         tempo27.style="display: none;"
         tempo28.style="display: inline-block;"
       }
       if (soma == 29) {
         tempo28.style="display: none;"
         tempo29.style="display: inline-block;"
       }
       if (soma == 30) {
         tempo29.style="display: none;"
         tempo30.style="display: inline-block;"
       }
       if (soma == 31) {
         tempo30.style="display: none;"
         tempo31.style="display: inline-block;"
       }
       if (soma == 32) {
         tempo31.style="display: none;"
         tempo32.style="display: inline-block;"
       }
       if (soma == 33) {
         tempo32.style="display: none;"
         tempo33.style="display: inline-block;"
       }
       if (soma == 34) {
         tempo33.style="display: none;"
         tempo34.style="display: inline-block;"
       }
       if (soma == 35) {
         tempo34.style="display: none;"
         tempo35.style="display: inline-block;"
       }
       if (soma == 36) {
         tempo35.style="display: none;"
         tempo36.style="display: inline-block;"
       }
       if (soma == 37) {
         tempo36.style="display: none;"
         tempo37.style="display: inline-block;"
       }
       if (soma == 38) {
         tempo37.style="display: none;"
         tempo38.style="display: inline-block;"
       }
       if (soma == 39) {
         tempo38.style="display: none;"
         tempo39.style="display: inline-block;"
       }
       if (soma == 40) {
         tempo39.style="display: none;"
         tempo40.style="display: inline-block;"
       }
       if (soma == 41) {
         tempo40.style="display: none;"
         tempo41.style="display: inline-block;"
       }
       if (soma == 42) {
         tempo41.style="display: none;"
         tempo42.style="display: inline-block;"
       }
       if (soma == 43) {
         tempo42.style="display: none;"
         tempo43.style="display: inline-block;"
       }
       if (soma == 44) {
         tempo43.style="display: none;"
         tempo44.style="display: inline-block;"
       }
       if (soma == 45) {
         tempo44.style="display: none;"
         tempo45.style="display: inline-block;"
       }
       if (soma == 46) {
         tempo45.style="display: none;"
         tempo46.style="display: inline-block;"
       }
       if (soma == 47) {
         tempo46.style="display: none;"
         tempo47.style="display: inline-block;"
       }
       if (soma == 48) {
         tempo47.style="display: none;"
         tempo48.style="display: inline-block;"
       }
       if (soma == 49) {
         tempo48.style="display: none;"
         tempo49.style="display: inline-block;"
       }
       if (soma == 50) {
         tempo49.style="display: none;"
         tempo50.style="display: inline-block;"
       }
       if (soma == 51) {
         tempo50.style="display: none;"
         tempo51.style="display: inline-block;"
       }
       if (soma == 52) {
         tempo51.style="display: none;"
         tempo52.style="display: inline-block;"
        clearInterval(belson)
         tempo.style="display: inline-block;"
        dix.style="display: none;"
        login.style="display: none;"
       }
     },3700)
},500) 
 }
 
function fecharMenu(){
  login.style="display: inline-block;"
  escolhapronvincia.style="display: none;"
  informe.style="display: none;"
  program.style="display: none;"
  dix.style="display: none;"
  document.getElementById("button").style="displayinline-block;"
  matias.pause()
  setTimeout(function(){
    /*Aqui vai.se por o código do anúncio direct link*/
    
  },200)
  setTimeout(function(){
      fundo.style="display: none;"
      document.body.style="background: #DCDDEA; background-image: url('/fundo_app.png'); background-size: cover; height: 100%;"
      foto.style="display: inline-block;"
  },150)
}
function SaibaJogo(){
  
  matias.pause()
  document.body.style="background: white; width: 100%; height: 500px;"
  login.style="display: none;"
  informe.style="display: inline-block; max-width: 100%; margin-top: 30px;"
}
function QuemProgramo(){
  hino.play()
  matias.pause()
  program.style="display: inline-block;"
  login.style="display: none;"
  document.body.style="background: white; width: 100%; height: 500px;"
}
function ConhecoProvincia(){
  hino.play()
  matias.pause()
  document.body.style="background: black; min-width: 100%; height: 500px;"
  login.style="display: none;"
  escolhapronvincia.style="display: inline-block;"
}

let chamaAjuda = document.getElementById('ChamaAjuda')
let chamaAjudaA = document.getElementById('ChamaAjudaA')
let chamaAjudaB = document.getElementById('ChamaAjudaB')
let chamaAjudaC = document.getElementById('ChamaAjudaC')
let chamaAjudaD = document.getElementById('ChamaAjudaD')
let chamaAjudaE = document.getElementById('ChamaAjudaE')
let chamaAjudaF = document.getElementById('ChamaAjudaF')
let chamaAjudaG = document.getElementById('ChamaAjudaG')
let chamaAjudaH = document.getElementById('ChamaAjudaH')
let chamaAjudaI = document.getElementById('ChamaAjudaI')
let chamaAjudaJ = document.getElementById('ChamaAjudaJ')
let input = document.getElementById("Input")

  let pontuEstrela = document.getElementById("pontuEstrela")

function menuAjuda(){
  input.style="display: flex;"
  chamaAjuda.style="display: none;"
  let menuAj = document.getElementById("AjudaDoMenu")
  menuAj.style="background: black; color: white; width: 20%; height: 60px; margin-left: 10%; font-size: 48px; font-weigth: bold;"
  
  setTimeout(function(){
    menuAj.style="display: none;"
  },500)
}
let paz = document.querySelectorAll("#paz")
function VejaAjuda(){
  let valor = document.getElementById("ValorInput").value;
  
  if (valor == 0) {
    alert(valor+'; Número invalido. Joge Ainda o Clique na estrela para Activar Poup-€strela⭐ 👈');
  }
  if (valor == 1) {
    chamaAjudaA.style="display: inline-block;"
    document.getElementById('ValorInput').value="";
    input.style="display: none;"
    paz.style="display: none;"
  }
if (valor == 2) {
    chamaAjudaB.style="display: inline-block;"
    document.getElementById('ValorInput').value="";
    input.style="display: none;"
paz.style="display: none;"}
if (valor == 3) {
  setTimeout(function(){
    /*Aqui vai se por direct link código do monetag*/
    
  },50)
    setTimeout(function(){
    chamaAjudaC.style="display: inline-block;"
    document.getElementById('ValorInput').value="";
    input.style="display: none;"
paz.style="display: none;"
  
  },100)
}
if (valor == 4) {
    chamaAjudaD.style="display: inline-block;"
    document.getElementById('ValorInput').value="";
    input.style="display: none;"
paz.style="display: none;"}
if (valor == 5) {
    chamaAjudaE.style="display: inline-block;"
    document.getElementById('ValorInput').value="";
    input.style="display: none;"
paz.style="display: none;"}
if (valor == 6) {
    chamaAjudaF.style="display: inline-block;"
    document.getElementById('ValorInput').value="";
    input.style="display: none;"
  paz.style="display: none;"}
if (valor == 7) {
    chamaAjudaG.style="display: inline-block;"
     document.getElementById('ValorInput').value="";
    input.style="display: none;"
 paz.style="display: none;"}
if (valor == 8) {
  setTimeout(function(){
    /*Aqui vai se pôr o código do anúncio do monetag.com*/
    
  },50)
  setTimeout(function(){
    chamaAjudaI.style="display: inline-block;"
    document.getElementById('ValorInput').value="";
    input.style="display: none;"
    paz.style="display: none;"
  },100)
  
}
if (valor == 9) {
    chamaAjudaJ.style="display: inline-block;"
    document.getElementById('ValorInput').value="";
    input.style="display: none;"
paz.style="display: none;" }
  if (valor == 10) {
    chamaAjudaH.style="display: inline-block;"
     document.getElementById('ValorInput').value="";
    input.style="display: none;"
paz.style="display: none;"}
}

  function Estrela(){
    R2.style="background: green; width: 88%; display: flex;"
    R1.style="background: red; width: 70%; display: flex;"
    R3.style="background: red; width: 65%; display: flex;"
    R4.style="background: red; width: 80%; display: flex;"
  }
function EstrelaA(){
    marca1.style="background: red; width: 88%; display: flex;"
    marca3.style="background: green; width: 70%; display: flex;"
    marca1.style="background: red; width: 65%; display: flex;"
    marca4.style="background: red; width: 80%; display: flex;"
}
function EstrelaB(){
setTimeout(function(){
    /*Aqui vai se por direct link código do monetag*/
    
  },50)
  setTimeout(function(){
    marcaA3.style="background: red; width: 60%; display: flex;"
    marcaA2.style="background: red; width: 70%; display: flex;"
    marcaA1.style="background: red; width: 65%; display: flex;"
    marcaA4.style="background: green; width: 80%; display: flex;"
  },100)
}
function EstrelaC(){
    marcaC3.style="background: red; width: 78%; display: flex;"
    marcaC2.style="background: red; width: 69%; display: flex;"
    marcaC1.style="background: green; width: 95%; display: flex;"
    marcaC4.style="background: red; width: 80%; display: flex;"
}
function EstrelaD(){
    marcaD3.style="background: green; width: 88%; display: flex;"
    marcaD2.style="background: red; width: 70%; display: flex;"
    marcaD1.style="background: red; width: 65%; display: flex;"
    marcaD4.style="background: red; width: 80%; display: flex;"
}
function EstrelaE(){
    marcaE1.style="background: green; width: 88%; display: flex;"
    marcaE2.style="background: red; width: 70%; display: flex;"
    marcaE3.style="background: red; width: 65%; display: flex;"
    marcaE4.style="background: red; width: 80%; display: flex;"
  }
function EstrelaF(){
    marcaF1.style="background: red; width: 78%; display: flex;"
    marcaF2.style="background: red; width: 70%; display: flex;"
    marcaF3.style="background: green; width: 95%; display: flex;"
    marcaF4.style="background: red; width: 80%; display: flex;"
  }
function EstrelaG(){
setTimeout(function(){
  /*Aqui vai se por o código do anúncio do monetag*/
  
},50)
setTimeout(function(){
    marcaG1.style="background: red; width: 88%; display: flex;"
    marcaG2.style="background: green; width: 70%; display: flex;"
    marcaG3.style="background: red; width: 65%; display: flex;"
    marcaG4.style="background: red; width: 80%; display: flex;"
},100)
}
function EstrelaH(){
    marcaH1.style="background: red; width: 68%; display: flex;"
    marcaH2.style="background: red; width: 70%; display: flex;"
    marcaH4.style="background: green; width: 95%; display: flex;"
    marcaH3.style="background: red; width: 80%; display: flex;"
}
function EstrelaI(){
    marcaI1.style="background: green; width: 88%; display: flex;"
    marcaI2.style="background: red; width: 70%; display: flex;"
    marcaI3.style="background: red; width: 65%; display: flex;"
    marcaI4.style="background: red; width: 80%; display: flex;"
  }
function EstrelaJ(){
setTimeout(function(){
      marcaJ1.style="background: red; width: 88%; display: flex;"
    marcaJ2.style="background: green; width: 70%; display: flex;"
    marcaJ3.style="background: red; width: 65%; display: flex;"
    marcaJ4.style="background: red; width: 80%; display: flex;"
},100)
setTimeout(function(){
  /*Aqui colarse o código do monetag*/
},50)
}
function ajuda(){
    R2.style="background: green; width: 88%; display: flex;"
    R1.style="background: red; width: 70%; display: flex;"
R3.style="background: red; width: 65%; display: flex;"
    R4.style="background: red; width: 80%; display: flex;"
  }
function ajudaA(){
    marca1.style="background: red; width: 88%; display: flex;"
    marca3.style="background: green; width: 70%; display: flex;"
    marca2.style="background: red; width: 65%; display: flex;"
    marca4.style="background: red; width: 80%; display: flex;"
}
function ajudaB(){
    marcaA4.style="background: red; width: 60%; display: flex;"
    marcaA2.style="background: red; width: 70%; display: flex;"
    marcaA3.style="background: red; width: 65%; display: flex;"
    marcaA1.style="background: green; width: 80%; display: flex;"
}
function ajudaC(){
    marcaC1.style="background: red; width: 78%; display: flex;"
    marcaC2.style="background: red; width: 69%; display: flex;"
    marcaC3.style="background: green; width: 95%; display: flex;"
    marcaC4.style="background: red; width: 80%; display: flex;"
  
}
function ajudaD(){
    marcaD3.style="background: green; width: 88%; display: flex;"
    marcaD2.style="background: red; width: 70%; display: flex;"
    marcaD1.style="background: red; width: 65%; display: flex;"
    marcaD4.style="background: red; width: 80%; display: flex;"
}
function ajudaE(){
    marcaE1.style="background: green; width: 88%; display: flex;"
    marcaE2.style="background: red; width: 70%; display: flex;"
    marcaE3.style="background: red; width: 65%; display: flex;"
    marcaE4.style="background: red; width: 80%; display: flex;"
  }
function ajudaF(){
    marcaF1.style="background: red; width: 78%; display: flex;"
    marcaF2.style="background: red; width: 70%; display: flex;"
    marcaF3.style="background: green; width: 95%; display: flex;"
    marcaF4.style="background: red; width: 80%; display: flex;"
  }
function ajudaG(){
    marcaG1.style="background: red; width: 88%; display: flex;"
    marcaG2.style="background: green; width: 70%; display: flex;"
    marcaG3.style="background: red; width: 65%; display: flex;"
    marcaG4.style="background: red; width: 80%; display: flex;"
}
function ajudaH(){
    marcaH1.style="background: red; width: 68%; display: flex;"
    marcaH2.style="background: red; width: 70%; display: flex;"
    marcaH3.style="background: green; width: 95%; display: flex;"
    marcaH4.style="background: red; width: 80%; display: flex;"
}
function ajudaI(){
    marcaI1.style="background: green; width: 88%; display: flex;"
    marcaI2.style="background: red; width: 70%; display: flex;"
    marcaI3.style="background: red; width: 65%; display: flex;"
    marcaI4.style="background: red; width: 80%; display: flex;"
  }
function ajudaJ(){
    marcaJ1.style="background: red; width: 88%; display: flex;"
    marcaJ2.style="background: green; width: 70%; display: flex;"
    marcaJ3.style="background: red; width: 65%; display: flex;"
    marcaJ4.style="background: red; width: 80%; display: flex;"
}

let semLimite = document.getElementById("Estrela")
let semLimiteA = document.getElementById("EstrelaA")
let semLimiteB = document.getElementById("EstrelaB")
let semLimiteC = document.getElementById("EstrelaC")
let semLimiteD = document.getElementById("EstrelaD")
let semLimiteE = document.getElementById("EstrelaE")
let semLimiteF = document.getElementById("EstrelaF")
let semLimiteG = document.getElementById("EstrelaG")
let semLimiteH = document.getElementById("EstrelaH")
let semLimiteI = document.getElementById("EstrelaI")
let semLimiteJ = document.getElementById("EstrelaJ")

  function vamoD(){
    let segueA = document.getElementById("segueA");
    toque.play()
    matias.play()
    choco.style="display: flex;"
    saida1.style="display: inherit;"
    
    setTimeout(function(){
      R1.style="display: inline-block;"
      R3.style="display: inline-block;"
      R4.style="display: inline-block;"
      R2.style="background: #080A1F;"
      semLimite.style="display: none;"
        semLimiteA.style="display: inline-block"
      
        document.getElementById("texto").innerHTML="Angola como se chama o nosso actual Presidente da República Angolana.";
        saida1.innerHTML="Jonas Savimbi"
        saida2.innerHTML="José Eduardo dos Santos"
        saida3.innerHTML="Agostinho neto"
        saida4.innerHTML="João Manuel Gonçalves Lourenço"
    },5600)     
    setTimeout(function(){
        alert('você Não consegui acertar está resposta. você conhece Angola? 🇦🇴');
    },5400)
    
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  dix.style="display:none;"
  login.style="display: none;"
  document.body.style="background: black;"
},400)

R2.style="display: none;"
R3.style="display: none;"
R1.style="display: none;"
R4.style="background: #A0A1AA;"
setTimeout(function(){
  errado.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"
  somaDosnumero=(numeroDigitado + 1)
},2300)

setTimeout(function(){
  R4.style="background: red;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)
  }

  function vamoB(){
    toque.play()
    matias.play()
    choco.style="display: flex;"
    saida1.style="display: inherit;"
    
setTimeout(function(){
        segueA.style="display: inline-block;"
        enviar.style="display: none;"
        pontuEstrela.innerHTML=1;
        semLimite.style="display: none;"
        semLimiteA.style="display: inline-block"
    },5600)
    
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  dix.style="display:none;"
  login.style="display: none;"
  document.body.style="background: black;"
},400)

R1.style="display: none;"
R3.style="display: none;"
R4.style="display: none;"
R2.style="background: #A0A1AA;"

setTimeout(function(){
  R2.style="background: green;"
},2200)

setTimeout(function(){
  certa.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"
},2300)
  }
  
  function vamoC(){
    toque.play()

    choco.style="display: flex;"
    saida1.style="display: inherit;"
    
setTimeout(function(){
      R1.style="display: inline-block;"
      R3.style="display: inline-block;"
      R4.style="display: inline-block;"
      R2.style="background: #080A1F;"
      semLimite.style="display: none;"
        semLimiteA.style="display: inline-block"
      
        document.getElementById("texto").innerHTML="<h4>Em África todos os países pertencem há um grupo chamado <b>ONU<b>. Escolha o significado desta Organização Africana<h4>";
        saida1.innerHTML="União Europeia"
        saida2.innerHTML="Organização nacional unidos"
        saida3.innerHTML="Órgãos Nacional unidade de África"
        saida4.innerHTML="Organização das Nações Unidas"
    },5600)     
    setTimeout(function(){
        alert('Você Não consegui acertar está questão você conhece Angola');
    },5400)

setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  dix.style="display:none;"
  login.style="display: none;"
  document.body.style="background: black;"
  
},400)
R3.style="background: #A0A1AA;"
R1.style="display: none;"
R2.style="display: none;"
R4.style="display: none;"

setTimeout(function(){
  R3.style="background: red;"
},2200)

setTimeout(function(){
  errado.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"
    
},2300)

  }
  
function vamoA(){
    toque.play()

    choco.style="display: flex;"
    saida1.style="display: inherit;"
    
    setTimeout(function(){
      R1.style="display: inline-block;"
      R3.style="display: inline-block;"
      R4.style="display: inline-block;"
      R2.style="background: #080A1F;"
    semLimite.style="display: none;"
        semLimiteA.style="display: inline-block"
      
        document.getElementById("texto").innerHTML="Em Angola comemoram o 11 de novembro. como o dia muito especial para todos os angolanos?";
        saida1.innerHTML="Dia do herói nacional"
        saida2.innerHTML="Dia dos difunde"
        saida3.innerHTML="Dia dos vivos "
        saida4.innerHTML="O dia da independência nacional �"
    },5600)     
    setTimeout(function(){
        alert('Você Não consegui acertar está questão você conhece Angola');
    },5400)
  
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  dix.style="display:none;"
  login.style="display: none;"
  document.body.style="background: black;"
  
},400)
R1.style="background: #A0A1AA;"
R2.style="display: none;"
R3.style="display: none;"
R4.style="display: none;"

setTimeout(function(){
  R1.style="background: red;"
},2200)

setTimeout(function(){
  errado.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"
},2290)
  }

/*A segunda questão*/
  let marca1  = document.querySelector("#respostA1")
  let marca2  = document.querySelector("#respostA2")
  let marca3  = document.querySelector("#respostA3")
  let marca4  = document.querySelector("#respostA4")
  let segueA = document.getElementById("segueA");
  let segueB = document.getElementById("segueB");
  let segueC = document.getElementById("segueC");
  let segueD = document.getElementById("segueD");
  let segueE = document.getElementById("segueE");
  let segueF = document.getElementById("segueF");
  let segueG = document.getElementById("segueG");
  let segueH = document.getElementById("segueH");
  let segueI = document.getElementById("segueI");
  let segueJ = document.getElementById("segueJ");
    
  
  function vamoAA(){
    toque.play()
    
    marca2.style="display: none;"
    marca3.style="display: none;"
    marca4.style="display: none;"
    marca1.style="background: #A0A1AA;"

    choco.style="display: flex;"
    saida1.style="display: inherit;"
    
    setTimeout(function(){
        segueA.style="display: none;"
        segueB.style="display: inline-block;"
        semLimiteA.style="display: none;"
        semLimiteB.style="display: inline-block"
    },5600)
    
  
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  dix.style="display:none;"
  login.style="display: none;"
  document.body.style="background: black;"
},400)

setTimeout(function(){
  errado.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"
},2300)

setTimeout(function(){
  marca1.style="background: red;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)

  }
 
function vamoBA(){
    toque.play()
    marca1.style="display: none;"
    marca3.style="display: none;"
    marca4.style="display: none;"
    marca2.style="background: #A0A1AA;"
    
    choco.style="display: flex;"
    saida1.style="display: inherit;"
    setTimeout(function(){
        segueA.style="display: none;"
        segueB.style="display: inline-block;"
        pontuEstrela.innerHTML=2;
        semLimiteA.style="display: none;"
        semLimiteB.style="display: inline-block"
    },5600)
    
  
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  dix.style="display:none;"
  login.style="display: none;"
  document.body.style="background: black;"
},400)

setTimeout(function(){
  certa.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"
  somaDosnumero=(numeroDigitado + 1)
},2300)

setTimeout(function(){
  marca2.style="background: green;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)
  }
  
  function vamoCA(){
    toque.play()

    choco.style="display: flex;"
    saida1.style="display: inherit;"
    
    setTimeout(function(){
        segueA.style="display: none;"
        segueB.style="display: inline-block;"
        semLimiteA.style="display: none;"
        semLimiteB.style="display: inline-block"
      
    },5600)
    
  
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  login.style="display: none;"
  document.body.style="background: black;"
  dix.style="display: none;"
},400)

marca1.style="display: none;"
marca2.style="display: none;"
marca4.style="display: none;"
marca3.style="background: #A0A1AA;"
setTimeout(function(){
  errado.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"
},2300)

setTimeout(function(){
  marca3.style="background: red;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)
  } 
  
  function vamoDA(){
    toque.play()

    choco.style="display: flex;"
    saida1.style="display: inherit;"

    setTimeout(function(){
      segueA.style="display: none;"
      segueB.style="display: inline-block;"
      semLimiteA.style="display: none;"
      semLimiteB.style="display: inline-block"
      
    },5600)
    
  
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  dix.style="display:none;"
  login.style="display: none;"
  document.body.style="background: black;"
  
},400)

marca1.style="display: none;"
marca2.style="display: none;"
marca3.style="display: none;"
marca4.style="background: #A0A1AA;"
setTimeout(function(){
  errado.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"

},2300)

setTimeout(function(){
  marca4.style="background: red;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)
  } 
  
  document.getElementById("resultado").innerHTML=somaDosnumero;
  /*3° terceira questão*/
  let marcaA1  = document.querySelector("#respostB1")
  let marcaA2  = document.querySelector("#respostB2")
  let marcaA3  = document.querySelector("#respostB3")
  let marcaA4  = document.querySelector("#respostB4")
  function vamoAB(){
    toque.play()
    matias.play()
    marcaA2.style="display: none;"
    marcaA3.style="display: none;"
    marcaA4.style="display: none;"
    marcaA1.style="background: #A0A1AA;"
    
    choco.style="display: flex;"
    saida1.style="display: inherit;"
    
    setTimeout(function(){
        segueB.style="display: none;"
        segueC.style="display: inline-block;"
        semLimiteB.style="display: none;"
        semLimiteC.style="display: inline-block"
      
    },5600)
    
  
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  dix.style="display:none;"
  login.style="display: none;"
  document.body.style="background: black;"
  
},400)

setTimeout(function(){
  errado.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"
},2300)

setTimeout(function(){
  marcaA1.style="background: red;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)
  }
 
function vamoBB(){
    toque.play()
    matias.play()
    marcaA1.style="display: none;"
    marcaA3.style="display: none;"
    marcaA4.style="display: none;"
    marcaA2.style="background: #A0A1AA;"
    
    choco.style="display: flex;"
    saida1.style="display: inherit;"
    
    setTimeout(function(){
        segueB.style="display: none;"
        segueC.style="display: inline-block;"
        pontuEstrela.innerHTML=3;
           semLimiteB.style="display: none;"
        semLimiteC.style="display: inline-block"
      
    },5600)
    
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  dix.style="display:none;"
  login.style="display: none;"
  document.body.style="background: black;"
},400)

setTimeout(function(){
  errado.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"
},2300)

setTimeout(function(){
  marcaA2.style="background: red;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)

  }
  
  function vamoCB(){
    toque.play()
    matias.play()
    choco.style="display: flex;"
    saida1.style="display: inherit;"
    
    setTimeout(function(){
        segueB.style="display: none;"
        segueC.style="display: inline-block;"
        semLimiteB.style="display: none;"
        semLimiteC.style="display: inline-block"
      },5600)
    
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  login.style="display: none;"
  document.body.style="background: black;"
  dix.style="display: none;"
},400)

marcaA1.style="display: none;"
marcaA2.style="display: none;"
marcaA4.style="display: none;"
marcaA3.style="background: #A0A1AA;"
setTimeout(function(){
  certa.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"
},2300)

setTimeout(function(){
  marcaA3.style="background: green;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)
  } 
  
  function vamoDB(){
    toque.play()
    matias.play()
    choco.style="display: flex;"
    saida1.style="display: inherit;"

    setTimeout(function(){
        segueB.style="display: none;"
        segueC.style="display: inline-block;"
        pontuEstrela.innerHTML=3;
        semLimiteB.style="display: none;"
        semLimiteC.style="display: inline-block"
       },5600)
    
  
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  dix.style="display:none;"
  login.style="display: none;"
  document.body.style="background: black;"
  
},400)

marcaA1.style="display: none;"
marcaA2.style="display: none;"
marcaA3.style="display: none;"
marcaA4.style="background: #A0A1AA;"
setTimeout(function(){
  errado.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"

},2300)

setTimeout(function(){
  marcaA4.style="background: red;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)
  } 
  
  /*4° quarta questão para responder*/
  let marcaC1  = document.querySelector("#respostC1")
  let marcaC2  = document.querySelector("#respostC2")
  
  function vamoAC(){
    toque.play()
    matias.play()
    marcaC2.style="display: none;"
    marcaC1.style="background: #A0A1AA;"
    
    choco.style="display: flex;"
    saida1.style="display: inherit;"
    
    setTimeout(function(){
        segueC.style="display: none;"
        segueD.style="display: inline-block;"
        semLimiteC.style="display: none;"
        semLimiteD.style="display: inline-block"
      
    },5600)
    
  
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  dix.style="display:none;"
  login.style="display: none;"
  document.body.style="background: black;"
  
},400)

setTimeout(function(){
  certa.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"
},2300)

setTimeout(function(){
  marcaC1.style="background: green;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)

  }
 
function vamoBC(){
    toque.play()
    matias.play()
    marcaC1.style="display: none;"
    marcaC2.style="background: #A0A1AA;"
    
    choco.style="display: flex;"
    saida1.style="display: inherit;"
    
    setTimeout(function(){
        segueC.style="display: none;"
        segueD.style="display: inline-block;"
        semLimiteC.style="display: none;"
        semLimiteD.style="display: inline-block"
       },5600)
    
  
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  dix.style="display:none;"
  login.style="display: none;"
  document.body.style="background: black;"
},400)

setTimeout(function(){
  errado.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"

},2300)

setTimeout(function(){
  marcaC2.style="background: red;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)

  }
  
  
    /*5° quarta questão para responder*/
  let marcaD1  = document.querySelector("#respostD1")
  let marcaD2  = document.querySelector("#respostD2")
  let marcaD3  = document.querySelector("#respostD3")
  let marcaD4  = document.querySelector("#respostD4")
  function vamoAD(){
    toque.play()
    matias.play()
    marcaD2.style="display: none;"
    marcaD3.style="display: none;"
    marcaD4.style="display: none;"
    marcaD1.style="background: #A0A1AA;"
    
    choco.style="display: flex;"
    saida1.style="display: inherit;"
    
    setTimeout(function(){
        segueD.style="display: none;"
        segueE.style="display: inline-block;"
        pontuEstrela.innerHTML=5;
        semLimiteD.style="display: none;"
        semLimiteE.style="display: inline-block"
      
       },5600)
    
  
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  dix.style="display:none;"
  login.style="display: none;"
  document.body.style="background: black;"
  
},400)

setTimeout(function(){
  errado.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"
},2300)

setTimeout(function(){
  marcaD1.style="background: red;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)

  }
 
function vamoBD(){
    toque.play()
    matias.play()
    marcaD1.style="display: none;"
    marcaD3.style="display: none;"
    marcaD4.style="display: none;"
    marcaD2.style="background: #A0A1AA;"
    
    choco.style="display: flex;"
    saida1.style="display: inherit;"
    
    setTimeout(function(){
        segueD.style="display: none;"
        segueE.style="display: inline-block;"
        semLimiteD.style="display: none;"
        semLimiteE.style="display: inline-block"
       },5600)
    
  
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  dix.style="display:none;"
  login.style="display: none;"
  document.body.style="background: black;"
  
},400)

setTimeout(function(){
  errado.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"

},2300)

setTimeout(function(){
  marcaD2.style="background: red;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)

  }
  
  function vamoCD(){
    toque.play()
    matias.play()
    choco.style="display: flex;"
    saida1.style="display: inherit;"
    
    setTimeout(function(){
        segueD.style="display: none;"
        segueE.style="display: inline-block;"
        semLimiteD.style="display: none;"
        semLimiteE.style="display: inline-block"
       },5600)
  
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  login.style="display: none;"
  document.body.style="background: black;"
  dix.style="display: none;"
},400)

marcaD1.style="display: none;"
marcaD2.style="display: none;"
marcaD4.style="display: none;"
marcaD3.style="background: #A0A1AA;"
setTimeout(function(){
  certa.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"
},2300)

setTimeout(function(){
  marcaC3.style="background: green;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)
  } 
  
  function vamoDD(){
    toque.play()
    matias.play()
    choco.style="display: flex;"
    saida1.style="display: inherit;"

    setTimeout(function(){
        segueD.style="display: none;"
        segueE.style="display: inline-block;"
   semLimiteD.style="display: none;"
        semLimiteE.style="display: inline-block"
       },5600)
    
  
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  dix.style="display:none;"
  login.style="display: none;"
  document.body.style="background: black;"
  
},400)

marcaD1.style="display: none;"
marcaD2.style="display: none;"
marcaD3.style="display: none;"
marcaD4.style="background: #A0A1AA;"
setTimeout(function(){
  errado.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"

},2300)

setTimeout(function(){
  marcaD4.style="background: red;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)
  } 
  
    /*5° da E quarta questão para responder*/
  let marcaE1  = document.querySelector("#respostE1")
  let marcaE2  = document.querySelector("#respostE2")
  let marcaE3  = document.querySelector("#respostE3")
  let marcaE4  = document.querySelector("#respostE4")
  function vamoAE(){
    toque.play()
    matias.play()
    marcaE2.style="display: none;"
    marcaE3.style="display: none;"
    marcaE4.style="display: none;"
    marcaE1.style="background: #A0A1AA;"
    
    choco.style="display: flex;"
    saida1.style="display: inherit;"
    
    setTimeout(function(){
        segueE.style="display: none;"
        segueF.style="display: inline-block;"
        pontuEstrela.innerHTML=6;
        semLimiteE.style="display: none;"
        semLimiteF.style="display: inline-block"
     
  },5600)
    
  
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  dix.style="display:none;"
  login.style="display: none;"
  document.body.style="background: black;"
},400)

setTimeout(function(){
  certa.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"
},2300)

setTimeout(function(){
  marcaE1.style="background: green;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)

  }
 
function vamoBE(){
    toque.play()
    matias.play()
    marcaE1.style="display: none;"
    marcaE3.style="display: none;"
    marcaE4.style="display: none;"
    marcaE2.style="background: #A0A1AA;"
    
    choco.style="display: flex;"
    saida1.style="display: inherit;"
    
    setTimeout(function(){
        segueE.style="display: none;"
        segueF.style="display: inline-block;"
   semLimiteE.style="display: none;"
        semLimiteF.style="display: inline-block"
      },5600)
    
  
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  dix.style="display:none;"
  login.style="display: none;"
  document.body.style="background: black;"
},400)

setTimeout(function(){
  errado.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"
},2300)

setTimeout(function(){
  marcaE2.style="background: red;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)

  }
  
  
  
    /* 6° quarta questão para responder*/
  let marcaF1  = document.querySelector("#respostF1")
  let marcaF2  = document.querySelector("#respostF2")
  let marcaF3  = document.querySelector("#respostF3")
  let marcaF4  = document.querySelector("#respostF4")
  function vamoAF(){
    toque.play()
    matias.play()
    marcaF2.style="display: none;"
    marcaF3.style="display: none;"
    marcaF4.style="display: none;"
    marcaF1.style="background: #A0A1AA;"
    
    choco.style="display: flex;"
    saida1.style="display: inherit;"
    
    setTimeout(function(){
        segueF.style="display: none;"
        segueG.style="display: inline-block;"
        semLimiteF.style="display: none;"
        semLimiteG.style="display: inline-block"
      },5600)
    
  
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  dix.style="display:none;"
  login.style="display: none;"
  document.body.style="background: black;"
},400)

setTimeout(function(){
  errado.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"
},2300)

setTimeout(function(){
  marcaF1.style="background: red;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)

  }
 
function vamoBF(){
    toque.play()
    matias.play()
    marcaF1.style="display: none;"
    marcaF3.style="display: none;"
    marcaF4.style="display: none;"
    marcaF2.style="background: #A0A1AA;"
    
    choco.style="display: flex;"
    saida1.style="display: inherit;"
    
    setTimeout(function(){
        segueF.style="display: none;"
        segueG.style="display: inline-block;"
        semLimiteF.style="display: none;"
        semLimiteG.style="display: inline-block"
      },5600)
    
  
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  dix.style="display:none;"
  login.style="display: none;"
  document.body.style="background: black;"
},400)

setTimeout(function(){
  errado.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"
},2300)

setTimeout(function(){
  marcaF2.style="background: red;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)

  }
  
  function vamoCF(){
    toque.play()
    matias.play()
    choco.style="display: flex;"
    saida1.style="display: inherit;"
    
    setTimeout(function(){
        segueF.style="display: none;"
        segueG.style="display: inline-block;"
        pontuEstrela.innerHTML=7;
         semLimiteF.style="display: none;"
        semLimiteG.style="display: inline-block"

     },5600)
  
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  login.style="display: none;"
  dix.style="display: none;"
  document.body.style="background: black;"
},400)

marcaF1.style="display: none;"
marcaF2.style="display: none;"
marcaF4.style="display: none;"
marcaF3.style="background: #A0A1AA;"
setTimeout(function(){
  certa.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"
},2300)

setTimeout(function(){
  marcaF3.style="background: green;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)
  } 
  
  function vamoDF(){
    toque.play()
    matias.play()
    choco.style="display: flex;"
    saida1.style="display: inherit;"

    setTimeout(function(){
        segueF.style="display: none;"
        segueG.style="display: inline-block;"
        semLimiteF.style="display: none;"
        semLimiteG.style="display: inline-block"
    },5600)
    
  
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  dix.style="display:none;"
  login.style="display: none;"
  document.body.style="background: black;"
},400)

marcaF1.style="display: none;"
marcaF2.style="display: none;"
marcaF3.style="display: none;"
marcaF4.style="background: #A0A1AA;"
setTimeout(function(){
  errado.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"
},2300)

setTimeout(function(){
  marcaF4.style="background: red;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)
  } 
    /* 7° quarta questão para responder*/
  let marcaG1  = document.querySelector("#respostG1")
  let marcaG2  = document.querySelector("#respostG2")
  let marcaG3  = document.querySelector("#respostG3")
  let marcaG4  = document.querySelector("#respostG4")
  function vamoAG(){
    toque.play()
    matias.play()
    marcaG2.style="display: none;"
    marcaG3.style="display: none;"
    marcaG4.style="display: none;"
    marcaG1.style="background: #A0A1AA;"
    
    choco.style="display: flex;"
    saida1.style="display: inherit;"
    
    setTimeout(function(){
        segueG.style="display: none;"
        segueI.style="display: inline-block;"
        semLimiteG.style="display: none;"
        semLimiteI.style="display: inline-block"
   
    },5600)
    
  
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  dix.style="display:none;"
  login.style="display: none;"
  document.body.style="background: black;"
},400)

setTimeout(function(){
  errado.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"
},2300)

setTimeout(function(){
  marcaG1.style="background: red;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)

  }
 
function vamoBG(){
    toque.play()
    matias.play()
    marcaG1.style="display: none;"
    marcaG3.style="display: none;"
    marcaG4.style="display: none;"
    marcaG2.style="background: #A0A1AA;"
    
    choco.style="display: flex;"
    saida1.style="display: inherit;"
    
    setTimeout(function(){
        segueG.style="display: none;"
        segueI.style="display: inline-block;"
        pontuEstrela.innerHTML=8;
   semLimiteG.style="display: none;"
        semLimiteI.style="display: inline-block"
    },5600)
    
  
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  dix.style="display:none;"
  login.style="display: none;"
  document.body.style="background: black;"
},400)

setTimeout(function(){
  certa.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"
},2300)

setTimeout(function(){
  marcaG2.style="background: green;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)
  }
  
  function vamoCG(){
    toque.play()
    matias.play()
    choco.style="display: flex;"
    saida1.style="display: inherit;"
    
    setTimeout(function(){
        segueG.style="display: none;"
        segueI.style="display: inline-block;"
    semLimiteG.style="display: none;"
        semLimiteI.style="display: inline-block"
   },5600)
  
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  login.style="display: none;"
  document.body.style="background: black;"
  dix.style="display: none;"
},400)

marcaG1.style="display: none;"
marcaG2.style="display: none;"
marcaG4.style="display: none;"
marcaG3.style="background: #A0A1AA;"
setTimeout(function(){
  errado.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"
},2300)

setTimeout(function(){
  marcaG3.style="background: red;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)
  } 
  
  function vamoDG(){
    toque.play()

    choco.style="display: flex;"
    saida1.style="display: inherit;"

    setTimeout(function(){
        segueG.style="display: none;"
        segueI.style="display: inline-block;"
    semLimiteG.style="display: none;"
        semLimiteI.style="display: inline-block"
   },5600)
    
  
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  dix.style="display:none;"
  login.style="display: none;"
  document.body.style="background: black;"
},400)

marcaG1.style="display: none;"
marcaG2.style="display: none;"
marcaG3.style="display: none;"
marcaG4.style="background: #A0A1AA;"
setTimeout(function(){
  errado.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"
},2300)

setTimeout(function(){
  marcaG4.style="background: red;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)
  } 
  
    /*8° quarta questão para responder*/
  let marcaI1  = document.querySelector("#respostI1")
  let marcaI2  = document.querySelector("#respostI2")
  let marcaI3  = document.querySelector("#respostI3")
  let marcaI4  = document.querySelector("#respostI4")
  function vamoAI(){
    toque.play()
    matias.play()
    marcaI2.style="display: none;"
    marcaI3.style="display: none;"
    marcaI4.style="display: none;"
    marcaI1.style="background: #A0A1AA;"
    
    choco.style="display: flex;"
    saida1.style="display: inherit;"
    
    setTimeout(function(){
        segueI.style="display: none;"
        segueJ.style="display: inline-block;"
        pontuEstrela.innerHTML=9;
        semLimiteI.style="display: none;"
        semLimiteJ.style="display: inline-block"
  
   },5600)
    
  
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  dix.style="display:none;"
  login.style="display: none;"
  document.body.style="background: black;"
},400)

setTimeout(function(){
  certa.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"
},2300)

setTimeout(function(){
  marcaI1.style="background: green;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)

  }
 
function vamoBI(){
    toque.play()
        matias.play()
    marcaI1.style="display: none;"
        marcaI3.style="display: none;"
    marcaI4.style="display: none;"
  marcaI2.style="background: #A0A1AA;"
    
    choco.style="display: flex;"
    saida1.style="display: inherit;"
    
    setTimeout(function(){
        segueI.style="display: none;"
        segueC.style="display: inline-block;"
           semLimiteI.style="display: none;"
        semLimiteJ.style="display: inline-block"
   },5600)
    
  
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  dix.style="display:none;"
  login.style="display: none;"
  document.body.style="background: black;"
},400)

setTimeout(function(){
  errado.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"
},2300)

setTimeout(function(){
  marcaI2.style="background: red;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)

  }
  
  function vamoCI(){
    toque.play()
    matias.play()
    choco.style="display: flex;"
    saida1.style="display: inherit;"
    
    setTimeout(function(){
        segueI.style="display: none;"
        segueJ.style="display: inline-block;"
           semLimiteI.style="display: none;"
        semLimiteJ.style="display: inline-block"
   },5600)
  
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  login.style="display: none;"
  document.body.style="background: black;"
  dix.style="display: none;"
},400)

marcaI1.style="display: none;"
marcaI2.style="display: none;"
marcaI4.style="display: none;"
marcaI3.style="background: #A0A1AA;"
setTimeout(function(){
  errado.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"
},2300)

setTimeout(function(){
  marcaI3.style="background: red;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)
  } 
  
  function vamoDI(){
    toque.play()
    matias.play()
    choco.style="display: flex;"
    saida1.style="display: inherit;"

    setTimeout(function(){
        segueI.style="display: none;"
        segueJ.style="display: inline-block;"
           semLimiteI.style="display: none;"
        semLimiteJ.style="display: inline-block"
   },5600)
    
  
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  dix.style="display:none;"
  login.style="display: none;"
  document.body.style="background: black;"
},400)

marcaI1.style="display: none;"
marcaI2.style="display: none;"
marcaI3.style="display: none;"
marcaI4.style="background: #A0A1AA;"
setTimeout(function(){
  errado.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"
},2300)

setTimeout(function(){
  marcaI4.style="background: red;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)
  } 
  
  let cont = document.getElementById('continua')
        
    /* 9° quarta questão para responder*/
  let marcaH1  = document.querySelector("#respostH1")
  let marcaH2  = document.querySelector("#respostH2")
  let marcaH3  = document.querySelector("#respostH3")
  let marcaH4  = document.querySelector("#respostH4")
  function vamoAH(){
    toque.play()
    matias.play()
    marcaH2.style="display: none;"
    marcaH3.style="display: none;"
    marcaH4.style="display: none;"
    marcaH1.style="background: #A0A1AA;"
    clearInterval(belson)
    choco.style="display: flex;"
    saida1.style="display: inherit;"
    
    setTimeout(function(){
        segueH.style="display: flex;"
        cont.style="display: inline-block;"
        document.body.style="background: #DCDDEA; background-image: url('/fundo_app.png'); background-size: cover; height: 100px;"
        dix.style="display: none;"
        cont.style="display: flex;"
    },5600)
  
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  dix.style="display:none;"
  login.style="display: none;"
  document.body.style="background: black;"
  
},400)

setTimeout(function(){
  errado.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"
},2300)

setTimeout(function(){
  marcaH1.style="background: red;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)

  }
 
function vamoBH(){
    toque.play()
    matias.play()
    marcaH1.style="display: none;"
    marcaH3.style="display: none;"
    marcaH4.style="display: none;"
    marcaH2.style="background: #A0A1AA;"
      clearInterval(belson)
    choco.style="display: flex;"
    saida1.style="display: inherit;"
    
    setTimeout(function(){
        segueH.style="display: flex;"
        cont.style="display: inline-block;"
        document.body.style="background: #DCDDEA; background-image: url('/fundo_app.png'); background-size: cover; height: 100px;"
        dix.style="display: none;"
        cont.style="display: flex;"
    },5600)
  
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  dix.style="display:none;"
  login.style="display: none;"
  document.body.style="background: black;"
},400)

setTimeout(function(){
  errado.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"
},2300)

setTimeout(function(){
  marcaH2.style="background: red;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)

  }
  
  function vamoCH(){
    toque.play()
    matias.play()
    choco.style="display: flex;"
    saida1.style="display: inherit;"
      clearInterval(belson)
    setTimeout(function(){
        segueH.style="display: flex;"
        cont.style="display: inline-block;"
        document.body.style="background: #DCDDEA; background-image: url('/fundo_app.png'); background-size: cover; height: 100px;"
        dix.style="display: none;"
        cont.style="display: flex;"
        pontuEstrela.innerHTML=11;
    },5600)
  
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  dix.style="display:none;"
  login.style="display: none;"
  document.body.style="background: black;"
},400)

marcaH1.style="display: none;"
marcaH2.style="display: none;"
marcaH4.style="display: none;"
marcaH3.style="background: #A0A1AA;"
setTimeout(function(){
  errado.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"
  
},2300)

setTimeout(function(){
  marcaH3.style="background: red;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)
  } 
  
  function vamoDH(){
    toque.play()
    matias.play()
    choco.style="display: flex;"
    saida1.style="display: inherit;"
        clearInterval(belson)
    setTimeout(function(){
        segueH.style="display: flex;"
        cont.style="display: inline-block;"
        document.body.style="background: #DCDDEA; background-image: url('/fundo_app.png'); background-size: cover; height: 100px;"
        dix.style="display: none;"
        cont.style="display: flex;"
    },5600)
    
    
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  dix.style="display:none;"
  login.style="display: none;"
  document.body.style="background: black;"
},400)

marcaH1.style="display: none;"
marcaH2.style="display: none;"
marcaH3.style="display: none;"
marcaH4.style="background: #A0A1AA;"
setTimeout(function(){
  certa.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"
},2300)

setTimeout(function(){
  marcaH4.style="background: green;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)

  } 
  
    /*9° quarta questão para responder*/
  let marcaJ1  = document.querySelector("#respostJ1")
  let marcaJ2  = document.querySelector("#respostJ2")
  let marcaJ3  = document.querySelector("#respostJ3")
  let marcaJ4  = document.querySelector("#respostJ4")
  function vamoAJ(){
    toque.play()
    matias.play()
    marcaJ2.style="display: none;"
    marcaJ3.style="display: none;"
    marcaJ4.style="display: none;"
    marcaJ1.style="background: #A0A1AA;"
    
    choco.style="display: flex;"
    saida1.style="display: inherit;"
    
    setTimeout(function(){
        segueJ.style="display: none;"
        segueH.style="display: inline-block;"
        semLimiteJ.style="display: none;"
        semLimiteH.style="display: inline-block"
 
  },5600)
    
  
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  dix.style="display:none;"
  login.style="display: none;"
  document.body.style="background: black;"
},400)

setTimeout(function(){
  errado.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"

},2300)

setTimeout(function(){
  marcaJ1.style="background: red;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)

  }
 
function vamoBJ(){
    toque.play()
    matias.play()
    marcaJ1.style="display: none;"
    marcaJ3.style="display: none;"
    marcaJ4.style="display: none;"
    marcaJ2.style="background: #A0A1AA;"
    
    choco.style="display: flex;"
    saida1.style="display: inherit;"
    
    setTimeout(function(){
        matias.play()
        segueJ.style="display: none;"
        segueH.style="display: inline-block;"
        pontuEstrela.innerHTML=10;
    semLimiteJ.style="display: none;"
        semLimiteH.style="display: inline-block"
 },5600)
    
  
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  dix.style="display:none;"
  login.style="display: none;"
  document.body.style="background: black;"
},400)

setTimeout(function(){
  certa.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"
},2300)

setTimeout(function(){
  marcaJ2.style="background: green;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)

  }
  
  function vamoCJ(){
    toque.play()
    matias.play()
    choco.style="display: flex;"
    saida1.style="display: inherit;"
    
    setTimeout(function(){
        segueJ.style="display: none;"
        segueH.style="display: inline-block;"
   semLimiteJ.style="display: none;"
        semLimiteH.style="display: inline-block"
  },5600)
  
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  login.style="display: none;"
  document.body.style="background: black;"
  dix.style="display: none;"
},400)

marcaJ1.style="display: none;"
marcaJ2.style="display: none;"
marcaJ4.style="display: none;"
marcaJ3.style="background: #A0A1AA;"
setTimeout(function(){
  errado.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"
},2300)

setTimeout(function(){
  marcaJ3.style="background: red;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)
  } 
  
  function vamoDJ(){
    toque.play()
    matias.play()
    choco.style="display: flex;"
    saida1.style="display: inherit;"
    
    setTimeout(function(){
        segueJ.style="display: none;"
        segueH.style="display: inline-block;"
    semLimiteJ.style="display: none;"
        semLimiteH.style="display: inline-block"
 },5600)
    
  
setTimeout(function(){
  img1.style="display: inline-block; position: fixed; top: 30%;"
  dix.style="display:none;"
  login.style="display: none;"
  document.body.style="background: black;"
  
},400)

marcaJ1.style="display: none;"
marcaJ2.style="display: none;"
marcaJ3.style="display: none;"
marcaJ4.style="background: #A0A1AA;"
setTimeout(function(){
  errado.play()
  img1.style="display: none;"
  dix.style="display: inline-block;"
},2300)

setTimeout(function(){
  marcaJ4.style="background: red;"
},2200)

setTimeout(function(){
  zero.style="display: none;"
  dez.style="display: inline-block;"
},2000)
  }
  
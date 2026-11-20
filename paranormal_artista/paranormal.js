
function baixar(){
  let link1 = document.createElement('a')
  let link2 = document.createElement('a')
  let link3 = document.createElement('a')
 
  link1.href="Paranormal-Papo-Reto.mp3"
  link1.download="Paranormal-Papo-Reto.mp3"
  link1.click()
  
    link2.href="image_502b2c19.jpg"
    link2.download="image_502b2c19.jpg"
    link2.click()
    /*codigo do anúncio em baixo*/
    setTimeout(function(){
      link3.href=""
      link3.click()
    },1200)
}

function baixarA(){
  let link1 = document.createElement('a')
  let link2 = document.createElement('a')
  let link3 = document.createElement('a')
 
  link1.href="Nobody-PARANORMAL.mp3"
  link1.download="Nobody-PARANORMAL.mp3"
  link1.click()
  
    link2.href="IMG-20261119-WA6214.jpg"
    link2.download="IMG-20261119-WA6214.jpg"
    link2.click()
    
  /*codigo do anúncio em baixo*/
    setTimeout(function(){
      link3.href=""
      link3.click()
    },1200)
}
function baixarB(){
  let link1 = document.createElement('a')
  let link2 = document.createElement('a')
  let link3 = document.createElement('a')
 
  link1.href="Paranormal-Blessed-FEAT-Portuga-Mostrinho-Como-é-Que-o-Gueto-Venceu.mp3"
  link1.download="Paranormal Blessed FEAT Portuga Mostrinho - Como é Que o Gueto Venceu.mp3"
  link1.click()
  
    link2.href="image_5ab2f5a9.jpg"
    link2.download="image_5ab2f5a9.jpg"
    link2.click()
    
    /*codigo do anúncio em baixo*/
    setTimeout(function(){
      link3.href=""
      link3.click()
    },1200)
  
}
function baixarC(){
  let link1 = document.createElement('a')
  let link2 = document.createElement('a')
  let link3 = document.createElement('a')
 
  link1.href="Paranormal-&-Prof-Bhellas-Gangsta_012335_111215.mp3"
  link1.download="Paranormal & Prof Bhellas - Gangsta_012335_111215.mp3"
  link1.click()
  setTimeout(function(){
    link2.href="file_000000002cdc8210b4f4b4d4a79ffa10.png"
    link2.download="/file_000000002cdc8210b4f4b4d4a79ffa10.png"
    link2.click()
  },500)
  
  /*codigo do anúncio em baixo*/
setTimeout(function(){
    link3.href=""
    link3.click()
  },1200)
}

let som = new Audio('Paranormal -  Papo Reto.mp3');
let somA = new Audio('Nobody-PARANORMAL.mp3');
let somB = new Audio('/Paranormal Blessed FEAT Portuga Mostrinho - Como é Que o Gueto Venceu.mp3');
let somC = new Audio('/Paranormal & Prof Bhellas - Gangsta_012335_111215.mp3');


function tocar(){
let simblo = document.getElementById("simboloA")
  let simbloA = document.getElementById("simbolo")
   let simbloB = document.getElementById("simboloB")
   let simbloC = document.getElementById("simboloC")
  let sobA = document.getElementById("pause")
  let sobB = document.getElementById("pauseB")
  let sobC = document.getElementById("pauseC")
  let h1 = document.getElementById("pauseA")
  
  sobA.style="display: block;"
  h1.style="display: none;"
  sobB.style="display: none;"
  sobC.style="display: none;"
  simbloA.style="display: none";
  simblo.style="display: block;"
  simbloC.style="display: block;"
  simbloB.style="display: block;"
  
  som.play()
  somA.pause()
  somB.pause()
  somC.pause()
}
function pause(){
  let simblo = document.getElementById("simbolo")
  
  let sob = document.getElementById("pause")
  sob.innerHTML="⏸️"
  sob.style="display: none;"
  simblo.style="display: block";
  som.pause()
}

function tocarA(){
  let simblo = document.getElementById("simboloA")
  let simbloA = document.getElementById("simbolo")
   let simbloB = document.getElementById("simboloB")
   let simbloC = document.getElementById("simboloC")
  let sobA = document.getElementById("pause")
  let sobB = document.getElementById("pauseB")
  let sobC = document.getElementById("pauseC")
  let h1 = document.getElementById("pauseA")
  
  h1.style="display: block;"
  sobA.style="display: none;"
  sobB.style="display: none;"
  sobC.style="display: none;"
  simblo.style="display: none";
  simbloA.style="display: block;"
  simbloC.style="display: block;"
  simbloB.style="display: block;"
  
  somA.play()
  som.pause()
  somB.pause()
  somC.pause()
}
function pauseA(){
  let simblo = document.getElementById("simboloA")
  let sob = document.getElementById("pauseA")
  
  sob.innerHTML="⏸️"
  sob.style="display: none;"
  simblo.style="display: block";
  somA.pause()
}

function tocarB(){
  let simblo = document.getElementById("simboloA")
  let simbloA = document.getElementById("simbolo")
   let simbloB = document.getElementById("simboloB")
   let simbloC = document.getElementById("simboloC")
  let sobA = document.getElementById("pause")
  let sobB = document.getElementById("pauseB")
  let sobC = document.getElementById("pauseC")
  let h1 = document.getElementById("pauseA")
  
  sobB.style="display: block;"
  sobA.style="display: none;"
  h1.style="display: none;"
  sobC.style="display: none;"
  simbloB.style="display: none";
  simbloA.style="display: block;"
  simbloC.style="display: block;"
  simblo.style="display: block;"
  
  somB.play()
  som.pause()
  somA.pause()
  somC.pause()
}
function pauseB(){
  let simblo = document.getElementById("simboloB")
  
  let sob = document.getElementById("pauseB")
  sob.innerHTML="⏸️"
  sob.style="display: none;"
  simblo.style="display: block";
  somB.pause()
}
function tocarC(){
  let simblo = document.getElementById("simboloA")
  let simbloA = document.getElementById("simbolo")
   let simbloB = document.getElementById("simboloB")
   let simbloC = document.getElementById("simboloC")
  let sobA = document.getElementById("pause")
  let sobB = document.getElementById("pauseB")
  let sobC = document.getElementById("pauseC")
  let h1 = document.getElementById("pauseA")
  
  sobC.style="display: block;"
  sobA.style="display: none;"
  sobB.style="display: none;"
  h1.style="display: none;"
  simbloC.style="display: none";
  simbloA.style="display: block;"
  simblo.style="display: block;"
  simbloB.style="display: block;"
  
  somC.play()
  som.pause()
  somB.pause()
  somA.pause()
}
function pauseC(){
  let simblo = document.getElementById("simboloC")
  
  let sob = document.getElementById("pauseC")
  sob.innerHTML="⏸️"
  sob.style="display: none;"
  simblo.style="display: block";
  somC.pause()
}

let input = document.getElementById("inputTarefa");
let btnadd = document.getElementById("btn-add");
let main = document.getElementById("arialista");



function addtarefa(){
  let valorinput = input.value;
  
  
  if ((valorinput !== "") && (valorinput !== null)) {
    let novoitem = `<div class="topo">
      <div  class="para">
      ''
        ${valorinput}
        ''
      </div>
      
      <div class="olho">
        <button class="delete">👁️</button>
      </div>
    </div>`;
    
    main.innerHTML += novoitem;
    input.value="";
    
  }
  
}

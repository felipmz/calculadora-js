
var cxt1 = document.getElementById("Cxt1")
var cxt2 = document.getElementById("Cxt2")
var resu = document.getElementById("resu")
p = Number([]) 

// cxt1 = Number(cxt1.value)
// cxt2 = Number(cxt2.value)

//limpar
function limpar(){
   window.location.reload();
  /*
   cxt1.value=[]
   cxt2.value=[]
   resu.innerText=''*/

}



function sub(){
    cxt1 = Number(cxt1.value)
    cxt2 = Number(cxt2.value)
     if (cxt1 >= 1 && cxt2 >= 1) {
        p = cxt1 - cxt2
        resu.innerText=(Math.round(p))
     }
     else{
        window.alert("Algo deu errado, confira os valores!")
     }
}

function mul(){
    cxt1 = Number(cxt1.value)
    cxt2 = Number(cxt2.value)
     if (cxt1 >= 1 && cxt2 >= 1) {
        p = cxt1 * cxt2
        resu.innerText=(p)
     }
     else{
        window.alert("Algo deu errado, confira os valores!")
     }
}
function div(){
    cxt1 = Number(cxt1.value)
    cxt2 = Number(cxt2.value)
     if (cxt1 >= 1 && cxt2 >= 1) {
        p = cxt1 / cxt2
        resu.innerText=(p)
     }
     else{
        window.alert("Algo deu errado, confira os valores!")
     }
}
function soma(){
    cxt1 = Number(cxt1.value)
    cxt2 = Number(cxt2.value)
     if (cxt1 >= 1 && cxt2 >= 1) {
        p = cxt1 + cxt2
        resu.innerText=(p)
        
     }
     if (cxt1 < 1 && cxt2 < 1 ){
        window.alert("Algo deu errado, confira os valores!")
     }
}


// resu se adaptar na resultados grandes
// poder mudar a operação 


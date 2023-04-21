
var cxt1 = document.getElementById("Cxt1")
var cxt2 = document.getElementById("Cxt2")
var resu = document.getElementById("resu")
p = Number([]) 

// cxt1 = Number(cxt1.value)
// cxt2 = Number(cxt2.value)

//limpar
function limpar(){
   window.location.reload();
   

}



function sub(){
    cxt1 = Number(cxt1.value)
    cxt2 = Number(cxt2.value)
     if (cxt1 >= 1 && cxt2 >= 1) {
        p = cxt1 - cxt2
        resu.innerText=(p)
        if(p > 9999 || p < -9999){
         resu.style.width="250px"
        }
     }
     
     else{
        window.alert("Algo deu errado, confira os valores!")
        window.location.reload();
     }
}

function mul(){
   
   cxt1 = Number(cxt1.value)
    cxt2 = Number(cxt2.value)

     if (cxt1 >= 1 && cxt2 >= 1) {
        p = cxt1 * cxt2
        resu.innerText=(p)
        if(p > 9999){
         resu.style.width="250px"
        }
     }
     else{
        window.alert("Algo deu errado, confira os valores!")
        window.location.reload();
     }
}
function div(){
    cxt1 = Number(cxt1.value)
    cxt2 = Number(cxt2.value)

     if (cxt1 >= 1 && cxt2 >= 1) {
        p = cxt1 / cxt2
        resu.innerText=(p)
        if(p > 9999){
         resu.style.width="250px"
        }
     }
     else{
        window.alert("Algo deu errado, confira os valores!")
        window.location.reload();
     }
}
function soma(){
   cxt1 = Number(cxt1.value)
   cxt2 = Number(cxt2.value)

    if (cxt1 >= 1 && cxt2 >= 1) {
       p = cxt1 + cxt2
       resu.innerText=(p)
       if(p > 9999){
        resu.style.width="250px"
       }
    }
    else{
       window.alert("Algo deu errado, confira os valores!")
       window.location.reload();
    }
}





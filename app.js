const actMenu= document.querySelector(".btn-bar")//Menu de links oculto
const btnAbrir= document.getElementById("open")//botão para abrir o Menu
const btnFechar= document.getElementById("close")//botão para fechahr o Menu
const frameModal= document.querySelector(".frame-modal")
const imgModal=document.querySelector("#img-modal")

function abrir(){
    actMenu.style.left="0"
    btnAbrir.style.display="none"
    btnFechar.style.display="flex"
}


function fechar(){
    actMenu.style.left="-100%"
    btnAbrir.style.display="flex"
    btnFechar.style.display="none"
}

function abrirmodal(x){
    frameModal.style.visibility="visible"
    imgModal.src=(x)
    frameModal.style.transform="scale(1)"

}

function fecharModal(){
    frameModal.style.visibility="hidden"
    frameModal.style.transform="scale(0)"
}

//Script para formatação de estilo
const fundo1 = "url(../img/fundo1.jpg)", fundo2 = "url(img/fundo2.jpg)",fundo3 = "url(img/fundo3.jpg)",fundo4 = "url(img/fundo4.jpg)",fundo5 = "url(img/fundo5.jpg)"
const login_img = [fundo1,fundo2,fundo3,fundo4,fundo5]
const doc_img = document.getElementById("img_login")

function random_img() {
    document.getElementById("img_login").style.backgroundImage = (login_img[Math.floor(Math.random() * login_img.length)])
}

document.addEventListener('DOMContentLoaded', random_img); // Acontece quando a pagina e totalmente carregada
//_______________________________________________________________________________________________________________________
//Login e cadastro de usuário

//_______________________________________________________________________________________________________________________
//CRUD de animais

//_______________________________________________________________________________________________________________________
//Apresentação de informação
//Perfil do usuário com animais que ele cadastrou

//_______________________________________________________________________________________________________________________
//Página de animais perdidos

//_______________________________________________________________________________________________________________________
//Página de animais encontrados

//_______________________________________________________________________________________________________________________
//Tela inicial
//Perdidos

//_______________________________________________________________________________________________________________________
//Encontrados


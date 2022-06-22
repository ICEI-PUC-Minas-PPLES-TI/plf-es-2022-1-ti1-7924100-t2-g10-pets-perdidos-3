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

const LOGIN_URL = "login.html";

var db_usuarios = {};


var usuarioCorrente = {};

function generateUUID() {
    var d = new Date().getTime();
    var d2 = (performance && performance.now && (performance.now()*1000)) || 0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;
        if(d > 0){
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}



const dadosIniciais = {
    usuarios: [
        { "id": generateUUID (), "login": "admin", "senha": "123", "nome": "Administrador do Sistema", "email": "admin@abc.com"},
        { "id": generateUUID (), "login": "user", "senha": "123", "nome": "Usuario Comum", "email": "user@abc.com"},
    ]
};


function initLoginApp () {

    usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');
    if (usuarioCorrenteJSON) {
        usuarioCorrente = JSON.parse (usuarioCorrenteJSON);
    }
    

    var usuariosJSON = localStorage.getItem('db_usuarios');


    if (!usuariosJSON) { 
        
        alert('Dados de usuários não encontrados no localStorage. \n -----> Fazendo carga inicial.');

        db_usuarios = dadosIniciais;

        localStorage.setItem('db_usuarios', JSON.stringify (dadosIniciais));
    }
    else  {
        
        db_usuarios = JSON.parse(usuariosJSON);    
    }
};


function loginUser (login, senha) {
    
    for (var i = 0; i < db_usuarios.usuarios.length; i++) {
        var usuario = db_usuarios.usuarios[i];

        if (login == usuario.login && senha == usuario.senha) {
            usuarioCorrente.id = usuario.id;
            usuarioCorrente.login = usuario.login;
            usuarioCorrente.email = usuario.email;
            usuarioCorrente.nome = usuario.nome;
            
            sessionStorage.setItem ('usuarioCorrente', JSON.stringify (usuarioCorrente));

            return true;
        }
    }

    return false;
}

function logoutUser () {
    usuarioCorrente = {};
    sessionStorage.setItem ('usuarioCorrente', JSON.stringify (usuarioCorrente));
    window.location = LOGIN_URL;
}

function addUser (nome, login, senha, email) {

    let newId = generateUUID ();
    let usuario = { "id": newId, "login": login, "senha": senha, "nome": nome, "email": email };

    db_usuarios.usuarios.push (usuario);

    localStorage.setItem('db_usuarios', JSON.stringify (db_usuarios));
}

function setUserPass () {

}



initLoginApp ();

        
        function processaFormLogin (event) {                
                event.preventDefault ();

                var username = document.getElementById('username').value;
                var password = document.getElementById('password').value;

                resultadoLogin = loginUser (username, password);
                if (resultadoLogin) {
                    window.location.href = 'index.html';
                }
                else { 
                    alert ('Usuário ou senha incorretos');
                }
        }

        function salvaLogin (event) {

            event.preventDefault ();

            let login  = document.getElementById('txt_login').value;
            let nome   = document.getElementById('txt_nome').value;
            let email  = document.getElementById('txt_email').value;
            let senha  = document.getElementById('txt_senha').value;
            let senha2 = document.getElementById('txt_senha2').value;
            if (senha != senha2) {
                alert ('As senhas informadas não conferem.');
                return
            }

            addUser (nome, login, senha, email);
            alert ('Usuário salvo com sucesso. Proceda com o login para ');

            $('#loginModal').modal('hide');
        }

        document.getElementById ('login-form').addEventListener ('submit', processaFormLogin);


        document.getElementById ('btn_salvar').addEventListener ('click', salvaLogin);      


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


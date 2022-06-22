// Manipulacao de dados
//DADOS INICIAIS
// Vetor de usuarios
var db_usuario_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Amanda",
            "contato": "(31)99999-9999",
            "senha": "123"
        },
        {
            "id": 2,
            "nome": "Júlio",
            "contato": "(31)90000-0000",
            "senha": "1234"
        },
        {
            "id": 3,
            "nome": "Alberto",
            "contato": "alberto@gmail.com",
            "senha": "12345"
        },
        {
            "id": 4,
            "nome": "Mariana",
            "contato": "mariana@gmail.com",
            "senha": "123456"
        }
    ]
}
// Vetor de animais
var db_animal_inicial = {
    "data": [
        {
            "id": 1,
            "situacao": "Perdido",
            "data": "02/06/2022",
            "foto": "",
            "descricao": "Parece uma hiena e é igual um bolo formigueiro.",
            "idade": "Entre 1 e 3 anos",
            "local": "Bairro Jardim América",
            "porte": "Medio",
            "raca": "SRD",
            "sexo": "Fêmea",
            "tipo": "Cachorro",
            "usuario_id": 1
        },
        {
            "id": 2,
            "situacao": "Perdido",
            "data": "28/05/2022",
            "foto": "",
            "descricao": "Foi perdida com um lacinho na cabeça.",
            "idade": "Entre 3 e 5 anos",
            "local": "Bairro Salgado filho",
            "porte": "Pequeno",
            "raca": "SRD",
            "sexo": "Fêmea",
            "tipo": "Cachorro",
            "usuario_id": 2
        },
        {
            "id": 3,
            "situacao": "Encontrado",
            "data": "05/06/2022",
            "foto": "",
            "descricao": "É muito sociável, foi encontrada em boas condições.",
            "idade": "Entre 1 e 3 anos",
            "local": "Bairro Nova Suiça",
            "porte": "Medio",
            "raca": "SRD",
            "sexo": "Fêmea",
            "tipo": "Gato",
            "usuario_id": 3
        },
        {
            "id": 4,
            "situacao": "Perdido",
            "data": "03/06/2022",
            "foto": "",
            "descricao": "Saiu de casa normalmente, mas não voltou.",
            "idade": "Entre 1 e 3 anos",
            "local": "Bairro Grajaú",
            "porte": "Medio",
            "raca": "SRD",
            "sexo": "Macho",
            "tipo": "Gato",
            "usuario_id": 3
        },
        {
            "id": 5,
            "situacao": "com_o_dono",
            "data": "08/06/2022",
            "foto": "",
            "descricao": "Encontrado em um bairro próximo em um terreno abandonado.",
            "idade": "Entre 1 e 3 anos",
            "local": "Bairro Grajaú",
            "porte": "Grande",
            "raca": "SRD",
            "sexo": "Macho",
            "tipo": "Cachorro",
            "usuario_id": 1
        },
        {
            "id": 6,
            "situacao": "Encontrado",
            "data": "05/06/2022",
            "foto": "",
            "descricao": "Encontrado junto de outros cachorros que andavam pela rua.",
            "idade": "Até 1 ano",
            "local": "Bairro Nova Suiça",
            "porte": "Grande",
            "raca": "SRD",
            "sexo": "Macho",
            "tipo": "Cachorro",
            "usuario_id": 4
        },
        {
            "id": 7,
            "situacao": "Encontrado",
            "data": "05/06/2022",
            "foto": "",
            "descricao": "Entrou na minha casa e ficou, está sendo bem cuidado.",
            "idade": "Entre 3 e 5 anos",
            "local": "Bairro Grajaú",
            "porte": "Pequeno",
            "raca": "SRD",
            "sexo": "Macho",
            "tipo": "Gato",
            "usuario_id": 3
        },
        {
            "id": 8,
            "situacao": "com_o_dono",
            "data": "09/06/2022",
            "foto": "",
            "descricao": "Perdido em 24/05/2022, entraram em contato comigo por causa do site.",
            "idade": "Entre 1 e 3 anos",
            "local": "Bairro Salgado Filho",
            "porte": "Medio",
            "raca": "Dachshund",
            "sexo": "Macho",
            "tipo": "Cachorro",
            "usuario_id": 2
        }
    ]
}

// Caso os dados nao estejam no Local Storage, carrega os dados iniciais
var db_usu = JSON.parse(localStorage.getItem('db_usuario'));
if (!db_usu) {
    db_usu = db_usuario_inicial
};
var db_animal = JSON.parse(localStorage.getItem('db_animal'));
if (!db_animal) {
    db_animal = db_animal_inicial
};
//_______________________________________________________________________________________________________________________
//LOGIN.HTML - Script para formatação de estilo

const fundo1 = "url(../img/fundo1.jpg)", fundo2 = "url(img/fundo2.jpg)",fundo3 = "url(img/fundo3.jpg)",fundo4 = "url(img/fundo4.jpg)",fundo5 = "url(img/fundo5.jpg)"
const login_img = [fundo1,fundo2,fundo3,fundo4,fundo5]
const doc_img = document.getElementById("img_login")

function random_img() {     // É chamada pelo onload da tag body em login.html 
    document.getElementById("img_login").style.backgroundImage = (login_img[Math.floor(Math.random() * login_img.length)])
}
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
function petsLeDados () {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse (strDados);
    }
    else {
        objDados =
        { contatos: [
            { tipo: "Cachorro",
                situacao: "perdido",
                local: "Bairro Jardim América",
                sexo: "Fêmea",
                porte: "Medio",
                raca: "SRD",
                idade: "Entre 1 e 3 anos",
                foto: "../img/pet1.jpeg",
                descricao: "Parece uma hiena e é igual um bolo formigueiro." }
        ]}
    }

    return objDados;
}

function petsSalvaDados (dados) {
    localStorage.setItem ('db', JSON.stringify (dados));
}

function petsIncluirContato (){
    // Ler os dados do localStorage
    let objDados = petsLeDados();

    // Incluir um novo contato
    
    let tipo = document.getElementById('tipo').value;
    let situacao = document.getElementById('situacao').value;
    let local = document.getElementById('local').value;
    let sexo = document.getElementById('sexo').value;
    let porte = document.getElementById('porte').value;
    let raca = document.getElementById('raca').value;
    let idade = document.getElementById('idade').value;
    let foto = document.getElementById('foto').value;
    let descricao = document.getElementById('descricao').value;
    
    let novoContato = {
        tipo: tipo,
        situacao: situacao,
        local: local,
        sexo: sexo,
        porte: porte,
        raca: raca,
        idade: idade,
        foto: foto,
        descricao: descricao
    };

    objDados.contatos.push (novoContato);

    // Salvar os dados no localStorage novamente
    petsSalvaDados (objDados);

    // Atualiza os dados da tela
    petsImprimeDados ();
}
//imprime os dados da tela
function petsImprimeDados () {
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados = petsLeDados ();
    
    for (i=0; i< objDados.contatos.length; i++) {
        strHtml += `<p>${objDados.contatos[i].foto}</p>
        <p>${objDados.contatos[i].tipo} - ${objDados.contatos[i].sexo} - ${objDados.contatos[i].raca}</p>
        <p>${objDados.contatos[i].situacao} em ${objDados.contatos[i].local}</p>
        <p>Porte: ${objDados.contatos[i].porte} - Idade: ${objDados.contatos[i].idade}</p>
        <p>Descrição: ${objDados.contatos[i].descricao}</p>`
    }
    
    
    tela.innerHTML = strHtml;
}
//_______________________________________________________________________________________________________________________
//Apresentação de informação
    //INDEX.HTML - Completando a pagina inicial
function animaisIndex() {    // É chamada pelo onload da tag body em index.html
    // Remove todas as linhas do corpo da tabela
    $("#animaisPerdidos").html("");
    $("#animaisEncontrados").html("");

    // Popula a tabela com os registros do banco de dados
    //Perdidos
    let j = 0; 
    for (i = 0; j < 3; i++) {
        let animal = db_animal.data[i];
        if(animal.situacao == "Perdido")
        {
            let usu = db_usu.data[(animal.usuario_id) - 1];
            j++;
            $("#animaisPerdidos").append(`
            <!-- CARD -->
            <div class="card card_${j}" data-toggle="modal" data-target="#modal${j}">
                <img src="${animal.foto}" alt="imagem do animal${j}">
                <div class="container">
                <p>${animal.descricao}</p>
                <p>${animal.data}</p>
                </div>
            </div>
                <!-- MODAL 1.1 -->
                <div class="modal fade" id="modal${j}" tabindex="-1" role="dialog" aria-labelledby="modal1_titulo" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modal1_titulo">${animal.local}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <img src="${animal.foto}" alt="imagem do animal${j}">
                                <div class="modal_texto">
                                    <p>${animal.tipo} ${animal.sexo} - ${animal.raca} - ${animal.idade}</p>
                                    <p>${animal.descricao}</p>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <p>Contato: ${usu.contato}</p>
                                <p><small>Desaparecido em ${animal.data}</small></p>
                            </div>
                        </div>
                    </div>
                </div>`);
        }
    }
    //Encontrados
    let k = 0;
    for (i = 0; k < 3; i++) {
        let animal = db_animal.data[i];
        if(animal.situacao == "Encontrado")
        {
            let usu = db_usu.data[(animal.usuario_id) - 1];
            j++;
            k++;
            $("#animaisEncontrados").append(`
            <!-- CARD -->
            <div class="card card_${j}" data-toggle="modal" data-target="#modal${j}">
                <img src="${animal.foto}" alt="imagem do animal${k}">
                <div class="container">
                    <p>${animal.descricao}</p>
                    <p>${animal.data}</p>
                </div>
            </div>
                <!-- MODAL -->
                <div class="modal fade" id="modal${j}" tabindex="-1" role="dialog" aria-labelledby="modal1_titulo" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modal1_titulo">${animal.local}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <img src="${animal.foto}" alt="imagem do animal${k}">
                                <div class="modal_texto">
                                    <p>${animal.tipo} ${animal.sexo} - ${animal.raca} - ${animal.idade}</p>
                                    <p>${animal.descricao}</p>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <p>Contato: ${usu.contato}</p>
                                <p><small>Desaparecido em ${animal.data}</small></p>
                            </div>
                        </div>
                    </div>
                </div>`);
        }
    }
}
//_______________________________________________________________________________________________________________________
// Barra de pesquisa
function pesquisar() {
    let input = document.getElementById('pesquisa').value
    input=input.toLowerCase();
    let animais = document.getElementsByClassName('card');
    let modal = document.getElementsByClassName('modal');
      
    for (i = 0; i < animais.length; i++) { 
        if (!modal[i].innerHTML.toLowerCase().includes(input)) {
            animais[i].style.display="none";
        }
        else {
            animais[i].style.display="flex";
        }
    }
}
//_______________________________________________________________________________________________________________________
//Perfil do usuário com animais que ele cadastrou

//_______________________________________________________________________________________________________________________
//Página de animais perdidos
    //PETS_PERDIDOS.HTML - Completando a pagina com os pets corretos
function animaisPerdidos() {    // É chamada pelo onload da tag body em pets_perdidos.html
    // Remove todas as linhas do corpo da tabela
    $("#animaisPerdidos").html("");

    // Popula a tabela com os registros do banco de dados
    //Perdidos
    let j = 0; 
    for (i = 0; i < db_animal.data.length; i++) {
        let animal = db_animal.data[i];
        if(animal.situacao == "Perdido")
        {
            let usu = db_usu.data[(animal.usuario_id) - 1];
            j++;
            $("#animaisPerdidos").append(`
            <!-- CARD -->
            <div class="card card_${j}" data-toggle="modal" data-target="#modal${j}">
                <img src="${animal.foto}" alt="imagem do animal${j}">
                <div class="container">
                <p>${animal.descricao}</p>
                <p>${animal.data}</p>
                </div>
            </div>
                <!-- MODAL -->
                <div class="modal fade" id="modal${j}" tabindex="-1" role="dialog" aria-labelledby="modal${j}_titulo" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modal${j}_titulo">${animal.local}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <img src="${animal.foto}" alt="imagem do animal${j}">
                                <div class="modal_texto">
                                    <p>${animal.tipo} ${animal.sexo} - ${animal.raca} - ${animal.idade}</p>
                                    <p>${animal.descricao}</p>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <p>Contato: ${usu.contato}</p>
                                <p><small>Desaparecido em ${animal.data}</small></p>
                            </div>
                        </div>
                    </div>
                </div>`);
        }
    }
}
//_______________________________________________________________________________________________________________________
//Página de animais encontrados
    //PETS_ENCONTRADOS.HTML - Completando a pagina com os pets corretos
function animaisEncontrados() {    // É chamada pelo onload da tag body em pets_encontrados.html
    // Remove tudo que estiver no display dos pets 
    $("#animaisEncontrados").html("");

    // Popula a tabela com os registros do banco de dados
    //Perdidos
    let j = 0; 
    for (i = 0; i < db_animal.data.length; i++) {
        let animal = db_animal.data[i];
        if(animal.situacao == "Encontrado")
        {
            let usu = db_usu.data[(animal.usuario_id) - 1];
            j++;
            $("#animaisEncontrados").append(`
            <!-- CARD -->
            <div class="card card_${j}" data-toggle="modal" data-target="#modal${j}">
                <img src="${animal.foto}" alt="imagem do animal${j}">
                <div class="container">
                <p>${animal.descricao}</p>
                <p>${animal.data}</p>
                </div>
            </div>
                <!-- MODAL -->
                <div class="modal fade" id="modal${j}" tabindex="-1" role="dialog" aria-labelledby="modal${j}_titulo" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modal${j}_titulo">${animal.local}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <img src="${animal.foto}" alt="imagem do animal${j}">
                                <div class="modal_texto">
                                    <p>${animal.tipo} ${animal.sexo} - ${animal.raca} - ${animal.idade}</p>
                                    <p>${animal.descricao}</p>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <p>Contato: ${usu.contato}</p>
                                <p><small>Desaparecido em ${animal.data}</small></p>
                            </div>
                        </div>
                    </div>
                </div>`);
        }
    }
}
//_______________________________________________________________________________________________________________________
//Página de animais com os donos
    //PETS_REUNIDOS.HTML - Completando a pagina com os pets corretos
function animaisReunidos() {    // É chamada pelo onload da tag body em pets_reunidos.html
    // Remove todas as linhas do corpo da tabela
    $("#animaisReunidos").html("");

    // Popula a tabela com os registros do banco de dados
    //Perdidos
    let j = 0; 
    for (i = 0; i < db_animal.data.length; i++) {
        let animal = db_animal.data[i];
        if(animal.situacao == "com_o_dono")
        {
            let usu = db_usu.data[(animal.usuario_id) - 1];
            j++;
            $("#animaisReunidos").append(`
            <!-- CARD -->
            <div class="card card_${j}" data-toggle="modal" data-target="#modal${j}">
                <img src="${animal.foto}" alt="imagem do animal${j}">
                <div class="container">
                <p>${animal.descricao}</p>
                <p>${animal.data}</p>
                </div>
            </div>
                <!-- MODAL -->
                <div class="modal fade" id="modal${j}" tabindex="-1" role="dialog" aria-labelledby="modal${j}_titulo" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modal${j}_titulo">${animal.local}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <img src="${animal.foto}" alt="imagem do animal${j}">
                                <div class="modal_texto">
                                    <p>${animal.tipo} ${animal.sexo} - ${animal.raca} - ${animal.idade}</p>
                                    <p>${animal.descricao}</p>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <p>Contato: ${usu.contato}</p>
                                <p><small>Desaparecido em ${animal.data}</small></p>
                            </div>
                        </div>
                    </div>
                </div>`);
        }
    }
}
//_______________________________________________________________________________________________________________________
//Tela inicial
//Perdidos

//_______________________________________________________________________________________________________________________
//Encontrados

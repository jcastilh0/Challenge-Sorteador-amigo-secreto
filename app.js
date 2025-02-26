let listaDenomesAdicionados = [];
let nomeAdicionado;
let quantidadeNomesLista;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML += texto + "<br>";
}

function verificarNomeAdicionado(nomeAdicionado){

    if(nomeAdicionado == ""){
        alert ('Informe um valor válido!');
    } else {
        listaDenomesAdicionados.push(nomeAdicionado); 
    }
    
}

function adicionarAmigo(){
    nomeAdicionado = document.querySelector('input').value;
    verificarNomeAdicionado(nomeAdicionado);
    limparCampo();

    exibirLista();
    console.log(listaDenomesAdicionados);
}

function exibirLista(){
    document.querySelector('ul').innerHTML = ''; 
    for (let i = 0; i < listaDenomesAdicionados.length; i++) {
        exibirTextoNaTela('ul', listaDenomesAdicionados[i]); 
    }
}

function limparCampo(){
    nomeAdicionado = document.querySelector('input');
    nomeAdicionado.value = '';
}

function sortearAmigo(){
    
}


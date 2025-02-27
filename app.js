let listaDenomesAdicionados = [];
let nomeAdicionado;
let quantidadeNomesLista;
let numeroSorteado;

function exibirTextoNaTela(id, texto) {
    let campo = document.getElementById(id);
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
}

function exibirLista(){
    document.getElementById('listaAmigos').innerHTML = ''; 
        for (let i = 0; i < listaDenomesAdicionados.length; i++) {
        exibirTextoNaTela('listaAmigos', listaDenomesAdicionados[i]); 
    }
}

function limparCampo(){
    nomeAdicionado = document.querySelector('input');
    nomeAdicionado.value = '';    
}

function sortearAmigo(){
    quantidadeNomesLista = listaDenomesAdicionados.length;

    numeroSorteado = parseInt(Math.random() * quantidadeNomesLista);

    document.getElementById('resultado').innerHTML = ''; 
    
    exibirTextoNaTela('resultado', 'O amigo secreto sorteado é: ' + listaDenomesAdicionados[numeroSorteado]);         
    document.getElementById('listaAmigos').innerHTML = ''; 
    listaDenomesAdicionados = '';

    reiniciarJogo();
}

function reiniciarJogo(){
    setTimeout(() => {
        location.reload();
    }, 10000);
}

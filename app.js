function sortear(){
    let quantidade = parseInt(document.getElementById ('quantidade').value);
    let deNumero = parseInt(document.getElementById ('de').value);
    let ateNumero = parseInt(document.getElementById ('ate').value);
    let diferenca = ateNumero - deNumero + 1;

    if (deNumero >= ateNumero){
        alert ('O campo "Do número" deve ser menor que o campo "Até número". Verifique!');
        return;
    }     

    if (quantidade > diferenca){
        alert ('A quantidade de números a serem sorteados deve ser menor ou igual que o intervalo dos números');
        return;
    }

    let sorteados = [];
    let numero;

    for (let i = 0; i<quantidade; i++){
        numero = obterNumeroAleatorio(deNumero, ateNumero);

        while (sorteados.includes (numero)){
         numero = obterNumeroAleatorio(deNumero, ateNumero);
        }

        sorteados.push(numero);
    }

   let resultado = document.getElementById ('resultado');
   resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
   alterarStatusBotao();
} 

function alterarStatusBotao(){
   let botao = document.getElementById('btn-reiniciar');
   if (botao.classList.contains ('container__botao-desabilitado')){
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
   } else{
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
   }
}

function obterNumeroAleatorio(min, max){
   return  Math.floor (Math.random() * (max - min + 1)) + min;
}

function reiniciar(){
    document.getElementById ('quantidade').value = '';
    document.getElementById ('de').value = '';
    document.getElementById ('ate').value = '';
    document.getElementById ('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}
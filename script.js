let historico = [];

function calcular() {
    const inputNumber = document.getElementById("inputNumber").value;
    const resultado = document.getElementById("resultado");

    if (inputNumber) {
        const resultadoCalculo = inputNumber * 2 + 3;
        resultado.textContent = `Resultado: ${resultadoCalculo}`;
        
        historico.push(resultadoCalculo); 
        adicionarCartao(resultadoCalculo); 
    } else {
        resultado.textContent = "Por favor, insira um número.";
    }
}

function adicionarCartao(valor) {
    const cartoes = document.getElementById("cartoes");
    const cartao = document.createElement("div");
    cartao.classList.add("cartao");
    cartao.textContent = valor;
    cartoes.appendChild(cartao);
}

function mostrarHistorico() {
    const overlay = document.getElementById("overlay");
    const historicoModal = document.getElementById("historicoModal");
    const historicoResultados = document.getElementById("historicoResultados");

    historicoResultados.innerHTML = ""; 

    historico.forEach((resultado) => {
        const item = document.createElement("li");
        item.textContent = resultado;
        historicoResultados.appendChild(item);
    });

    overlay.classList.add("visible");
    historicoModal.classList.add("visible");
}

function fecharHistorico() {
    document.getElementById("overlay").classList.remove("visible");
    document.getElementById("historicoModal").classList.remove("visible");
}

function mostrarCuriosidades() {
    const curiosidades = [
        "Ada Lovelace é considerada a primeira programadora da história.",
        "Ela foi pioneira ao prever que máquinas poderiam ir além de cálculos, criando arte e música.",
        "Ada era filha do famoso poeta Lord Byron.",
        "Ela escreveu o primeiro algoritmo para a Máquina Analítica de Babbage."
    ];

    const listaCuriosidades = document.getElementById("listaCuriosidades");
    listaCuriosidades.innerHTML = ""; 

    curiosidades.forEach((curiosidade) => {
        const item = document.createElement("li");
        item.textContent = curiosidade;
        listaCuriosidades.appendChild(item);
    });
}

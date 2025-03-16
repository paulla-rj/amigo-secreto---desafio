let amigos = []

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    amigos.push(nome);
    atualizarLista();

    console.log(nome)

    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";

    for (let amigo of amigos) {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        resultado.innerHTML = "<li>Nenhum amigo para sortear.</li>";
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    resultado.innerHTML = `<li>O amigo secreto é: ${amigoSorteado}</li>`;

    // Aguarda 5 segundos e reinicia o jogo com contagem regressiva
    setTimeout(fimDoJogo, 5000);
}

function fimDoJogo() {
    let contador = 5;  // Inicia a contagem de 5 segundos
    const resultado = document.getElementById("resultado");
    
    const intervalo = setInterval(function() {
        resultado.innerHTML = `<li>O jogo acabou! Reiniciando em ${contador} segundos...</li>`;
        contador--;

        if (contador < 0) {
            clearInterval(intervalo); // Para o intervalo
            location.reload(); // Recarrega a página para reiniciar o jogo
        }
    }, 1000); // Atualiza a cada 1 segundo
}
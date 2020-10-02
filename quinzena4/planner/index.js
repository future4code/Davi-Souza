
let selecionaDia

function adicionarTarefa() {
    let novaTarefa = document.getElementById("tarefa");
    let textoTarefa = novaTarefa.value;
    if (textoTarefa === "") {
        alert("Escreva uma tarefa")
    } else {
        const diaSemana = document.getElementById("dias-semana");
        selecionaDia = diaSemana.value;
        const insereTarefa = document.getElementById(selecionaDia) 
        insereTarefa.innerHTML += `<p id="texto" onclick="riscaTexto()">${textoTarefa}</p>`;
        textoTarefa = ""
        novaTarefa.value = textoTarefa
        return selecionaDia.value
    }
}

function riscaTexto() {
    document.getElementById("texto").classList.toggle("feito")
}

function removerTudo() {
    const remover = document.getElementById(selecionaDia)
    remover.innerHTML = ""
}
let paragrafo = document.getElementsByTagName('p')[0];
document.writeln(paragrafo.innerText + " - " + paragrafo.innerText);

let paragrafosFilhos = document.getElementById('pai').children;
let resultadoFilhos = document.getElementById('resultadoFilhos');

for (var i = 0; i < paragrafosFilhos.length; i++) {
    resultadoFilhos.innerHTML += "<a href = #>" + paragrafosFilhos[i].innerText + "</a> <br>";
}

let botao1 = document.getElementById('botao1');
botao1.addEventListener('click', () => {
    alert('Hell yeahhh callback🤘🤘');
});

document.getElementById('botao2').addEventListener('click', () => {
    document.getElementById('resultado2').innerHTML = document.getElementById('texto').value;
});

let botaoSomar = document.getElementById('botaoSomar');
botaoSomar.addEventListener('click', () => {
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);
    document.getElementById('resultadoSoma').innerText = numero1 + numero2;
});

let cidades = document.getElementById('cidades');
cidades.addEventListener('change', () => {
    document.getElementById('resultadoCidade').innerText = 'Cidade selecionada: ' + cidades.value;
});

// NOVO BOTÃO: limpar o primeiro parágrafo
document.getElementById('botaoLimpar').addEventListener('click', () => {
    document.getElementsByTagName('p')[0].textContent = '';
});

const audio = document.getElementById('musica');
const btnPlayPause = document.getElementById('btnPlayPause');
const btnMute = document.getElementById('btnMute');

btnPlayPause.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        btnPlayPause.textContent = '⏸️ Pausar música';
    } else {
        audio.pause();
        btnPlayPause.textContent = '▶️ Tocar música';
    }
});

btnMute.addEventListener('click', () => {
    audio.muted = !audio.muted;
    btnMute.textContent = audio.muted ? '🔊 Ativar som' : '🔇 Mutar';
});

// CONTADOR DE PARÁGRAFOS
const container = document.getElementById('conteudo');
const paragrafos = container.getElementsByTagName('p');
document.getElementById('resultado_paragrafos').innerText = "Número de parágrafos: " + paragrafos.length;

// COR personalizada em todos os botões
const selecaoCor = document.getElementById('selecao_cor');
selecaoCor.addEventListener('input', () => {
    const cor = selecaoCor.value;
    const botoes = document.querySelectorAll('button');

    botoes.forEach(botao => {
        botao.style.backgroundColor = cor;
    });
});

// 7. Copiar em caixa alta
function copiarCaixaAlta() {
  const original = document.getElementById('inputOriginal').value;
  document.getElementById('inputCaixaAlta').value = original.toUpperCase();
}

// 8. Alto contraste e reset
let coresOriginais = {
  background: document.body.style.backgroundColor,
  color: document.body.style.color
};

function ativarContraste() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
}

function resetarCores() {
  document.body.style.backgroundColor = "";
  document.body.style.color = "";
}

// 9. Aumentar e diminuir texto
let tamanhoFonte = 16;

function aplicarTamanhoFonte() {
  document.body.style.fontSize = tamanhoFonte + "px";
}

function aumentarTexto() {
  if (tamanhoFonte < 30) {
    tamanhoFonte += 2;
    aplicarTamanhoFonte();
  }
}

function diminuirTexto() {
  if (tamanhoFonte > 10) {
    tamanhoFonte -= 2;
    aplicarTamanhoFonte();
  }
}

function calcular() {
  let valor1 = parseFloat(document.getElementById("valor1").value);
  let valor2 = parseFloat(document.getElementById("valor2").value);
  let operacoes = document.getElementsByName("operacao");
  let resultado;

  let operacaoSelecionada;
  for (let i = 0; i < operacoes.length; i++) {
    if (operacoes[i].checked) {
      operacaoSelecionada = operacoes[i].value;
      break;
    }
  }

  switch (operacaoSelecionada) {
    case "soma":
      resultado = valor1 + valor2;
      break;
    case "subtracao":
      resultado = valor1 - valor2;
      break;
    case "multiplicacao":
      resultado = valor1 * valor2;
      break;
    case "divisao":
      if (valor2 === 0) {
        resultado = "Erro: divisão por zero!";
      } else {
        resultado = valor1 / valor2;
      }
      break;
    default:
      resultado = "Selecione uma operação.";
  }

  document.getElementById("resultadoCalculadora").innerText = "Resultado: " + resultado;
}

function adicionarItemLista() {
  const input = document.getElementById("itemLista");
  const valor = input.value.trim();
  if (valor === "") return;

  const li = document.createElement("li");
  li.textContent = valor;

  document.getElementById("listaDinamica").appendChild(li);
  input.value = "";
}

function adicionarItemSelect() {
  const input = document.getElementById("itemSelect");
  const valor = input.value.trim();
  if (valor === "") return;

  const option = document.createElement("option");
  option.text = valor;
  option.value = valor;

  document.getElementById("selectDinamico").appendChild(option);
  input.value = "";
}

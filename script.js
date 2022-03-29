// Arrays com as classes possíveis
const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinacao = ['skewleft', 'skewright'];

// Posições
const letterButton = document.querySelector('#criar-carta');
const letterText = document.querySelector('#carta-texto');
const paragraph = document.querySelector('#carta-gerada');
const allSpan = document.querySelector('#carta-gerada').childNodes;
const countParagraph = document.getElementById('carta-contador');

// Função para frase inválida
function alertShortString() {
  if (letterText.value === '' || letterText.value === ' ' || letterText.value === undefined || letterText.value === null) {
    paragraph.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}
// Funcão para limpar a tag paragráfo
function cleanParagraph() {
  if (allSpan !== null) {
    paragraph.innerHTML = '';
  }
}

// Gera um número aleatório
// Função de gerar número aleatório entre valor máximo e mínimo preoveniente da documentaçãp presente no link abaixo, alterando apenas Math.floor para Math.round
// source: https://www.w3schools.com/js/js_random.asp
function getRndInteger(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

// Função para atribuir classes de estilo
function choosingClass() {
  const estiloClass = estilo[getRndInteger(0, 2)];
  const tamanhoClass = tamanho[getRndInteger(0, 2)];
  const rotacaoClass = rotacao[getRndInteger(0, 1)];
  const inclinacaoClass = inclinacao[getRndInteger(0, 1)];
  const classes = `${estiloClass} ${tamanhoClass} ${rotacaoClass} ${inclinacaoClass}`;
  return classes;
}

// Função para criar a carta
function createLetter() {
  // Solução para problema no requisito 3 e 5, solucionado com a visualização da estruturação do código dos colegas de sala: Isadora Saraiva e Isaac Farias.
  cleanParagraph();
  alertShortString();
  const stringArray = letterText.value.split(' ');
  let count = 0;
  for (let i = 0; i < stringArray.length; i += 1) {
    const span = document.createElement('span');
    span.className = choosingClass();
    const string = stringArray[i];
    span.innerText = string;
    paragraph.appendChild(span);
    count += 1;
  }
  countParagraph.innerText = count;
  paragraph.addEventListener('click', (event) => {
    event.target.className = choosingClass();
  });
}

window.onload = () => {
  letterButton.addEventListener('click', createLetter);
};

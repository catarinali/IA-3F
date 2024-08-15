const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//serve para abrir lista de perguntas
{//abre o objeto das perguntas
    enunciado: "Pergunta 1",
    alternativas:["Alternativa 1","Alternativa 2"]
},
{//abre o objeto das perguntas
    enunciado: "Pergunta 2",
    alternativas:["Alternativa 1","Alternativa 2"]
}
{//abre o objeto das perguntas
    enunciado: "Pergunta 3",
    alternativas:["Alternativa 1","Alternativa 2"]
}
]

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas [atual];
    caixaPergunta.textContent = perguntaAtual
}
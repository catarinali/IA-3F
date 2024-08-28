const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//serve para abrir lista de perguntas
{//abre o objeto das perguntas
    enunciado: "Você usa ou já usou algum tipo de Inteligência Artificial?",
    alternativas:["Sim","Não"]
},
{//abre o objeto das perguntas
    enunciado: "Você acha que ela causará algum impacto efetivo no futuro?",
    alternativas:["Sim","Não"]
}
{//abre o objeto das perguntas
    enunciado: "Você dixaria uma Inteligência Artificial decidir questões muito bem respondidas, com base científica e social, por você?",
    alternativas:["Sim","Não"]
}
]

let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas [posicao];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlterntivas();
}
function mostraAlterntivas(){

}

mostraPergunta();
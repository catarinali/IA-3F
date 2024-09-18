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
        enunciado: "Você acha que ela é, no minímo, relativamente boa?",
        alternativas:["Sim","Não"]
    },
{//abre o objeto das perguntas
    enunciado: "Você acha que que estamos ficando mais burros e dependentes da tecnologia por influência dela?",
    alternativas:["Sim","Não"]
},
{//abre o objeto das perguntas
    enunciado: "Você acha que ela causará algum impacto efetivo no futuro?",
    alternativas:["Sim","Não"]
},
{//abre o objeto das perguntas
    enunciado: "Você dixaria uma Inteligência Artificial decidir questões muito bem respondidas, com base científica e social, por você?",
    alternativas:["Sim","Não"]
},
{//abre o objeto das perguntas
    enunciado: "Você acha que ela vai dominar o mundo?",
    alternativas:["Sim","Não"]
}
]

let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas [posicao];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
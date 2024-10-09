const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//serve para abrir lista de perguntas
    {//abre o objeto das perguntas
        enunciado: "Você usa ou já usou algum tipo de Inteligência Artificial?",
            alternativas:[
                {texto:"Sim",
                    afirmação:"Você usa ou já usou algum tipo de Inteligência Artificial"},

                {texto:"Não",
                    afirmação:"Você nunca usou algum tipo de Inteligência Artificial"}]
                },
        {//abre o objeto das perguntaso
            enunciado: "Você acha que o funcionamento dela é, no minímo, relativamente boa?",
            alternativas:[
                {texto:"Sim",
                    afirmação:"Você acha que o funcionamento dela é, no minímo, relativamente boa"},

                {texto:"Não",
                    afirmação:"Você acha que o funcionamento dela é ruim"}]
                },
    {//abre o objeto das perguntas
        enunciado: "Você acha que estamos ficando mais burros e dependentes da tecnologia por influência da IA?",
        alternativas:[
            {texto:"Sim",
                afirmação:"Você acha que estamos ficando mais burros e dependentes da tecnologia por influência da IA"},

            {texto:"Não",
                afirmação:"Você não acha que estamos ficando mais burros e dependentes da tecnologia por influência da IA"}]
            },
    {//abre o objeto das perguntas
        enunciado: "Você acha que ela causará algum impacto efetivo no futuro?",
        alternativas:[
            {texto:"Sim",
                afirmação:"Você acha que ela causará algum impacto efetivo no futuro"},

            {texto:"Não",
                afirmação:"Você acha que ela não causará algum impacto efetivo no futuro"}]
            },
    {//abre o objeto das perguntas
        enunciado: "Você deixaria uma Inteligência Artificial decidir questões muito bem respondidas, com base científica e social, por você?",
        alternativas:[
            {texto:"Sim",
                afirmação:"Você deixaria uma Inteligência Artificial decidir questões muito bem respondidas, com base científica e social, por você"},

            {texto:"Não",
                afirmação:"Você não deixaria uma Inteligência Artificial decidir questões muito bem respondidas, com base científica e social, por você"}]
            },
    {//abre o objeto das perguntas
        enunciado: "Você acha que ela vai dominar o mundo?",
        alternativas:[
            {texto:"Sim",
                afirmação:"Você acha que ela vai dominar o mundo"},

            {texto:"Não",
                afirmação:"Você acha que ela não vai dominar o mundo"}]
            },
]

let posicao = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (posicao >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    historiaFinal += afirmacoes + " ";
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Portanto...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();

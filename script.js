const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const chatMessages = document.getElementById('chat-messages');

// Base de respostas
const respostas = {
    trigo: "O trigo deve ser plantado em solo bem drenado e precisa de boa irrigação no início do crescimento.",
    milho: "O milho cresce melhor em solos férteis e bem irrigados. Use adubo rico em nitrogênio para melhores resultados.",
    feijao: "O feijão precisa de solo rico em matéria orgânica. Evite excesso de água para não apodrecer as raízes.",
    adubo: "Adubos orgânicos, como esterco ou composto, melhoram a qualidade do solo sem poluir o ambiente.",
    irrigacao: "A irrigação eficiente economiza água e aumenta a produtividade. Regue preferencialmente cedo pela manhã ou à noite.",
    default: "Interessante! A agricultura é cheia de dicas. Tente digitar palavras como 'trigo', 'milho', 'feijão', 'adubo' ou 'irrigação'."
};

// Função para criar mensagem no chat
function criarMensagem(texto, tipo) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message');
    msgDiv.classList.add(tipo === 'user' ? 'user-message' : 'bot-message');
    msgDiv.textContent = texto;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Função para processar a entrada do usuário
function processarEntrada() {
    const texto = userInput.value.trim().toLowerCase();
    if (texto === "") return;

    criarMensagem(texto, 'user');

    // Responder com base na palavra-chave
    const resposta = respostas[texto] || respostas.default;
    setTimeout(() => criarMensagem(resposta, 'bot'), 500);

    userInput.value = "";
}

// Eventos
sendBtn.addEventListener('click', processarEntrada);
userInput.addEventListener('keydown', (e) => {
    if (e.key === "Enter") processarEntrada();
});

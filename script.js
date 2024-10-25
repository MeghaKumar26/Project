const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

const botMessages = [
    "How are you feeling today?",
    "Is there anything you'd like to talk about?",
    "Take a deep breath. What can I help you with?",
    "I am here to help you find peace. Tell me what's on your mind."
];

sendBtn.addEventListener('click', sendMessage);

userInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage === '') return;

    addMessage(userMessage, 'user-message');
    userInput.value = '';

    setTimeout(() => {
        const botReply = getBotReply();
        addMessage(botReply, 'bot-message');
    }, 1000); // Simulate a delay in bot response
}

function addMessage(message, className) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', className);
    const messageContent = `<div class="message">${message}</div>`;
    messageDiv.innerHTML = messageContent;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply() {
    const randomIndex = Math.floor(Math.random() * botMessages.length);
    return botMessages[randomIndex];
}

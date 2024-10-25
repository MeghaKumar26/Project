const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Predefined bot messages for various emotions and tasks
const botMessages = {
    "sad": [
        "I'm sorry you're feeling this way. It's okay to have bad days. How about trying some breathing exercises or a 5-minute meditation to calm your mind? Would you like to try that?"
    ],
    "happy": [
        "That's wonderful! It's great to hear you're feeling happy. How about doing something fun today? Maybe dancing, doing a creative activity, or taking a nature walk?"
    ],
    "anxious": [
        "It sounds like you're feeling anxious. Would you like to try some grounding exercises like deep breathing? I can guide you through it."
    ],
    "stressed": [
        "It sounds like you're stressed. Let's take it slow. Would you like to try some calming techniques or take a short break?"
    ],
    "neutral": [
        "It's okay to feel neutral sometimes. How about doing a light activity like a 5-minute yoga stretch or reading an inspirational quote?"
    ],
    "overwhelmed": [
        "I'm sorry you're feeling overwhelmed. Would you like to talk to someone or try some calming exercises together?"
    ],
    "bored": [
        "It sounds like you need a break. How about a fun activity to recharge? You can stretch, go for a walk, or try a puzzle. What would you like to do?"
    ],
    "paint": [
        "Painting sounds like a wonderful way to relax and express yourself creatively. Grab your brushes and colors, and let your imagination flow! What kind of painting do you want to create today?"
    ],
    "chores": [
        "Doing chores can be a great way to clear your mind and get things done! You can start with small tasks like tidying up your space, doing the dishes, or organizing your things. Let’s tackle it one step at a time!"
    ],
    "yes": [
        "Great! Let's start with a deep breathing exercise. Breathe in slowly for 4 counts, hold for 4 counts, and exhale for 4 counts. Repeat this a few times and feel your body relax."
    ],
    "no": [
        "That's okay! I'm here if you change your mind or want to try something else."
    ],
    "default": [
        "I'm here to listen. How are you feeling today?"
    ]
};

// Event listener for sending the user message
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Function to send and handle messages
function sendMessage() {
    const userMessage = userInput.value.trim().toLowerCase();
    if (userMessage === '') return;

    addMessage(userMessage, 'user-message');
    userInput.value = '';

    setTimeout(() => {
        const botReply = getBotReply(userMessage);
        addMessage(botReply, 'bot-message');
    }, 1000); // Simulate a delay in bot response
}

// Function to display messages in the chat box
function addMessage(message, className) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', className);
    const messageContent = `<div class="message">${message}</div>`;
    messageDiv.innerHTML = messageContent;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to get bot replies based on user input
function getBotReply(userMessage) {
    if (userMessage.includes('sad') || userMessage.includes('cry')) {
        return botMessages['sad'][0];
    } else if (userMessage.includes('happy') || userMessage.includes('excited')) {
        return botMessages['happy'][0];
    } else if (userMessage.includes('anxious')) {
        return botMessages['anxious'][0];
    } else if (userMessage.includes('stressed')) {
        return botMessages['stressed'][0];
    } else if (userMessage.includes('neutral') || userMessage.includes('okay')) {
        return botMessages['neutral'][0];
    } else if (userMessage.includes('overwhelmed') || userMessage.includes('help')) {
        return botMessages['overwhelmed'][0];
    } else if (userMessage.includes('bored') || userMessage.includes('break')) {
        return botMessages['bored'][0];
    } else if (userMessage.includes('paint')) {
        return botMessages['paint'][0];
    } else if (userMessage.includes('chores') || userMessage.includes('clean')) {
        return botMessages['chores'][0];
    } else if (userMessage.includes('yes'))

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Event listener for send button
sendBtn.addEventListener('click', sendMessage);

// Function to send a message and get a response
function sendMessage() {
    const userText = userInput.value;
    if (userText.trim() !== "") {
        addMessage(userText, 'user-message');
        userInput.value = '';
        getBotResponse(userText);
    }
}

// Add message to chatbox
function addMessage(text, className) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${className}`;
    messageDiv.innerText = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Get bot response based on user input
function getBotResponse(input) {
    let botResponse = '';

    // Respond to different user feelings and moods
    if (input.toLowerCase().includes('sad') || input.toLowerCase().includes('stressed')) {
        botResponse = "I'm sorry you're feeling this way. How about trying some breathing exercises or a short meditation? Would that help?";
    } else if (input.toLowerCase().includes('happy') || input.toLowerCase().includes('excited')) {
        botResponse = "That's great to hear! Keep the positive energy going. How about doing something fun today like dancing or painting?";
    } else if (input.toLowerCase().includes('confused') || input.toLowerCase().includes('okay')) {
        botResponse = "It's okay to feel neutral or unsure sometimes. How about doing something relaxing like yoga or listening to calming music?";
    } else if (input.toLowerCase().includes('overwhelmed')) {
        botResponse = "It sounds like you're going through a tough time. Would you like to talk to someone or try some calming techniques?";
    } else if (input.toLowerCase().includes('help') || input.toLowerCase().includes('can't handle')) {
        botResponse = "I'm here to support you. Remember you're not alone. It might help to reach out to a professional if things feel too overwhelming.";
    } else {
        botResponse = "I'm here for you no matter what. How can I help today?";
    }

    addMessage(botResponse, 'bot-message');
}

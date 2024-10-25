const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", () => {
    const userText = userInput.value;
    if (userText) {
        addUserMessage(userText);
        userInput.value = '';
        getBotResponse(userText);
    }
});

userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendButton.click();
    }
});

function addUserMessage(text) {
    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = text;
    chatBox.appendChild(userMessage);
    chatBox.scrollTop = chatBox.scrollHeight;  // Scroll to the bottom
}

function getBotResponse(userText) {
    let botResponse;
    // Simple responses based on user input
    if (userText.toLowerCase().includes("happy")) {
        botResponse = "I'm glad to hear you're feeling happy! Keep up the positive vibes!";
    } else if (userText.toLowerCase().includes("sad")) {
        botResponse = "I'm sorry to hear that. It's okay to feel sad sometimes. Can I suggest some activities that might help?";
    } else if (userText.toLowerCase().includes("anxious")) {
        botResponse = "It's normal to feel anxious. Deep breathing can help. Would you like to try it with me?";
    } else {
        botResponse = "Thank you for sharing your feelings. Remember, it's important to talk about how you feel.";
    }
    
    addBotMessage(botResponse);
}

function addBotMessage(text) {
    const botMessage = document.createElement("div");
    botMessage.className = "bot-message";
    botMessage.textContent = text;
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;  // Scroll to the bottom
}

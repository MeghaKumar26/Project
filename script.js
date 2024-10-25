const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", () => {
    const userText = userInput.value.trim();
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
    const responses = {
        sad: [
            "I'm sorry you're feeling this way. It's okay to have bad days. How about trying some breathing exercises or a 5-minute meditation to calm your mind? Would you like to try that?",
            "It's completely fine to feel sad sometimes. Let me know how I can help you today."
        ],
        happy: [
            "That's wonderful! How about doing something fun today? Maybe dancing, doing a creative activity, or taking a nature walk. What would you like to do?",
            "I'm so glad to hear you're happy! What's something fun you're planning?"
        ],
        anxious: [
            "Anxiety can be tough. Have you tried some deep breathing? I'm here to guide you through it if you’d like.",
            "It's normal to feel anxious. Let's work on some techniques together. Would that be helpful?"
        ],
        overwhelmed: [
            "I'm really sorry you're feeling this way. If you're open to it, we can try some calming exercises together.",
            "It sounds like you're going through a tough time. Would you like to talk about it or try some calming techniques?"
        ],
        bored: [
            "It sounds like you need a little breather. How about a fun activity? Maybe a quick puzzle or stretching? What would you like to do?",
            "Sometimes, a little distraction can help. Would you like some suggestions for activities?"
        ],
        neutral: [
            "It's okay to feel neutral or confused. How about trying something light? I can suggest yoga or a short inspirational quote.",
            "Thanks for sharing how you're feeling. What can I help you with to brighten your day?"
        ],
        personal: [
            "I'm here to remind you that you're not a failure. Everyone has tough days. Let's talk about what's bothering you.",
            "It's okay to have doubts, but remember you're doing your best. Happiness is a journey—I'm here to support you."
        ]
    };

    // Normalize the user input for easier matching
    const userMood = userText.toLowerCase();

    let botResponse = "I'm here to help you. How can I assist you today?";

    // Check for keywords in user input
    if (userMood.includes("sad") || userMood.includes("anxious") || userMood.includes("stressed") || userMood.includes("crying")) {
        botResponse = responses.sad[Math.floor(Math.random() * responses.sad.length)];
    } else if (userMood.includes("happy") || userMood.includes("excited") || userMood.includes("good mood")) {
        botResponse = responses.happy[Math.floor(Math.random() * responses.happy.length)];
    } else if (userMood.includes("anxious")) {
        botResponse = responses.anxious[Math.floor(Math.random() * responses.anxious.length)];
    } else if (userMood.includes("help") || userMood.includes("overwhelmed") || userMood.includes("too stressed")) {
        botResponse = responses.overwhelmed[Math.floor(Math.random() * responses.overwhelmed.length)];
    } else if (userMood.includes("bored") || userMood.includes("need a break")) {
        botResponse = responses.bored[Math.floor(Math.random() * responses.bored.length)];
    } else if (userMood.includes("okay") || userMood.includes("confused") || userMood.includes("neutral")) {
        botResponse = responses.neutral[Math.floor(Math.random() * responses.neutral.length)];
    } else if (userMood.includes("failure") || userMood.includes("happy")) {
        botResponse = responses.personal[Math.floor(Math.random() * responses.personal.length)];
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

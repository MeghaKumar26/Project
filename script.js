// Function to handle the user's message and generate a response
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== "") {
        appendMessage("You", userInput); // Display user's input in chat
        const response = generateResponse(userInput); // Generate chatbot response
        appendMessage("Serene AI", response); // Display chatbot's response
        document.getElementById('user-input').value = ''; // Clear input field
    }
}

// Function for quick response buttons
function quickResponse(message) {
    document.getElementById('user-input').value = message;
    sendMessage();
}

// Generate chatbot response based on user input
function generateResponse(userInput) {
    const lowerInput = userInput.toLowerCase();
    if (lowerInput.includes("happy")) {
        return "That's wonderful! Keep it up. How about some fun activities like painting, dancing, or a nature walk?";
    } else if (lowerInput.includes("sad")) {
        return "I'm sorry you're feeling down. Try some meditation or yoga to relax. Would you like a breathing exercise suggestion?";
    } else if (lowerInput.includes("anxious")) {
        return "Take a deep breath. How about trying a quick breathing exercise to calm your nerves?";
    } else if (lowerInput.includes("help")) {
        return "I'm here for you. If you're feeling really low, I suggest reaching out to a professional.";
    } else {
        return "I'm here to listen. Could you tell me more about how you're feeling?";
    }
}

// Append messages to the chat box
function appendMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('p');
    messageElement.classList.add('message');
    messageElement.classList.add(sender === "You" ? 'user' : 'bot');
    messageElement.textContent = `${sender}: ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto scroll to bottom
}

// Mood check-in reminder
window.onload = function () {
    const today = new Date();
    const hours = today.getHours();
    if (hours === 9) { // Trigger daily reminder at 9:00 AM
        alert("🌟 Time for your daily mood check-in! How are you feeling today?");
    }
};

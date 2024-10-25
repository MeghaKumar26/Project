document.getElementById("send").addEventListener("click", function () {
    var userInput = document.getElementById("userInput").value.toLowerCase();
    var response = "";

    // Friendly responses similar to ChatGPT style
    if (userInput.includes("sad") || userInput.includes("crying")) {
        response = "I'm sorry you're feeling sad. I'm here for you. How about we try some deep breathing exercises or a short meditation?";
    } else if (userInput.includes("anxious") || userInput.includes("stressed")) {
        response = "Take a deep breath. It's okay to feel this way sometimes. Would you like some breathing exercises or perhaps a quick distraction, like listening to music or drawing?";
    } else if (userInput.includes("happy")) {
        response = "That's wonderful! I'm so happy to hear that! How about doing something fun like a quick game, dancing, or maybe trying out a new recipe?";
    } else if (userInput.includes("help")) {
        response = "I'm here to help. Can you tell me more about what you're going through or if you'd like to talk to a professional for support?";
    } else if (userInput.includes("yes")) {
        response = "Great! Let's dive in. What would you like to start with? Breathing exercises, a meditation session, or something fun to lift your spirits?";
    } else if (userInput.includes("no")) {
        response = "That's okay! Let me know how else I can support you. I'm always here if you change your mind.";
    } else {
        response = "I'm here to listen. Feel free to share how you're feeling or let me know how I can assist you.";
    }

    // Update the chat window with the user's input and the AI response
    var chatBox = document.getElementById("chatBox");
    chatBox.innerHTML += "<p><strong>You:</strong> " + userInput + "</p>";
    chatBox.innerHTML += "<p><strong>Serene AI:</strong> " + response + "</p>";

    // Clear the input box
    document.getElementById("userInput").value = "";
});

// Buttons for quick mood selection
document.getElementById("happyButton").addEventListener("click", function () {
    var response = "That's wonderful! I'm so happy to hear that! How about doing something fun like a quick game, dancing, or maybe trying out a new recipe?";
    updateChat("I feel happy", response);
});

document.getElementById("sadButton").addEventListener("click", function () {
    var response = "I'm sorry you're feeling sad. I'm here for you. How about we try some deep breathing exercises or a short meditation?";
    updateChat("I feel sad", response);
});

document.getElementById("anxiousButton").addEventListener("click", function () {
    var response = "Take a deep breath. It's okay to feel this way sometimes. Would you like some breathing exercises or perhaps a quick distraction, like listening to music or drawing?";
    updateChat("I feel anxious", response);
});

document.getElementById("helpButton").addEventListener("click", function () {
    var response = "I'm here to help. Can you tell me more about what you're going through or if you'd like to talk to a professional for support?";
    updateChat("I need help", response);
});

// Function to update the chat box
function updateChat(userText, aiResponse) {
    var chatBox = document.getElementById("chatBox");
    chatBox.innerHTML += "<p><strong>You:</strong> " + userText + "</p>";
    chatBox.innerHTML += "<p><strong>Serene AI:</strong> " + aiResponse + "</p>";
}

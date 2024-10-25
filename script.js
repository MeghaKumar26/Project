document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("userInput");
    const sendButton = document.getElementById("sendButton");
    const chatbox = document.querySelector(".chatbox");

    // Improved responses
    const responses = {
        "i feel sad": "I'm sorry you're feeling down. How about some meditation or a calming yoga session? I'm here for you.",
        "i feel anxious": "Take a deep breath. Let's try some relaxation exercises together. You are not alone.",
        "i feel happy": "That's wonderful! How about doing something fun like painting, music, or dancing to celebrate your happiness?",
        "i feel like crying": "It's okay to cry sometimes. It's a natural way to release emotions. I'm here for you. Would you like some breathing exercises, or just want to talk?",
        "i need help": "It's okay to ask for help. How can I assist you? If things are tough, consider talking to someone close or a professional."
    };

    // Function to update chatbox
    function updateChatbox(message, sender) {
        const messageElement = document.createElement("div");
        messageElement.textContent = `${sender}: ${message}`;
        messageElement.className = sender === "You" ? "user-message" : "bot-message";
        chatbox.appendChild(messageElement);
        chatbox.scrollTop = chatbox.scrollHeight; // Auto-scroll to the bottom
    }

    // Event listener for send button
    sendButton.addEventListener("click", function () {
        const userInput = inputField.value.trim().toLowerCase();

        if (userInput) {
            // Add user input to the chatbox
            updateChatbox(userInput, "You");

            // Check if there's a response available for the input
            let botResponse = responses[userInput] || "I'm not sure how to respond to that. Would you like to try meditation or a breathing exercise?";

            // Add bot response to the chatbox
            setTimeout(() => updateChatbox(botResponse, "Serene AI"), 500); // Delay to simulate a real conversation
        }

        // Clear the input field after sending
        inputField.value = "";
    });

    // Function for quick reply buttons
    const quickReplies = document.querySelectorAll(".quick-reply");

    quickReplies.forEach(button => {
        button.addEventListener("click", function () {
            const quickText = button.textContent.toLowerCase();
            updateChatbox(quickText, "You");

            let botResponse = responses[quickText] || "Let's try a breathing exercise or some relaxation techniques!";
            setTimeout(() => updateChatbox(botResponse, "Serene AI"), 500);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("userInput");
    const sendButton = document.getElementById("sendButton");
    const chatbox = document.getElementById("chatbox");

    // Friendly, helpful responses for each mood
    const responses = {
        "i feel sad": "I'm sorry you're feeling sad. How about trying some breathing exercises or yoga to lift your spirits?",
        "i feel anxious": "Take a deep breath. How about we try a meditation or relaxation exercise together?",
        "i feel happy": "That's amazing! Keep spreading the joy. How about doing something fun like painting, dancing, or going on a nature walk?",
        "i feel like crying": "It's okay to cry, I'm here with you. Let's take a deep breath and do something calming. How about a breathing exercise?",
        "i need help": "It's okay to ask for help. Consider reaching out to a close friend or a mental health professional if you need more support."
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
            setTimeout(() => updateChatbox(botResponse, "Serene AI"), 500); // Delay to simulate real conversation
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

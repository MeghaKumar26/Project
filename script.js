document.addEventListener('DOMContentLoaded', () => {
    // Get the necessary DOM elements
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    // Predefined bot messages for various emotions and tasks
    const botMessages = {
        "sad": "I'm sorry you're feeling this way. It's okay to have bad days. How about trying some breathing exercises or a 5-minute meditation to calm your mind? Would you like to try that?",
        "happy": "That's wonderful! It's great to hear you're feeling happy. How about doing something fun today? Maybe dancing, doing a creative activity, or taking a nature walk?",
        "anxious": "It sounds like you're feeling anxious. Would you like to try some grounding exercises like deep breathing? I can guide you through it.",
        "stressed": "It sounds like you're stressed. Let's take it slow. Would you like to try some calming techniques or take a short break?",
        "neutral": "It's okay to feel neutral sometimes. How about doing a light activity like a 5-minute yoga stretch or reading an inspirational quote?",
        "overwhelmed": "I'm sorry you're feeling overwhelmed. Would you like to talk to someone or try some calming exercises together?",
        "bored": "It sounds like you need a break. How about a fun activity to recharge? You can stretch, go for a walk, or try a puzzle. What would you like to do?",
        "paint": "Painting sounds like a wonderful way to relax and express yourself creatively. Grab your brushes and colors, and let your imagination flow! What kind of painting do you want to create today?",
        "chores": "Doing chores can be a great way to clear your mind and get things done! You can start with small tasks like tidying up your space, doing the dishes, or organizing your things. Let’s tackle it one step at a time!",
        "yes": "Great! Let's start with a deep breathing exercise. Breathe in slowly for 4 counts, hold for 4 counts, and exhale for 4 counts. Repeat this a few times and feel your body relax.",
        "no": "That's okay! I'm here if you change your mind or want to try something else.",
        "default": "I'm here to listen. How are you feeling today?"
    };

    // Function to send a message
    function sendMessage() {
        const userMessage = userInput.value.trim().toLowerCase();
        
        if (userMessage === '') return; // Prevent empty message send

        console.log('Send button clicked'); // Debugging to ensure button is clicked

        // Add user message to chat
        addMessage(userMessage, 'user-message');
        userInput.value = ''; // Clear input field

        // Simulate bot response with a delay
        setTimeout(() => {
            const botReply = getBotReply(userMessage);
            addMessage(botReply, 'bot-message');
        }, 500); // 500ms delay for bot response
    }

    // Function to add a message to the chat box
    function addMessage(message, className) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message', className);
        messageDiv.textContent = message;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message
    }

    // Function to get bot reply based on user input
    function getBotReply(userMessage) {
        if (userMessage.includes('sad')) return botMessages['sad'];
        if (userMessage.includes('happy')) return botMessages['happy'];
        if (userMessage.includes('anxious')) return botMessages['anxious'];
        if (userMessage.includes('stressed')) return botMessages['stressed'];
        if (userMessage.includes('neutral')) return botMessages['neutral'];
        if (userMessage.includes('overwhelmed')) return botMessages['overwhelmed'];
        if (userMessage.includes('bored')) return botMessages['bored'];
        if (userMessage.includes('paint')) return botMessages['paint'];
        if (userMessage.includes('chores')) return botMessages['chores'];
        if (userMessage.includes('yes')) return botMessages['yes'];
        if (userMessage.includes('no')) return botMessages['no'];
        return botMessages['default'];
    }

    // Add event listeners to send message on button click or Enter key press
    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});

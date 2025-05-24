document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    // Function to add a message to the chat display
    function addMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender + '-message');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        // Scroll to the bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Function to generate a bot response
    function generateBotResponse(userMessage) {
        const lowerUserMessage = userMessage.toLowerCase();

        if (lowerUserMessage.includes('hello') || lowerUserMessage.includes('hi')) {
            return 'Hello there! How can I help you today?';
        } else if (lowerUserMessage.includes('how are you')) {
            return "I'm just a bot, but I'm doing great! Thanks for asking.";
        } else if (lowerUserMessage.includes('name')) {
            return "I am a simple AI Chatbot.";
        } else if (lowerUserMessage.includes('bye') || lowerUserMessage.includes('goodbye')) {
            return "Goodbye! Have a great day!";
        } else if (lowerUserMessage.includes('help')) {
            return "You can ask me things like 'hello', 'how are you', or 'what is your name?'.";
        }
        else {
            return "Sorry, I didn't understand that. Could you try rephrasing? You can ask for 'help'.";
        }
    }

    // Function to handle sending a message
    function sendMessage() {
        const messageText = userInput.value.trim();
        if (messageText === '') {
            return; // Don't send empty messages
        }

        addMessage(messageText, 'user');
        userInput.value = ''; // Clear input field

        // Simulate bot thinking time (optional)
        setTimeout(() => {
            const botResponse = generateBotResponse(messageText);
            addMessage(botResponse, 'bot');
        }, 500);
    }

    // Event listeners
    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    // Initial bot message (optional)
    addMessage("Hi! I'm your AI Chatbot. Ask me something!", 'bot');
});

const chatBox = document.getElementById('chat-box');

function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput === "") return;

    appendMessage(userInput, 'user');
    document.getElementById('user-input').value = '';

    setTimeout(() => {
        const botResponse = getBotResponse(userInput);
        appendMessage(botResponse, 'bot');
    }, 500);
}

function appendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', `${sender}-message`);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
    input = input.toLowerCase();
    let response = '';

    if (input.includes('hello')) {
        response = 'Hello! How can I assist you today?';
    } else if (input.includes('how are you')) {
        response = 'I am just a bot, but I\'m doing great! How about you?';
    } else if (input.includes('bye')) {
        response = 'Goodbye! Have a nice day!';
    } else {
        response = 'I\'m not sure how to respond to that.';
    }

    return response;
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

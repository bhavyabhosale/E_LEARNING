let jitsiMeetAPI;

// Initialize Jitsi Meet
function initJitsiMeet() {
    const domain = 'meet.jit.si';
    const options = {
        roomName: 'your-room-name', // Replace with your room name
        parentNode: document.querySelector('.main-area'),
        configOverwrite: { startWithAudioMuted: true, startWithVideoMuted: true },
        interfaceConfigOverwrite: { filmStripOnly: false },
    };
    jitsiMeetAPI = new JitsiMeetExternalAPI(domain, options);
}

// Event listener for joining video call
document.getElementById('join-video').addEventListener('click', function(e) {
    e.preventDefault();
    if (!jitsiMeetAPI) {
        initJitsiMeet();
    }
});

// Example function to append chat messages
document.getElementById('chat-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;
    if (message.trim() !== '') {
        appendMessage(message);
        messageInput.value = '';
    }
});

function appendMessage(message) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message');
    messageContainer.innerText = message;
    document.querySelector('.chat-messages').appendChild(messageContainer);
}

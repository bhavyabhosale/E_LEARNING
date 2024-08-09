const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Get DOM elements
const registerForm = document.getElementById('register-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

// Handle form submission
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent default form submission

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    // Validate passwords
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    try {
        // Create user with Firebase Authentication
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;

        // Update user profile
        await user.updateProfile({
            displayName: name
        });

        // Redirect or show a success message
        alert('Registration successful!');
        window.location.href = 'login.html'; // Redirect to login page or home page

    } catch (error) {
        // Handle errors
        console.error('Error during registration:', error.message);
        alert(error.message);
    }
});

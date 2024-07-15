const firebaseConfig = {
    apiKey: "AIzaSyBI_ZP4ElvJSHNhMm5ahxEn3GBq6iO3ziQ",
    authDomain: "my-project-d1d8a.firebaseapp.com",
    projectId: "my-project-d1d8a",
    storageBucket: "my-project-d1d8a.appspot.com",
    messagingSenderId: "1041578841806",
    appId: "1:1041578841806:web:cf6321d5ced8578a97629f",
    measurementId: "G-7FTSQPQ7J4"
  };

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// DOM elements
const profileSection = document.querySelector('.profile');
const userBtn = document.getElementById('user-btn');
const userp= document.getElementById('userp');

// Check user authentication status
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        // User is signed in
        profileSection.innerHTML = `
            <img src="${user.photoURL || 'images/pic-1.jpg'}" class="image" alt="Profile">
            <h3 class="name">${user.displayName || 'User'}</h3>
            <p class="role">STUDENT</p>
            <a href="profile.html" class="btn">view profile</a>
            <div class="flex-btn">
                <button id="sign-out-btn" class="option-btn">Sign Out</button>
            </div>
        `;
        userp.innerHTML=`
        <img src="${user.photoURL || 'images/pic-1.jpg'}" class="image" alt="Profile">
        <h3 class="name">${user.displayName || 'User'}</h3>
        <p class="role">STUDENT</p>
        <a href="profile.html" class="btn">view profile</a>
        `

        // Add sign-out functionality
        document.getElementById('sign-out-btn').addEventListener('click', () => {
            firebase.auth().signOut().then(() => {
                // Sign-out successful, redirect to login page
                window.location.href = 'login.html';
            }).catch(error => {
                console.error('Sign out error:', error);
            });
        });

    } else {
        if(!window.location.href.includes('register.html')){
            window.location.href = 'login.html';}
        profileSection.innerHTML = `
        <img src="images/pic-1.jpg" class="image" alt="">
        <h3 class="name">KARTHIK M</h3>
        <p class="role">STUDENT</p>
        <a href="profile.html" class="btn">view profile</a>
        <div class="flex-btn">
            <a href="login.html" class="option-btn">login</a>
            <a href="register.html" class="option-btn">register</a>
        </div>
    `;
        
        // No user is signed in
     
    }
});
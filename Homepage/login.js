// Open Login Modal
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

// Close Login Modal
function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// Open Create Account Modal
function openCreateAccountModal() {
    document.getElementById('createAccountModal').style.display = 'block';
}

// Close Create Account Modal
function closeCreateAccountModal() {
    document.getElementById('createAccountModal').style.display = 'none';
}

// Open Forgot Password Modal
function openForgotPasswordModal() {
    document.getElementById('forgotPasswordModal').style.display = 'block';
}

// Close Forgot Password Modal
function closeForgotPasswordModal() {
    document.getElementById('forgotPasswordModal').style.display = 'none';
}

function togglePasswordVisibility(id) {
    const passwordField = document.getElementById(id);
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}

// Close the modal if the user clicks outside of it
window.addEventListener('click', (event) => {
    const loginModal = document.getElementById('loginModal');
    const createAccountModal = document.getElementById('createAccountModal');
    const forgotPasswordModal = document.getElementById('forgotPasswordModal');

    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    } else if (event.target === createAccountModal) {
        createAccountModal.style.display = 'none';
    } else if (event.target === forgotPasswordModal) {
        forgotPasswordModal.style.display = 'none';
    }
});

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform login logic here (e.g., validate credentials)
    const userName = document.getElementById('mobileOrEmail').value.split('@')[0]; // Example logic to get user name
    // If login is successful, set login state and redirect to the homepage
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userName', userName);
    alert('Login Successful');
    window.location.href = 'index.html';
});

// Handle create account form submission
document.getElementById('createAccountForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform create account logic here (e.g., save user data)
    const userName = document.getElementById('name').value;
    // If account creation is successful, set login state and redirect to the homepage
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userName', userName);
    alert('Account Created Successfully');
    window.location.href = 'index.html';
});

// Handle forgot password form submission
document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform password reset logic here (e.g., update password)
    // If password reset is successful, set login state and redirect to the homepage
    localStorage.setItem('isLoggedIn', 'true');
    alert('Password Reset Successful');
    window.location.href = 'index.html';
});

// Check login state and update UI accordingly
document.addEventListener('DOMContentLoaded', () => {
    const profileIcon = document.querySelector('.nav-icons span:nth-child(3)');
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userName = localStorage.getItem('userName');

    if (isLoggedIn) {
        profileIcon.innerHTML = `
            <div class="user-info">
                <p>Welcome, ${userName}</p>
                <button class="logout-btn" onclick="logout()">Log Out</button>
            </div>
        `;
    } else {
        profileIcon.innerHTML = '👤';
        profileIcon.addEventListener('click', openLoginModal);
    }
});

function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    window.location.href = 'index.html';
}

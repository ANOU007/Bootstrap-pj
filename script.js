document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Redirect to the external website after login
    window.location.href = 'https://anou007.github.io/AZ/';
});

function logout() {
    // Redirect back to the login page
    window.location.href = 'index.html';
}

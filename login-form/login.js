document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert(`Email: ${email}\nPassword: ${'*'.repeat(password.length)}`);
    } else {
        alert('Please fill out both fields.');
    }
});

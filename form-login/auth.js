function autentikasi() {
    var usernameInput = document.getElementById('username').value;
    var passwordInput = document.getElementById('password').value;

    if (usernameInput === 'izmil_arifin' && passwordInput === 'student-nf23') {
    // Login Sukses
        alert('Login successful');
        window.location.href = 'success.html';
    } else {
    // Gagal Login
        alert('Login failed. Please check your credentials.');
    }
}

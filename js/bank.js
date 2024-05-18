document.getElementById('login-submit').addEventListener('click', function(){

    // Get User Email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // Get User Password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    // Check Email & Password
    if(userEmail == 'jihad@gmail.com' && userPassword == 'secret'){
        window.location.href = 'banking.html';
    }
})
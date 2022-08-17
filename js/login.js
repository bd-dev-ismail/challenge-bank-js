//Step-1 GEt the button and add event handler
document.getElementById('btn-login').addEventListener('click', function(){
//step-2 Get the value from email form & password
    const emailField = document.getElementById('email-field');
    const getEmail = emailField.value;
    emailField.value = '';
    const passwordField = document.getElementById('password-field');
    const getPass = passwordField.value;
    passwordField.value = '';
    if(getEmail === 'nowrin@ratul.com' && getPass === 'married'){
        window.location.href = 'dashboard.html';
    }
    else{
        alert('Enter a valid Email & Password');
    }
});
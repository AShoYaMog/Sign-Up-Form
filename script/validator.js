const PASSWORD = document.querySelector('#password');
var PASSWORD_CHECK = document.querySelector('#password_check')

PASSWORD_CHECK.onkeyup = () => {
    PASSWORD.value !== PASSWORD_CHECK.value ? PASSWORD_CHECK.classList.add('error') : PASSWORD_CHECK.classList.remove('error')
} 
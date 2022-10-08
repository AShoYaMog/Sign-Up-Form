const PASSWORD = document.querySelector('#password');
const PASSWORD_CHECK = document.querySelector('#password_check')

PASSWORD_CHECK.onkeyup = () => {
    PASSWORD.value !== PASSWORD_CHECK.value ? addError() : removeError();
} 

function addError() {
    PASSWORD.classList.add('error');
    PASSWORD_CHECK.classList.add('error');
    document.querySelector('#passwordError').style.display = 'block';
}

function removeError() {
    PASSWORD.classList.remove('error');
    PASSWORD_CHECK.classList.remove('error');
    document.querySelector('#passwordError').style.display = 'none';
}
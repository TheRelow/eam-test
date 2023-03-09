let btnPass = document.querySelector('.js-btn-password')
let inputPass = document.querySelector('.js-password-input')
let btnPassNew = document.querySelector('.js-btn-password-new')
let inputPassNew = document.querySelector('.js-password-input-new')


btnPass.onclick = function () {
    if (inputPass.getAttribute('type') === 'password') {
        inputPass.setAttribute('type', 'text');
    } else {
        inputPass.setAttribute('type', 'password');
    }
}

btnPassNew.onclick = function () {
    if (inputPassNew.getAttribute('type') === 'password') {
        inputPassNew.setAttribute('type', 'text');
    } else {
        inputPassNew.setAttribute('type', 'password');
    }
}
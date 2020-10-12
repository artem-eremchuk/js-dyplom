import {initLogin} from './login.js';
import {initRegister} from './register.js';
import "./assets/styles/style.scss";

initLogin();
initRegister();

// -------------------------------- Toggle -------------------------------
const loginBlock = document.getElementById('login');
const registerBlock = document.getElementById('register');
const formBoxBtn = document.getElementById('form__button-box-btn');
const toggleBtnLeft = document.getElementById('toggle-left');
const toggleBtnRight = document.getElementById('toggle-right');

toggleBtnRight.addEventListener('click', () => {
    loginBlock.style.left = '-400px';
    registerBlock.style.left = '50px';
    formBoxBtn.style.left = '110px';
    toggleBtnRight.classList.add('active');
    toggleBtnLeft.classList.remove('active');
})

toggleBtnLeft.addEventListener('click', () => {
    loginBlock.style.left = '50px';
    registerBlock.style.left = '450px';
    formBoxBtn.style.left = '0';
    toggleBtnLeft.classList.add('active');
    toggleBtnRight.classList.remove('active');
})





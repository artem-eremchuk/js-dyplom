import { ROOT_NODE } from '../constants';
import { initLogin } from './login';
import { initRegister } from './register';
import './form.scss';

const template = `
    <div class="container">
    <div class="form-box">
        <div class="form__button-box">
            <div id="form__button-box-btn"></div>
            <button id="toggle-left" type="button" class="form__toggle-btn active">Login In</button>
            <button id="toggle-right" type="button" class="form__toggle-btn ">Register</button>
        </div>
        <form id="login" name="login-form" class="form__input-group">
            <input class="form__input-field input__email" type="email" name="email" placeholder="Email" autocomplete="off">
            <input class="form__input-field input__pw" type="password" name="password" placeholder="Password" autocomplete="current-password">
            <button id="login-btn" type="submit" class="form__input-btn" disabled>Log in</button>
            <div class="login__form-message">Invalid password. Try again.</div>
        </form>
        <form id="register" name="register=form" class="form__input-group">
            <input class="form__input-field" type="text" name="login" placeholder="Login" autocomplete="off">
            <input class="form__input-field" type="text" name="name" placeholder="Name" autocomplete="off">
            <input class="form__input-field" type="number" name="age" placeholder="Age" autocomplete="off">
            <input class="form__input-field" type="email" name="email" placeholder="Email" autocomplete="off">
            <input class="form__input-field" type="text" name="city" placeholder="City" autocomplete="off">
            <input class="form__input-field" type="password" name="password" placeholder="Password" autocomplete="current-password">
            <input class="form__input-field" type="password" name="repeatPassword" placeholder="Repeat password" autocomplete="current-password">
            <button id="register-btn" type="submit" class="form__input-btn" disabled>Register</button>
        </form>
    </div>
    </div> 
`;

export const initForm = () => {
    ROOT_NODE.innerHTML = template;
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
}


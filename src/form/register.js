import {INVALID_CLASS} from '../constants.js';
import { users } from '../constants';

export function initRegister(){
    const registerForm = document.forms['register'];
    const registerBtn = document.getElementById('register-btn');

    function handleClassAdding(domNode, isValid){
        if (isValid){
            domNode.classList.remove(INVALID_CLASS);
        }
        else {
            domNode.classList.add(INVALID_CLASS);
        }
    }

    const formHelper = {
        login: {
            value: '',
            valid: false,
            checkValidation(){
                const regex = /,|\.|^$/g;
                this.login.valid = !regex.test(this.login.value);
            },
        },
        name: {
            value: '',
            valid: false,
            checkValidation(){
                this.name.valid = this.name.value !== '';
            },
        },
        age: {
            value: '',
            valid: false,
            checkValidation(){
                const regex = /^\d+$/g;
                this.age.valid = regex.test(this.age.value);
            },
        },
        email: {
            value: '',
            valid: false,
            checkValidation(){
                const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
                this.email.valid = regex.test(this.email.value);
            },
        },
        city: {
            value: '',
            valid: false,
            checkValidation(){
                this.city.valid = this.city.value !== '';
            },
        },
        password: {
            value: '',
            valid: false,
            checkValidation(){
                this.password.valid = this.password.value !== '';
            },
        },
        repeatPassword: {
            value: '',
            valid: false,
            checkValidation(){
                this.repeatPassword.valid = this.repeatPassword.value === this.password.value;
            },
        },
        checkFormValidation(){
            for(const key in this){
                if(typeof this[key] !== 'function' && this[key].valid === false){
                    return false;
                }
            }
            return true;
        },
        getValue(){
            return {
                login: this.login.value,
                name: this.name.value,
                age: this.age.value,
                email: this.email.value,
                city: this.city.value,
                password: this.password.value,
            }
        }
    }

    registerForm.addEventListener('input', (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const bindedValidator = formHelper[name].checkValidation.bind(formHelper);

        formHelper[name].value = value;
        bindedValidator();
        registerBtn.disabled = !formHelper.checkFormValidation();
        handleClassAdding(event.target, formHelper[name].valid);
    });

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const user = formHelper.getValue();
        users.push(user);
        localStorage.setItem('user', JSON.stringify(user));
        registerForm.reset();
    });  
}
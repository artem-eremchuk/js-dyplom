const users = [{
    name: 'Artem',
    email: 'eremchuk.it@gmail.com',
    password: 'qwerty',
}, 
{
    name: 'Ivan',
    email: 'ivan@gmail.com',
    password: 'ivan',
}, 
{
    name: 'Peret',
    email: 'peter@gmail.com',
    password: 'peter',
}];

export function initLogin(){
    const inputs = [...document.querySelectorAll('.input__email, .input__pw')];
    const loginForm = document.forms['login-form'];
    const loginBtn = document.getElementById('login-btn');
    const errorMessage = document.querySelector('.login__form-message');

    inputs.forEach((element) => element.addEventListener("input", inputHandler));

    function inputHandler(event) {
        const hasInvalidClass = event.target.classList.contains("invalid");

        if (event.target.value.length === 0 && !hasInvalidClass) {
            event.target.classList.add("invalid");
            event.target.placeholder = `Enter ${event.target.type}`;
            loginBtn.setAttribute("disabled", "disabled");
        }

        if (event.target.value.length > 0 && hasInvalidClass) {
            event.target.classList.remove("invalid");
            
        }
        errorMessage.style.display = 'none';
        setButtonDisabled();
    }

    function setButtonDisabled() {
        loginBtn.disabled = inputs.some((input) => !input.value);
    }

    loginBtn.addEventListener("click", function (event) {
        event.preventDefault();
        let isUser = false;
        users.forEach(function(item){
            if (loginForm.elements['email'].value === item.email && 
                loginForm.elements['password'].value !== item.password){
                errorMessage.innerText = 'Пароль введен неверно';
                errorMessage.style.display = 'block';
                loginForm.reset();
                setButtonDisabled();
                isUser = true;
            }
            
            if (loginForm.elements['email'].value === item.email && 
                loginForm.elements['password'].value === item.password){
                localStorage.setItem('user', JSON.stringify(item));
                window.location.hash = '/';
                console.log(`User: ${item.name}`);
                loginForm.reset();
                setButtonDisabled();
                isUser = true;
            } 
        });

        if (!isUser){
            errorMessage.innerText = 'Пользователь не найден';
            errorMessage.style.display = 'block';
            loginForm.reset();
            setButtonDisabled();
        }
    });
}
import { initCalendar } from "./calendar/calendar";
import { initClients } from "./clients/clients";
import { ROOT_NODE } from "./constants";
import { initForm } from "./form/form";
import { menuActiveBtn, findOS, browser } from './helper';

const router = () => {
    if (window.location.hash === '#/form'){
        initForm();
    } 
    else if (window.location.hash === '#/clients'){
        loginProtector(initClients);
    }
    else if (window.location.hash === '#/calendar'){
        initCalendar();
    }
    else if (window.location.hash === '#/'){
        loginProtector((user) => {
            ROOT_NODE.innerHTML = `
            <div class="user">
                Добрый день ${user.name}!
                <div class="info-user">Ваша OS ${findOS()}</div>
                <div class="info-user">Ваш браузер ${browser}</div>
            </div>
            `;
        });
    }
    else {
        ROOT_NODE.innerHTML = '<div>Page not found</div>';
    }
}

export const initRouter = () => {
    window.location.hash = '/';
    window.addEventListener('hashchange', router);
    router();
}

export const loginProtector = (initFn) => {
    const user = localStorage.getItem('user');
    if (user) {
        initFn(JSON.parse(user));
    } else {
        window.location.hash = '/form';
    }
} 

menuActiveBtn();
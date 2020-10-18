import { ROOT_NODE } from '../constants';
import { createClients } from './client';
import './clients.scss';

const template = `
    <div class="container-clients">
    <div class="count">
        <div class="count-block man-block">
            <div class="count-block__title man-title">Man</div>
            <div class="count-block__count">0</div>
        </div>
        <div class="count-block woman-block">
            <div class="count-block__title">Woman</div>
            <div class="count-block__count">0</div>
        </div>
        <div class="count-block balance-block">
            <div class="count-block__title">Balance</div>
            <div class="count-block__count">0</div>
        </div>
        <div class="column-names">
            <div class="column-names__name" value="name">name</div>
            <div class="column-names__company" value="company">company</div>
            <div class="column-names__email" value="email">email</div>
            <div class="column-names__phone" value="phone">phone</div>
            <div class="column-names__balance" value="balance">balance</div>
            <button class="button-delete">delete</button>
        </div>
    </div>
    </div>
`;

export const initClients = () => {
    ROOT_NODE.innerHTML = template;
    fetch('https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json')
    .then((responce) =>{
        return responce.json();
    }).then(users => {
        createClients(users);
    });
};
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

const users = [
    {
        name: 'Artem',
        company: 'Google',
        email: 'artem@gmail.com',
        phone: '+375292929292',
        balance: '$7,313',
        isActive: false,
        gender: 'female',
    },
    {
        name: 'Masha',
        company: 'Facebook',
        email: 'masha@gmail.com',
        phone: '+375292929211',
        balance: '$4,123',
        isActive: true,
        gender: 'male',
    },
    {
        name: 'Ivan',
        company: 'Yandex',
        email: 'ivan@gmail.com',
        phone: '+395292929341',
        balance: '$2,123',
        isActive: false,
        gender: 'female',
    },
    {
        name: 'Kate',
        company: 'Microsoft',
        email: 'kate@gmail.com',
        phone: '+365292912346',
        balance: '$10,123',
        isActive: true,
        gender: 'male',
    },
    {
        name: 'Maksim',
        company: 'Yahoo',
        email: 'maksim@gmail.com',
        phone: '+315292912326',
        balance: '$5,773',
        isActive: true,
        gender: 'female',
    },
]

export const initClients = () => {
    ROOT_NODE.innerHTML = template;
    createClients(users);
}
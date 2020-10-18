import { ROOT_NODE } from "../constants";
import './calendar.scss';

const template = `
    <div class="wrapper">
        <div class="container-calendar"></div>
    </div> 
`;

export const initCalendar = () => {
    ROOT_NODE.innerHTML = template;
    const date = new Date();
    const currentDay = date.getDate();
    const currentMonth = date.getMonth(); 
    const currentYear = date.getFullYear();
    const firstDay = (new Date(currentYear, currentMonth, 1).getDay() === 0) ? 7 : (new Date(currentYear, currentMonth, 1).getDay());

    const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    const calendarContainer = document.querySelector('.container-calendar');
    let calendarDayBlock = document.createElement('div');

    weekDays.forEach((el) => {
        calendarDayBlock = document.createElement('div');
        calendarDayBlock.classList.add('calendar', 'week-days');
        calendarDayBlock.innerText = el;
        calendarContainer.append(calendarDayBlock);
    })

    for (let day = 1; day <= (daysInThisMonth() + (firstDay - 1)); day++){
        calendarDayBlock = document.createElement('div');
        calendarDayBlock.classList.add('empty-cell');
        calendarContainer.append(calendarDayBlock);
        if (firstDay <= day) {
            calendarDayBlock.innerText = (day - (firstDay - 1));
            calendarDayBlock.classList.add('calendar');
        }
        if (day === (currentDay + (firstDay - 1))){
            calendarDayBlock.style.backgroundColor = '#3cb371';
        }
    }

    function daysInThisMonth() {
        const daysInMonth = new Date();
        return new Date(daysInMonth.getFullYear(), daysInMonth.getMonth() + 1, 0).getDate();
    }
}
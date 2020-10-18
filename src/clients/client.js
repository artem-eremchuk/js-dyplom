export const createClients = (users) => {
    const colNamesBlock = document.querySelector('.column-names');
    const countBlock = document.querySelector('.count');
    const countMan = document.querySelector('.man-block > .count-block__count');
    const countWoman = document.querySelector('.woman-block > .count-block__count');
    const countBalance = document.querySelector('.balance-block > .count-block__count');

    showUsers(users);
    const { countFamele, countMale } = countGender(users);
    countMan.innerText = countFamele;
    countWoman.innerText = countMale;
    countBalance.innerText = maxBalance(users);

    function showUsers(users){
        users.forEach(element => {
            const el = colNamesBlock.cloneNode(true);
            const btn = el.children[el.children.length - 1];
            btn.style.display = 'block';
            el.style.margin = '0';
            el.style.fontWeight = '400';
            countBlock.append(el);

            for (const key in element){
                for(let i = 0; i < el.children.length; i++){
                    if (el.children[i].innerText === key){
                        el.children[i].innerText = element[key];
                    }
                }
            }

            isActive(element, el);

            btn.addEventListener('click', (event) => { 
                for (const key in users){
                    if (users[key] === element){
                        users.splice(key, 1);
                    }
                }   
                
                const { countFamele, countMale } = countGender(users);
                countMan.innerText = countFamele;
                countWoman.innerText = countMale;
                countBalance.innerText = maxBalance(users);
                el.remove();  
            })
        })
    }

    function countGender(users){
        let countMale = 0;
        let countFamele = 0;
        users.forEach((e)=>{
            if(e.gender === 'male'){
                countMale++;
            }
            else {
                countFamele++;
            }
        })
        return { countFamele, countMale };
    }

    function returnBalanceNum(str){
        let newStr = str.replace('$', '');
        return Number(newStr.replace(',', '.'));
    }

    function maxBalance(users){
        let maxValue = 0;
        for (let i = 0; i < users.length; i++){
            if (maxValue < returnBalanceNum(users[i].balance)) {
                maxValue = returnBalanceNum(users[i].balance);
            } else {
                maxValue = maxValue;
            }
        }
        return maxValue;
    }

    function isActive(element, el){
        if(element.isActive === true) {
            el.style.backgroundColor = '#08f26e';
        } else {
            el.style.backgroundColor = '#5ca08e';
            el.style.color = '#fff';
        }
    }
}
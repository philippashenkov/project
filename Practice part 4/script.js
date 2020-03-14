let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?','');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money =='' || money == null ) {
        money = +prompt('Ваш бюджет на месяц?','');
    }
}
start();
 
let appData = {
    budget : money,
    timeData : time,
    chooseOptExpenses: {},
    expenses: {},
    optionalExpenses: {},
    income:[],
    savings:true,
    chooseExpenses: function() {
            for (let i = 0; i < 2; i++) {
                let a = prompt('Введите обязательную статью расходов в этом месяце',''),
                    b = prompt('Во сколько обойдется?','');
        
                if ((typeof (a)) != null && (typeof (b)) !=null && a != '' && b != '' && a.length < 50) {
                    console.log('Все верно');
                    appData.expenses[a] = b; 
                } else { 
                    i = i - 1;
            }
            
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка')
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка')
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?', ''),
                percent =+prompt('Под какой процент?', '');
            appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц с вашего депозита:' + appData.monthIncome);
        }
        
            
            
    },
    chooseOptExpenses: function() {
            for (let i = 1; i < 3; i++) {
                let opt = prompt('Введите необязательную статью расходов в этом месяце', '');
                appData.optionalExpenses[i] = opt;
                
            } 
    },
    chooseIncome: function() {
        for (let i = 0; i < 1; i++) {
            let items = prompt('Что принесет доп доход? (Перечислите черезх запятую', '');
            
            if ((typeof (items)) !=null && (typeof (items)) !='' (typeof (items)) === 'string' ) {
                
                appData.income = items.split(', ');
                appData.income.push(prompt('Может чтото еще?'));
                appData.income.sort();
                appData.income.forEach (function (item, i , income){
                    let n = i + 1;
                    console.log(n + ' - Способ доп заработка: ' + item);
                });
            } else { 
                i--;
            }
        }
    }

};
for (let key in appData) {
    console.log( 'Наша программа включает в себя данные:' + key + ': ' + appData[key]);
        
}
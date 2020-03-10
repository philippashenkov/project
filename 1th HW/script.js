
let money = prompt('Ваш бюджет на месяц?','');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    let appData = {
        moneyData : money,
        timeData : time,
        expenses: {},
        optionalExpenses: {},
        income:[],
        savings:false
    };
let ask1 = prompt('Введите обязательную статью расходов в этом месяце','');
    ask2 = prompt('Во сколько обойдется?','');
    ask3 = prompt('Введите обязательную статью расходов в этом месяце','');
    ask4 = prompt('Во сколько обойдется?','');

appData.expenses.ask1 = ask2;
appData.expenses.ask3 = ask4;

alert(appData.moneyData /30);



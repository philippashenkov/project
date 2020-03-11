let money = +prompt('Ваш бюджет на месяц?','');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
//переменные 
    let appData = {
        budget : money,
        timeData : time,
        expenses: {},
        optionalExpenses: {},
        income:[],
        savings:false
    };

//вывод окна с запроссом на ввод данных 
for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце','');
        b = prompt('Во сколько обойдется?','');

//ограничения и проверка валидности ввода данных
    if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) !=null
        && a != '' && b != '' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b; 
    } else {

    }
    
};

appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюджет: ' + appData.moneyPerDay);

//цикл сравнения
if(appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка')
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка')
}


// let answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// document.write(answers);

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// };


// let answers = [],
//     questions = [
//         'Как ваше имя?',
//         'Как ваша фамилия?',
//         'Сколько вам лет?'
//     ];
// for (let i = 0; i < questions.length; i++) {
//     answers[i] = prompt(questions[i], '');
// }

// console.log(answers);


// цикл с условием 1
// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 10);


// цикл с условием 2
// let i = 0;
// while (i < 10)
//     console.log(i);
//     i++;


//условия
// let age = prompt('Сколько вам лет?', '');

// if (age < 18) {
//     alert('Рановато еще!');
// } else if (age > 100) {
//     alert ('Поздновато уже!');
// } else {
//     alert ('Вы можете войти');
// }

//Цикл с строгим соответсием требования свитч кейса в случае если инфа приходит от пользователя
// switch (age) { 
//     case 18:
//         alert('Вы не можете войти!');
//         break;
//     case 100:
//         alert('Поздновато еще!');
//         break;
//     default:
//         alert('Значение не известно!');
// }


// //Functions
// function humanSayHello(user) {
//     console.log('Hello ' + user + '!');
// }

// humanSayHello();


//Function 1 declaration

// function calc(a, b) {
//     console.log(a + b);
// }

// calc(4, 5);
// calc(2, 3);


//Function 2 expression

// function calc(a, b) {
//     return a + b;
// }
// console.log(calc(4, 5));

// calc(4, 5);
// calc(6, 10);


//Function 3 declaration

// let count = 5;

function humanSayHello(user) {
    let count = 10;
    count++;
    console.log(count);
    console.log('Hello' + user + '!');
}
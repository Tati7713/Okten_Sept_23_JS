// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [111, 'qwe', true, 'asd', 321, false, 'hello', 123, 0, 'xxx'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
console.log(arr[10]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book_1 = {
    title: 'Emma',
    pageCount: 324,
    genre: 'novel'
}
let book_2 = {
    title: '1984',
    pageCount: 217,
    genre: 'dystopian novel'
}
let book_3 = {
    title: 'The Lord of the Rings',
    pageCount: 1501,
    genre: 'epic high-fantasy novel'
}

console.log(book_1);
console.log(book_2);
console.log(book_3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється
// масивом. Кожен автор має поля name та age.

let book_4 = {
    title: 'Тюльпани в саду',
    pageCount: 187,
    genre: 'роман',
    authors: [
        {
            name: 'Елізабет Тейлор',
            age: 45
        },
        {
            name: 'Франциско Берард',
            age: 54
        }
    ]
}

let book_5 = {
    title: 'Космічні пригоди велетнів',
    pageCount: 27,
    genre: 'казка',
    authors: [
        {
            name: 'Марта Стюарт',
            age: 67
        },
        {
            name: 'Бен Афллек',
            age: 51
        },
        {
            name: 'Саманта Смітт',
            age: 8
        }
    ]
}

let book_6 = {
    title: 'У нас була перерва...',
    pageCount: 317,
    genre: 'роман',
    authors: [
        {
            name: 'Росс Геллер',
            age: 32
        },
        {
            name: 'Рейчел Грін',
            age: 29
        }
    ]
}

console.log(book_4);
console.log(book_5);
console.log(book_6);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль
// пароль кожного користувача

let users = [
    {
        name: 'Віктор Павлик',
        username: 'Віктор',
        password: 'Павлик'
    },
    {
        name: 'Джої Трібіані',
        username: 'Джо',
        password: 'Нашкрябаний на банкоматі'
    },
    {
        name: 'Вася',
        username: 'Просто_Вася',
        password: 'Не просто ВаСя'
    },
    {
        name: 'Михайло Поплавський',
        username: 'СуперБіггСтар',
        password: '1234'
    },
    {
        name: 'Марія Тереза',
        username: 'Просто_Марія',
        password: '666'
    },
    {
        name: 'Семен Петрович',
        username: 'Петрович',
        password: 'Петрови4444'
    },
    {
        name: 'Павлик Віктор',
        username: 'син_подруги_твоєї_мами',
        password: 'мама-ама-крімінал'
    },
    {
        name: 'Кіт Мартин',
        username: 'Кіт_твого_сусіда',
        password: 'аа74712оо54854'
    },
    {
        name: 'Василина Іванішин',
        username: 'Василина',
        password: 'ууу78777'
    },
    {
        name: 'Ольга Скорик',
        username: 'Олька',
        password: 'qwe213asd456'
    }
]

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що
//     дорівнює 1, 0, -3

let x = +prompt('Введіть одне з чисел: 1, 0, -3');

if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно')
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
// попадає число (в першу, другу, третю или четверту частину години).

let time = +prompt('Скільки зараз хвилин?')

if (time >= 0 && time < 16) {
    console.log('Зараз перша чверть години')
} else if (time >= 16 && time < 31) {
    console.log('Зараз друга чверть години')
} else if (time >= 31 && time < 46) {
    console.log('Зараз третя чверть години')
} else if (time >= 46 && time <= 59) {
    console.log('Зараз четверта чверть години')
} else {
    console.log('Краше йди поспи...')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

let day = +prompt('Введіть сьогоднішнє число:')

if (day >= 1 && day <=10) {
    console.log('Перша декада')
} else if (day >= 11 && day <=20) {
    console.log('Друга декада')
} else if (day >= 21 && day <=31) {
    console.log('Третя декада')
} else {
    console.log('Такого числа не буває:/')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let i = +prompt('Введіть номер тижня');

switch (i) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Не пародіюй Мюнгаузена, придумай щось своє!')
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let a = +prompt('Введіть перше число:');
let b = +prompt('Введіть друге число:');

if (a > b) {
    console.log(a);
} else if (a < b) {
    console.log(b);
} else if (a === b) {
    console.log('Числа рівні');
} else {
    console.log('Ви впевнені, що це числа?')
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код
//     який, за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється
//     falsy (хибноподібні, тобто приводиться до false)

let xx = prompt('Введіть будь-яке значення:');

if (xx === 0 || xx === '' || xx === 'NaN' || xx === null || xx === 'undefined') {
    console.log('Default')
} else {
    console.log('Das ist gut, mein Freund!')
}

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити
//     кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер!');
} else {
    console.log('Далі вчи сам...')
}

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер!');
} else {
    console.log('Далі вчи сам...')
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер!');
} else {
    console.log('Далі вчи сам...')
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер!');
} else {
    console.log('Далі вчи сам...')
}

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер!');
} else {
    console.log('Далі вчи сам...')
}

if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер!');
} else {
    console.log('Далі вчи сам...')
}
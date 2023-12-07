// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let hello = 'hello world';
console.log(hello.length)

let lorem = 'lorem ipsum';
console.log(lorem.length)

let js = 'javascript is cool';
console.log(js.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let helloUpper = hello.toUpperCase();
console.log(helloUpper)

let loremUpper = lorem.toUpperCase();
console.log(loremUpper)

let jsUpper = js.toUpperCase();
console.log(jsUpper)

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let helloLower = helloUpper.toLowerCase();
console.log(helloLower)

let loremLower = loremUpper.toLowerCase();
console.log(loremLower)

let jsLower = loremUpper.toLowerCase();
console.log(loremLower)

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let dirtyStr = ' dirty string   ';
console.log(dirtyStr.trim())

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str1 = 'Ревуть воли як ясла повні';

let stringToarray = (str) => str.split(' ');
console.log(stringToarray(str1))

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numbers = [10,8,-7,55,987,-1011,0,1050,0];

let numbersStr = numbers.map(value => value.toString());
console.log(numbersStr)


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки
// в залежності від значення аргументу direction.
    let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let sortNums = (nums, direction) => {
    if (direction === 'ascending') {
        nums.sort((n1, n2) => n1 - n2);
    } else if (direction === 'descending') {
        nums.sort((n1, n2) => n2 - n1);
    }
    return nums;
}

console.log(sortNums(nums, 'ascending'))
console.log(sortNums(nums, 'descending'))

// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration

console.log(coursesAndDurationArray.sort(((a, b) => b.monthDuration - a.monthDuration)))

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5))

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let newCoursesAndDurationArray = coursesAndDurationArray.map((value, index) => {
    return {id: index + 1, title: value.title, monthDuration: value.monthDuration}
})
console.log(newCoursesAndDurationArray)

// =========================
//     описати колоду карт (від 6 до туза без джокерів)

let deck = [
    {
        cardSuit: 'clubs',
        value: 'Ace',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'Ace',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: 'Ace',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'Ace',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: 'King',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'King',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: 'King',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'King',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: 'Queen',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'Queen',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: 'Queen',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'Queen',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: 'Jack',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'Jack',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: 'Jack',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'Jack',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: '10',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: '10',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: '10',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: '10',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: '9',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: '9',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: '9',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: '9',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: '8',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: '8',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: '8',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: '8',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: '7',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: '7',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: '7',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: '7',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: '6',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: '6',
        color: 'black'
    },
    {
        cardSuit: 'heart',
        value: '6',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: '6',
        color: 'red'
    },
];

// - знайти піковий туз

console.log(deck.find(value => value.cardSuit === 'spade' && value.value === 'Ace'));

// - всі шістки

console.log(deck.filter(value => value.value === '6'));

// - всі червоні карти

console.log(deck.filter(value => value.color === 'red'));

// - всі буби

console.log(deck.filter(value => value.cardSuit === 'diamond'));

// - всі трефи від 9 та більше

console.log(deck.filter(value => value.cardSuit === 'clubs' && value.value >= '9'|| value.cardSuit === 'clubs' && value.value === '10'));

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduce = deck.reduce((previousValue, currentValue) => {
    if (currentValue.cardSuit === 'spade') {
        previousValue.spades.push(currentValue);
    } else if (currentValue.cardSuit === 'diamond') {
        previousValue.diamonds.push(currentValue);
    } else if (currentValue.cardSuit === 'heart') {
        previousValue.hearts.push(currentValue);
    } else {
        previousValue.clubs.push(currentValue);
    }
    return previousValue;
},
    {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
    })

console.log(reduce);

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в який в modules є sass

console.log(coursesArray.filter(value => value.modules.find(value => value === 'sass')));

// --написати пошук всіх об'єктів, в який в modules є docker

console.log(coursesArray.filter(value => value.modules.find(value => value === 'docker')));



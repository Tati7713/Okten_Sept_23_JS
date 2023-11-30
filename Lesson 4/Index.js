// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectangleS (a, b) {
    return a*b;
}

console.log(rectangleS(10, 4))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circleS (r) {
    return Math.PI * Math.pow(r, 2);
}

console.log(circleS(5))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderS (h, r) {
    return 2 * Math.PI * r * (r + h);
}

console.log(cylinderS(3, 4))

// - створити функцію яка приймає масив та виводить кожен його елемент

let numbers = [11, 12, 22, 34, 55, 61, 78, 87, 99];

function array (array) {
    for (let item of array) {
        console.log(item)
    }
}

array(numbers);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

document.write(`<div>`)

function pWithText (text) {
    document.write(`<p>${text}</p>`)
}

document.write(`</div>`)

pWithText('Виводить якийсь текст');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function ulWithLi3 (text) {
    document.write(`<ul>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`</ul>`)
}

ulWithLi3('Текст в ul')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл)

function createUlWithLi (text, sizeLi) {
    document.write(`<ul>`)
    for (let i = 0; i < sizeLi; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

createUlWithLi('Ліжка в циклі', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function primitiveElements (arr) {
    document.write(`<ul>`)
    for (let item of arr) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}

primitiveElements(['qwe', true, 77, 'asd', false, -123])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного
// об'єкту окремий блок.

let users = [
    {id: 11, name: 'vasya', age: 31},
    {id: 12, name: 'petya', age: 30},
    {id: 13, name: 'kolya', age: 29},
    {id: 14, name: 'olya', age: 28},
    {id: 15, name: 'max', age: 30},
    {id: 16, name: 'anya', age: 31},
    {id: 17, name: 'oleg', age: 28},
    {id: 18, name: 'andrey', age: 29},
    {id: 19, name: 'masha', age: 30},
];

document.write(`<div>`);

function arrayWithObject (array) {
    for (let item of array) {
        document.write(`<div>${item.id} - ${item.name} - ${item.age}</div>`)
        //інший спосіб
        // for (itemKey in item) {
        //     document.write(`<p>${itemKey} - ${item[itemKey]}</p>`)
        // }
    }
}

document.write(`</div>`);

arrayWithObject(users)

// - створити функцію яка повертає найменше число з масиву

function numberMin (array) {
    let min = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

console.log(numberMin([78, 25, 0, 11]))

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

function sum (arr) {
    let sum = 0;
    for (let number of arr) {
        sum = sum + number;
    }
    return sum;
}

console.log(sum([1, 2, 3, 4, 5]))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap (arr, index1, index2) {
    let a = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] =a;
    return arr;
}

console.log(swap([11, 22, 33, 44], 0, 1))


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let currencyValues = [
    {currency:'USD',value:40},
    {currency:'EUR',value:42}
];

function exchange(sumUAH,currencyValues,exchangeCurrency) {
    for (let values of currencyValues) {
        if (values.currency === exchangeCurrency) {
           return sumUAH/values.value;
        }
    }
}

console.log(exchange(10000, currencyValues, 'USD'))









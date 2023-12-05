// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let rectangleS = (a, b) => a * b;

console.log(rectangleS(7, 3))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

let circleS = (r) => Math.PI * Math.pow(r, 2);

console.log(circleS(3))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let cylinderS = (h, r) => 2 * Math.PI * r * (r + h);

console.log(cylinderS(2, 5))

// - створити функцію яка приймає масив та виводить кожен його елемент

let array = (array) => {
    for (let item of array) {
        console.log(item)
    }
}

array([11, 22, 33])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
document.write(`<div>`)

let pWithText = (text) => document.write(`<p>${text}</p>`);

document.write(`</div>`)

pWithText('Текст')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

document.write(`<div>`)

let ulWithLi3 = (text) => {
    document.write(`<ul>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`</ul>`)
}

document.write(`</div>`)

ulWithLi3('Текст в ul')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let createUlWithLi = (text, numberOfLi) => {
    document.write(`<ul>`)
    for (let i = 0; i < numberOfLi; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

createUlWithLi('Ліжка в циклі', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let primitiveElements = (arr) => {
    document.write(`<ul>`)
    for (let item of arr) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}

primitiveElements(['qwe', true, 77, 'asd', false, -123])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

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

let arrayWithObject = (array) => {
    for (let item of array) {
        document.write(`<div>${item.id} - ${item.name} - ${item.age}</div>`)
    }
}

document.write(`</div>`);

arrayWithObject(users)

// - створити функцію яка повертає найменьше число з масиву

let numberMin = (array) => {
    let min = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

console.log(numberMin([78, 25, 0, 11]))

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum = (arr) => {
    let sum = 0;
    for (let number of arr) {
        sum = sum + number;
    }
    return sum;
}

console.log(sum([1, 2, 3, 4, 5]))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (arr, index1, index2) => {
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

let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (let values of currencyValues) {
        if (values.currency === exchangeCurrency) {
            return sumUAH/values.value;
        }
    }
}

console.log(exchange(10000, currencyValues, 'USD'))

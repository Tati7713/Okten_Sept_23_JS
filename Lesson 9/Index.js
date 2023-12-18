// - створити блок,

let block = document.createElement('div');
block.innerHTML = '<h2>Якийсь текст</h2>';
console.log(block)
console.log(block.innerText)

//     - додати йому класи wrap, collapse, alpha, beta

block.classList.add('wrap')
block.classList.add('collapse')
block.classList.add('alpha')
block.classList.add('beta')

console.log(block.classList)

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

block.style.background = 'black'
block.style.color = 'white'
block.style.fontSize = '20px'

console.log(block.getAttribute('style'))


// - додати цей блок в body.

document.body.appendChild(block)

// - клонувати його повністю, та додати клон в body.

let clone = block.cloneNode(true)
document.body.appendChild(clone)

// - Є масив:

let arr = ['Main','Products','About us','Contacts']

// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let ul = document.createElement('ul')
document.body.appendChild(ul)

for (let i = 0; i < arr.length; i++) {
    let li = document.createElement('li');
    li.innerText = arr[i];
    ul.appendChild(li)
}
// - Є масив

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let allDiv = document.createElement('div')
document.body.appendChild(allDiv)

for (let coursesAndDurationArrayElement of coursesAndDurationArray) {
    let objectBlock = document.createElement('div')
    objectBlock.innerText = coursesAndDurationArrayElement.title + ' - ' + coursesAndDurationArrayElement.monthDuration
    allDiv.appendChild(objectBlock)
}

// =========================
//
//     - Є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з
// title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

let newAllDiv = document.createElement('div')
document.body.appendChild(newAllDiv)

for (let element of coursesAndDurationArray) {
    let newDiv = document.createElement('div')
    newDiv.classList.add('item')
    newAllDiv.appendChild(newDiv)

    let h1 = document.createElement('h1')
    h1.innerText = element.title
    h1.classList.add('heading')

    let p = document.createElement('p')
    p.innerText = element.monthDuration
    p.classList.add('description')

    newDiv.append(h1, p)
}

// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

let divSimpsons = document.createElement('div')
document.body.appendChild(divSimpsons)

for (let simpson of simpsons) {
    let divSimpson = document.createElement('div')
    divSimpson.classList.add('member')
    divSimpsons.appendChild(divSimpson)

    let h1 = document.createElement('h1')
    h1.innerText = simpson.name + ' ' + simpson.surname + ' ' + simpson.age
    h1.style.color = 'purple'

    let p = document.createElement('p')
    p.innerText = simpson.info

    let img = document.createElement('img')
    img.src = simpson.photo

    divSimpsons.append(h1, p, img)
}

// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)

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

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих
// властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом

let divCoursesArray = document.createElement('div')
document.body.appendChild(divCoursesArray)

// let ulModules = document.createElement('ul')
// divCoursesArray.appendChild(ulModules)

for (let element of coursesArray) {
    let divElement = document.createElement('div')
    divCoursesArray.appendChild(divElement)

    let h1 = document.createElement('h1')
    h1.innerText = element.title

    let monthDuration = document.createElement('p')
    monthDuration.innerText = 'Тривалість курсу в місяцях - ' + element.monthDuration

    let hourDuration = document.createElement('p')
    hourDuration.innerText = 'Тривалість курсу в годинах - ' + element.hourDuration

    let ulModules = document.createElement('ul')
    for (let i = 0; i < element.modules.length; i++) {
        let li = document.createElement('li')
        li.innerText = element.modules[i]
        ulModules.appendChild(li)
    }

    divCoursesArray.append(h1, monthDuration, hourDuration, ulModules)
}

// ------------------
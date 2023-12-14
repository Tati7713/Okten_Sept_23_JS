// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)

let user = [];
let user1 = new User(1, 'Maryna', 'Martynska', 'martynska@gmail.com', +380984526347)
let user2 = new User(2, 'Sasha', 'Sashkov', 'sashkov@gmail.com', +380965867102)
let user3 = new User(3, 'Lara', 'Larkova', 'larkova@gmail.com', +380672984310)
let user4 = new User(4, 'Mykola', 'Mykolaiichuk', 'mykolaiichuk@gmail.com', +380972549862)
let user5 = new User(5, 'Vasya', 'Vasylkov', 'vasylkov@gmail.com', +380507965874)
let user6 = new User(6, 'Katya', 'Kit', 'kit@gmail.com', +38096881359)
let user7 = new User(7, 'Andrii', 'Anderson', 'anderson@gmail.com', +38095887160)
let user8 = new User(8, 'Ihor', 'Ihorovskii', 'ihorovskii@gmail.com', +380502365847)
let user9 = new User(9, 'Petya', 'Petrov', 'petrov@gmail.com', +38097154962)
let user10 = new User(10, 'Ira', 'Irko', 'irko@gmail.com', +380679485566)

user = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10]

console.log(user)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(user.filter(value => value.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(user.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client

let client = [];

let client1 = new Client(1, 'Maryna', 'Martynska', 'martynska@gmail.com', +380984526347, ['lemon', 'orange', 'apple'])
let client2 = new Client(2, 'Sasha', 'Sashkov', 'sashkov@gmail.com', +380965867102, ['chicken', 'fig', 'pear', 'lime', 'mango'])
let client3 = new Client(3, 'Lara', 'Larkova', 'larkova@gmail.com', +380672984310, ['melon', 'tuna'])
let client4 = new Client(4, 'Mykola', 'Mykolaiichuk', 'mykolaiichuk@gmail.com', +380972549862, ['cherry', 'blueberry', 'liver', 'onion'])
let client5 = new Client(5, 'Vasya', 'Vasylkov', 'vasylkov@gmail.com', +380507965874, ['avocado', 'beetroot', 'bacon', 'raspberry'])
let client6 = new Client(6, 'Katya', 'Kit', 'kit@gmail.com', +38096881359, ['pineapple', 'carrot', 'chicken', 'cherry'])
let client7 = new Client(7, 'Andrii', 'Anderson', 'anderson@gmail.com', +38095887160, ['pear', 'mango', 'onion', 'duck'])
let client8 = new Client(8, 'Ihor', 'Ihorovskii', 'ihorovskii@gmail.com', +380502365847, ['blueberry', 'liver', 'beetroot'])
let client9 = new Client(9, 'Petya', 'Petrov', 'petrov@gmail.com', +38097154962, ['fig', 'pear', 'lime', 'pork'])
let client10 = new Client(10, 'Ira', 'Irko', 'irko@gmail.com', +380679485566, ['avocado', 'beetroot', 'bacon', 'pineapple'])

client = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10];

console.log(client)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(client.sort((a, b) => a.order.length - b.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car (model, manufacture, yearOfManufacture, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacture = manufacture;
    this.yearOfManufacture = yearOfManufacture;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function () {
        console.log(`
        Модель - ${this.model}
        Виробник - ${this.manufacture}
        Рік випуску - ${this.yearOfManufacture}
        Максимальна швидкість - ${this.maxSpeed}
        Об'єм двигуна - ${this.engineCapacity}
        `)
    }
    this.increaseMaxSpeed = function newSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }
    this.changeYear = function newValue(newValue) {
        this.yearOfManufacture = newValue;
    }
    this.addDriver = function driver(driver) {
        this.driver = driver;
    }
}

let car = new Car('BMW 324', 'Germany', 1986, 140, 2.4);

console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(100);
car.changeYear(1942)
car.addDriver({name: 'Vasyl', age: 34, experience: 28});
console.log(car)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна
// швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car1 {
    constructor(model, manufacture, yearOfManufacture, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacture = manufacture;
        this.yearOfManufacture = yearOfManufacture;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        console.log(`
        Модель - ${this.model}
        Виробник - ${this.manufacture}
        Рік випуску - ${this.yearOfManufacture}
        Максимальна швидкість - ${this.maxSpeed}
        Об'єм двигуна - ${this.engineCapacity}
        `)
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear (newValue) {
        this.yearOfManufacture = newValue;
    }

    addDriver (driver) {
        this.driver = driver;
    }
}

let car1 = new Car('BMW 324', 'Germany', 1969, 120, 2.2);

console.log(car1);
car1.drive();
car1.info();
car1.increaseMaxSpeed(100);
car1.changeYear(1962)
car1.addDriver({name: 'Ivan', age: 54, experience: 28});
console.log(car1)


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

function Cinderella (name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let cinderella1 = new Cinderella('cinderella',20,35);
let cinderella2 = new Cinderella('cinderella',21,36);
let cinderella3 = new Cinderella('cinderella',22,37);
let cinderella4 = new Cinderella('cinderella',23,38);
let cinderella5 = new Cinderella('cinderella',24,39);
let cinderella6 = new Cinderella('cinderella',25,40);
let cinderella7 = new Cinderella('cinderella',26,41);
let cinderella8 = new Cinderella('cinderella',27,42);
let cinderella9 = new Cinderella('cinderella',28,43);
let cinderella10 = new Cinderella('cinderella',29,44);

let cinderella = [cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10]

console.log(cinderella)

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}

let prince = new Prince('Prince', 28, 37);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

function iter(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].footSize === prince.foundShoe) {
            return arr[i];
        }
    }
}

console.log(iter(cinderella))

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

console.log(cinderella.find(value => value.footSize === prince.foundShoe));

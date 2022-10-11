/****************************************************
********************ПЕРЕМЕННЫЕ**********************/

console.log("---ПЕРЕМЕННЫЕ---")

let name = 'Jack' //Создание и название переменной
console.log(name)
name = 'Max' //Изменение данных в переменной
console.log(name)

let color //Не присвоили значение

console.log(color) //Неопределённая переменная, тк ничего не присвоено!
color = 'Red' //Инициализирование переменной
console.log(color)

// Переменные можно именовать: Буквы, числа, $ и _
// Переменные не могут начинаться с ЧИСЕЛ

const name1 = "Lisa" //Const не может изменяться
console.log(name1)
// name1 = "Jane" - ТАК ДЕЛАТЬ НЕЛЬЗЯ!
// const color - ТАК ТОЖЕ НЕЛЬЗЯ!



/*****************************************************
******************ТИПЫ ДАННЫХ************************/

console.log("---ТИПЫ ДАННЫХ---")

let x = 'Ляляля'
console.log(x)

x = 3
console.log(x)

//Typeof

const someText = 'Какой-то текст'
console.log(typeof someText) //Выведет string, т.к. строковый тип переменной

//Number

const someNumber = 12
console.log(typeof someNumber) //Выведет number, т.к. числовой тип переменной

//Boolean

const someBoolean = true
console.log(typeof someBoolean) //Выведет boolean, т.к. истина или ложь

//Null

const someNull = null
console.log(typeof someNull) //Выведет object, т.к. значение переменной null (ОШИБКА JAVASCRIPT)! Примитивный тип данных!

//Underfined

let someUnderfined
console.log(typeof someUnderfined) //Используем let для инициализации!



/**************************************************************
******************ПРЕОБРАЗОВАНИЕ ТИПОВ************************/


// Конвертируем в строку

console.log("---ПРЕОБРАЗОВАНИЕ ТИПОВ---")
console.log("ПРЕОБРАЗОВАНИЕ В СТРОКУ:")

//String()
let x1 = String(100) //В итоге выведет 100, String и 3 (количество символов)
x1 = String(2 + 2) //Будет приведено к первой строке let x1 = String(100)
x1 = String(true) //Приводится к типу boolean, но в консоли будет являться String, иметь 4 символа! Можно попробовать и с false
x1 = String(new Date()) // Выводится СТРОКА, тк добавили String! Можно написать x1 = new Date()
x1 = String(['один', ' два', ' три']) //Выведет строку, тип и количество символов


console.log(x1)
console.log(typeof x1)
console.log(x1.length) //Выведет undefined у числового типа данных, т.к. у такого типа данных нет длины! Если перевели в String, то выведет количество знаков!


// Конвертируем в число

console.log("ПРЕОБРАЗОВАНИЕ В ЧИСЛО:")

//Number
let x2 = 5.1234567
//x2 = Number('Текст') : Так писать нельзя, выведет NaN - то-есть не число!


console.log(x2)
console.log(typeof x2)
console.log(x2.toPrecision(3)) //ОКРУГЛЯЕТ ЦИФРУ, ВЫБРАННУЮ В СКОБКАХ
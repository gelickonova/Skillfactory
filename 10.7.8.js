// Создайте произвольный массив Map.
// Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
// Используйте шаблонные строки.

let fruits = new Map();
fruits.set("apple", "green");
fruits.set("strawberry", "red");
fruits.set("blueberry", "blue");

// это был мой первый вариант, но вроде в условии требуется получать ключи и я решила переделать
// function fruitsKeysValues(value, key) {
//     console.log(`Ключ - ${key} , значение - ${value}`)
// }
//
// fruits.forEach(fruitsKeysValues);

for (let name of fruits.keys()) {
    console.log(`Ключ - ${name} , значение - ${fruits.get(name)}`)
}
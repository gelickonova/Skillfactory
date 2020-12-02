// Дан массив. Проверить, одинаковые ли элементы в массиве
// и вывести результат true или false в консоль.

function allItemsSame(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i] !== array[0]) {
            console.log(false);
            return;
        }
    }
    console.log(true)
}

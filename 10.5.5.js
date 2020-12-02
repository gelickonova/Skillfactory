function arr(array) {
    console.log(`Количество элементов в массиве: ${array.length}`)
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}
arr([1,2,3])
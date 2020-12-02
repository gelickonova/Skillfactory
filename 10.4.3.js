function reverseString (string) {
    //делаем массив из символов строки
    let x = string.split('');
    //переворачиваем массив
    x.reverse();
    //соединяем массив в строку
    return x.join('');
}

console.log(reverseString('Hello'));

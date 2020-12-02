function func(x){
    const y = typeof x;
    switch(y){
        case 'number':
            console.log (`${x} - число`);
            break;
        case 'boolean':
            console.log (`${x} - логический тип`);
            break;
        case 'string':
            console.log (`${x} - строка`);
            break;
        default:
            console.log (`Тип ${x} не определен`);
    }
}
// на этих примерах вроде работает как надо:
// func(123);
// func('привет');
// func(false);
// func(undefined);
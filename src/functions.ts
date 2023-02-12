type objectA = { [value: string]: { cvalue: undefined | string | number | objectA } | undefined }
const funk = (value: objectA): number =>
    Object.values(value).map(val => {
        let element = val?.cvalue
        if (typeof element == 'number') return element
        if (typeof element == 'string') return element == '0' ? 0 : +element || 2022;
        if (typeof element == 'undefined') return 2022;
        return funk(element)
    }).reduce((first, next) => first + next);


function mapObject<input, output>(obj: Record<string, input>, transformer: (param: input) => output): Record<string, output> {
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [key, transformer(value)])
    )
}

// Напишите функцию, которая принимает:
// 1) некие данные предполагаемо типа Т, но возможно не со всеми полями
// 2) функцию-дополнятор, которая принимает такие штуки как из п.1, 
//    а возвращает полноценный объект типа Т
// ... как вы поняли, саму функцию писать не надо :) 
// нас интересует только ее сигнатура.

type tryType = <T> (obj: Partial<T>, callback: (some: Partial<T>) => T) => void;

// Более сложный вариант:
// Напишите функцию, которая принимает:
// 1) некие данные предполагаемо типа Т (у которого поле id: string), 
//    но возможно без поля id
// 2) функцию-дополнятор, которая принимает такие штуки как из п.1, 
//    а возвращает полноценный объект типа Т
// ... как вы поняли, саму функцию писать не надо :) 
// нас интересует только ее сигнатура.

type tryType2 = <T extends { id?: string }> (obj: Partial<T>, callback: (some: Partial<T>) => T) => void;

// Последняя задача:
// Напишите сигнатуру функции, которая принимает
// - некий класс 
// - количество
// ...а возвращает массив экземпляров этого класса

class Rectangle {
    w!: number;
    h!: number;
}
class Circle {
    radius!: number;
}

// сделайте норм сигнатуру тут.
// НЕТ, Rectangle|Circle это не вариант, надо сделать универсальную функцию 
function createArray<T>(SOMECLASS: { new(): T }, count: number) {
    let a = []
    for (let i = 0; i < count; i++)
        a.push(new SOMECLASS());

    return a;
}

let a: Rectangle[] = createArray(Rectangle, 10);
let b: Circle[] = createArray(Circle, 20)
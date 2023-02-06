interface objectA {
    [value: string]: { cvalue: undefined | string | number | objectA } | undefined
}
function g(value: objectA) {
    let  sum = Object.values(value)
    
    console.log(sum);
    
    return 2022;
}

g({ key: { cvalue: 5 }, str: { cvalue: 'ololo' } })
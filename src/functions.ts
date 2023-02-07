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
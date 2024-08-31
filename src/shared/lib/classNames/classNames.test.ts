import { classNames } from "./classNames"

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('className')).toEqual('className')
    })
    test('with additional class', () => {
        const expected = 'className class1 class2'
        expect(classNames('className', {}, ['class1', 'class2'])).toBe(expected)
    })
    test('with mods', () => {
        const expected = 'className class1 class2 hovered scrollable'
        expect(classNames('className', {hovered: true, scrollable: true}, ['class1', 'class2'])).toBe(expected)
    })
    test('with mods but one is false', () => {
        const expected = 'className class1 class2 scrollable'
        expect(classNames('className', {hovered: false, scrollable: true}, ['class1', 'class2'])).toBe(expected)
    })
    test('with mods but one is undefined', () => {
        const expected = 'className class1 class2 scrollable'
        expect(classNames('className', {hovered: undefined, scrollable: true}, ['class1', 'class2'])).toBe(expected)
    })
})
const fns = require('./functions.js')

test('return 2', ()=>{
    expect(fns.returnTwo()).toBe(2)
})

test('greeting', ()=>{
    expect(fns.greeting('James')).toEqual('Hello, James.')
    expect(fns.greeting('Jill')).toBe('Hello, Jill.')
})

test('add', () => {
    expect(fns.add(1,2)).toEqual(3)
    expect(fns.add(5,9)).toEqual(14)
})

describe('math functions', ()=>{

    test('multiply', ()=>{
        expect(fns.multiply(3,3)).toEqual(9);
        expect(fns.multiply(2,8)).toEqual(16);
    })
    
    test('divide', ()=>{
        expect(fns.divide(3,3)).toEqual(1);
        expect(fns.divide(16,8)).toEqual(2);
    })

})


const FizzBuzzService = require('./../../lib/services/FizzBuzzService')

describe('Unit test for FizzBuzzService', () =>{
    test('1. Score 1', () =>{
        const explorer = {name: 'Luis', score: 1}
        const explorerValidate = FizzBuzzService.applyValidationInExplorer(explorer)
        expect(explorerValidate.trick).toBe(1)
    });
    test('2. Score 3', () =>{
        const explorer = {name: 'Luis', score: 3}
        const explorerValidate = FizzBuzzService.applyValidationInExplorer(explorer)
        expect(explorerValidate.trick).toBe('FIZZ')
    });
    test('3. Score 5', () =>{
        const explorer = {name: 'Luis', score: 5}
        const explorerValidate = FizzBuzzService.applyValidationInExplorer(explorer)
        expect(explorerValidate.trick).toBe('BUZZ')
    });
    test('4. Score 15', () =>{
        const explorer = {name: 'Luis', score: 15}
        const explorerValidate = FizzBuzzService.applyValidationInExplorer(explorer)
        expect(explorerValidate.trick).toBe('FIZZBUZZ')
    });
})
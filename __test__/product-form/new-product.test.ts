import { validations } from '../../src/pages/home/controllers/product-list' // --no-ignore
const dataValidation = validations

describe("Product data validations for add product to stock", () => {

    test('Data required', () => {
        expect(dataValidation({
            name: 'Beverly Hills Polo Club',
            price: 129900,
            brand: 'Polo Club',
        } as any)).toBeTruthy()
        expect(dataValidation({
            name: 'Beverly Hills Polo Club',
            price: 129900
        } as any)).toBeFalsy()
        expect(dataValidation({
            name: 'Beverly Hills Polo Club',
            brand: 'Polo Club'
        } as any)).toBeFalsy()
        expect(dataValidation({
            name: '.',
            brand: 'Tellenzi'
        } as any)).toBeFalsy()
        expect(dataValidation({
            brand: 'Tellenzi'
        } as any)).toBeFalsy()
        expect(dataValidation({
            price: 179990
        } as any)).toBeFalsy()
        expect(dataValidation({
            price: 0
        } as any)).toBeFalsy()
        expect(dataValidation({} as any)).toBeFalsy()
        expect(dataValidation({
            name: 'Tenis Rojo',
            price: '179990',
            brand: 'Tellenzi',
        } as any)).toBeFalsy()
    })
})
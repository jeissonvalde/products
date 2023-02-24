import { validations } from '../../src/pages/home/controllers/product-list'
const dataValidation = validations

describe("Product data validations for add product to stock", () => {
    
    test('Data required', () => {
        expect(dataValidation({
            name: 'Beverly Hills Polo Club',
            price: 129900,
            brand: 'Polo Club',
        })).toBeTruthy()
        expect(dataValidation({
            name: 'Beverly Hills Polo Club',
            price: 129900
        })).toBeFalsy()
        expect(dataValidation({
            name: 'Beverly Hills Polo Club',
            brand: 'Polo Club'
        })).toBeFalsy()
        expect(dataValidation({
            name: '.',
            brand: 'Tellenzi'
        })).toBeFalsy()
        expect(dataValidation({
            brand: 'Tellenzi'
        })).toBeFalsy()
        expect(dataValidation({
            price: 179990
        })).toBeFalsy()
        expect(dataValidation({
            price: 0
        })).toBeFalsy()
        expect(dataValidation({})).toBeFalsy()
        expect(dataValidation({
            name: 'Tenis Rojo',
            price: '179990',
            brand: 'Tellenzi',
        })).toBeFalsy()
    })
})
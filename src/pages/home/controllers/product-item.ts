// Vanilla
import {
    clickProductStateLabel,
    clickOption,
    clickCancelEditProduct,
    clickSaveChangesProduct
} from './product-list'

type BTN = HTMLButtonElement
type El = HTMLElement

export function events (prodId: string, productData: any) {
    const buttonCancelCreateProd = document.querySelector('.prod-f-close-create-prod-button') as BTN,
        buttonCreateProd = document.querySelector('.prod-f-create-prod-button') as BTN,
        buttonSaveChangesProd = document.querySelector('.prod-f-cancel-prod-button') as BTN,
        buttonCancelChangesProd = document.querySelector('.prod-f-save-prod-button') as BTN,
        prodElem = document.querySelector(`prod-opts-${prodId}`) as El



    if (prodId != undefined) {
        buttonSaveChangesProd.onclick = clickSaveChangesProduct.bind(null, prodId, setSample, setData)
        buttonCancelChangesProd.onclick = clickCancelEditProduct.bind(null, productData, setSample, setData)
        
        const clickOptsMenu = clickOption.bind(null, prodId, intervalId, productData, setSample)
        prodElem.onclick = clickProductStateLabel.bind(null, { prodId, setSample, setIntervalId, intervalId })
        prodElem.querySelector('button[data-option="edit"]')
            .onclick = clickOptsMenu.bind(null, 'edit')
        prodElem.querySelector('button[data-option="unavailable"]')
            .onclick = clickOptsMenu.bind(null, 'unavailable')
        prodElem.querySelector('button[data-option="delete"]')
            .onclick = clickOptsMenu.bind(null, 'delete')
    }
}

export function setSample () {
    
}

export function setData () {
    
}

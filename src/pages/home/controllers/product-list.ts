import { El, EvClick, EvClickLabel, ProductTS, SetState } from '../../../types'
import images from '../../../res/images.json'
import { initProductImagesAnimation } from './product-image'

export function clickOption (prodId: string, intervalId: number, prodData: ProductTS, setSample: SetState, opt: string, e: EvClick) {
    e.preventDefault()
    const prodEl = document.getElementById(prodId) as El,
        sample = prodEl.getAttribute('class') as string

    // Clean animations
    prodEl.querySelector<El>('form')?.classList.remove('play-images-anim')
    window.clearInterval(intervalId)

    switch (opt) {
        case 'unavailable':
            if (sample.includes('disabled')) {
                // disableProduct, show disabled product message and update icon
                disableProduct(false, prodId)
                setSample('sample')
                break;
            }

            // disableProduct, show enable product message and update icon
            disableProduct(true, prodId)
            setSample('sample disabled')
            break;
        case 'delete':
            // Show delete message and active undo button
            deleteProduct(false, prodId)
            setSample('sample delete')
            break;
        case 'undelete':
            setSample('sample delete')
            break;

        default:
            if (sample.includes('sample')) {
                // Open edit interface
                setSample('')
                break;
            }

            // Close edit interface
            setSample('sample')
            break;
    }
}

export function clickCancelEditProduct (productData: ProductTS, setSample: SetState, setData: SetState, e: EvClick | null) {
    e != null ? e.preventDefault() : null

    setSample('sample')
    setData(productData)
}

export function clickSaveChangesProduct (prodId: string, setSample: SetState, setData: SetState, e: EvClick) {
    e.preventDefault()
    const productEl = document.getElementById(prodId) as El
    let newData
    if (productEl.querySelector('form')) {
        const formEl = productEl.querySelector('form') as HTMLFormElement
        newData = new FormData(formEl)

        validations(newData)
        setSample('sample')
        setData(newData)
    }
}

function disableProduct (val: boolean, prodId: string) {
    const productEl = document.getElementById(prodId) as El

    if (val) {
        const label = productEl.querySelector('label.hpl-product-state') as El
        label.innerHTML = 'Not available'
        const button = productEl.querySelector(`button[data-option='unavailable'] img`)
        button?.setAttribute('src', images.icons.turnon)
        return;
    }

    const label = productEl.querySelector('label.hpl-product-state') as El
    label.innerHTML = 'Available'
    const button = productEl.querySelector(`button[data-option='unavailable'] img`)
    button?.setAttribute('src', images.icons.turnoff)
}

function deleteProduct (undelete: boolean, prodId: string) {
    const productEl = document.getElementById(prodId) as El
    if (undelete) {
        const label = productEl.querySelector('label.hpl-product-state') as El
        label.innerHTML = 'Available'
        const button = productEl.querySelector('.prod-f-cancel-prod-button') as El
        button.innerHTML = 'Cancel'
    } else {
        const label = productEl.querySelector('label.hpl-product-state') as El
        label.innerHTML = 'Deleted. undo?'
        const button = productEl.querySelector('.prod-f-cancel-prod-button') as El
        button.innerHTML = 'Undo'
    }
}

// Undelete. this message is showed after on delete.
type StateLabel = {
    prodId: string,
    setSample: SetState,
    setIntervalId: SetState,
    intervalId: number
}
export function clickProductStateLabel (args: StateLabel, e: EvClickLabel) {
    e.preventDefault()
    const {
        prodId,
        setSample,
        setIntervalId,
        intervalId
    } = args

    const productEl = document.getElementById(prodId) as El,
        target = e.target as El

    if (productEl.classList.contains('delete')) {

        setSample('sample')
        deleteProduct(true, prodId)
    }


    if (productEl) {
        const classList = productEl.getAttribute('class') as string,
            tagName = target.tagName
        if (
            /disabled|deleted/.test(classList) == false 
            && /sample$/.test(classList.replace(/\s/g, ''))
            && /BUTTON|IMG/.test(tagName) == false
        ) {
            if (productEl.querySelector('form')?.classList.contains('play-images-anim')) {
                productEl.querySelector('form')?.classList.remove('play-images-anim')
                window.clearInterval(intervalId)
            } else {
                // productEl.querySelector('form')?.classList.add('play-images-anim')
                initProductImagesAnimation(prodId, setIntervalId)
            }
        }
    }
}

// Prepare an object with the required data.
export function validations (data: any) {
    const required = {
        name: 'string',
        brand: 'string',
        price: 'number',
    } as any
    let valid = true

    for (const key in required) {
        // Verify string
        const val = data[key]
        if (!val || val && val.replace && val.replace(/\s/g) == '') {
            valid = false
        }
        // Verify type
        if (typeof val != required[key]) {
            valid = false
        }
    }

    return valid
}
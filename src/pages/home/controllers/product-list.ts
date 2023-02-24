import React from 'react'
import { El, EvClick, EvLoad, ProductTS, SetState } from "../../../types"
import images from '../../../res/images.json'

export function clickOption (prodId: string, prodData: ProductTS, setSample: SetState, opt: string, e: EvClick) {
    e.preventDefault()
    const prodEl = document.getElementById(prodId) as El,
        sample = prodEl.getAttribute('class') as string

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
        const button = productEl.querySelector('button[data-option="unavailable"] img')
        button?.setAttribute('src', images.icons.turnon)
        return;
    }

    const label = productEl.querySelector('label.hpl-product-state') as El
    label.innerHTML = 'Available'
    const button = productEl.querySelector('button[data-option="unavailable"] img')
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
export function clickProductStateLabel (prodId: string, setSample: SetState, e: EvClick) {
    e.preventDefault()
    const productEl = document.getElementById(prodId) as El
    if (productEl.classList.contains('delete')) {

        setSample('sample')
        deleteProduct(true, prodId)
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
import { ProductArgs } from '../../../types'
import { HTMLAttr } from '../../../types'
import images from '../../../res/images.json'
import { events } from '../controllers/product-item'


export function Product (args: ProductArgs) {
    // Events
    // Recommended use |set_event_store
    events(args.prodId, args.productData)

    let productData = args.productData,
        classNames = args.productData == null ? '' : 'sample',
        intervalId = 0

    const {
        index,
        prodId
    } = args,
        style = {'--i': index} as HTMLAttr
    let OptionsTemp = `
        <button class='prod-f-close-create-prod-button'>Cancel</button>
        <button class='prod-f-create-prod-button'>Add</button>
    `

    // Hidden options
    if (productData != null) {
        OptionsTemp = `
            <button class='prod-f-cancel-prod-button'>Cancel</button>
            <button class='prod-f-save-prod-button'>Save</button>
        `
    }


    return `
        <div class='hpl-product-container'>
            <div
                id='prod-opts-${prodId}'
                class='hpl-product ${classNames}'
                style='${style}'>

                <form>
                    <div class='field menu'>
                        <label class='hpl-product-state'></label>
                        <button
                            data-option='edit' class='pef-m-button'><img src='${images.icons.edit}' /></button>
                        <button
                            data-option='unavailable' class='pef-m-button'><img src='${images.icons.turnoff}' /></button>
                        <button
                            data-option='delete' class='pef-m-button'><img src='${images.icons.delete}' /></button>
                    </div>
                    <div class='field images'>
                        ${productData.images != null ? productData.images.map((imageSRC, index) => {

                            // SEVERAL IGUAL ELEMENTS FOR not use --idx
                            return `
                                <div style='${`--ind: ${String(index)}`}' class='hpl-p prod-image'>
                                    <img src='${imageSRC}' />
                                </div>
                            `
                        }).join('') : ''}
                    </div>
                    <div class='field col-1-3'>
                        <label>${'Name'}</label>
                        <input
                            defaultValue='${productData.name}'
                            name='name'
                            disabled='${classNames.includes(`sample`) ? true : false}'
                            placeholder='Product name' />
                    </div>
                    <div class='field'>
                        <label>${'Brand'}</label>
                        <input
                            defaultValue={productData.brand}
                            name='brand'
                            disabled='${classNames.includes(`sample`) ? true : false}'
                            placeholder='Product brand' />
                    </div>
                    <div class='field'>
                        <label>${'Price $ (only numbers)'}</label>
                        <div class='price-symbol'>$</div>
                        <input
                            type='number'
                            defaultValue='${productData.price}'
                            data-switch-type='true'
                            name='price'
                            disabled='${classNames.includes(`sample`) ? true : false}'
                            placeholder='$' />
                    </div>
                    <div class='field col-1-3'>
                        <label>${'Description (optional)'}</label>
                        <textarea
                            name='description'
                            defaultValue='${productData.description}'
                            disabled='${classNames.includes(`sample`) ? true : false}'
                            placeholder='Product description'
                        ></textarea>
                    </div>
                    <div class='field options col-1-3'>
                        ${OptionsTemp}
                    </div>
                </form>
            </div>
        </div>
    `
}
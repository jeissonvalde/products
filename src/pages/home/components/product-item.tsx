import { useEffect, useState } from 'react'
import { ProductArgs, HTMLStyle } from "../../../types"
import { clickProductStateLabel, clickOption, clickCancelEditProduct, clickSaveChangesProduct } from '../controllers/product-list'
import { HTMLAttr } from '../../../types'
import images from '../../../res/images.json'


export function Product (args: ProductArgs) {
    const [ productData, setData ] = useState(args.productData),
        [ classNames, setSample ] = useState(args.productData == null ? '' : 'sample'),
        [ intervalId, setIntervalId ] = useState(0)

    const {
        index,
        prodId
    } = args,
        style = {"--i": index} as HTMLAttr,
        clickOptsMenu = clickOption.bind(null, prodId, intervalId, productData, setSample)
    let OptionsTemp = <>
        <button className="prod-f-create-prod-button">Add</button>
        <button className="prod-f-close-create-prod-button">Cancel</button>
    </>

    // Hidden options
    if (productData != null) {
        OptionsTemp = <>
            <button onClick={clickSaveChangesProduct.bind(null, prodId, setSample, setData)} className="prod-f-save-prod-button">Save</button>
            <button onClick={clickCancelEditProduct.bind(null, productData, setSample, setData)} className="prod-f-cancel-prod-button">Cancel</button>
        </>
        useEffect(() => { /* here can go a toast to let the user know */ }, [ classNames, productData ])
    }


    return (
        <div className="hpl-product-container">
            <div
                id={prodId}
                className={`hpl-product ${classNames}`}
                onClick={clickProductStateLabel.bind(null, { prodId, setSample, setIntervalId, intervalId })}
                style={style}>

                <form>
                    <div className="field menu">
                        <label className='hpl-product-state'></label>
                        <button
                            onClick={clickOptsMenu.bind(null, 'edit')}
                            data-option="edit" className="pef-m-button"><img src={images.icons.edit} /></button>
                        <button
                            onClick={clickOptsMenu.bind(null, 'unavailable')}
                            data-option="unavailable" className="pef-m-button"><img src={images.icons.turnoff} /></button>
                        <button
                            onClick={clickOptsMenu.bind(null, 'delete')}
                            data-option="delete" className="pef-m-button"><img src={images.icons.delete} /></button>
                    </div>
                    <div className="field images">
                        {productData.images != null ? productData.images.map((imageSRC, index) => {

                            // SEVERAL IGUAL ELEMENTS FOR not use --idx
                            return (
                                <div key={index} style={{"--ind": String(index)} as HTMLStyle} className="hpl-p prod-image">
                                    <img src={imageSRC} />
                                </div>
                            )
                        }) : ''}
                    </div>
                    <div className="field col-1-3">
                        <label>Name</label>
                        <input
                            defaultValue={productData.name}
                            name="name"
                            disabled={classNames.includes('sample') ? true : false}
                            placeholder="Product name" />
                    </div>
                    <div className="field">
                        <label>Brand</label>
                        <input
                            defaultValue={productData.brand}
                            name="brand"
                            disabled={classNames.includes('sample') ? true : false}
                            placeholder="Product brand" />
                    </div>
                    <div className="field">
                        <label>Price $ (only numbers)</label>
                        <div className="price-symbol">$</div>
                        <input
                            type={'number'}
                            defaultValue={productData.price}
                            data-switch-type="true"
                            name="price"
                            disabled={classNames.includes('sample') ? true : false}
                            placeholder="$" />
                    </div>
                    <div className="field col-1-3">
                        <label>Description (optional)</label>
                        <textarea
                            name="description"
                            defaultValue={productData.description}
                            disabled={classNames.includes('sample') ? true : false}
                            placeholder="Product description"
                        ></textarea>
                    </div>
                    <div className="field options col-1-3">
                        {OptionsTemp}
                    </div>
                </form>
            </div>
        </div>
    )
}
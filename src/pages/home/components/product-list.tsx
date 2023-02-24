import { useState } from 'react'
import { Product } from './product-item'
import products from '../json/products.json'
import '../styles/product-list.scss'

export function ProductList () {
    const [ productListData, setProudctList ] = useState(products)

    return (
        <div className="home-product-list">
            <div className="hpl-result">
                {productListData.map((prod, i) => {
                    const prodProps = Object.assign({ productData: prod }, {
                        index: i.toString(),
                        prodId: 'prod-' + String(Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000)
                    })


                    return <Product key={i} {...prodProps} />
                })}
            </div>
            <div className="hpl-product-data"></div>
        </div>
    )
}

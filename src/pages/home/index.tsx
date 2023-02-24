import { Header } from './components/header'
import { SearchProduct } from './components/search-product'
import { ProductList } from './components/product-list'

export function Home () {

    return (
        <section className="home page">
            <Header />
            <SearchProduct />
            <ProductList />
        </section>
    )
}
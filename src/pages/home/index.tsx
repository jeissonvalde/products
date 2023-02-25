import { Header } from './components/header'
import { SearchProduct } from './components/search-product'
import { ProductList } from './components/product-list'
import { onMount } from './controllers/on-mount'

export function Home () {
    onMount()

    return (
        <section className="home page">
            <Header />
            <SearchProduct />
            <ProductList />
        </section>
    )
}
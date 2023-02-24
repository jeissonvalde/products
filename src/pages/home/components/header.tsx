import '../styles/header.scss'
import images from '../../../res/images.json'

export function Header () {

    return (
        <div className="home-header">
            <div className="hh-title">
                <label>Admin | Products</label>
            </div>
            <div className="hh-options">
                <button><img src={images.icons.plus} /></button>
                <button><img src={images.icons.search} /></button>

                <button className="m-left-auto"><img src={images.icons.login} /></button>
            </div>
        </div>
    )
}
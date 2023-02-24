import '../styles/search.scss'
import images from '../../../res/images.json'

export function SearchProduct () {

    return (
        <div className="home-search">
            <div className="hs-form">
                <div className="field">
                    <input placeholder="What product are you looking for" />
                    <button><img src={images.icons.search} alt="search image" /></button>
                </div>
            </div>
            <div className="hs-message-of-result">
                <label>Result of searching ## 0</label>
            </div>
        </div>
    )
}
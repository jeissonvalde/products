import images from '../../../res/images.json'
import { events } from '../controllers/header'
import '../styles/header.scss'

export function Header () {
    const links = [
        {
            w: '28',
            h: '28',
            id: 'close-side-nav-button',
            alt: 'delete-sign',
            imageURL: 'https://img.icons8.com/ios-glyphs/60/000000/delete-sign.png',
        },
        {
            label: 'New product',
            imageURL: images.icons.plus,
        },
        {
            label: 'Search',
            imageURL: images.icons.search,
        },
        {
            label: 'Sign in',
            imageURL: images.icons.login,
        },
    ]
    // Recommended use set_event_store
    events()

    return `
        <div class='home-header'>
            <div class='hh-title'>
                <label>${'Admin | Products'}</label>
            </div>
            <div
                class='hh-o-open-menu-button'>
                <img
                    width={'28'}
                    height={'28'}
                    src={'https://img.icons8.com/ios-filled/100/000000/menu--v1.png'}
                    alt='menu--v1'/>
            </div>
            <div class='hh-options-container'>
                <div class='hh-options-layer'>
                    <ul class='hh-options'>
                        {links.map((link_data, ind) => {
                            let ind_data = String(ind)

                            return (
                                <li
                                    key={ind}
                                    style={{'--l-ind': ind_data}}>
                                    <img
                                        src={link_data.imageURL} /></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    `
}
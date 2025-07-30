import { El } from '../../../types';

type BTN = HTMLButtonElement

export function events () {
    const buttonOpenMenu = document.querySelector('.hh-o-open-menu-button') as BTN,
            buttonCloseMenu = document.querySelector('#close-side-nav-button') as BTN

    buttonOpenMenu.onclick = clickOpenMenu
    buttonCloseMenu.onclick = clickOpenMenu
}

export function clickOpenMenu () {
    const headerElem = document.querySelector('.home-header') as El

    if (headerElem.classList.contains('open-menu')) {
        headerElem.classList.remove('open-menu')
    } else {
        headerElem.classList.add('open-menu')
    }
}
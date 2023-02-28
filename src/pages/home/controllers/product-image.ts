// Duration of animation of each image is 6s

import { SetState } from "../../../types"

export function initProductImagesAnimation (prodId: string, setIntervalId: SetState) {
    const imagesContainer = document.querySelector(`#${prodId} .field.images`),
        images = imagesContainer?.getElementsByClassName('prod-image'),
        productForm = document.querySelector(`#${prodId} form`)

    if (productForm && images) {
        productForm.classList.add('play-images-anim')

        const intervalId = setInterval(() => {
            productForm.classList.remove('play-images-anim')
            setTimeout(() => productForm.classList.add('play-images-anim'), 500)
        }, (images.length * 6800))

        setIntervalId(intervalId)
    }
}
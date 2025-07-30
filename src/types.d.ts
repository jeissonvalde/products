import { SyntheticEvent, StyleHTMLAttributes, MouseEvent, Dispatch, SetStateAction } from 'react'

declare global {
    interface Document {
        addEventListener: EventListener
    }
}

export type El = HTMLElement

export type Elems = HTMLCollectionOf<HTMLElement>

export type HTMLAttr = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export type EvLoad = SyntheticEvent<HTMLDivElement, Event>

export type EvClickLabel = MouseEvent<HTMLElement>

export type EvClick = MouseEvent<HTMLButtonElement>

export type Inp = HTMLInputElement

export type SetState = Dispatch<SetStateAction<any>>

export type HTMLStyle = StyleHTMLAttributes

export type ProductTS = {
    name: string,
    price: number,
    brand: string,
    images: string[] | null,
    description: string,
    unavailable: boolean | null
}

export type ProductArgs = {
    productData: ProductTS,
    index: string,
    prodId: string
}

// ReactEventHandler<HTMLDivElement>
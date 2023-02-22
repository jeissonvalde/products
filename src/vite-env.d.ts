
declare global {
    interface Document {
        addEventListener: EventListener
    }
}

export type El = HTMLElement
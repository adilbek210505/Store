export interface IProductState {
    product: IProduct[]
    form: object
    loader: boolean
    error: string
    defaultCurrent: string
    allDefaultCurrent: any
    mode: boolean
    value: {
        title: string
        price: number | string
        description: string
    }
    getValue: boolean
    upDate: boolean
}

export interface IProduct {
    quantity?: number | undefined | any
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string | any
    rating?: {
        [key: number]: number
    }
}
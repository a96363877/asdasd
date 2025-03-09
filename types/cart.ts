export interface CartItem {
    id: number
    name?: string
    formattedPrice?: string
    oldPrice?: string | null
    image?: string
    rating?: number
    reviews?: number
    discount?: number | null
    badge?: string | null
    quantity: number
  }
  
  export interface CartState {
    items: CartItem[]
    totalItems?: number
    totalPrice?: number
  }
  
  
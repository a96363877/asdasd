"use client"

import { useCart } from "@/contexts/cart-context"
import { CartItem } from "@/types/cart"


export function useCartItem(id: number) {
  const { items, addItem, removeItem, updateQuantity } = useCart()

  const cartItem = items?.find((item: { id: number }) => item.id === id)
  const isInCart = !!cartItem
  const quantity = cartItem?.quantity || 0

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    addItem({ ...item, id, quantity: 1 })
  }

  const incrementQuantity = () => {
    if (isInCart) {
      updateQuantity(id, quantity + 1)
    }
  }

  const decrementQuantity = () => {
    if (isInCart && quantity > 1) {
      updateQuantity(id, quantity - 1)
    } else if (isInCart) {
      removeItem(id)
    }
  }

  return {
    isInCart,
    quantity,
    addToCart,
    removeFromCart: () => removeItem(id),
    incrementQuantity,
    decrementQuantity,
    updateQuantity: (newQuantity: number) => updateQuantity(id, newQuantity),
  }
}


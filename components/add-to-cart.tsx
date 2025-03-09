"use client"

import { Button } from "@/components/ui/button"
import { useCartItem } from "@/hooks/use-cart-item"
import { CartItem } from "@/types/cart"

import { ShoppingCart, Plus, Minus } from "lucide-react"

interface AddToCartButtonProps {
  product: Omit<CartItem, "quantity">
  variant?: "default" | "outline" | "secondary"
  size?: "default" | "sm" | "lg"
}

export function AddToCartButton({ product, variant = "default", size = "default" }: AddToCartButtonProps) {
  const { isInCart, quantity, addToCart, incrementQuantity, decrementQuantity } = useCartItem(product.id)

  if (!isInCart) {
    return (
      <Button variant={variant} size={size} onClick={() => addToCart(product)} className="w-full">
        <ShoppingCart className="mr-2 h-4 w-4" />
        إضافة إلى السلة
      </Button>
    )
  }

  return (
    <div className="flex items-center justify-between border rounded-md">
      <Button variant="ghost" size="icon" onClick={decrementQuantity} className="h-5 w-5">
        <Minus className="h-4 w-4" />
      </Button>
      <span className="font-medium">{quantity}</span>
      <Button variant="ghost" size="icon" onClick={incrementQuantity} className="h-5 w-5">
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  )
}


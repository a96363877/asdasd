"use client"

import { CartItem, CartState } from "@/types/cart";
import type React from "react"
import { createContext, useContext, useReducer, type ReactNode, useEffect } from "react"

// Define action types
type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
  | { type: "CLEAR_CART" }

// Initial state
const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
}

// Calculate totals helper function
const calculateTotals = (items: CartItem[]): { totalItems: number; totalPrice: number } => {
  return items.reduce(
    (acc, item) => {
      const price = Number.parseFloat(item?.formattedPrice)
      return {
        totalItems: acc.totalItems + item?.quantity,
        totalPrice: acc.totalPrice + price * item?.quantity,
      }
    },
    { totalItems: 0, totalPrice: 0 },
  )
}

// Reducer function
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItemIndex = state.items.findIndex((item) => item?.id === action.payload.id)

      let updatedItems
      if (existingItemIndex >= 0) {
        // Item exists, update quantity
        updatedItems = [...state.items]
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + action.payload.quantity,
        }
      } else {
        // New item, add to cart
        updatedItems = [...state.items, action.payload]
      }

      const totals = calculateTotals(updatedItems)
      return {
        ...state,
        items: updatedItems,
        ...totals,
      }
    }

    case "REMOVE_ITEM": {
      const updatedItems = state.items.filter((item: { id: number }) => item?.id !== action.payload)
      const totals = calculateTotals(updatedItems)
      return {
        ...state,
        items: updatedItems,
        ...totals,
      }
    }

    case "UPDATE_QUANTITY": {
      const { id, quantity } = action.payload
      if (quantity <= 0) {
        // If quantity is 0 or negative, remove the item
        return cartReducer(state, { type: "REMOVE_ITEM", payload: id })
      }

      const updatedItems = state.items.map((item: any) => (item?.id === id ? { ...item, quantity } : item))

      const totals = calculateTotals(updatedItems)
      return {
        ...state,
        items: updatedItems,
        ...totals,
      }
    }

    case "CLEAR_CART":
      return initialState

    default:
      return state
  }
}

// Create context
interface CartContextType extends CartState {
  addItem: (item: CartItem) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  isInCart: (id: number) => boolean
}

const CartContext = createContext<CartContextType | undefined>(undefined)

// Provider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart) as CartState
        parsedCart.items.forEach((item: any) => {
          dispatch({ type: "ADD_ITEM", payload: item })
        })
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state))
  }, [state])

  // Context actions
  const addItem = (item: CartItem) => {
    dispatch({ type: "ADD_ITEM", payload: item })
  }

  const removeItem = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  const isInCart = (id: number) => {
    return state.items.some((item: { id: number }) => item?.id === id)
  }

  return (
    <CartContext.Provider
      value={{
        ...state,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// Custom hook to use the cart context
export const useCart = (): CartContextType => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}


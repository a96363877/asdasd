"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"

export function CartDrawer() {
  const { items, totalItems, totalPrice, removeItem, updateQuantity, clearCart } = useCart()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {totalItems! > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-green-700">
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto" side="right">
        <SheetHeader className="text-right">
          <SheetTitle className="text-xl font-bold flex justify-between items-center">
            سلة التسوق
            {items?.length > 0 && (
              <Button variant="outline" size="sm" onClick={clearCart} className="text-destructive">
                <Trash2 className="ml-2 h-4 w-4" />
                إفراغ السلة
              </Button>
            )}
          </SheetTitle>
        </SheetHeader>

        {items?.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[70vh]">
            <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">سلة التسوق فارغة</h3>
            <p className="text-muted-foreground text-center">أضف بعض المنتجات إلى سلة التسوق للمتابعة</p>
          </div>
        ) : (
          <div className="mt-6 space-y-6">
            <div className="space-y-4">
              {items?.map((item) => (
                <div key={item.id} className="flex gap-4 pb-4 border-b">
                  <div className="relative h-20 w-20 overflow-hidden rounded-md flex-shrink-0">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{item.name}</h3>
                    <div className="flex justify-between mt-1">
                      <div className="text-sm text-muted-foreground">
                        {item.formattedPrice} × {item.quantity}
                      </div>
                      <div className="font-medium">
                        {(Number.parseFloat(item!.formattedPrice!) * item?.quantity!).toFixed(2)}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => updateQuantity(item.id, item?.quantity! - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => updateQuantity(item.id, item?.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 ml-auto text-destructive"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between text-sm">
                <span>عدد المنتجات</span>
                <span>{totalItems}</span>
              </div>
              <div className="flex justify-between font-medium text-lg mt-2">
                <span>المجموع</span>
                <span>{totalPrice.toFixed(2)}</span>
              </div>
              <Button className="w-full mt-4 bg-green-700 hover:bg-green-800">إتمام الشراء</Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}


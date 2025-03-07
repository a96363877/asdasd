import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, CreditCard, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function PaymentPage() {
  // Sample cart items
  const cartItems = [
    {
      id: 1,
      name: "لحم بقري طازج",
      price: "75.00 درهم",
      quantity: 2,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "دجاج كامل",
      price: "45.00 درهم",
      quantity: 1,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  // Calculate totals
  const subtotal = "195.00 درهم"
  const shipping = "10.00 درهم"
  const total = "205.00 درهم"

  return (
    <main className="min-h-screen bg-gray-50" dir="rtl">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container flex items-center justify-between p-4">
          <Link href="/" className="text-2xl font-bold text-green-800">
            الطازج
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              <Badge className="absolute -top-2 -right-2 bg-green-700 text-white">3</Badge>
            </Link>
          </div>
        </div>
      </header>

      {/* Checkout Steps */}
      <div className="bg-white py-4 shadow-sm mb-6">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="flex items-center">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-green-700 text-white flex items-center justify-center">1</div>
                <span className="text-sm mt-1 text-green-700 font-medium">السلة</span>
              </div>
              <div className="w-12 h-1 bg-green-700"></div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-green-700 text-white flex items-center justify-center">2</div>
                <span className="text-sm mt-1 text-green-700 font-medium">الشحن</span>
              </div>
              <div className="w-12 h-1 bg-green-700"></div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-green-700 text-white flex items-center justify-center">3</div>
                <span className="text-sm mt-1 text-green-700 font-medium">الدفع</span>
              </div>
              <div className="w-12 h-1 bg-gray-300"></div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center">4</div>
                <span className="text-sm mt-1 text-gray-600">التأكيد</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Form */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">طريقة الدفع</h2>

              <RadioGroup defaultValue="card" className="mb-6">
                <div className="flex items-center space-x-2 space-x-reverse border rounded-lg p-4 mb-2">
                  <RadioGroupItem value="card" id="card" />
                  <CreditCard className="h-5 w-5 text-gray-600 ml-2" />
                  <Label htmlFor="card" className="font-medium">
                    بطاقة ائتمان / بطاقة خصم
                  </Label>
                </div>

                <div className="mr-8 border rounded-lg p-6 mb-4">
                  <div className="grid grid-cols-1 gap-4 mb-4">
                    <div>
                      <Label htmlFor="cardNumber">رقم البطاقة</Label>
                      <Input id="cardNumber" placeholder="0000 0000 0000 0000" className="mt-1" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiryDate">تاريخ الانتهاء</Label>
                        <Input id="expiryDate" placeholder="MM/YY" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="cvv">رمز الأمان (CVV)</Label>
                        <Input id="cvv" placeholder="123" className="mt-1" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="cardName">الاسم على البطاقة</Label>
                      <Input id="cardName" placeholder="الاسم كما يظهر على البطاقة" className="mt-1" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 space-x-reverse border rounded-lg p-4 mb-2">
                  <RadioGroupItem value="cod" id="cod" />
                  <Wallet className="h-5 w-5 text-gray-600 ml-2" />
                  <Label htmlFor="cod" className="font-medium">
                    الدفع عند الاستلام
                  </Label>
                </div>
              </RadioGroup>

              <div className="flex justify-between">
                <Button
                  variant="outline"
                  className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
                >
                  <Link href="/checkout/shipping">العودة للشحن</Link>
                </Button>
                <Button className="bg-green-700 hover:bg-green-800">
                  <Link href="/checkout/confirm">تأكيد الطلب</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4">ملخص الطلب</h2>
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="relative w-16 h-16 rounded-md overflow-hidden">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>الكمية: {item.quantity}</span>
                        <span>{item.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">المجموع الفرعي:</span>
                  <span>{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">رسوم التوصيل:</span>
                  <span>{shipping}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t">
                  <span>الإجمالي:</span>
                  <span className="text-green-700">{total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}


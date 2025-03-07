import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ShippingPage() {
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
              <div className="w-12 h-1 bg-gray-300"></div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center">3</div>
                <span className="text-sm mt-1 text-gray-600">الدفع</span>
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

      {/* Shipping Form */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">معلومات الشحن</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <Label htmlFor="firstName">الاسم الأول</Label>
                  <Input id="firstName" placeholder="الاسم الأول" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="lastName">الاسم الأخير</Label>
                  <Input id="lastName" placeholder="الاسم الأخير" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email">البريد الإلكتروني</Label>
                  <Input id="email" type="email" placeholder="example@example.com" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="phone">رقم الهاتف</Label>
                  <Input id="phone" placeholder="05xxxxxxxx" className="mt-1" />
                </div>
              </div>

              <h3 className="font-bold mb-3">عنوان التوصيل</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <Label htmlFor="city">المدينة</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر المدينة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dubai">دبي</SelectItem>
                      <SelectItem value="abudhabi">أبوظبي</SelectItem>
                      <SelectItem value="sharjah">الشارقة</SelectItem>
                      <SelectItem value="ajman">عجمان</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="area">المنطقة</Label>
                  <Input id="area" placeholder="المنطقة" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="street">الشارع</Label>
                  <Input id="street" placeholder="الشارع" className="mt-1" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="building">المبنى</Label>
                    <Input id="building" placeholder="المبنى" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="apartment">الشقة</Label>
                    <Input id="apartment" placeholder="الشقة" className="mt-1" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="notes">ملاحظات إضافية</Label>
                  <Textarea id="notes" placeholder="أي تفاصيل إضافية للتوصيل" className="mt-1" />
                </div>
              </div>

              <h3 className="font-bold mb-3">طريقة التوصيل</h3>
              <RadioGroup defaultValue="standard" className="mb-6">
                <div className="flex items-center space-x-2 space-x-reverse border rounded-lg p-4 mb-2">
                  <RadioGroupItem value="standard" id="standard" />
                  <div className="flex-1">
                    <Label htmlFor="standard" className="font-medium">
                      توصيل عادي
                    </Label>
                    <p className="text-sm text-gray-500">التوصيل خلال 3 ساعات</p>
                  </div>
                  <div className="font-medium">10.00 درهم</div>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse border rounded-lg p-4">
                  <RadioGroupItem value="express" id="express" />
                  <div className="flex-1">
                    <Label htmlFor="express" className="font-medium">
                      توصيل سريع
                    </Label>
                    <p className="text-sm text-gray-500">التوصيل خلال 60 دقيقة</p>
                  </div>
                  <div className="font-medium">25.00 درهم</div>
                </div>
              </RadioGroup>

              <div className="flex justify-between">
                <Button
                  variant="outline"
                  className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
                >
                  <Link href="/cart">العودة إلى السلة</Link>
                </Button>
                <Button className="bg-green-700 hover:bg-green-800">
                  <Link href="/checkout/payment">متابعة للدفع</Link>
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


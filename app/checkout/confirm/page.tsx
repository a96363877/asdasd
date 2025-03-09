import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Check, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ConfirmPage() {
  // Sample cart items

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
              <div className="w-12 h-1 bg-green-700"></div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-green-700 text-white flex items-center justify-center">4</div>
                <span className="text-sm mt-1 text-green-700 font-medium">التأكيد</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OTP Verification */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-green-700" />
            </div>
            <h2 className="text-2xl font-bold mb-2">تأكيد الطلب</h2>
            <p className="text-gray-600 mb-6">تم إرسال رمز التحقق إلى رقم هاتفك المسجل</p>

            <div className="max-w-xs mx-auto mb-6">
              <Label htmlFor="otp" className="block text-right mb-2">
                أدخل رمز التحقق
              </Label>
              <div className="grid grid-cols-4 gap-2">
                <Input className="text-center text-xl font-bold h-12" maxLength={1} />
                <Input className="text-center text-xl font-bold h-12" maxLength={1} />
                <Input className="text-center text-xl font-bold h-12" maxLength={1} />
                <Input className="text-center text-xl font-bold h-12" maxLength={1} />
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <button className="text-green-700 hover:underline">إعادة إرسال الرمز</button>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>02:59</span>
                </div>
              </div>
            </div>

            <Button className="w-full bg-green-700 hover:bg-green-800 mb-4">تأكيد الطلب</Button>
            <Button
              variant="outline"
              className="w-full border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
            >
              <Link href="/checkout/payment">العودة للدفع</Link>
            </Button>
          </div>

        
        </div>
      </div>
    </main>
  )
}


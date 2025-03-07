import Link from "next/link"
import Image from "next/image"
import { Star, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function OffersPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[300px]">
        <Image
          src="/placeholder.svg?height=300&width=1200"
          alt="عروضنا المميزة"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">عروضنا المميزة</h1>
          <p className="text-white text-lg max-w-xl">
            اكتشف أفضل العروض والخصومات على منتجات اللحوم الطازجة والمنتجات الغذائية
          </p>
        </div>
      </section>

      {/* Main Offers */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">العروض الأسبوعية</h2>

          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="relative h-[300px] md:h-[400px]">
              <Image src="/placeholder.svg?height=400&width=1200" alt="عرض خاص" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center p-8 md:p-16">
                <Badge className="bg-red-500 text-white w-fit mb-4">عرض محدود</Badge>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">وفر 30% على تشكيلة اللحوم البقرية</h3>
                <p className="text-white/90 text-lg mb-6 max-w-lg">
                  احصل على خصم 30% على جميع قطعيات اللحم البقري الطازج لفترة محدودة فقط
                </p>
                <div className="flex items-center text-white mb-6">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>ينتهي العرض خلال 3 أيام</span>
                </div>
                <Button className="bg-green-700 hover:bg-green-800 w-fit px-6 py-6 text-lg">
                  <Link href="/category/beef">تسوق الآن</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-[250px]">
                <Image src="/placeholder.svg?height=250&width=600" alt="عرض خاص" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <Badge className="bg-amber-500 text-white w-fit mb-2">اشتر 2 واحصل على 1 مجاناً</Badge>
                  <h3 className="text-xl font-bold text-white mb-2">عروض الدجاج الطازج</h3>
                  <Button className="bg-green-700 hover:bg-green-800 w-fit">
                    <Link href="/category/poultry">تسوق الآن</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-[250px]">
                <Image src="/placeholder.svg?height=250&width=600" alt="عرض خاص" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <Badge className="bg-blue-500 text-white w-fit mb-2">خصم 25%</Badge>
                  <h3 className="text-xl font-bold text-white mb-2">عروض الأسماك الطازجة</h3>
                  <Button className="bg-green-700 hover:bg-green-800 w-fit">
                    <Link href="/category/fish">تسوق الآن</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products on Sale */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">منتجات بخصومات خاصة</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {offerProducts.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative h-60">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.discount && (
                      <Badge className="absolute top-3 right-3 bg-red-500 text-white">خصم {product.discount}%</Badge>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-1 mb-2">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < product.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                          />
                        ))}
                      <span className="text-xs text-gray-500 mr-1">({product.reviews})</span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2 text-lg group-hover:text-green-700 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <div>
                        {product.oldPrice && (
                          <span className="text-sm line-through text-gray-500 block">{product.oldPrice}</span>
                        )}
                        <span className="font-bold text-green-700 text-lg">{product.price}</span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white group-hover:bg-green-700 group-hover:text-white transition-colors"
                      >
                        إضافة للسلة
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coupon Banner */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-green-700 to-green-900 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">كود خصم حصري لمتابعينا</h2>
            <p className="text-white/90 max-w-lg mx-auto mb-8">
              احصل على خصم إضافي 10% على مشترياتك عند إدخال هذا الكود عند الدفع
            </p>
            <div className="bg-white text-green-800 py-4 rounded-lg max-w-xs mx-auto text-2xl font-bold tracking-wider mb-6">
              FRESH10
            </div>
            <Button className="bg-white text-green-800 hover:bg-gray-100">
              <Link href="/products">تسوق الآن</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

// Sample offers data
const offerProducts = [
  {
    id: 1,
    name: "لحم بقري طازج",
    price: "65.00 درهم",
    oldPrice: "85.00 درهم",
    image: "/placeholder.svg?height=240&width=240",
    rating: 4,
    reviews: 24,
    discount: 24,
  },
  {
    id: 2,
    name: "دجاج كامل",
    price: "38.00 درهم",
    oldPrice: "55.00 درهم",
    image: "/placeholder.svg?height=240&width=240",
    rating: 5,
    reviews: 36,
    discount: 30,
  },
  {
    id: 3,
    name: "لحم غنم",
    price: "82.00 درهم",
    oldPrice: "110.00 درهم",
    image: "/placeholder.svg?height=240&width=240",
    rating: 4,
    reviews: 18,
    discount: 25,
  },
  {
    id: 4,
    name: "شرائح لحم",
    price: "55.00 درهم",
    oldPrice: "75.00 درهم",
    image: "/placeholder.svg?height=240&width=240",
    rating: 3,
    reviews: 12,
    discount: 27,
  },
  {
    id: 5,
    name: "كباب لحم",
    price: "42.00 درهم",
    oldPrice: "60.00 درهم",
    image: "/placeholder.svg?height=240&width=240",
    rating: 5,
    reviews: 42,
    discount: 30,
  },
  {
    id: 6,
    name: "سمك طازج",
    price: "55.00 درهم",
    oldPrice: "70.00 درهم",
    image: "/placeholder.svg?height=240&width=240",
    rating: 3,
    reviews: 15,
    discount: 21,
  },
  {
    id: 7,
    name: "برجر لحم",
    price: "28.00 درهم",
    oldPrice: "35.00 درهم",
    image: "/placeholder.svg?height=240&width=240",
    rating: 4,
    reviews: 22,
    discount: 20,
  },
  {
    id: 8,
    name: "لحم مفروم",
    price: "32.00 درهم",
    oldPrice: "40.00 درهم",
    image: "/placeholder.svg?height=240&width=240",
    rating: 4,
    reviews: 36,
    discount: 20,
  },
]


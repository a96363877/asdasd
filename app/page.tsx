import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Star, Clock, Truck, CreditCard, ShieldCheck, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] max-h-[600px] min-h-[400px]">
        <Image src="/placeholder.svg?height=600&width=1200" alt="لحوم طازجة" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex flex-col justify-center p-8 md:p-16">
          <span className="text-green-400 font-medium mb-2">مرحباً بكم في متجر الطازج</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-2xl">
            أفضل اللحوم الطازجة والمنتجات الغذائية عالية الجودة
          </h1>
          <p className="text-white text-lg mb-8 max-w-xl">
            نقدم لكم أجود أنواع اللحوم الطازجة المحلية والمستوردة بأفضل الأسعار والجودة العالية
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-green-700 hover:bg-green-800 text-lg px-8 py-6">تسوق الآن</Button>
            <Button
              variant="outline"
              className="bg-white/10 hover:bg-white/20 border-white text-white text-lg px-8 py-6"
            >
              تعرف علينا
            </Button>
          </div>
        </div>
      </section>

      {/* USP / Benefits Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Truck className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">توصيل سريع</h3>
              <p className="text-gray-600">توصيل في نفس اليوم لجميع المناطق والمدن الرئيسية</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CreditCard className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">دفع آمن</h3>
              <p className="text-gray-600">طرق دفع متعددة وآمنة بما فيها الدفع عند الاستلام</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">ضمان الجودة</h3>
              <p className="text-gray-600">منتجات طازجة وعالية الجودة مع ضمان الاستبدال</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">منتجات حلال</h3>
              <p className="text-gray-600">جميع منتجاتنا حلال ومذبوحة على الطريقة الإسلامية</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">تصفح حسب الفئة</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              اختر من بين مجموعة واسعة من المنتجات الطازجة عالية الجودة المصنفة بعناية لتسهيل تجربة التسوق
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link
                href={`/category/${category.slug}`}
                key={category.id}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Image src={category.icon || "/placeholder.svg"} alt={category.name} width={40} height={40} />
                </div>
                <h3 className="font-medium text-gray-800 text-center">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">منتجات مميزة</h2>
              <p className="text-gray-600">اكتشف أفضل منتجاتنا المختارة بعناية لتناسب احتياجاتك</p>
            </div>
            <Link href="/products" className="text-green-700 flex items-center font-medium hover:underline">
              عرض الكل
              <ChevronLeft className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
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
                    {product.badge && (
                      <Badge className="absolute top-3 left-3 bg-green-700 text-white">{product.badge}</Badge>
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

      {/* Banner Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="عروض خاصة"
          fill
          className="object-cover absolute inset-0 z-[-1]"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl">
            <span className="text-green-400 font-medium mb-2 block">عروض حصرية</span>
            <h2 className="text-4xl font-bold text-white mb-4">وفر 20% على جميع أنواع اللحوم البقرية</h2>
            <p className="text-white/80 mb-8">
              استمتع بخصم حصري لفترة محدودة على تشكيلة مختارة من أجود أنواع اللحوم البقرية الطازجة. احصل عليها الآن قبل
              انتهاء العرض!
            </p>
            <Button className="bg-green-700 hover:bg-green-800 text-lg px-8 py-6">تسوق العروض الآن</Button>
          </div>
        </div>
      </section>

      {/* Best Selling Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">الأكثر مبيعاً</h2>
              <p className="text-gray-600">المنتجات المفضلة لدى عملائنا والأكثر طلباً</p>
            </div>
            <Link href="/products" className="text-green-700 flex items-center font-medium hover:underline">
              عرض الكل
              <ChevronLeft className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {bestSellingProducts.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="relative h-60">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.badge && (
                      <Badge className="absolute top-3 right-3 bg-amber-500 text-white">{product.badge}</Badge>
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
                      <span className="font-bold text-green-700 text-lg">{product.price}</span>
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

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">آراء عملائنا</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">إليك ما قاله عملاؤنا عن تجربتهم مع منتجات الطازج</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-1 mb-4">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                      />
                    ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden relative">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg?height=40&width=40"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-1/2 relative h-60 md:h-auto">
                <Image src="/placeholder.svg?height=400&width=600" alt="جودة الطازج" fill className="object-cover" />
              </div>
              <div className="p-8 md:p-12">
                <div className="uppercase text-green-700 font-semibold text-sm tracking-wider mb-2">ضمان الجودة</div>
                <h2 className="text-3xl font-bold mb-4">التزامنا بأعلى معايير الجودة</h2>
                <p className="text-gray-600 mb-4">
                  نحرص في الطازج على تقديم أفضل أنواع اللحوم الطازجة يومياً. تتميز منتجاتنا بالجودة العالية والنكهة
                  المميزة التي تضيف لمذاق أطباقك.
                </p>
                <p className="text-gray-600 mb-6">
                  نلتزم بأعلى معايير الجودة والنظافة لضمان تقديم منتجات آمنة وصحية لعملائنا الكرام. جميع منتجاتنا حلال
                  ومذبوحة على الطريقة الإسلامية وتخضع لفحوصات دقيقة للتأكد من سلامتها.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center ml-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-green-700"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <span className="font-medium">منتجات طازجة</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center ml-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-green-700"
                      >
                        <path d="M20 7h-9" />
                        <path d="M14 17H5" />
                        <circle cx="17" cy="17" r="3" />
                        <circle cx="7" cy="7" r="3" />
                      </svg>
                    </div>
                    <span className="font-medium">مراقبة جودة</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center ml-3">
                      <Clock className="h-5 w-5 text-green-700" />
                    </div>
                    <span className="font-medium">يومي وطازج</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Promotion */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="md:flex items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">حمّل تطبيق الطازج الآن</h2>
              <p className="mb-6 text-white/90">
                احصل على تجربة تسوق أسهل وأسرع مع تطبيقنا للهواتف الذكية. استمتع بميزات حصرية وعروض خاصة فقط للمستخدمين!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#" className="bg-black rounded-lg px-4 py-2 flex items-center hover:bg-gray-900">
                  <div className="ml-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-7 h-7"
                    >
                      <path d="M17.112 0h.862c.964 0 1.753.782 1.755 1.746v20.508c-.002.964-.791 1.746-1.755 1.746h-.862V0zm-3.893 0h2.913v24H13.22V0zm-5.306 0h4.329v24H7.913V0zM0 1.746C.002.782.792 0 1.755 0h5.182v24H1.755C.791 24 .002 23.218 0 22.254V1.746z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs">تحميل من</div>
                    <div className="font-medium">App Store</div>
                  </div>
                </Link>
                <Link href="#" className="bg-black rounded-lg px-4 py-2 flex items-center hover:bg-gray-900">
                  <div className="ml-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-7 h-7"
                    >
                      <path d="M3.609 1.814L13.792 12 3.609 22.186c-.181.181-.29.423-.29.684V1.13c0 .261.109.503.29.684zm10.831 4.684l-3.168-3.168 8.586-3.192-5.418 6.36zm1.684 10.449l-5.418 6.36 8.586-3.192-3.168-3.168zM17.275 12l3.291 3.293V8.707L17.275 12z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs">تحميل من</div>
                    <div className="font-medium">Google Play</div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative h-80 md:h-96">
              <Image src="/placeholder.svg?height=400&width=400" alt="تطبيق الطازج" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

// Sample data
const categories = [
  { id: 1, name: "لحوم بقري", slug: "beef", icon: "/placeholder.svg?height=40&width=40" },
  { id: 2, name: "لحوم غنم", slug: "lamb", icon: "/placeholder.svg?height=40&width=40" },
  { id: 3, name: "دواجن", slug: "poultry", icon: "/placeholder.svg?height=40&width=40" },
  { id: 4, name: "أسماك", slug: "fish", icon: "/placeholder.svg?height=40&width=40" },
  { id: 5, name: "مجمدات", slug: "frozen", icon: "/placeholder.svg?height=40&width=40" },
  { id: 6, name: "منتجات جاهزة", slug: "ready", icon: "/placeholder.svg?height=40&width=40" },
]

const featuredProducts = [
  {
    id: 1,
    name: "لحم بقري طازج",
    price: "75.00 درهم",
    oldPrice: "85.00 درهم",
    image: "/placeholder.svg?height=240&width=240",
    rating: 4,
    reviews: 24,
    discount: 12,
    badge: null,
  },
  {
    id: 2,
    name: "دجاج كامل",
    price: "45.00 درهم",
    oldPrice: "55.00 درهم",
    image: "/placeholder.svg?height=240&width=240",
    rating: 5,
    reviews: 36,
    discount: 18,
    badge: null,
  },
  {
    id: 3,
    name: "لحم غنم",
    price: "95.00 درهم",
    oldPrice: "110.00 درهم",
    image: "/placeholder.svg?height=240&width=240",
    rating: 4,
    reviews: 18,
    discount: 14,
    badge: "جديد",
  },
  {
    id: 4,
    name: "شرائح لحم",
    price: "65.00 درهم",
    oldPrice: "75.00 درهم",
    image: "/placeholder.svg?height=240&width=240",
    rating: 3,
    reviews: 12,
    discount: 13,
    badge: null,
  },
]

const bestSellingProducts = [
  {
    id: 5,
    name: "كباب لحم",
    price: "60.00 درهم",
    image: "/placeholder.svg?height=240&width=240",
    rating: 5,
    reviews: 42,
    badge: "الأكثر مبيعاً",
  },
  {
    id: 6,
    name: "دجاج مشوي",
    price: "50.00 درهم",
    image: "/placeholder.svg?height=240&width=240",
    rating: 4,
    reviews: 28,
    badge: "جديد",
  },
  {
    id: 7,
    name: "لحم مفروم",
    price: "40.00 درهم",
    image: "/placeholder.svg?height=240&width=240",
    rating: 4,
    reviews: 36,
    badge: null,
  },
  {
    id: 8,
    name: "سمك طازج",
    price: "70.00 درهم",
    image: "/placeholder.svg?height=240&width=240",
    rating: 3,
    reviews: 15,
    badge: null,
  },
]

const testimonials = [
  {
    name: "أحمد محمد",
    avatar: "/placeholder.svg?height=40&width=40",
    text: "جودة اللحوم ممتازة جداً والتوصيل سريع. سعيد جداً بتجربتي مع متجر الطازج وسأستمر في الطلب منهم.",
    rating: 5,
    date: "20 يناير 2023",
  },
  {
    name: "سارة علي",
    avatar: "/placeholder.svg?height=40&width=40",
    text: "من أفضل المتاجر التي تعاملت معها. المنتجات طازجة والأسعار منافسة والتوصيل سريع جداً.",
    rating: 5,
    date: "15 فبراير 2023",
  },
  {
    name: "محمد السيد",
    avatar: "/placeholder.svg?height=40&width=40",
    text: "تعاملت مع الطازج عدة مرات وفي كل مرة كانت التجربة رائعة. المنتجات عالية الجودة والطعم مميز.",
    rating: 4,
    date: "10 مارس 2023",
  },
]


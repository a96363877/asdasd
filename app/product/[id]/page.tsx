"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Minus, Plus, ShoppingCart, Heart, Share2, Star, Truck, Clock, Shield, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/contexts/cart-context"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ProductPage({ params }: { params: { id: string } }) {
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  // In a real app, you would fetch the product data based on the ID
  const product = {
    id: params.id,
    name: "لحم بقري طازج - قطع ممتازة",
    price: 75.0,
    formattedPrice: "75.00 درهم",
    oldPrice: "85.00 درهم",
    discount: 12,
    rating: 4,
    reviews: 24,
    stock: 15,
    description:
      "لحم بقري طازج عالي الجودة، مقطع ومجهز بعناية فائقة. يتميز بنكهته الرائعة ومذاقه الشهي. مناسب للشوي، الطبخ، أو إعداد الوجبات المختلفة.",
    longDescription: `
      لحم بقري طازج عالي الجودة، مقطع ومجهز بعناية فائقة. يتم اختيار أفضل قطع اللحم البقري وتجهيزها بطرق صحية ونظيفة لضمان الجودة والسلامة.

      يتميز لحمنا البقري بالنكهة الرائعة، واللون الأحمر الزاهي الذي يدل على الطزاجة، والقوام المثالي الذي يناسب مختلف طرق الطهي.

      مناسب للشوي، الطبخ، أو إعداد الوجبات المختلفة. يمكن استخدامه في تحضير الكباب، الستيك، اليخنات، أو أي وصفة تفضلونها.

      جميع منتجاتنا حلال ومذبوحة على الطريقة الإسلامية، ونلتزم بأعلى معايير النظافة والجودة.
    `,
    specifications: [
      { name: "البلد المنشأ", value: "محلي - الإمارات" },
      { name: "الوزن", value: "1 كيلوجرام" },
      { name: "التخزين", value: "يحفظ مبرداً عند درجة حرارة 2-4 درجات مئوية" },
      { name: "الصلاحية", value: "3 أيام من تاريخ الذبح" },
      { name: "نوع اللحم", value: "لحم بقري طازج" },
      { name: "الذبح", value: "حلال - طريقة إسلامية" },
      { name: "قطع اللحم", value: "قطع ممتازة - لحم خالي من العظم" },
      { name: "الحالة", value: "طازج - غير مجمد" },
    ],
    nutritionalInfo: [
      { name: "السعرات الحرارية", value: "250 سعرة حرارية لكل 100 جرام" },
      { name: "البروتين", value: "26 جرام" },
      { name: "الدهون", value: "15 جرام" },
      { name: "الدهون المشبعة", value: "6 جرام" },
      { name: "الكربوهيدرات", value: "0 جرام" },
      { name: "الصوديوم", value: "75 ملليجرام" },
      { name: "الحديد", value: "2.5 ملليجرام" },
    ],
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    isHalal: true,
    isFresh: true,
    isPremium: true,
    relatedProducts: [
      {
        id: 2,
        name: "لحم غنم طازج",
        price: "95.00 درهم",
        image: "/placeholder.svg?height=160&width=160",
        rating: 4,
      },
      {
        id: 3,
        name: "لحم مفروم",
        price: "40.00 درهم",
        image: "/placeholder.svg?height=160&width=160",
        rating: 5,
      },
      {
        id: 4,
        name: "شرائح لحم",
        price: "65.00 درهم",
        image: "/placeholder.svg?height=160&width=160",
        rating: 3,
      },
      {
        id: 5,
        name: "لحم بتلو",
        price: "85.00 درهم",
        image: "/placeholder.svg?height=160&width=160",
        rating: 4,
      },
    ],
    reviews1: [
      {
        id: 1,
        user: "أحمد محمد",
        rating: 5,
        date: "2023-01-15",
        comment: "منتج ممتاز وطازج، وصل بسرعة والطعم رائع. أنصح به بشدة!",
      },
      {
        id: 2,
        user: "سارة علي",
        rating: 4,
        date: "2023-02-20",
        comment: "جودة اللحم ممتازة والتغليف جيد. التوصيل كان سريع جداً.",
      },
      {
        id: 3,
        user: "محمد خالد",
        rating: 5,
        date: "2023-03-05",
        comment: "من أفضل اللحوم التي جربتها. طازجة وذات مذاق رائع. سأطلبها مرة أخرى بالتأكيد.",
      },
      {
        id: 4,
        user: "فاطمة أحمد",
        rating: 4,
        date: "2023-03-18",
        comment: "قطع اللحم كانت ممتازة ومناسبة للشوي. الجودة تستحق السعر.",
      },
    ],
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      formattedPrice: product.formattedPrice,
      quantity: quantity,
      image: product.images[0],
    })
   
  }

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity((prevQuantity) => prevQuantity + 1)
    }
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3 px-4">
        <div className="container mx-auto">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-green-700">
              الرئيسية
            </Link>
            <ChevronLeft className="h-4 w-4 mx-1" />
            <Link href="/category/beef" className="hover:text-green-700">
              لحوم بقري
            </Link>
            <ChevronLeft className="h-4 w-4 mx-1" />
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative h-80 md:h-[500px] border rounded-lg overflow-hidden bg-white">
                <Image
                  src={product.images[selectedImageIndex] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain"
                  priority
                />
                {product.discount && (
                  <Badge className="absolute top-4 right-4 bg-red-500 text-white">خصم {product.discount}%</Badge>
                )}
                {product.isPremium && (
                  <Badge className="absolute top-4 left-4 bg-amber-500 text-white">درجة ممتازة</Badge>
                )}
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className={`relative h-20 border rounded-lg overflow-hidden cursor-pointer ${selectedImageIndex === index ? "ring-2 ring-green-700" : ""}`}
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} - صورة ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < product.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                        />
                      ))}
                  </div>
                  <span className="text-gray-500">({product.reviews} تقييم)</span>
                  <span className="text-green-700 mr-2 hover:underline cursor-pointer">اقرأ التقييمات</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-3xl font-bold text-green-700">{product.formattedPrice}</span>
                  {product.oldPrice && <span className="text-lg line-through text-gray-500">{product.oldPrice}</span>}
                  {product.discount && <Badge className="bg-red-100 text-red-700 ml-2">وفر {product.discount}%</Badge>}
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700 my-4">
                  <div className="flex items-center">
                    <Truck className="h-4 w-4 text-green-700 ml-1" />
                    <span>توصيل سريع - خلال 60 دقيقة</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-green-700 ml-1" />
                    <span>متوفر في المخزون: {product.stock} قطعة</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 my-4">
                  {product.isHalal && <Badge className="bg-green-100 text-green-700">حلال</Badge>}
                  {product.isFresh && <Badge className="bg-blue-100 text-blue-700">طازج</Badge>}
                  {product.isPremium && <Badge className="bg-amber-100 text-amber-700">درجة ممتازة</Badge>}
                </div>
              </div>

              <div className="border-t border-b py-4">
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-gray-700 ml-4 font-medium">الكمية:</span>
                  <div className="flex items-center border rounded-md">
                    <button
                      className="px-3 py-1 border-l text-gray-500 hover:text-gray-700 disabled:opacity-50"
                      onClick={decrementQuantity}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-6 py-1 font-medium">{quantity}</span>
                    <button
                      className="px-3 py-1 border-r text-gray-500 hover:text-gray-700 disabled:opacity-50"
                      onClick={incrementQuantity}
                      disabled={quantity >= product.stock}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1 bg-green-700 hover:bg-green-800 py-6" onClick={handleAddToCart}>
                    <ShoppingCart className="h-5 w-5 ml-2" />
                    إضافة إلى السلة
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-green-700 text-green-700 hover:bg-green-700 hover:text-white py-6"
                  >
                    <Heart className="h-5 w-5 ml-2" />
                    أضف للمفضلة
                  </Button>
                  <Button variant="outline" size="icon" className="border-gray-300 p-6">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-3 py-4">
                <div className="flex flex-col items-center text-center p-3 bg-gray-50 rounded-lg">
                  <Shield className="h-6 w-6 text-green-700 mb-2" />
                  <span className="text-sm font-medium">ضمان الجودة</span>
                </div>
                <div className="flex flex-col items-center text-center p-3 bg-gray-50 rounded-lg">
                  <Award className="h-6 w-6 text-green-700 mb-2" />
                  <span className="text-sm font-medium">منتج حلال</span>
                </div>
                <div className="flex flex-col items-center text-center p-3 bg-gray-50 rounded-lg">
                  <Truck className="h-6 w-6 text-green-700 mb-2" />
                  <span className="text-sm font-medium">توصيل سريع</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="mt-12">
            <Tabs defaultValue="description">
              <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0">
                <TabsTrigger
                  value="description"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-green-700 data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 px-4"
                >
                  الوصف
                </TabsTrigger>
                <TabsTrigger
                  value="specifications"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-green-700 data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 px-4"
                >
                  المواصفات
                </TabsTrigger>
                <TabsTrigger
                  value="nutritional"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-green-700 data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 px-4"
                >
                  القيمة الغذائية
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-green-700 data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 px-4"
                >
                  التقييمات
                </TabsTrigger>
                <TabsTrigger
                  value="shipping"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-green-700 data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 px-4"
                >
                  الشحن والتوصيل
                </TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="pt-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4">وصف المنتج</h3>
                  <div className="space-y-4 text-gray-700">
                    {product.longDescription.split("\n\n").map((paragraph, index) => (
                      <p key={index} className="leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="specifications" className="pt-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4">مواصفات المنتج</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="flex">
                        <span className="font-medium text-gray-700 ml-2 min-w-[150px]">{spec.name}:</span>
                        <span className="text-gray-600">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="nutritional" className="pt-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4">القيمة الغذائية</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.nutritionalInfo.map((info, index) => (
                      <div key={index} className="flex">
                        <span className="font-medium text-gray-700 ml-2 min-w-[150px]">{info.name}:</span>
                        <span className="text-gray-600">{info.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="pt-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4">تقييمات العملاء</h3>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-5xl font-bold text-green-700">{product.rating}.0</div>
                    <div>
                      <div className="flex mb-1">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${i < product.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                            />
                          ))}
                      </div>
                      <p className="text-sm text-gray-600">بناءً على {product.reviews} تقييم</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {product.reviews1.map((rev) => (
                      <div key={rev.id} className="border-b pb-4">
                        <div className="flex justify-between mb-2">
                          <div className="font-bold">{rev.user}</div>
                          <div className="flex">
                            {Array(5)
                              .fill(0)
                              .map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < rev.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                                />
                              ))}
                          </div>
                        </div>
                        <div className="text-sm text-gray-500 mb-2">{rev.date}</div>
                        <p className="text-gray-700">{rev.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="shipping" className="pt-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4">معلومات الشحن والتوصيل</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">التوصيل السريع</h4>
                      <p className="text-gray-700">توصيل خلال 60 دقيقة لجميع المناطق داخل المدينة.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">التوصيل العادي</h4>
                      <p className="text-gray-700">توصيل خلال 3 ساعات لجميع المناطق.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">رسوم التوصيل</h4>
                      <p className="text-gray-700">
                        رسوم التوصيل 10 دراهم للطلبات أقل من 100 درهم. التوصيل مجاني للطلبات فوق 100 درهم.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">منتجات ذات صلة</h2>
              <Link href="/products" className="text-green-700 flex items-center font-medium hover:underline">
                عرض الكل
                <ChevronLeft className="h-5 w-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {product.relatedProducts.map((relatedProduct) => (
                <Link href={`/product/${relatedProduct.id}`} key={relatedProduct.id} className="group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-3">
                      <div className="flex items-center gap-1 mb-1">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${i < relatedProduct.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                            />
                          ))}
                      </div>
                      <h3 className="font-bold text-gray-800 group-hover:text-green-700 transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <div className="flex justify-between items-center mt-2">
                        <span className="font-bold text-green-700">{relatedProduct.price}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-xs border-green-700 text-green-700 hover:bg-green-700 hover:text-white group-hover:bg-green-700 group-hover:text-white transition-colors"
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
        </div>
      </section>

      <Footer />
    </main>
  )
}


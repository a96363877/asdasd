import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useCart } from "@/contexts/cart-context"

export default function ProductsPage() {
  const {addItem}=useCart()
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[300px]">
        <Image src="/placeholder.svg?height=300&width=1200" alt="منتجاتنا" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">منتجاتنا</h1>
          <p className="text-white text-lg max-w-xl">
            استكشف تشكيلتنا الواسعة من اللحوم الطازجة والمنتجات عالية الجودة
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" className="border-gray-300">
                جميع المنتجات
              </Button>
              <Button variant="outline" className="border-gray-300">
                لحوم بقري
              </Button>
              <Button variant="outline" className="border-gray-300">
                لحوم غنم
              </Button>
              <Button variant="outline" className="border-gray-300">
                دواجن
              </Button>
              <Button variant="outline" className="border-gray-300">
                قطع الدجاج
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">ترتيب حسب:</span>
              <Button variant="outline" className="border-gray-300 flex items-center">
                الأكثر مبيعاً
                <ChevronDown className="mr-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id} className="group">
                <div className="bg-white rounded-lg overflow-hidden badgedow-sm group-hover:badgedow-md transition-badgedow">
                  <div className=" h-50">
                    <img
                      src={product.img || "/placeholder.svg"}
                      alt={product.name}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                      <Badge className="absolute top-3 right-3 bg-red-500 text-white">خصم 12%</Badge>
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
                            className={`h-4 w-4 ${i < product.rate ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                          />
                        ))}
                      <span className="text-xs text-gray-500 mr-1">({product.feedback})</span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2 text-lg group-hover:text-green-700 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <div>
                        {product.price && (
                          <span className="text-sm line-through text-gray-500 block">{product.price}</span>
                        )}
                        <span className="font-bold text-green-700 text-lg">{(parseInt(product.price)*.12).toFixed(2)+" درهم"}</span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={()=>addItem(product as any)}
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

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center gap-1">
              <Button variant="outline" size="icon" className="border-gray-300" disabled>
                &lt;
              </Button>
              <Button variant="outline" size="sm" className="border-gray-300 bg-green-700 text-white">
                1
              </Button>
              <Button variant="outline" size="sm" className="border-gray-300">
                2
              </Button>
           
            
              <Button variant="outline" size="icon" className="border-gray-300">
                &gt;
              </Button>
            </nav>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

// Sample products data
const products = [
  {
    id: 1,
    name: "أفخاذ الدجاج (500 جرام)",
    price: "30.00 ",
    img: "https://altaazej.ae/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-28-at-7.12.39-PM-300x300.jpeg.webp",
    rate: 4,
    feedback: 20,
    badge: null,
  },
  {
    id: 2,
    name: "فيليه الدجاج (500 جرام)",
    price: "35.00 ",
    img: "https://cdn.salla.sa/PbZgg/LbF92kmdzOMf174kf0SZFKf5ZyftBJb3ijRi9U5m.jpg",
    rate: 5,
    feedback: 25,
    badge: "الأكثر مبيعاً",
  },
  {
    id: 3,
    name: "فخذ دجاج كامل (500 جرام)",
    price: "32.00 ",
    img: "https://altaazej.ae/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-28-at-7.12.39-PM-300x300.jpeg.webp",
    rate: 4,
    feedback: 18,
    badge: null,
  },
  {
    id: 4,
    name: "أوراك الدجاج",
    price: "28.00 ",
    img: "https://altaazej.ae/wp-content/uploads/2022/08/Untitled-9-01-copy-600x600.jpg.webp",
    rate: 3,
    feedback: 15,
    badge: null,
  },
  {
    id: 5,
    name: "أجنحة الدجاج (500 جرام)",
    price: "25.00 ",
    img: "https://altaazej.ae/wp-content/uploads/2022/03/Wings-768x768-copy-1-600x600.jpg",
    rate: 4,
    feedback: 30,
    badge: null,
  },
  {
    id: 6,
    name: "كبد الدجاج (500 جرام)",
    price: "20.00 ",
    img: "https://altaazej.ae/wp-content/uploads/2022/08/Chicken-Drum-stick-600x600.jpg.webp",
    rate: 4,
    feedback: 22,
    badge: null,
  },
 
  {
    id: 8,
    name: "دجاج مخلي من العظم",
    price: "40.00 ",
    img: "/https://cdn.salla.sa/PbZgg/LbF92kmdzOMf174kf0SZFKf5ZyftBJb3ijRi9U5m.jpg",
    rate: 5,
    feedback: 35,
    badge: "جديد",
  },
  {
    id: 9,
    name: "القوانص الدجاج",
    price: "22.00 ",
    img: "https://img.ananinja.com/media/ninja-catalog-42/a54510c5-d209-44e7-a115-df88213d5f48_6287007090270-FreshChickenGizzards350gm.png",
    rate: 3,
    feedback: 12,
    badge: null,
  },
  {
    id: 10,
    name: "دجاج لولي بوب",
    price: "38.00 ",
    img: "https://altaazej.ae/wp-content/uploads/2022/08/lollipop-300x300.jpg.webp",
    rate: 5,
    feedback: 28,
    badge: "الأكثر مبيعاً",
  },
  {
    id: 11,
    name: "حزم العائلة",
    price: "100.00 ",
    img: "https://altaazej.ae/wp-content/uploads/2022/04/Family-Package-600x600.jpg.webp",
    rate: 5,
    feedback: 50,
    badge: "عرض خاص",
  }
];


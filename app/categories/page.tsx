import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="relative h-[300px]">
        <Image
          src="/placeholder.svg?height=300&width=1200"
          alt="تصنيفات المنتجات"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">تصنيفات المنتجات</h1>
          <p className="text-white text-lg max-w-xl">
            استكشف مجموعاتنا المختلفة من المنتجات المصنفة بعناية لتسهيل تجربة التسوق
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                href={`/category/${category.slug}`}
                key={category.id}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-60">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <h2 className="text-2xl font-bold text-white mb-1">{category.name}</h2>
                    <p className="text-white/80 mb-3">{category.description}</p>
                    <div className="flex items-center text-white/90 group-hover:text-green-400 transition-colors">
                      <span className="text-sm font-medium">تصفح المنتجات</span>
                      <ChevronLeft className="h-4 w-4" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium text-gray-800">{category.itemCount} منتج</span>
                    {category.discount && (
                      <span className="bg-red-100 text-red-700 text-sm py-1 px-2 rounded-full">
                        خصم حتى {category.discount}%
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600">{category.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">تصنيفات أخرى</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {additionalCategories.map((category) => (
              <Link
                href={`/category/${category.slug}`}
                key={category.id}
                className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
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

    </main>
  )
}

// Sample categories data
const categories = [
  {
    id: 1,
    name: "لحوم بقري",
    slug: "beef",
    description: "أجود أنواع اللحوم البقرية الطازجة بمختلف القطعيات",
    shortDescription: "تشكيلة متنوعة من اللحوم البقرية الطازجة عالية الجودة",
    image: "/placeholder.svg?height=300&width=500",
    itemCount: 24,
    discount: 15,
  },
  {
    id: 2,
    name: "لحوم غنم",
    slug: "lamb",
    description: "لحوم الغنم والخروف الطازجة بجميع أنواعها",
    shortDescription: "لحوم الغنم والخروف الطازجة المذبوحة على الطريقة الإسلامية",
    image: "/placeholder.svg?height=300&width=500",
    itemCount: 18,
    discount: 10,
  },
  {
    id: 3,
    name: "دواجن",
    slug: "poultry",
    description: "تشكيلة من الدجاج الطازج والديك الرومي",
    shortDescription: "دجاج طازج كامل، أفخاذ، صدور، وأجنحة من أفضل المزارع",
    image: "/placeholder.svg?height=300&width=500",
    itemCount: 15,
    discount: null,
  },
  {
    id: 4,
    name: "أسماك",
    slug: "fish",
    description: "أسماك طازجة من البحر إلى مائدتك",
    shortDescription: "أسماك طازجة من مياه الخليج العربي والمحيط الهندي",
    image: "/placeholder.svg?height=300&width=500",
    itemCount: 12,
    discount: null,
  },
  {
    id: 5,
    name: "مجمدات",
    slug: "frozen",
    description: "منتجات مجمدة متنوعة للاحتفاظ بها لوقت الحاجة",
    shortDescription: "منتجات مجمدة عالية الجودة محفوظة بطرق صحية",
    image: "/placeholder.svg?height=300&width=500",
    itemCount: 20,
    discount: 20,
  },
  {
    id: 6,
    name: "منتجات جاهزة",
    slug: "ready",
    description: "وجبات ومنتجات جاهزة لتوفير الوقت والجهد",
    shortDescription: "برجر، كباب، وشاورما جاهزة للطهي بأسرع وقت",
    image: "/placeholder.svg?height=300&width=500",
    itemCount: 16,
    discount: null,
  },
]

// Additional categories
const additionalCategories = [
  { id: 7, name: "توابل وبهارات", slug: "spices", icon: "/placeholder.svg?height=40&width=40" },
  { id: 8, name: "خضروات", slug: "vegetables", icon: "/placeholder.svg?height=40&width=40" },
  { id: 9, name: "فواكه", slug: "fruits", icon: "/placeholder.svg?height=40&width=40" },
  { id: 10, name: "منتجات ألبان", slug: "dairy", icon: "/placeholder.svg?height=40&width=40" },
  { id: 11, name: "مكسرات", slug: "nuts", icon: "/placeholder.svg?height=40&width=40" },
  { id: 12, name: "عسل وزيوت", slug: "honey-oils", icon: "/placeholder.svg?height=40&width=40" },
]


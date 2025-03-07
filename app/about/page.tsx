import Image from "next/image"
import { Award, Clock, ShieldCheck, Users } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[300px]">
        <Image src="/placeholder.svg?height=300&width=1200" alt="من نحن" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">من نحن</h1>
          <p className="text-white text-lg max-w-xl">
            تعرف على قصتنا وكيف بدأنا في تقديم أفضل اللحوم الطازجة في الإمارات العربية المتحدة
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">قصتنا</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              تأسست شركة "الطازج" للحوم في عام 2005 على يد مجموعة من الخبراء المتخصصين في مجال اللحوم الطازجة والمنتجات
              الغذائية عالية الجودة. بدأنا كمتجر صغير في قلب دبي، وبفضل التزامنا بالجودة العالية والخدمة المتميزة، نمت
              أعمالنا بسرعة لتشمل العديد من الفروع في جميع أنحاء الإمارات العربية المتحدة.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              نحن نؤمن بأن الطعام الجيد يبدأ بمكونات طازجة وعالية الجودة، ولذلك نختار بعناية أفضل اللحوم والدواجن
              والأسماك من مصادر موثوقة وملتزمة بأعلى معايير الإنتاج والسلامة. كل منتج نقدمه يمر بفحوصات جودة صارمة لضمان
              وصول أفضل المنتجات إلى مائدتك.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="فريق الطازج" fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">رؤيتنا</h3>
              <p className="text-gray-700 mb-6">
                نسعى لأن نكون الخيار الأول للمستهلكين في الإمارات العربية المتحدة عندما يتعلق الأمر باللحوم الطازجة
                والمنتجات الغذائية عالية الجودة، مع الالتزام بالمعايير الإسلامية والصحية.
              </p>

              <h3 className="text-2xl font-bold mb-4">مهمتنا</h3>
              <p className="text-gray-700 mb-6">
                توفير منتجات طازجة وصحية بأسعار معقولة، مع ضمان تجربة تسوق سهلة وممتعة لعملائنا، والالتزام بالمسؤولية
                الاجتماعية والبيئية في جميع جوانب عملنا.
              </p>

              <h3 className="text-2xl font-bold mb-4">قيمنا</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 p-1 rounded-full mr-2 mt-1">✓</span>
                  <span>
                    <strong>الجودة:</strong> نلتزم بتقديم أعلى معايير الجودة في كل منتج نقدمه.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 p-1 rounded-full mr-2 mt-1">✓</span>
                  <span>
                    <strong>النزاهة:</strong> نتعامل بصدق وشفافية مع عملائنا وموردينا وموظفينا.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 p-1 rounded-full mr-2 mt-1">✓</span>
                  <span>
                    <strong>الابتكار:</strong> نسعى دائماً لتطوير منتجاتنا وخدماتنا لتلبية احتياجات عملائنا المتغيرة.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 p-1 rounded-full mr-2 mt-1">✓</span>
                  <span>
                    <strong>المسؤولية:</strong> نلتزم بالمسؤولية تجاه المجتمع والبيئة في كل ما نقوم به.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">لماذا تختار الطازج؟</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="font-bold text-xl mb-2">جودة عالية</h3>
              <p className="text-gray-700">نختار بعناية أفضل اللحوم من مصادر موثوقة ونضمن طزاجتها وجودتها العالية.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="font-bold text-xl mb-2">ذبح حلال</h3>
              <p className="text-gray-700">جميع منتجاتنا حلال ومذبوحة على الطريقة الإسلامية وفقاً للشريعة الإسلامية.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="font-bold text-xl mb-2">طازج يومياً</h3>
              <p className="text-gray-700">نستلم منتجاتنا يومياً ونضمن وصولها إليك في أفضل حالة وأقصى درجات الطزاجة.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="font-bold text-xl mb-2">خدمة متميزة</h3>
              <p className="text-gray-700">فريق خدمة العملاء لدينا متواجد دائماً لمساعدتك وتقديم أفضل تجربة ممكنة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">فريقنا</h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-green-700 mb-2">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">شهاداتنا واعتماداتنا</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-4">
              <div className="bg-white/10 p-6 rounded-lg h-full flex flex-col items-center justify-center">
                <Image src="/placeholder.svg?height=80&width=80" alt="شهادة حلال" width={80} height={80} />
                <h3 className="font-bold mt-4">شهادة الذبح الحلال</h3>
              </div>
            </div>

            <div className="p-4">
              <div className="bg-white/10 p-6 rounded-lg h-full flex flex-col items-center justify-center">
                <Image src="/placeholder.svg?height=80&width=80" alt="شهادة الجودة" width={80} height={80} />
                <h3 className="font-bold mt-4">شهادة الآيزو 22000</h3>
              </div>
            </div>

            <div className="p-4">
              <div className="bg-white/10 p-6 rounded-lg h-full flex flex-col items-center justify-center">
                <Image src="/placeholder.svg?height=80&width=80" alt="شهادة HACCP" width={80} height={80} />
                <h3 className="font-bold mt-4">شهادة HACCP</h3>
              </div>
            </div>

            <div className="p-4">
              <div className="bg-white/10 p-6 rounded-lg h-full flex flex-col items-center justify-center">
                <Image src="/placeholder.svg?height=80&width=80" alt="جائزة الغذاء" width={80} height={80} />
                <h3 className="font-bold mt-4">جائزة أفضل متجر للحوم</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

// Sample team data
const team = [
  {
    id: 1,
    name: "أحمد المهيري",
    position: "المؤسس والرئيس التنفيذي",
    bio: "خبرة 20 عاماً في صناعة اللحوم والمنتجات الغذائية",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "محمد السويدي",
    position: "مدير العمليات",
    bio: "متخصص في إدارة سلاسل التوريد وضمان الجودة",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "سارة الهاشمي",
    position: "رئيس قسم الجودة",
    bio: "حاصلة على شهادات متخصصة في مراقبة جودة الأغذية",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "خالد العتيبي",
    position: "كبير الجزارين",
    bio: "خبرة 15 عاماً في تقطيع وتجهيز اللحوم بمختلف أنواعها",
    image: "/placeholder.svg?height=300&width=300",
  },
]


import { Phone, MapPin, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-green-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">اتصل بنا</h1>
          <p className="text-white/90 text-lg max-w-xl mx-auto">
            نحن هنا للإجابة على استفساراتك ومساعدتك في أي وقت. تواصل معنا عبر أي من قنوات الاتصال المتاحة
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">أرسل لنا رسالة</h2>

              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">الاسم</Label>
                    <Input id="name" placeholder="الاسم الكامل" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input id="email" type="email" placeholder="example@example.com" className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">رقم الهاتف</Label>
                  <Input id="phone" placeholder="05xxxxxxxx" className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="subject">الموضوع</Label>
                  <Input id="subject" placeholder="موضوع الرسالة" className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="message">الرسالة</Label>
                  <Textarea id="message" placeholder="اكتب رسالتك هنا..." className="mt-1 h-32" />
                </div>

                <Button className="bg-green-700 hover:bg-green-800 w-full py-6">
                  <Send className="h-4 w-4 ml-2" />
                  إرسال الرسالة
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">معلومات الاتصال</h2>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-3">
                      <Phone className="h-5 w-5 text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">الهاتف</h3>
                      <p className="text-gray-700">+971 4 123 4567</p>
                      <p className="text-gray-700">+971 50 765 4321</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-3">
                      <Mail className="h-5 w-5 text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">البريد الإلكتروني</h3>
                      <p className="text-gray-700">info@altaazej.ae</p>
                      <p className="text-gray-700">support@altaazej.ae</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-3">
                      <MapPin className="h-5 w-5 text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">العنوان</h3>
                      <p className="text-gray-700">
                        شارع الشيخ زايد، برج الفهيم 1، الطابق 15، دبي، الإمارات العربية المتحدة
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-3">
                      <Clock className="h-5 w-5 text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">ساعات العمل</h3>
                      <p className="text-gray-700">السبت - الخميس: 8:00 صباحاً - 10:00 مساءً</p>
                      <p className="text-gray-700">الجمعة: 2:00 ظهراً - 10:00 مساءً</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">فروعنا</h2>

                <div className="space-y-4">
                  {branches.map((branch, index) => (
                    <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                      <h3 className="font-medium text-gray-900 mb-1">{branch.name}</h3>
                      <p className="text-gray-700 mb-1">{branch.address}</p>
                      <p className="text-gray-700">{branch.phone}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">موقعنا على الخريطة</h2>

          <div className="bg-gray-200 rounded-lg h-[400px] flex items-center justify-center">
            <p className="text-gray-600">خريطة جوجل - سيتم تحميلها هنا</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">الأسئلة الشائعة</h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}

// Sample data
const branches = [
  {
    name: "الفرع الرئيسي - دبي",
    address: "شارع الشيخ زايد، برج الفهيم 1، الطابق 15، دبي",
    phone: "+971 4 123 4567",
  },
  {
    name: "فرع أبوظبي",
    address: "شارع الكورنيش، برج المرجان، الطابق الأرضي، أبوظبي",
    phone: "+971 2 765 4321",
  },
  {
    name: "فرع الشارقة",
    address: "المجاز 3، شارع الخان، مركز الزاهية، الشارقة",
    phone: "+971 6 543 2109",
  },
]

const faqs = [
  {
    question: "ما هي مواعيد التوصيل؟",
    answer:
      "نقدم خدمة التوصيل يومياً من الساعة 9 صباحاً حتى 9 مساءً. يمكن أن يستغرق التوصيل من ساعة إلى 3 ساعات حسب المنطقة وحالة الازدحام.",
  },
  {
    question: "هل جميع منتجاتكم حلال؟",
    answer: "نعم، جميع منتجاتنا حلال 100% ومذبوحة على الطريقة الإسلامية وتخضع لرقابة الجهات المختصة.",
  },
  {
    question: "هل يمكنني إرجاع منتج إذا لم أكن راضياً عنه؟",
    answer:
      "نعم، نقدم ضمان استبدال أو استرداد في حال كان المنتج غير مطابق للمواصفات أو جودته غير مرضية. يرجى الاتصال بخدمة العملاء خلال 24 ساعة من استلام الطلب.",
  },
  {
    question: "ما هي طرق الدفع المتاحة؟",
    answer: "نقبل الدفع بالبطاقات الائتمانية، البطاقات المصرفية، والدفع عند الاستلام في جميع مناطق التوصيل.",
  },
  {
    question: "هل هناك حد أدنى للطلب؟",
    answer:
      "نعم، الحد الأدنى للطلب هو 50 درهم. للاستفادة من خدمة التوصيل المجاني، يجب أن تكون قيمة الطلب 100 درهم أو أكثر.",
  },
]


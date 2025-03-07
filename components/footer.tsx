import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-4">الطازج</h3>
            <p className="text-gray-200 mb-4">
              نقدم أفضل وأجود أنواع اللحوم الطازجة والمنتجات الغذائية بجودة عالية وأسعار مناسبة.
            </p>
            <div className="flex items-center space-x-4 space-x-reverse">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="bg-white/20 p-2 rounded-full hover:bg-white/30"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="bg-white/20 p-2 rounded-full hover:bg-white/30"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="bg-white/20 p-2 rounded-full hover:bg-white/30"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                className="bg-white/20 p-2 rounded-full hover:bg-white/30"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-200 hover:text-white">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-200 hover:text-white">
                  منتجاتنا
                </Link>
              </li>
              <li>
                <Link href="/offers" className="text-gray-200 hover:text-white">
                  العروض الخاصة
                </Link>
              </li>
              <li>
                <Link href="/recipes" className="text-gray-200 hover:text-white">
                  وصفات طبخ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-200 hover:text-white">
                  المدونة
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-200 hover:text-white">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">خدمة العملاء</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-gray-200 hover:text-white">
                  الأسئلة الشائعة
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-200 hover:text-white">
                  سياسة الشحن
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-200 hover:text-white">
                  سياسة الإرجاع
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-200 hover:text-white">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-200 hover:text-white">
                  الشروط والأحكام
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 ml-2 mt-0.5 flex-shrink-0" />
                <span>شارع الشيخ زايد، برج الفهيم 1، الطابق 15، دبي، الإمارات العربية المتحدة</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 ml-2 flex-shrink-0" />
                <span>+971 4 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 ml-2 flex-shrink-0" />
                <span>info@altaazej.ae</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">النشرة البريدية</h3>
            <div className="flex mt-2">
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="w-full px-3 py-2 text-gray-800 rounded-r-md focus:outline-none"
              />
              <Button className="rounded-l-md rounded-r-none bg-green-600 hover:bg-green-700">اشتراك</Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300 mb-4 md:mb-0">
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()} الطازج للحوم. تصميم وتطوير فريق الطازج.
          </p>
          <div className="flex space-x-4 space-x-reverse">
            <Link href="/terms" className="text-sm text-gray-300 hover:text-white">
              الشروط والأحكام
            </Link>
            <Link href="/privacy" className="text-sm text-gray-300 hover:text-white">
              سياسة الخصوصية
            </Link>
            <Link href="/sitemap" className="text-sm text-gray-300 hover:text-white">
              خريطة الموقع
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { CartProvider } from "@/contexts/cart-context"
import './globals.css'
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "الطازج - أفضل اللحوم الطازجة",
  description: "متجر الطازج للحوم الطازجة والمنتجات الغذائية عالية الجودة",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body >
        
        <CartProvider>
        <main className="min-h-screen bg-gray-50">
      <Header />
      {children}
      <Footer />
      </main>
      </CartProvider>
      </body>
    </html>
  )
}




import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { CartProvider } from "@/contexts/cart-context"
import './globals.css'

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
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}




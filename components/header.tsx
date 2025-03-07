'use client';

import Link from 'next/link';
import { ShoppingCart, User, Search, Heart, Menu } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/cart-context';
import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Header() {
  const { itemCount } = useCart();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-around py-4 px-4">
          <Link href="/" className="text-2xl font-bold text-green-800">
            الطازج
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
            <Link
              href="/"
              className="text-gray-700 hover:text-green-700 font-medium"
            >
              الرئيسية
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-green-700 font-medium"
            >
              المنتجات
            </Link>
            <Link
              href="/categories"
              className="text-gray-700 hover:text-green-700 font-medium"
            >
              التصنيفات
            </Link>
            <Link
              href="/offers"
              className="text-gray-700 hover:text-green-700 font-medium"
            >
              العروض
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-green-700 font-medium"
            >
              من نحن
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-green-700 font-medium"
            >
              اتصل بنا
            </Link>
          </nav>

          <div className="flex   items-center gap-4">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="text-gray-700 hover:text-green-700"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link
              href="/favorites"
              className="text-gray-700 hover:text-green-700"
            >
              <Heart className="h-5 w-5" />
            </Link>
            <Link
              href="/account"
              className="text-gray-700 hover:text-green-700"
            >
              <User className="h-5 w-5" />
            </Link>
            <Link
              href="/cart"
              className="relative text-gray-700 hover:text-green-700"
            >
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-green-700 text-white">
                  {itemCount}
                </Badge>
              )}
            </Link>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className=' '>
                <Button variant={'ghost'} size="icon" className="mr-auto md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link
                    href="/"
                    className="text-gray-800 hover:text-green-700 font-medium"
                  >
                    الرئيسية
                  </Link>
                  <Link
                    href="/products"
                    className="text-gray-800 hover:text-green-700 font-medium"
                  >
                    المنتجات
                  </Link>
                  <Link
                    href="/categories"
                    className="text-gray-800 hover:text-green-700 font-medium"
                  >
                    التصنيفات
                  </Link>
                  <Link
                    href="/offers"
                    className="text-gray-800 hover:text-green-700 font-medium"
                  >
                    العروض
                  </Link>
                  <Link
                    href="/about"
                    className="text-gray-800 hover:text-green-700 font-medium"
                  >
                    من نحن
                  </Link>
                  <Link
                    href="/contact"
                    className="text-gray-800 hover:text-green-700 font-medium"
                  >
                    اتصل بنا
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Search Bar */}
        {showSearch && (
          <div className="border-t py-3 px-4">
            <div className="relative">
              <Input
                type="search"
                placeholder="ابحث عن المنتجات..."
                className="pr-10"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

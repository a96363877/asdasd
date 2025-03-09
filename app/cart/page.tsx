"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/cart-context";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);

  // Shipping cost calculation
  const shippingCost = totalPrice! >= 100 ? 0 : 10;
  const formattedShippingCost = `${shippingCost.toFixed(2)} درهم`;
  
  // Total calculation
  const total = (totalPrice!) + shippingCost;
  const formattedTotal = `${total.toFixed(2)} درهم`;

  const handleRemoveItem = (id: number) => {
    removeItem(id);
  
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    updateQuantity(id, newQuantity);
  };

  const handleApplyCoupon = () => {
    if (!couponCode) return;
    
    setIsApplyingCoupon(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsApplyingCoupon(false);
     
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">سلة التسوق</h1>

        {items?.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="h-10 w-10 text-gray-400" />
            </div>
            <h2 className="text-xl font-bold mb-2">سلة التسوق فارغة</h2>
            <p className="text-gray-600 mb-6">لم تقم بإضافة أي منتجات إلى سلة التسوق بعد.</p>
            <Button className="bg-green-700 hover:bg-green-800">
              <Link href="/products">تصفح المنتجات</Link>
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {/* Cart Items */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-4 border-b">
                  <h2 className="font-bold text-lg">المنتجات ({items?.length})</h2>
                </div>

                <div className="divide-y">
                  {items?.map((item) => (
                    <div key={item?.id} className="p-4 md:p-6 flex flex-col md:flex-row md:items-center">
                      <div className="flex items-center flex-1 mb-4 md:mb-0">
                        <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                          <img 
                            src={item?.image || "/placeholder.svg"} 
                            alt={item?.name}
                            className="object-cover"
                          />
                        </div>
                        <div className="mr-4 flex-1">
                          <Button  className="font-bold text-gray-800 hover:text-green-700">
                            {item?.name}
                          </Button>
                          <div className="text-green-700 font-medium mt-1">{item?.formattedPrice}</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between md:w-1/3">
                        <div className="flex items-center border rounded-md">
                          <button 
                            className="px-3 py-1 border-l text-gray-500 hover:text-gray-700 disabled:opacity-50"
                            onClick={() => handleQuantityChange(item?.id, item?.quantity - 1)}
                            disabled={item?.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-4 py-1 font-medium">{item?.quantity}</span>
                          <button 
                            className="px-3 py-1 border-r text-gray-500 hover:text-gray-700"
                            onClick={() => handleQuantityChange(item?.id, item?.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <button 
                          className="text-red-500 hover:text-red-700 p-2"
                          onClick={() => handleRemoveItem(item?.id)}
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-gray-50 flex justify-between items-center">
                  <Button 
                    variant="outline" 
                    className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
                  >
                    <Link href="/" className="flex items-center">
                      <ArrowRight className="h-4 w-4 ml-2" />
                      متابعة التسوق
                    </Link>
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    onClick={() => {
                      items?.forEach(item => removeItem(item?.id));
                    }}
                  >
                    تفريغ السلة
                  </Button>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-4">ملخص الطلب</h2>
                
                {/* Coupon Code */}
                <div className="mb-6">
                  <div className="flex mb-2">
                    <input 
                      type="text" 
                      placeholder="كود الخصم"
                      className="flex-1 border rounded-r-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-700"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <Button 
                      className="rounded-l-md rounded-r-none bg-green-700 hover:bg-green-800"
                      onClick={handleApplyCoupon}
                      disabled={isApplyingCoupon || !couponCode}
                    >
                      {isApplyingCoupon ? "جاري التطبيق..." : "تطبيق"}
                    </Button>
                  </div>
                </div>
                
                {/* Order Details */}
                <div className="space-y-3 border-b pb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">المجموع الفرعي:</span>
                    <span className="font-medium">{totalPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">رسوم التوصيل:</span>
                    <span className="font-medium">
                      {shippingCost === 0 ? (
                        <span className="text-green-700">مجاني</span>
                      ) : (
                        formattedShippingCost
                      )}
                    </span>
                  </div>
                  {shippingCost > 0 && (
                    <div className="text-sm text-green-700">
                      أضف {(100 - totalPrice!).toFixed(2)} درهم للحصول على توصيل مجاني
                    </div>
                  )}
                </div>
                
                <div className="flex justify-between font-bold text-lg pt-4 mb-6">
                  <span>الإجمالي:</span>
                  <span className="text-green-700">{formattedTotal}</span>
                </div>
                
                <Button className="w-full bg-green-700 hover:bg-green-800 py-6 text-lg">
                  <Link href="/checkout/shipping">متابعة الشراء</Link>
                </Button>
                
                <div className="mt-4 text-sm text-gray-500 text-center">
                  بالضغط على "متابعة الشراء"، فإنك توافق على <Link href="/terms" className="text-green-700 hover:underline">الشروط والأحكام</Link> و <Link href="/privacy" className="text-green-700 hover:underline">سياسة الخصوصية</Link>.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}

// /Cart/page.tsx

"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "SanDisk SSD PLUS 1TB Internal SSD",
      description: "SATA III 6 Gb/s electronics",
      price: 109,
      quantity: 1,
      image: "/cart1.png",
    },
    {
      id: 2,
      title: "White Gold Plated Princess",
      description: "Elegant jewelry piece",
      price: 9.99,
      quantity: 2,
      image: "/cart2.jpeg",
    },
  ]);

  // Calculate total price
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 5.00;
  const tax = 3.75;
  const total = subtotal + shipping + tax;

  // Handle removing an item
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Handle changing item quantity
  const updateQuantity = (id: number, quantity: number) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  return (
    <div className="bg-gray-100 font-sans min-h-screen">
      <div className="container mx-auto p-6">
        {/* Heading */}
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

        {/* Cart Items */}
        <div className="bg-white shadow-md rounded-lg p-6">
          {cartItems.map(item => (
            <div key={item.id} className="flex flex-wrap items-center border-b pb-4 gap-4">
              <Image
                src={item.image}
                alt={item.title}
                className="rounded-md"
                width={100}
                height={50}
              />
              <div className="ml-0 sm:ml-4 flex-1">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
              <div className="flex items-center space-x-4 justify-between w-full sm:w-auto">
                {/* Quantity control */}
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  className="w-16 text-center border rounded-md"
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                />
                <p className="text-lg font-semibold">${item.price}</p>
                <button
                  className="text-red-500 hover:underline"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="mt-6 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
          <div className="flex justify-between mb-2">
            <p>Subtotal</p>
            <p className="font-semibold">${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>Shipping</p>
            <p className="font-semibold">${shipping.toFixed(2)}</p>
          </div>
          <div className="flex justify-between mb-4">
            <p>Tax</p>
            <p className="font-semibold">${tax.toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-lg font-bold">
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;

"use client";

import React, { useEffect, useState } from "react";
import Looding from "../components/Looding";
import Link from "next/link";
import Image from "next/image";

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductCard: React.FC<{ product: IProduct }> = ({ product }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-xl bg-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="relative w-full h-60">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.image}
            alt={product.title}
            className="absolute inset-0 w-full h-full object-contain bg-gray-100"
            aria-label={`Image of ${product.title}`}
          />
        </Link>
      </div>
      <div className="p-5 flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
        <p className="text-sm text-gray-600">
          {product.description.length > 100
            ? `${product.description.slice(0, 100)}...`
            : product.description}
        </p>
        <p className="text-base font-semibold text-gray-900">
          Price: <span className="text-red-600">${product.price}</span>
        </p>
        <div className="flex items-center gap-2 text-sm text-yellow-500">
          <span>⭐ {product.rating.rate}</span>
          <span className="text-gray-500">({product.rating.count} reviews)</span>
        </div>
        <button
          className="mt-4 px-6 py-3 border rounded bg-blue-500 hover:bg-blue-600 text-white font-semibold transition"
          aria-label={`Add ${product.title} to cart`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const Clientside = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const products = await response.json();
        setData(products);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
        <Looding />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-red-600">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-center items-center font-bold text-3xl my-8 py-4 bg-blue-500 text-white rounded-lg shadow-md">
        Product Store
      </div>
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Clientside;

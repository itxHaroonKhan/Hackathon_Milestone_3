"use client";  // Add this line

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const productData: Product = await response.json();
      setProduct(productData);
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <p className="text-center text-xl font-semibold text-gray-500">Loading...</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tl from-gray-100 via-white to-gray-200">
      <div className="p-8 max-w-6xl mx-auto bg-white shadow-lg rounded-2xl flex flex-col lg:flex-row items-center gap-10">
        <div className="relative w-full h-[400px] lg:w-[450px]">
          <Image
            src={product.image}
            alt={product.title}
            layout="fill"
            objectFit="contain"
            className="rounded-xl shadow-2xl transform transition duration-300 hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-start max-w-md text-center lg:text-left">
          <h1 className="text-4xl font-extrabold text-gray-800">{product.title}</h1>
          <p className="text-lg text-gray-500 mt-4">{product.description}</p>
          <div className="flex items-center justify-center lg:justify-start gap-2 text-yellow-400 mt-4">
            <p className="font-semibold">Rating:</p>
            <p>{product.rating.rate}</p>
            <p className="text-gray-500">(Count: {product.rating.count})</p>
          </div>
          <p className="text-3xl font-semibold text-red-500 mt-6">Price: ${product.price}</p>
          <div className="mt-8">
            <Link href={"/Cart"}>
              <button className="w-full py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md transform transition-all duration-200 hover:scale-105">
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

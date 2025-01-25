import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          {/* Text Section */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4  text-gray-900 font-bold">
              Find Your Perfect Fit
              <br className="hidden lg:inline-block" />
              Stylish Pants & Shirts for Every Occasion
            </h1>
            <p className="mb-8 leading-relaxed">
              Looking for the latest trends in pants and shirts? Our collection offers a wide variety of styles for every occasion, from casual outings to formal events. Get the best deals on comfortable, fashionable clothing today!
            </p>
            <div className="flex items-center">
              <div className="inline-block align-bottom mr-5">
                <span className="text-2xl leading-none align-baseline">$</span>
                <span className="font-bold text-5xl leading-none align-baseline">59</span>
                <span className="text-2xl leading-none align-baseline">.99</span>
              </div>
              <div className="inline-block align-bottom">
                <Link href="/Client-Side">
                  <button className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold flex items-center">
                    <i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Product Image Section */}
          <div className="md:w-1/2 flex items-center justify-center">
            <div className="relative w-full">
              <Image
                src="https://pngimg.com/uploads/raincoat/raincoat_PNG53.png"
                className="w-[500px] relative z-10"
                alt="Waterproof Jacket"
                width={500}
                height={500}
                priority
              />
              <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;

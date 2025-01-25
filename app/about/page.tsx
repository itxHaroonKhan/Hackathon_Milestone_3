import Image from 'next/image';

const About = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white body-font py-32">
      <div className="container mx-auto px-6 flex items-center justify-center flex-col">
        {/* Using Next.js Image component for optimization */}
        <div className="relative mb-12 w-36 h-36">
          <Image
            className="rounded-full shadow-2xl"
            src="https://i.pinimg.com/736x/d9/85/1d/d9851d0f0206d44da268049b74c5dcc8.jpg" // Replace with your image URL
            alt="Profile"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-5xl text-4xl font-extrabold mb-6 leading-tight text-white tracking-wide">
           Haroon Rasheed
          </h1>
          <p className="mb-8 text-lg text-gray-200 leading-relaxed">
            Hello! I am  Haroon Rasheed  a passionate Web Developer based in Tando Adam.
            I specialize in frontend development with expertise in ReactJS, Next.js and
            TypeScript. Currently I am learning backend technologies such as  Python
            and SQL   aiming to become a Full Stack Developer.
          </p>
          <p className="mb-8 text-lg text-gray-200 leading-relaxed">
            Apart from web development I am also exploring the power of AI  Web 3.0 and
            working on personal projects to build my skills further. I believe in continuous
            growth and enjoy tackling new challenges. If you are looking for a dedicated developer
            to bring your ideas to life feel free to reach out!
          </p>
          <div className="flex justify-center gap-6">
            <button className="inline-flex text-white bg-indigo-700 hover:bg-indigo-800 py-3 px-8 rounded-lg text-xl font-semibold shadow-lg transform hover:scale-110 transition-all duration-300 ease-in-out">
              Learn More
            </button>
            <button className="inline-flex text-gray-700 bg-gray-100 hover:bg-gray-200 py-3 px-8 rounded-lg text-xl font-semibold shadow-lg transform hover:scale-110 transition-all duration-300 ease-in-out">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

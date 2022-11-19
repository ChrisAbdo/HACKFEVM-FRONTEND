import React from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper";
const LandingPage = () => {
  return (
    <div className="">
      <div className="hero mt-12">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-6xl font-bold text-black">
              Issue soulbound credentials
            </h1>
            <h1 className="text-3xl text-black font-semibold mt-2">
              with provably stored metadata, powered by FVM
            </h1>

            <a
              href="#_"
              className="relative inline-block px-4 py-2 font-medium group mt-4 w-[200px] mx-auto"
            >
              <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#bff22d] border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#bff22d]"></span>
              <span className="relative text-black">Create a credential</span>
            </a>
          </div>
        </div>
      </div>

      {/* make a section of 5 components, each with a title, description, and image. make them stack on top of each other in small screen */}
      <div className="mt-12">
        <h1 className="text-xl font-semibold text-black ml-8">
          Featured Credentials
        </h1>
        <Swiper
          slidesPerView={4.5}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <div className="py-12 px-12 grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4  bg-white border-t-[2px] border-b-[2px] border-[#f2dbd0]">
            <SwiperSlide>
              <div className="col-span-1">
                <div className="flex flex-col items-center">
                  <Image src="/loading.png" width={200} height={200} alt="yo" />
                  <h1 className="text-2xl font-bold text-black mt-4">
                    Dev Bootcamp
                  </h1>
                  <p className="text-center text-black mt-2 font-semibold">
                    Completed
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-span-1">
                <div className="flex flex-col items-center">
                  <Image src="/loading.png" width={200} height={200} alt="yo" />
                  <h1 className="text-2xl font-bold text-black mt-4">
                    Dev Bootcamp
                  </h1>
                  <p className="text-center text-black mt-2 font-semibold">
                    Completed
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-span-1">
                <div className="flex flex-col items-center">
                  <Image src="/loading.png" width={200} height={200} alt="yo" />
                  <h1 className="text-2xl font-bold text-black mt-4">
                    Dev Bootcamp
                  </h1>
                  <p className="text-center text-black mt-2 font-semibold">
                    Completed
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-span-1">
                <div className="flex flex-col items-center">
                  <Image src="/loading.png" width={200} height={200} alt="yo" />
                  <h1 className="text-2xl font-bold text-black mt-4">
                    Dev Bootcamp
                  </h1>
                  <p className="text-center text-black mt-2 font-semibold">
                    Completed
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-span-1">
                <div className="flex flex-col items-center">
                  <Image src="/loading.png" width={200} height={200} alt="yo" />
                  <h1 className="text-2xl font-bold text-black mt-4">
                    Dev Bootcamp
                  </h1>
                  <p className="text-center text-black mt-2 font-semibold">
                    Completed
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              place holder to make the footer smaller lol
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <a
              href="#_"
              className="relative inline-block px-4 py-2 font-medium group mt-4 w-[200px] mx-auto"
            >
              <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#bff22d] border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#bff22d]"></span>
              <span className="relative text-black">Get started</span>
            </a>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              place holder to make the footer smaller lol (does not have to be
              like this can be anything)
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <a
              href="#_"
              className="relative inline-block px-4 py-2 font-medium group mt-4 w-[200px] mx-auto"
            >
              <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#bff22d] border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#bff22d]"></span>
              <span className="relative text-black">Get started</span>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;

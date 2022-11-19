import React from "react";
import Image from "next/image";
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
      <div className=" flex flex-col">
        <div className="hero mt-24 ">
          <div className="mt-12 hero-content text-center">
            <div>
              <h1 className="text-6xl  text-black">
                Issue soulbound credentials
              </h1>
              <h1 className="text-3xl text-black mt-2">
                with provably stored metadata, powered by FVM
              </h1>

              <a
                href="/create"
                className="relative inline-block px-4 py-2 font-medium group mt-4 w-[200px] mx-auto"
              >
                <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#bff22d] border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#bff22d]"></span>
                <span className="relative text-lg text-black">
                  Create a credential
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 mb-72">
          <div className="mb-24 ">
            <h1 className="text-2xl text-black ml-8">Featured Credentials</h1>
            <Swiper
              slidesPerView={5}
              spaceBetween={30}
              freeMode={true}
              modules={[FreeMode, Pagination]}
              className="mySwiper bg-white mt-2 border-t-[2px] border-b-[2px] border-[#f2dbd0] cursor-grab"
            >
              <div className="py-12 px-12 grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-2">
                <div className="mt-4">
                  <SwiperSlide className="pt-12 pl-12 pb-12">
                    <div className="col-span-1">
                      <div className="flex flex-col items-center">
                        <Image
                          src="/alchemy.png"
                          width={200}
                          height={200}
                          alt="yo"
                        />
                        <h1 className="text-xl  text-black mt-4">
                          Dev Bootcamp by Alchemy
                        </h1>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="pt-12 pl-12 pb-12">
                    <div className="col-span-1">
                      <div className="flex flex-col items-center">
                        <Image
                          src="/chain.png"
                          width={200}
                          height={200}
                          alt="yo"
                        />
                        <h1 className="text-xl  text-black mt-4">
                          FVM Fellowship: Cohort 1 by Radius
                        </h1>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="pt-12 pl-12 pb-12">
                    <div className="col-span-1">
                      <div className="flex flex-col items-center">
                        <Image
                          src="/block.png"
                          width={200}
                          height={200}
                          alt="yo"
                        />
                        <h1 className="text-xl  text-black mt-4">
                          HackFEVM hacker by ETHGlobal
                        </h1>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="pt-12 pl-12 pb-12">
                    <div className="col-span-1">
                      <div className="flex flex-col items-center">
                        <Image
                          src="/ethny.png"
                          width={200}
                          height={200}
                          alt="yo"
                        />
                        <h1 className="text-xl text-black mt-4">
                          ETHNYC hacker by ETHGlobal
                        </h1>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="pt-12 pl-12 pb-12">
                    <div className="col-span-1">
                      <div className="flex flex-col items-center">
                        <Image
                          src="/unicorn.png"
                          width={200}
                          height={200}
                          alt="yo"
                        />
                        <h1 className="text-xl  text-black mt-4">
                          Devcon VI by ETH Foundation
                        </h1>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="pt-12 pl-12 pb-12">
                    <div className="col-span-1">
                      <div className="flex flex-col items-center">
                        <Image
                          src="/loading.png"
                          width={200}
                          height={200}
                          alt="yo"
                        />
                        <h1 className="text-xl text-black mt-4">placeholder</h1>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="pt-12 pl-12 pb-12">
                    <div className="col-span-1">
                      <div className="flex flex-col items-center">
                        <Image
                          src="/loading.png"
                          width={200}
                          height={200}
                          alt="yo"
                        />
                        <h1 className="text-xl text-black mt-4">plceholder</h1>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

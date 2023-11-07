import React from "react";
import AiBot from "@/assets/images/0newHR/images/signin/aibot.svg";
import Image from "next/image";
import circle from '@/assets/images/0newHR/images/signin/circle.svg'
import person1 from '@/assets/images/0newHR/images/signin/person1.png'
import person2 from '@/assets/images/0newHR/images/signin/person2.png'
import person3 from '@/assets/images/0newHR/images/signin/person3.png'
import person4 from '@/assets/images/0newHR/images/signin/person4.png'
import threelines from '@/assets/images/0newHR/images/signin/threelines.svg'

const Signin = () => {
  return (
    <div className="flex h-screen">
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <h2 className="text-3xl font-extrabold absolute top-16 left-16">
            NoHR.ai
          </h2>
          <div>
            <div className="mt-6 relative">
              <h2 className=" text-3xl font-bold tracking-tight text-gray-900">
                Sign in to your account
              </h2>
              <Image 
                src={circle} 
                alt="" 
                width={155} 
                height={75}
                className="absolute left-[184px] -top-3"
              />
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Or{" "}
              <a
                href="#"
                className="font-medium text-green-600 hover:text-green-500"
              >
                start your 14-day free trial
              </a>
            </p>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                    />
                  </div>
                </div>

                <button className="w-[129px] h-[52px] px-6 py-3.5 bg-green-600 rounded-[100px] justify-center items-center gap-2 inline-flex">
                  <div className="text-center text-white text-base font-medium">
                    Sign In
                  </div>
                </button>
              </form>
            </div>
            <div>
              <div className="relative my-6">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">
                    Or Signin with
                  </span>
                </div>
              </div>
              <div>
                <div className="w-96 h-12 justify-start items-start gap-4 inline-flex">
                  <button className="grow shrink basis-0 h-12 px-5 py-3.5 rounded-full border border-neutral-200 justify-center items-center gap-2.5 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_13_2038)">
                        <path
                          d="M23.8438 9.91355L14.0544 9.91309C13.6221 9.91309 13.2717 10.2634 13.2717 10.6957V13.823C13.2717 14.2552 13.6221 14.6056 14.0544 14.6056H19.5671C18.9635 16.1722 17.8368 17.4842 16.3993 18.3178L18.75 22.387C22.5207 20.2062 24.75 16.3799 24.75 12.0965C24.75 11.4866 24.705 11.0506 24.6151 10.5597C24.5468 10.1867 24.2229 9.91355 23.8438 9.91355Z"
                          fill="#167EE6"
                        />
                        <path
                          d="M12.75 19.3043C10.0522 19.3043 7.69699 17.8303 6.43207 15.649L2.36304 17.9944C4.43374 21.5832 8.31283 24 12.75 24C14.9268 24 16.9807 23.4139 18.75 22.3925V22.387L16.3994 18.3177C15.3242 18.9414 14.0799 19.3043 12.75 19.3043Z"
                          fill="#12B347"
                        />
                        <path
                          d="M18.75 22.3925V22.387L16.3994 18.3177C15.3241 18.9413 14.08 19.3043 12.75 19.3043V24C14.9267 24 16.9808 23.4139 18.75 22.3925Z"
                          fill="#0F993E"
                        />
                        <path
                          d="M5.44566 12C5.44566 10.6702 5.80856 9.42607 6.43205 8.3509L2.36302 6.00555C1.33603 7.76932 0.75 9.81766 0.75 12C0.75 14.1823 1.33603 16.2306 2.36302 17.9944L6.43205 15.6491C5.80856 14.5739 5.44566 13.3298 5.44566 12Z"
                          fill="#FFD500"
                        />
                        <path
                          d="M12.75 4.69566C14.5093 4.69566 16.1253 5.32078 17.3875 6.36061C17.6988 6.61711 18.1514 6.59859 18.4367 6.31336L20.6524 4.09758C20.9761 3.77395 20.953 3.24422 20.6073 2.94431C18.4925 1.10967 15.741 0 12.75 0C8.31283 0 4.43374 2.41673 2.36304 6.00558L6.43207 8.35092C7.69699 6.16969 10.0522 4.69566 12.75 4.69566Z"
                          fill="#FF4B26"
                        />
                        <path
                          d="M17.3874 6.36061C17.6988 6.61711 18.1515 6.59859 18.4366 6.31336L20.6524 4.09758C20.976 3.77395 20.9529 3.24422 20.6073 2.94431C18.4925 1.10963 15.741 0 12.75 0V4.69566C14.5092 4.69566 16.1252 5.32078 17.3874 6.36061Z"
                          fill="#D93F21"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_13_2038">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0.75)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="text-center text-black text-sm font-normal">
                      google
                    </div>
                  </button>
                  <button className="grow shrink basis-0 h-12 px-5 py-3.5 rounded-full border border-neutral-200 justify-center items-center gap-2.5 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_13_2048)">
                        <path
                          d="M21.4773 0H4.02273C2.21525 0 0.75 1.46525 0.75 3.27273V20.7273C0.75 22.5347 2.21525 24 4.02273 24H21.4773C23.2847 24 24.75 22.5347 24.75 20.7273V3.27273C24.75 1.46525 23.2847 0 21.4773 0Z"
                          fill="#0077B5"
                        />
                        <path
                          d="M9.39535 6.54545C9.39535 6.95001 9.27539 7.34547 9.05063 7.68185C8.82587 8.01822 8.50642 8.28039 8.13266 8.43521C7.7589 8.59002 7.34763 8.63053 6.95085 8.55161C6.55407 8.47268 6.18961 8.27787 5.90354 7.99181C5.61748 7.70575 5.42267 7.34128 5.34375 6.9445C5.26482 6.54772 5.30533 6.13645 5.46015 5.76269C5.61496 5.38894 5.87713 5.06948 6.21351 4.84472C6.54988 4.61996 6.94535 4.5 7.3499 4.5C7.89239 4.5 8.41266 4.7155 8.79625 5.0991C9.17985 5.4827 9.39535 6.00297 9.39535 6.54545Z"
                          fill="white"
                        />
                        <path
                          d="M8.93179 9.95454V18.9914C8.93215 19.058 8.91933 19.1241 8.89406 19.1858C8.8688 19.2475 8.83159 19.3036 8.78458 19.3509C8.73757 19.3981 8.68167 19.4356 8.62011 19.4612C8.55856 19.4868 8.49255 19.5 8.42588 19.5H6.26997C6.2033 19.5002 6.13726 19.4872 6.07563 19.4617C6.01401 19.4363 5.95801 19.399 5.91087 19.3518C5.86373 19.3047 5.82637 19.2487 5.80094 19.1871C5.77552 19.1254 5.76252 19.0594 5.7627 18.9927V9.95454C5.7627 9.82 5.81614 9.69097 5.91127 9.59584C6.00641 9.50071 6.13543 9.44727 6.26997 9.44727H8.42588C8.56018 9.44763 8.68886 9.50123 8.78369 9.59632C8.87853 9.69142 8.93179 9.82024 8.93179 9.95454Z"
                          fill="white"
                        />
                        <path
                          d="M20.2007 14.6591V19.0337C20.2009 19.095 20.189 19.1557 20.1656 19.2123C20.1422 19.269 20.1079 19.3205 20.0645 19.3638C20.0212 19.4072 19.9697 19.4415 19.9131 19.4649C19.8564 19.4883 19.7957 19.5002 19.7344 19.5H17.4162C17.3549 19.5002 17.2942 19.4883 17.2375 19.4649C17.1808 19.4415 17.1294 19.4072 17.086 19.3638C17.0427 19.3205 17.0083 19.269 16.985 19.2123C16.9616 19.1557 16.9497 19.095 16.9498 19.0337V14.7941C16.9498 14.1614 17.1353 12.0232 15.2957 12.0232C13.8707 12.0232 13.5803 13.4864 13.523 14.1437V19.0337C13.523 19.1562 13.4748 19.2738 13.3888 19.361C13.3028 19.4483 13.186 19.4982 13.0635 19.5H10.8244C10.7632 19.5 10.7026 19.488 10.6461 19.4645C10.5896 19.441 10.5383 19.4067 10.4951 19.3634C10.4519 19.32 10.4177 19.2686 10.3944 19.212C10.3711 19.1555 10.3592 19.0948 10.3594 19.0337V9.91503C10.3592 9.85385 10.3711 9.79324 10.3944 9.73666C10.4177 9.68009 10.4519 9.62867 10.4951 9.58534C10.5383 9.54202 10.5896 9.50765 10.6461 9.48419C10.7026 9.46074 10.7632 9.44867 10.8244 9.44867H13.0635C13.1872 9.44867 13.3058 9.4978 13.3932 9.58526C13.4807 9.67272 13.5298 9.79134 13.5298 9.91503V10.7032C14.0589 9.90957 14.843 9.2973 16.5162 9.2973C20.2226 9.2973 20.2007 12.7582 20.2007 14.6591Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_13_2048">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0.75)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="text-center text-black text-sm font-normal">
                      Linkedin
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block bg-gradient-to-l from-lime-700 to-yellow-100 ">
        <div className="bg-white/60 w-full h-full px-12 py-12 flex flex-col">
          <div className="w-full    items-start space-y-7   ">
            <div className="relative w-fit">
              <h3 className="text-black text-3xl font-normal w-full">
                Your AI recuitment assistant with
                <br />
                superhuman abilities
              </h3>
              <Image src={threelines} alt="" className="absolute -right-8 -top-3"/>
            </div>
            <div className="p-2.5 bg-green-800 rounded-md justify-start items-start gap-2.5 inline-flex">
              <div className="text-center text-white text-lg font-normal">
                Waitlist Now Open
              </div>
            </div>
          </div>

          <div className=" mt-4 justify-start items-center gap-[11px] inline-flex">
            <div className="w-3 h-3 bg-green-800 rounded-full" />
            <div className="text-black text-lg font-normal">
              Schedule interview on auto pilot
            </div>
          </div>
          <div className="h-full w-3/4 mx-auto  overflow-hidden relative ">

              <Image src={person1} alt="" className="absolute scale-75 top-2 left-10"/>
              <Image src={person3} alt="" className="absolute top-8 scale-75 right-8"/>
              <Image src={person2} alt="" className="absolute right-0 bottom-10 scale-75"/>
              <Image src={person4} alt="" className="absolute left-6 bottom-2 scale-75"/>
              <Image src={AiBot} alt="" width={250} className="absolute bottom-0 inset-x-0 left-1/2 -translate-x-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;

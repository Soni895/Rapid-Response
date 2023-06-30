import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="fixed w-screen">
        <header className="absolute inset-x-0 top-0 z-10 w-full">
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              <div className="flex-shrink-0">
                <a href="#" title="" className="flex bg-white px-5 py-3 rounded-full mt-3 ">
                  <img className="w-auto h-12" src="/logof.png" alt="" />
                </a>
              </div>

              <button
                type="button"
                className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
              >
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>

                <svg
                  className="hidden w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>

              <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
                <Link
                  href="/loginp"
                  title=""
                  className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Police
                </Link>

                <Link
                  href="/loginf"
                  title=""
                  className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Fire force{" "}
                </Link>

                <Link
                  href="/logina"
                  title=""
                  className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Ambulance{" "}
                </Link>

                <div className="w-px h-5 bg-black/20"></div>

                <Link
                  href="/login"
                  title=""
                  className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Log in{" "}
                </Link>

                <Link
                  href="/dashboard"
                  title=""
                  className="inline-flex items-center rounded-full justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-red-400 hover:text-white transition-all duration-200 focus:bg-black focus:text-white"
                  role="button"
                >
                  {" "}
                  Add Accident
                </Link>
              </div>
            </div>
          </div>
        </header>

        <section className="bg-red-50 overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
            <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
              <div className="absolute bottom-0 right-0 hidden lg:block">
                <img
                  className="object-contain w-auto h-48"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png"
                  alt=""
                />
              </div>

              <div className="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
                <h1 className="text-2xl font-body font-bold  text-black sm:text-6xl xl:text-6xl">
                  Rapid Responses For
                </h1>{" "}
                <h1 className="text-2xl mt-4 font-body font-bold  text-black sm:text-6xl xl:text-6xl">
                  Safer Communities
                </h1>
                <p className="mt-8 text-xl font-body text-black">
                  Building safer communities through education and preparation.
                  Protecting what matters most - you and your loved ones.{" "}
                </p>
                <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                  <Link
                    href="/dashboard"
                    title=""
                    className="inline-flex rounded-full items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600"
                    role="button"
                  >
                    {" "}
                    Add accident{" "}
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
              <div className="absolute inset-0">
                <img
                  className="object-cover w-full h-full scale-100"
                  src="/images/bg.png"
                  alt=""
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

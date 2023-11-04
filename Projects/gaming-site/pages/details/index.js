import React from "react";

// Component imports
import Navbar from "../../components/layout/Navbar";

export default function Page() {
  return (
    <>
      {/* Loading components */}
      <Navbar />

      {/* Details section -- break it into components later */}
      <section className="p-4">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 text-center">
            Details
          </h1>
          <img
            className="mx-auto my-4 rounded-lg shadow-lg"
            src="https://fakeimg.pl/800x350?font=noto"
            alt="Placeholder"
          />{" "}
        </div>
      </section>

      {/* Overview section */}
      <section classname="p-10">
        <div className="mt-5 px-20 py-10 bg-[#111827]">
          <h2 className="text-3xl font-bold text-slate-200">Overview</h2>
          <img
            className="mx-auto my-5 rounded-lg shadow-lg"
            src="https://fakeimg.pl/800x350?font=noto"
            alt="Placeholder"
          />{" "}
          <p className="mt-2 text-slate-200">
            Step into the thrilling arena of our Weekly Practice and fuel your
            competitive spirit! Every week, immerse yourself in pulsating
            battles, and sharpen your skills! With amazing prizing up for grabs,
            every match is your chance to shine and warm up your strategies for
            the bigger battles ahead! Whether you’re a casual gamer or an
            aspiring esports star, the Weekly Practice are your gateway to
            endless fun and fierce competition! Ready to heat up the
            battlefield?
            <br />
            <br />
            Sign up to enter a raffle with prizes such as Steam, Xbox, and
            PlayStation giftcards, headsets, mice, and keyboards!
            <br />
            <br />
            The ROYALBATTLE Arena is about embracing the spirit of esports in a
            fair, engaging, and inclusive environment. Whether you're a seasoned
            pro or a casual gamer looking to dip your toes in competitive
            gaming, this is the place for you. So gear up, dive in, and let the
            games begin!
          </p>
        </div>
        <div className="my-12 text-center text-lg">
          <a
            href="#"
            className="bg-red-800 text-white px-8 py-2 rounded-lg mt-4 hover:bg-red-900 transition-all inline-block"
          >
            Go to the Tournament
          </a>
        </div>
      </section>

      {/* Participants section */}
      <section className="py-2 m-0">
        <div className="mt-5 px-20 py-10 bg-[#111827]">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-slate-200">Participants</h2>
            <div className="relative bg-[#263047] flex items-center w-auto h-8 rounded-md focus-within:shadow-lg overflow-hidden">
              <div className="grid place-items-center h-auto w-12 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                className="peer h-full w-full outline-none text-xs text-gray-300 placeholder:text-gray-300 pr-2 bg-[#263047]"
                type="text"
                id="search"
                placeholder="Search participants.."
              />
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-4 mt-8 text-slate-200">
            <li className="flex flex-col items-center">
              <img
                className="h-32 w-32 rounded-md"
                src="https://via.placeholder.com/150"
                alt="Participant 1"
              />
              <div className="text-slate-200 mt-2 mb-4 font-bold">
                Participant 1
              </div>
            </li>
            <li className="flex flex-col items-center">
              <img
                className="h-32 w-32 rounded-md"
                src="https://via.placeholder.com/150"
                alt="Participant 2"
              />
              <div className="text-slate-200 mt-2 mb-4 font-bold">
                Participant 2
              </div>
            </li>
            <li className="flex flex-col items-center">
              <img
                className="h-32 w-32 rounded-md"
                src="https://via.placeholder.com/150"
                alt="Participant 3"
              />
              <div className="text-slate-200 mt-2 mb-4 font-bold">
                Participant 3
              </div>
            </li>
            <li className="flex flex-col items-center">
              <img
                className="h-32 w-32 rounded-md"
                src="https://via.placeholder.com/150"
                alt="Participant 4"
              />
              <div className="text-slate-200 mt-2 mb-4 font-bold">
                Participant 4
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Brackets section */}
      <div className="mt-5">
        <h2 className="text-xl font-bold text-gray-800">Brackets</h2>
        <p className="mt-2 text-gray-600">
          This is a temporary brackets section.
        </p>
      </div>

      {/* Media section */}
      <div className="mt-5">
        <h2 className="text-xl font-bold text-gray-800">Media</h2>
        <p className="mt-2 text-gray-600">This is a temporary media section.</p>
      </div>

      {/* Contact section */}
      <div className="mt-5">
        <h2 className="text-xl font-bold text-gray-800">Contact</h2>
        <p className="mt-2 text-gray-600">
          This is a temporary contact section.
        </p>
      </div>

      {/* <Footer /> */}
    </>
  );
}

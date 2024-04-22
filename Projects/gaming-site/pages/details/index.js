import React, { useEffect, useState } from "react";
import simpleDoubleFull from "@/mock/simple-double-full";

// Component imports
import Navbar from "../../components/layout/Navbar";

export default function Page() {
  const [Brackets, setBrackets] = useState(null);

  useEffect(() => {
    if (!Brackets) {
      import("@g-loot/react-tournament-brackets/").then((brackets) => {
        setBrackets(brackets);
      });
    }
  }, [Brackets]); // Added Brackets to the dependency array

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
      <section className="py-2 m-0">
        <div className="mt-5 px-20 py-10">
          <h2 className="text-3xl font-bold text-black">Brackets</h2>
          <div className="mt-3 flex justify-between items-center">
            <div className="relative bg-slate-100 flex items-center w-auto h-8 rounded-md focus-within:shadow-lg overflow-hidden">
              <div className="grid place-items-center h-auto w-12 text-black">
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
                className="peer h-full w-full outline-none text-xs text-black placeholder:text-black pr-2 bg-slate-100"
                type="text"
                id="search"
                placeholder="Search participants.."
              />
            </div>
            <button className="bg-slate-100 text-black rounded-lg px-6 py-2 text-sm">
              Matches
            </button>{" "}
          </div>
          <div className="mx-auto my-10 p-5 bg-[#111827] rounded-lg text-white">
            {Brackets && (
              <Brackets.DoubleEliminationBracket
                matches={simpleDoubleFull}
                matchComponent={Brackets.Match}
                svgWrapper={({ children, ...props }) => (
                  <Brackets.SVGViewer
                    width={window.innerWidth}
                    height={window.innerHeight}
                    style={{
                      maxWidth: "100%",
                      borderRadius: "15px",
                      overflow: "hidden",
                    }}
                    {...props}
                  >
                    {children}
                  </Brackets.SVGViewer>
                )}
              />
            )}
          </div>
        </div>
      </section>

      {/* Media section */}
      <section className="py-2 m-0">
        <div className="mt-5 px-20 py-10 bg-[#111827]">
          <h2 className="text-3xl font-bold text-slate-200">Media</h2>
          <img
            className="mx-auto my-5 rounded-lg shadow-lg"
            src="https://fakeimg.pl/800x200?font=noto-serif"
            alt="Placeholder"
          />{" "}
          <p className="mt-2 text-slate-200">
            There is currently no media available.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-2 m-0">
        <div className="mt-5 px-10 py-10 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-black">Contact</h2>
          <img
            className="mx-auto my-5 rounded-lg shadow-lg"
            src="https://fakeimg.pl/800x200?font=noto-serif"
            alt="Placeholder"
          />{" "}
          <p className="mt-10 text-black">
            Teams and players must join the official tournament support Discord
            server.
            <br />
            <br />
            Once you join, make sure to get any necessary tournament roles and
            then use support channels for any required assistance.
            <br />
            <br />
            Make sure to properly connect your discord account in order to get
            important alerts and announcements within the server.
          </p>
          <div className="mx-auto my-10 p-5 bg-[#8c9efc] rounded-lg text-white shadow-lg">
            <div className="flex justify-between items-center space-x-10">
              <img
                className="h-12 w-12"
                src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/96/FFFFFF/external-discord-freeware-application-and-digital-video-gaming-community-logo-bold-tal-revivo.png"
                alt="Discord Logo"
              />

              <div className="text-left flex-grow">
                <p className="font-bold">Connect Your Discord</p>
                <p>
                  Once you join this tournament, our BattleBot will give you
                  permissions on the Discord server within a few minutes.
                </p>
                <p className="font-bold mt-8">Join Our Server</p>
                <p>
                  Please connect your Discord account to RoyalBattle to
                  automatically get the proper permissions in order to chat on
                  this server.{" "}
                </p>{" "}
              </div>

              <div className="flex flex-col space-y-10">
                <button className="text-white border border-solid border-white bg-transparent py-2 px-6 rounded whitespace-nowrap">
                  Link Account
                </button>
                <button className="text-white border border-solid border-white bg-transparent py-2 px-6 rounded whitespace-nowrap">
                  Join Discord
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}

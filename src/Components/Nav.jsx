import React, { useState } from "react";
import logo from "../assets/IndianDesi.png";
import TextTransition, { presets } from "react-text-transition";
import gif from "../assets/landingGif.json";
import Lottie from "lottie-react";

const TEXTS = ["Breakfast", "Lunch", "Dinner"];

function Nav() {
  const [show, setShow] = useState(false);

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div
      className="bg-gray-100 pb-12 overflow-y-hidden"
      style={{ minHeight: 700 }}
    >
      {/* Code block starts */}
      <dh-component>
        <nav className="w-full border-b">
          <div className="py-5 md:py-0 container mx-auto px-6 flex items-center justify-between">
            <div aria-label="Home. logo" role="img">
              <img
                style={{ width: "8vw", marginTop: "10px", marginLeft: "10px" }}
                className="w-12 md:w-auto"
                src={logo}
                alt="logo"
              />
            </div>
            <div>
              <button
                onClick={() => setShow(!show)}
                className={`${
                  show ? "hidden" : ""
                } sm:block md:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500`}
              >
                <svg
                  aria-haspopup="true"
                  aria-label="open Main Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:hidden icon icon-tabler icon-tabler-menu"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={4} y1={8} x2={20} y2={8} />
                  <line x1={4} y1={16} x2={20} y2={16} />
                </svg>
              </button>
              <div
                id="menu"
                className={` ${show ? "" : "hidden"} md:block lg:block `}
              >
                <button
                  onClick={() => setShow(!show)}
                  className={`block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 z-30 top-0 mt-6`}
                >
                  <svg
                    aria-label="close main menu"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                  </svg>
                </button>
                <ul className="flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20">
                  <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0">
                    <a href="javascript: void(0)">About</a>
                  </li>
                  <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                    <a href="javascript: void(0)">App</a>
                  </li>

                  <li className="text-gray-700 hover:text-gray-900 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                    <a href="javascript: void(0)">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <button
              style={{ color: "#FE8A00", border: "2px solid #FE8A00" }}
              className="focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-gray-200 rounded border px-4 sm:px-8 py-1 sm:py-3 text-sm"
            >
              Download
            </button>
          </div>
        </nav>
        <div className="bg-gray-100" style={{ display: "flex" }}>
          <div className="container mx-auto flex flex-col items-left py-12 sm:py-24 ml-24 ">
            <div className="w-11/12 sm:w-2/3  mb-5 sm:mb-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl text-gray-800 font-black leading-7 md:leading-10">
                The IndianDesi brings answer to all the questions:-
                <br />
                <br />
                <div style={{ display: "flex" }}>
                  Aaj
                  <span
                    style={{
                      color: "#FE8A00",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                  >
                    <TextTransition springConfig={presets.wobbly}>
                      {TEXTS[index % TEXTS.length]}
                    </TextTransition>
                  </span>{" "}
                  me kya bnau ??
                </div>
              </h1>
            </div>
            <br />
            <div className="flex items-left">
              <button
                style={{ color: "#FE8A00", border: "2px solid #FE8A00" }}
                className="focus:outline-none focus:ring-2 focus:ring-offset-2  transition duration-150 ease-in-out lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 py-2 sm:py-4 text-sm"
              >
                Get the App
              </button>
            </div>
          </div>

          <div style={{ marginTop: "-50px", marginRight: "60px" }}>
            <Lottie animationData={gif} />
          </div>
        </div>
      </dh-component>
      {/* Code block ends */}
    </div>
  );
}

export default Nav;

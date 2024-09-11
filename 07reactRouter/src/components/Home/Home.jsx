import React from "react";
import { Link, NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="min-h-screen mx-auto px-4">
        <div className="w-full flex flex-col items-center gap-5 mt-10 sm:mt-40 sm:flex-row sm:justify-center md:gap-20">
          <div>
            <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
          </div>
          <div className="text-right">
            <div className="pb-4 sm:pb-10">
              <h1 className="text-5xl font-bold">Download Now</h1>
              <p className="text-2xl font-semibold">Lorem ipsum dolor sit.</p>
            </div>
            <div className="py-5 sm:py-0">
              <Link
              to="/"
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-blue-700 rounded-lg hover:opacity-75"
              >
                <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                >
                  <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                </svg>
                &nbsp; Download now
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10 sm:mt-40">
          <img className="w-96" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
        </div>
      
      </div>
    </>
  );
}

export default Home;

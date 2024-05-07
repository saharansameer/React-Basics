import React from "react";

function Card({username, btnText}) {
  return (
    <>
      <div className=" bg-slate-400 w-96 h-96 rounded-xl mt-7 relative">
        <img
          src="https://images.pexels.com/photos/3808822/pexels-photo-3808822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="rounded-xl w-96 h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{username}</h1>
          <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            {btnText} →
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;

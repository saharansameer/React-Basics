import React from 'react'

function Project({title, link, image}) {
  return (
    <div className='flex flex-col items-center justify-center'>
        <a href={link} target="_blank">
            <img
            className="w-56 shadow-md shadow-red-100 rounded-xl hover:shadow-lg hover:shadow-yellow-400 transition-all cursor-pointer md:w-72 lg:w-80"
            src={image}
            />
        </a>
        <h3 className="text-2xl font-semibold text-center text-white mt-4 font-mono">
            {title}
        </h3>
    </div>
  )
}

export default Project


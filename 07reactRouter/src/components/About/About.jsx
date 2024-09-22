import React from "react"
import {Link, NavLink} from "react-router-dom"

function About() {
    return (
        <>
            <div className="mx-auto flex flex-col items-center px-7 py-4 gap-1 md:flex-row md:justify-center md:py-20">
                <div className="">
                    <img
                    src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                    alt="image"
                    />
                </div>
                <div className="flex flex-col gap-5 text-center md:w-1/4">
                    <h1 className="text-4xl font-bold sm:text-3xl lg:text-4xl">React development is carried out by passionate developers</h1>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos enim quia adipisci voluptatibus voluptate, accusantium similique illo aperiam mollitia, officiis labore. Esse maxime beatae dolor iure fugiat molestias inventore velit.</p>
                    <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure mollitia consectetur fuga corporis enim nemo adipisci porro nobis earum ullam!</p>
                </div>
            </div>
        </>
    )
}

export default About;
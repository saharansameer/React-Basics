import React, {useState} from "react"
import {Link, NavLink} from "react-router-dom"

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const[phone, setPhone] = useState("");
    
    const onSubmit = () => {
        setName("");
        setEmail("");
        setPhone("");
    }
    
    return (
        <>
            <div className="mx-auto flex flex-col items-center gap-5 px-5 py-7 sm:flex-row sm:justify-center lg:gap-32 lg:py-24">
                <div className="bg-gray-100 flex flex-col items-center px-7 py-7 rounded-xl">
                    <div className="text-center mb-5 lg:mb-10">
                        <h3 className="text-4xl font-bold">Get in touch:</h3>
                        <p className="text-gray-700 font-semibold">Fill in the form to start a conversation</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-3 font-semibold text-gray-700">
                            <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            className="w-8 h-8 text-gray-500"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            <span>Acme Inc, Street, State, Postal Code</span>
                        </div>
                        <div className="flex items-center gap-3 font-semibold text-gray-700">
                            <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            className="w-8 h-8 text-gray-500"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>
                            <span>+69 1234567890</span>
                        </div>
                        <div className="flex items-center gap-3 font-semibold text-gray-700">
                            <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            className="w-8 h-8 text-gray-500"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                            <span>info@example.co.in</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-5">
                    <input 
                    type="text" 
                    id="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name" 
                    className="rounded-md border border-gray-500 focus:border-blue-600 focus:outline-none px-2 py-2 font-semibold w-full" />
                    
                    <input 
                    type="text" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email" 
                    className="rounded-md border border-gray-500 focus:border-blue-600 focus:outline-none px-2 py-2 font-semibold"/>

                    <input 
                    type="text" 
                    id="phone" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone" 
                    className="rounded-md border border-gray-500 focus:border-blue-600 focus:outline-none px-2 py-2 font-semibold"/>
                    
                    <button
                    onClick={onSubmit}
                    className="bg-blue-700 text-white rounded-xl px-3 py-2 font-semibold hover:bg-blue-800">Submit</button>
                </div>
            </div>
        </>
    )
}

export default Contact;
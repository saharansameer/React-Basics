import React from 'react'

function Footer() {
  return (
    <div className='w-full max-w-screen-sm mx-auto px-5 mb-7 responsive'>
      <div className="flex flex-col items-center gap-y-5">
        {/* Navigation Links */}
        <nav className="flex flex-col justify-center items-center sm:gap-x-5 sm:flex-row text-md">
          <a href="/" className="hover:underline hover:font-semibold">About</a>
          <a href="/" className="hover:underline hover:font-semibold">Contact</a>
          <a href="/" className="hover:underline hover:font-semibold">Privacy Policy</a>
          <a href="/" className="hover:underline hover:font-semibold">Terms of Service</a>
        </nav>

        {/* Social Media Links */}
        <div className="flex space-x-3">
          <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-blue-500"
          >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
            >
              <path d="M19.633 7.897c.013.2.013.401.013.603 0 6.137-4.67 13.207-13.207 13.207A13.116 13.116 0 010 18.493a9.57 9.57 0 007.04-1.952 4.784 4.784 0 01-4.465-3.315c.727.111 1.44.111 2.184-.09a4.774 4.774 0 01-3.83-4.687v-.06c.64.356 1.383.573 2.167.6a4.771 4.771 0 01-2.13-3.97 4.73 4.73 0 01.647-2.393 13.561 13.561 0 009.862 4.998 5.388 5.388 0 01-.119-1.092 4.771 4.771 0 018.26-3.258 9.29 9.29 0 002.943-1.12 4.797 4.797 0 01-2.093 2.63 9.547 9.547 0 002.739-.733 10.221 10.221 0 01-2.417 2.5z" />
            </svg>
          </a>
          <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-700 dark:hover:text-gray-300"
          >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
            >
              <path d="M12 .5a11.5 11.5 0 00-3.638 22.42c.577.107.787-.25.787-.553 0-.272-.01-.994-.015-1.951-3.205.696-3.88-1.548-3.88-1.548-.525-1.333-1.28-1.69-1.28-1.69-1.045-.715.08-.7.08-.7 1.156.082 1.765 1.186 1.765 1.186 1.028 1.764 2.695 1.253 3.353.957.104-.745.402-1.253.731-1.54-2.558-.29-5.248-1.278-5.248-5.687 0-1.256.448-2.283 1.183-3.086-.119-.29-.513-1.457.112-3.037 0 0 .967-.31 3.17 1.177A11.054 11.054 0 0112 6.845c.98.004 1.967.132 2.889.387 2.2-1.487 3.166-1.177 3.166-1.177.627 1.58.233 2.747.115 3.037.738.803 1.18 1.83 1.18 3.086 0 4.421-2.694 5.394-5.26 5.678.414.36.777 1.075.777 2.168 0 1.565-.014 2.829-.014 3.212 0 .306.206.664.793.551A11.5 11.5 0 0012 .5z" />
            </svg>
          </a>
          <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.5 20h-3v-11h3v11zm-1.5-12.27c-.96 0-1.73-.78-1.73-1.73s.77-1.73 1.73-1.73c.96 0 1.73.78 1.73 1.73s-.77 1.73-1.73 1.73zm13 12.27h-3v-5.5c0-1.32-.03-3.01-1.84-3.01-1.84 0-2.12 1.44-2.12 2.92v5.59h-3v-11h2.88v1.5h.04c.4-.76 1.38-1.57 2.84-1.57 3.03 0 3.59 1.99 3.59 4.57v6.5z" />
            </svg>
          </a>
        </div>

        {/* Copyright Notice */}
        <p className="text-xs text-center">
          &copy; {new Date().getFullYear()} Mega Blog - All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
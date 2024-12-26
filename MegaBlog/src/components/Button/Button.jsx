import React from 'react'

function Button({
    text,
    className,
    textStyle = "font-semibold",
    colorEffects = 'text-white bg-[#141414] hover:bg-[#000] dark:text-black dark:bg-[#E1E1E1] dark:hover:bg-[#FFF]',
    transition = 'transition-all ease-in-out',
    ...props
}) {
  return (
    <button 
    className={`${className} ${textStyle} ${colorEffects} ${transition}`}
    {...props}
    >
        {text}
    </button>
  )
}

export default Button;
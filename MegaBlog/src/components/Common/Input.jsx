import React, {forwardRef, useId} from 'react'

const Input = forwardRef(({
    type = "text",
    className = "",
    label,
    ...props

}, ref) => {
    const id = useId();
    return (
        <div className='flex flex-col gap-y-2'>
            {label && <label 
            htmlFor={id}
            className={`text-sm text-[#4b4b4b] dark:text-[#ececec] font-bold`}
            >
                {label}
            </label>
            }
            <input 
            id={id}
            type={type} 
            className={`sm:w-80 rounded-md px-2 py-1 font-semibold dark:bg-[#e4e4e4] dark:text-black outline-none ring-[#85bdfd] dark:ring-[#0077ff] focus:ring-2 ${className}`}
            ref={ref}
            {...props} 
            />
        </div>
    )
});

export default Input;
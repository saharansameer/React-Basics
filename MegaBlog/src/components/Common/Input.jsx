import React, {forwardRef, useId} from 'react'

const Input = forwardRef(({
    type = "text",
    className = "",
    label, // ={text, style}
    ...props

}, ref) => {
    const id = useId();
    return (
        <div>
            {label && <label 
            htmlFor={id}
            className={`${label.style}`}
            >
                {label.text}
            </label>
            }
            <input 
            id={id}
            type={type} 
            className={`${className}`}
            ref={ref}
            {...props} 
            />
        </div>
    )
});

export default Input;
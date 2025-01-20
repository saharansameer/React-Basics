import React, { forwardRef, useId } from 'react'

const Select = forwardRef(({
    options,
    className = "",
    label,
    ...props
}, ref) => {
    const id = useId();
    return (
        <div className='flex flex-col gap-y-2'>
            {label && <label
            htmlFor={id}
            className={`${label.style}`}
            >
                {label.text}
            </label>
            }
            <select
            className={`${className}`}
            id={id}
            ref={ref}
            {...props}
            >
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

        </div>
    )
});

export default Select;
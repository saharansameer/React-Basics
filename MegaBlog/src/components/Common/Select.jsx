import React, { forwardRef, useId } from 'react'

const Select = forwardRef(({
    options,
    className = "",
    label,
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
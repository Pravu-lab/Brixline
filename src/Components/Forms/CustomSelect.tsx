import React from 'react';
import Image from "next/image";


interface Option {
    label: string;
    value: string;
}

interface CustomSelectProps {
    label?: string;
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
    placeholder?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
    label,
    options,
    value,
    onChange,
    disabled = false,
    placeholder = 'Select an option',
}) => {
    return (
        <div className="flex flex-col gap-1 w-full">
            {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
            <div className='relative' >
                <select
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    disabled={disabled}
                    className={`w-full px-3 pr-5 py-4 border border-gray-300 rounded-none shadow-xs
          focus:outline-none bg-white
          disabled:bg-gray-100 text-gray-900 appearance-none`}
                >
                    {placeholder && <option value="" disabled hidden>{placeholder}</option>}
                    {options.map((option) => (
                        <option key={option.value} value={option.value} className="text-black">
                            {option.label}
                        </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect x="24" width="24" height="24" transform="rotate(90 24 0)" fill="#F55252" />
                        <path fillRule="evenodd" clip-rule="evenodd" d="M17.5059 10.7024L16.0028 9.19931L11.9965 13.2056L7.99023 9.19937L6.48718 10.7024L10.4953 14.7106L11.9966 13.2093L13.4977 14.7105L17.5059 10.7024Z" fill="white" />
                    </svg>
                </div>
            </div>

        </div>
    );
};

export default CustomSelect;

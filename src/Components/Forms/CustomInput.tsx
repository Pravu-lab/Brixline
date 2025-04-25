// components/InputWithIcon.tsx
import React from 'react';

interface CustomInputProps {
    label?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    icon?: React.ReactNode;
    disabled?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
    label,
    placeholder,
    value,
    onChange,
    type = 'text',
    icon,
    disabled = false,
}) => {
    return (
        <div className="w-full">
            {label && <label className="text-sm font-medium text-black">{label}</label>}
            <div className="relative">
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled}
                    className={`w-full text-black placeholder-gray-700 font-thin pr-10 pl-3 py-4 border bg-white border-gray-300 rounded-none shadow-xs focus:outline-none  disabled:bg-gray-100`}
                />
                {icon && (
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-black">
                        {icon}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CustomInput;

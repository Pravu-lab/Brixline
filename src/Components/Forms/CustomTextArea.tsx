// components/InputWithIcon.tsx
import React from 'react';

interface CustomTextAreaProps {
    label?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    type?: string;
    icon?: React.ReactNode;
    disabled?: boolean;
    rows?: number
}

const CustomTextArea: React.FC<CustomTextAreaProps> = ({
    label,
    placeholder,
    value,
    onChange,
    icon,
    disabled = false,
    rows,
}) => {
    return (
        <div className="flex flex-col gap-1 w-full">
            {label && <label className="text-sm font-medium text-black">{label}</label>}
            <div className="relative">
                <textarea
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled}
                    rows={rows}
                    className={`w-full text-black placeholder-gray-700 font-thin pr-10 pl-3 py-2 border bg-white border-gray-300 rounded-none shadow-xs focus:outline-none  disabled:bg-gray-100`}
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

export default CustomTextArea;

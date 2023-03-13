import React, { ReactNode, useState } from 'react';

interface IToogleProps {
    title: string;
    startOpen?: boolean;
    children: ReactNode;
}

export function Toogle({ title, startOpen = false, children }: IToogleProps) {
    const [open, setOpen] = useState(startOpen);

    return (
        <>
            <button
                onClick={() => setOpen(!open)}
                className={`
                    bg-white
                    text-[#677074]
                    font-semibold
                    ${!open && 'rounded-b-xl shadow-md'}
                    rounded-t-xl
                    border-x
                    border-t
                    text-2xl
                    px-10
                    py-3
                    text-center
                    flex
                    justify-between
                    items-center
                    mt-6
                `}
                type="button"
            >
                {title}
                <svg
                    className="w-4 h-4 ml-2"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            <div
                className={`${
                    !open && 'hidden'
                } bg-white font-semibold text-2xl pb-6 text-center flex justify-between items-center rounded-b-xl border-x border-b shadow-md`}
            >
                <div className="flex justify-center w-full text-sm text-gray-700 dark:text-gray-200">
                    <div className="flex flex-col space-y-4 mt-8 w-3/4">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

import { ReactNode } from 'react';

interface IMenuTop {
    children: ReactNode;
}

export function MenuTop({ children }: IMenuTop) {
    return (
        <span className="flex justify-center items-center h-24 shadow-md mb-6">
            {children}
        </span>
    );
}

import { ReactNode } from 'react';

interface IMenuOptions {
    children: ReactNode;
}

export function MenuOptions({ children }: IMenuOptions) {
    return (
        <div
            className="overflow-y-auto flex flex-col space-y-2 text-[#263238] text-xl font-medium"
            style={{ height: 'calc(100vh - 11rem)' }}
        >
            {children}
        </div>
    );
}

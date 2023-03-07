import { ReactNode } from 'react';

interface IContainerProps {
    children: ReactNode;
}

export function Container({ children }: IContainerProps) {
    return <div className="h-screen w-screen flex flex-row">{children}</div>;
}

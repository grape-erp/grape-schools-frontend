import React from 'react';
// import * as FontAwesome from 'react-icons/fa';
import { Button } from '../../../Button';
// import { Logo } from '../../../Logo';

interface IHeaderProps {
    onButtonClick?: () => void;
    addClassName?: string;
}

export default function Header({ onButtonClick, addClassName }: IHeaderProps) {
    return (
        <header
            className={`py-3 px-4 md:p-0 flex flex-row justify-end items-center shadow-2xl ${addClassName}`}
        >
            {onButtonClick && (
                <Button
                    className="md:hidden border-0"
                    iconName="FaAlignJustify"
                    iconClass="h-5 w-5 flex justify-center items-center"
                    onClick={onButtonClick}
                />
            )}
        </header>
    );
}

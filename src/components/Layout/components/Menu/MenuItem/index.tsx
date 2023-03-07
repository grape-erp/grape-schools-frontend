/* eslint-disable import/no-extraneous-dependencies */
import React, { ReactNode } from 'react';
// import * as FontAwesome from 'react-icons/fa';
import { Icon } from '@iconify/react';

interface IMenuItemProps {
    children: ReactNode;
    iconName?: string;
    disable?: boolean;
    onClick?: () => void;
}
export function MenuItem({
    children,
    iconName = '',
    disable = false,
    onClick,
}: IMenuItemProps) {
    return (
        <div
            className={`
                py-2
                pl-6
                space-y-1
                flex
                items-center
                transition
                duration-200
                hover:bg-gray-100
                cursor-pointer
                rounded-md
                ${disable && 'text-[#BFBFBF]'}
            `}
            onClick={onClick}
        >
            {iconName !== '' && (
                <Icon
                    icon={iconName}
                    className="hidden md:block mr-2 w-7 h-8"
                />
            )}
            <span>{children}</span>
        </div>
    );
}

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
            className={`py-3 px-4 md:p-0 bg-slate-700 flex flex-row justify-end items-center shadow-2xl ${addClassName}`}
        >
            {/* <Logo addClassName="md:hidden bg-white rounded-md p-1" />
            <div className="flex justify-center items-center space-x-2">
                <div className="hidden md:flex flex-col items-end">
                    <span
                        className="
                                hidden
                                md:w-auto
                                md:flex
                                md:flex-row
                                space-x-3
                                items-center
                                justify-center
                                font-light
                                text-gray-50
                                rounded-md
                                tracking-wide
                                cursor-pointer
                            "
                    >
                        Luan
                        <div className="flex justify-center items-center">
                            {React.createElement(FontAwesome['FaAngleDown'], {
                                className: 'ml-2',
                            })}
                        </div>
                    </span>
                    <span className="font-light text-sm">Teste</span>
                </div>
                <Button
                    className="p-5"
                    colorClass="bg-slate-700 hover:bg-slate-600"
                    iconName="FaUserCircle"
                    iconClass="hidden md:block h-10 w-10 flex justify-center items-center"
                />
            </div> */}
            {onButtonClick && (
                <Button
                    className="md:hidden"
                    colorClass="bg-slate-700 hover:bg-slate-600"
                    iconName="FaAlignJustify"
                    iconClass="h-5 w-5 flex justify-center items-center"
                    onClick={onButtonClick}
                />
            )}
        </header>
    );
}

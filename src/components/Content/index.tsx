import { ReactNode } from 'react';
import { FaPlus, FaReply } from 'react-icons/fa';

interface IContentProps {
    children: ReactNode;
}

export function Content({ children }: IContentProps) {
    return (
        <div className="flex-1 overflow-y-hidden flex flex-col">{children}</div>
    );
}

interface IContentHeaderListProps {
    title?: string;
    button?: boolean;
    children?: ReactNode;
    register?: () => void;
}

export function ContentHeaderList({
    title = '',
    button = true,
    children,
    register,
}: IContentHeaderListProps) {
    return (
        <div className="w-full">
            <div className="w-full h-32 px-14 flex justify-between items-center">
                <h1 className="text-3xl font-medium text-[#263238]">{title}</h1>
                {button && (
                    <button
                        onClick={() => register()}
                        className="flex justify-center items-center bg-[#677074] hover:bg-[#616a6d] text-white text-2xl font-bold w-12 h-12 md:w-60 md:h-14 rounded-lg"
                    >
                        <FaPlus className="md:hidden" />
                        <span className="hidden md:block">Cadastrar</span>
                    </button>
                )}
            </div>
            {children}
        </div>
    );
}

interface IContentHeaderFormProps {
    title?: string;
    back: () => void;
}

export function ContentHeaderForm({
    title = '',
    back,
}: IContentHeaderFormProps) {
    return (
        <div className="w-full">
            <div className="w-full h-32 px-14 flex justify-between items-center">
                <h1 className="text-3xl font-medium text-[#263238]">{title}</h1>
                <div className="flex space-x-2">
                    <button
                        onClick={() => back()}
                        className="flex justify-center items-center text-[#677074] hover:bg-[#dbdcdc] text-xl font-bold w-12 h-12 md:w-52 md:h-14 rounded-lg border border-[#677074]"
                    >
                        <FaReply className="md:hidden" />
                        <span className="hidden md:block">Voltar</span>
                    </button>
                    <button
                        type="submit"
                        className="flex justify-center items-center bg-[#677074] hover:bg-[#616a6d] text-white text-xl font-bold w-12 h-12 md:w-52 md:h-14 rounded-lg"
                    >
                        <FaPlus className="md:hidden" />
                        <span className="hidden md:block">Cadastrar</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

interface IContentBodyProps {
    children?: ReactNode;
}

export function ContentBody({ children }: IContentBodyProps) {
    return (
        <div className="bg-[#F7F7F7] flex-1 w-full overflow-x-auto overflow-y-auto py-2 px-6 text-black flex justify-center items-center">
            <div className="h-full w-full overflow-hidden flex flex-col">
                {children}
            </div>
        </div>
    );
}

interface IContentBodyFormProps {
    children?: ReactNode;
}

export function ContentBodyForm({ children }: IContentBodyFormProps) {
    return (
        <div className="bg-[#F7F7F7] flex-1 w-full overflow-x-auto overflow-y-auto py-2 px-6 text-black flex justify-center items-center">
            <div className="h-[calc(100vh-8rem)] w-full overflow-x-hidden overflow-y-scroll pr-4 flex flex-col pb-36">
                {children}
            </div>
        </div>
    );
}

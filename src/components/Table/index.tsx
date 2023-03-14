import { ReactNode } from 'react';

interface ITableProps {
    children: ReactNode;
}

export function Table({ children }: ITableProps) {
    return (
        <div className="flex flex-col mt-6">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="bg-white rounded-3xl shadow-xl py-2 align-middle inline-block min-w-full md:px-6 lg:px-8">
                    <div className="overflow-hidden mx-4">
                        <table className="table-auto font-sans my-1 min-w-full divide-y divide-gray-300 tracking-wider">
                            {children}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

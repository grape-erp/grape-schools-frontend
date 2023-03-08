/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';
import { ContentHeader, ContentBody } from '../../../components/Content';
import { Layout } from '../../../components/Layout';
import { Table } from '../../../components/Table';

const classMates = [
    {
        ra: 'PE0014',
        date: '21/12/2023',
        client: 'Fulano',
        Vendedor: 'Beltrano',
        valor: 'R$ 2.000,00',
        situacao: 'Vendido',
    },
    {
        ra: 'PE0015',
        date: '21/12/2023',
        client: 'Fulano',
        Vendedor: 'Beltrano',
        valor: 'R$ 2.000,00',
        situacao: 'Vendido',
    },
    {
        ra: 'PE0016',
        date: '21/12/2023',
        client: 'Fulano',
        Vendedor: 'Beltrano',
        valor: 'R$ 2.000,00',
        situacao: 'Vendido',
    },
    {
        ra: 'PE0017',
        date: '21/12/2023',
        client: 'Fulano',
        Vendedor: 'Beltrano',
        valor: 'R$ 2.000,00',
        situacao: 'Vendido',
    },
];

function ClassForm() {
    const [open, setOpen] = useState(false);

    return (
        <Layout>
            <ContentHeader title="Classes" button={false}>
                {/* Colocar o elemento de search */}
                {/* <div></div>
                <p>Search</p> */}
            </ContentHeader>
            <ContentBody>
                <button
                    onClick={() => setOpen(!open)}
                    className="text-[#677074] bg-[#D9D9D9] font-semibold rounded-t-lg text-2xl px-10 py-3 text-center flex justify-between items-center"
                    type="button"
                >
                    Informações Gerais
                    <svg
                        className="w-4 h-4 ml-2"
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                </button>

                <div
                    className={`${
                        !open && 'hidden'
                    } bg-[#D9D9D9] font-semibold text-2xl px-10 py-3 text-center flex justify-between items-center`}
                >
                    <div className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        <input type="text" />
                    </div>
                </div>
            </ContentBody>
        </Layout>
    );
}

export default ClassForm;

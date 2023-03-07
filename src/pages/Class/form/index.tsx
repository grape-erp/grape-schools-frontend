/* eslint-disable react/no-array-index-key */
import React from 'react';
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
    // return <Table />;
    return (
        <Layout>
            <ContentHeader title="Classes">
                {/* Colocar o elemento de search */}
                {/* <div></div>
                <p>Search</p> */}
            </ContentHeader>
            <ContentBody>
                <Table>
                    <thead>
                        <tr className="text-left">
                            <th className="px-6 py-1">Código</th>
                            <th className="px-6 py-1">Data</th>
                            <th className="px-6 py-1">Cliente</th>
                            <th className="px-6 py-1">Vendedor</th>
                            <th className="px-6 py-1">Total</th>
                            <th className="px-6 py-1">Situação</th>
                            <th> </th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody className="whitespace-nowrap">
                        {classMates.map((classMate, index) => (
                            <tr
                                className={`${
                                    index % 2 === 0 ? 'bg-gray-200' : 'bg-white'
                                }`}
                                key={index}
                            >
                                <td className="px-6 py-1">{classMate.ra}</td>
                                <td className="px-6 py-1">21/12/2023</td>
                                <td className="px-6 py-1">Fulano</td>
                                <td className="px-6 py-1">Beltrano</td>
                                <td className="px-6 py-1">R$ 2.000,00</td>
                                <td className="px-6 py-1">Vendido</td>
                                <td className="px-6 py-1 flex items-center">
                                    <FaEdit className="mr-2" />
                                    Editar
                                </td>
                                <td className="px-6 py-1">
                                    <FaRegTrashAlt />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </ContentBody>
        </Layout>
    );
}

export default ClassForm;

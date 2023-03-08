/* eslint-disable react/no-array-index-key */
import React from 'react';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { ContentHeader, ContentBody } from '../../components/Content';
import { Layout } from '../../components/Layout';
import { Table } from '../../components/Table';

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

function Class() {
    const navigate = useNavigate();

    function accept(id: string) {
        console.log('aceito');
        console.log(id);
    }

    function reject(id: string) {
        console.log('rejeitado');
        console.log(id);
    }

    return (
        <Layout>
            <ContentHeader
                title="Classes"
                register={() => navigate('/class/form/new')}
            >
                {/* Colocar o elemento de search */}
                {/* <div></div>
                <p>Search</p> */}
            </ContentHeader>
            <ContentBody>
                <ConfirmDialog />
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
                                } cursor-pointer`}
                                key={index}
                            >
                                <td
                                    onClick={() => console.log('Abre')}
                                    className="px-6 py-1"
                                >
                                    {classMate.ra}
                                </td>
                                <td
                                    onClick={() => console.log('Abre')}
                                    className="px-6 py-1"
                                >
                                    21/12/2023
                                </td>
                                <td
                                    onClick={() => console.log('Abre')}
                                    className="px-6 py-1"
                                >
                                    Fulano
                                </td>
                                <td
                                    onClick={() => console.log('Abre')}
                                    className="px-6 py-1"
                                >
                                    Beltrano
                                </td>
                                <td
                                    onClick={() => console.log('Abre')}
                                    className="px-6 py-1"
                                >
                                    R$ 2.000,00
                                </td>
                                <td
                                    onClick={() => console.log('Abre')}
                                    className="px-6 py-1"
                                >
                                    Vendido
                                </td>
                                <td
                                    onClick={() => console.log('Abre')}
                                    className="px-6 py-1 flex items-center"
                                >
                                    <FaEdit className="mr-2" />
                                    Editar
                                </td>
                                <td
                                    className="px-6 py-1"
                                    onClick={() =>
                                        confirmDialog({
                                            message:
                                                'Você tem certeza que deseja apagar?',
                                            header: 'Atenção',
                                            icon: 'pi pi-info-circle',
                                            position: 'center',
                                            acceptLabel: 'Sim',
                                            rejectLabel: 'Não',
                                            accept: () => accept('teste'),
                                            reject: () => reject('teste'),
                                        })
                                    }
                                >
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

export default Class;

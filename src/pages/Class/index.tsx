/* eslint-disable react/no-array-index-key */
import React from 'react';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { ContentHeaderList, ContentBody } from '../../components/Content';
import { Layout } from '../../components/Layout';
import { Table } from '../../components/Table';

const classMates = [
    {
        id: 1,
        ra: 'PE0014',
        date: '21/12/2023',
        client: 'Fulano',
        Vendedor: 'Beltrano',
        valor: 'R$ 2.000,00',
        situacao: 'Vendido',
    },
    {
        id: 2,
        ra: 'PE0015',
        date: '21/12/2023',
        client: 'Fulano',
        Vendedor: 'Beltrano',
        valor: 'R$ 2.000,00',
        situacao: 'Vendido',
    },
    {
        id: 3,
        ra: 'PE0016',
        date: '21/12/2023',
        client: 'Fulano',
        Vendedor: 'Beltrano',
        valor: 'R$ 2.000,00',
        situacao: 'Vendido',
    },
    {
        id: 4,
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
            <ContentHeaderList
                title="Classes"
                register={() => navigate('/class/form/new')}
            >
                {/* Colocar o elemento de search */}
                {/* <div></div>
                <p>Search</p> */}
            </ContentHeaderList>
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
                                    index % 2 === 0
                                        ? 'bg-[#8A75A5] bg-opacity-10'
                                        : 'bg-white'
                                } cursor-pointer`}
                                key={index}
                            >
                                <td
                                    onClick={() =>
                                        navigate(`/class/form/${classMate.id}`)
                                    }
                                    className="px-6 py-1"
                                >
                                    {classMate.ra}
                                </td>
                                <td
                                    onClick={() =>
                                        navigate(`/class/form/${classMate.id}`)
                                    }
                                    className="px-6 py-1"
                                >
                                    21/12/2023
                                </td>
                                <td
                                    onClick={() =>
                                        navigate(`/class/form/${classMate.id}`)
                                    }
                                    className="px-6 py-1"
                                >
                                    Fulano
                                </td>
                                <td
                                    onClick={() =>
                                        navigate(`/class/form/${classMate.id}`)
                                    }
                                    className="px-6 py-1"
                                >
                                    Beltrano
                                </td>
                                <td
                                    onClick={() =>
                                        navigate(`/class/form/${classMate.id}`)
                                    }
                                    className="px-6 py-1"
                                >
                                    R$ 2.000,00
                                </td>
                                <td
                                    onClick={() =>
                                        navigate(`/class/form/${classMate.id}`)
                                    }
                                    className="px-6 py-1"
                                >
                                    Vendido
                                </td>
                                <td
                                    onClick={() =>
                                        navigate(`/class/form/${classMate.id}`)
                                    }
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
                                    <FaRegTrashAlt className="hover:bg-black hover:bg-opacity-25 hover:rounded-full" />
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

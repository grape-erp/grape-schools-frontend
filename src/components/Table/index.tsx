import { FaRegTrashAlt } from 'react-icons/fa';

export function Table() {
    return (
        <table className="table-auto font-sans mx-2 my-1 min-w-full divide-y divide-gray-300  tracking-wider">
            <thead>
                <tr className="text-left">
                    <th className="px-6 py-1">Código</th>
                    <th className="px-6 py-1">Data</th>
                    <th className="px-6 py-1">Cliente</th>
                    <th className="px-6 py-1">Vendedor</th>
                    <th className="px-6 py-1">Total</th>
                    <th className="px-6 py-1">Situação</th>
                    <th> </th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-gray-200">
                    <td className="px-6 py-1">PE0015</td>
                    <td className="px-6 py-1">21/12/2023</td>
                    <td className="px-6 py-1">Fulano</td>
                    <td className="px-6 py-1">Beltrano</td>
                    <td className="px-6 py-1">R$ 2.000,00</td>
                    <td className="px-6 py-1">Vendido</td>
                    <td className="px-6 py-1">
                        <FaRegTrashAlt />
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-1">PE0015</td>
                    <td className="px-6 py-1">21/12/2023</td>
                    <td className="px-6 py-1">Fulano</td>
                    <td className="px-6 py-1">Beltrano</td>
                    <td className="px-6 py-1">R$ 2.000,00</td>
                    <td className="px-6 py-1">Vendido</td>
                    <td className="px-6 py-1">
                        <FaRegTrashAlt />
                    </td>
                </tr>
                <tr className="bg-gray-200">
                    <td className="px-6 py-1">PE0015</td>
                    <td className="px-6 py-1">21/12/2023</td>
                    <td className="px-6 py-1">Fulano</td>
                    <td className="px-6 py-1">Beltrano</td>
                    <td className="px-6 py-1">R$ 2.000,00</td>
                    <td className="px-6 py-1">Vendido</td>
                    <td className="px-6 py-1">
                        <FaRegTrashAlt />
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

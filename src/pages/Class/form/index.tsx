/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { FaPlusCircle, FaTrash } from 'react-icons/fa';
import { ContentHeader, ContentBodyForm } from '../../../components/Content';
import { Layout } from '../../../components/Layout';
import { Input } from '../../../components/Layout/components/Input';
import { Toogle } from '../../../components/Layout/components/Toogle';
import { Select } from '../../../components/Select';

function ClassForm() {
    const {
        // handleSubmit,
        register,
        // formState,
        // reset,
        // setValue,
        // getValues,
        control,
    } = useForm({
        // resolver: yupResolver(schema),
        // defaultValues: {
        //     isActive: 1,
        // },
    });

    const {
        fields,
        append,
        remove,
        // swap: swapStage,
    } = useFieldArray({
        control,
        name: 'matters',
    });

    return (
        <Layout>
            <ContentHeader title="Classes" button={false}>
                {/* Colocar o elemento de search */}
                {/* <div></div>
                <p>Search</p> */}
            </ContentHeader>
            <ContentBodyForm>
                <Toogle title="Informações Gerais" startOpen>
                    <Input
                        type="number"
                        defaultValue=""
                        label="Ano"
                        {...register('year')}
                        placeholder="Digite o ano atual"
                    />
                    <Select
                        // ="Ação"
                        label="Série"
                        // error={formState.errors.action}
                        // {...register('action')}
                        options={[
                            {
                                value: 'bercario',
                                text: 'Berçário',
                                key: 'bercario',
                            },
                            {
                                value: 'mini_maternal',
                                text: 'Mini Maternal',
                                key: 'mini_maternal',
                            },
                            {
                                value: 'maternal',
                                text: 'Maternal',
                                key: 'maternal',
                            },
                            { value: 'pre_um', text: 'Pré 1', key: 'pre_um' },
                            {
                                value: 'pre_dois',
                                text: 'Pré 2',
                                key: 'pre_dois',
                            },
                            {
                                value: 'primeira',
                                text: 'Primeira Série',
                                key: 'primeira',
                            },
                            {
                                value: 'segunda',
                                text: 'Segunda Série',
                                key: 'segunda',
                            },
                            {
                                value: 'terceira',
                                text: 'Terceira Série',
                                key: 'terceira',
                            },
                            {
                                value: 'quarta',
                                text: 'Quarta Série',
                                key: 'quarta',
                            },
                            {
                                value: 'quinta',
                                text: 'Quinta Série',
                                key: 'quinta',
                            },
                        ]}
                    />
                    <Input
                        type="text"
                        label="Tipo"
                        placeholder="Exemplo: A, B ou C"
                    />
                    <Input
                        type="text"
                        label="Período"
                        placeholder="Exemplo: manhã"
                    />
                    <div className="grid grid-cols-2 gap-x-2">
                        <label className="block text-base text-start text-gray-600 mt-2 ml-2 col-span-2">
                            Horários de Aula
                        </label>
                        <Input type="number" defaultValue="0" label="Início" />
                        <Input type="number" defaultValue="0" label="Término" />
                    </div>
                    <Input
                        type="number"
                        defaultValue="0"
                        label="Quantidade máxima de alunos"
                    />
                </Toogle>
                <Toogle title="Matérias">
                    <>
                        <ul>
                            {fields.map((field, index) => {
                                return (
                                    <li
                                        key={field.id}
                                        className="grid grid-cols-5 gap-4"
                                    >
                                        <Select
                                            // ="Ação"
                                            label="Matéria"
                                            // error={formState.errors.action}
                                            {...register(
                                                `matters.${index}.matter`,
                                            )}
                                            divClassName="col-span-2"
                                            options={[
                                                {
                                                    value: 'bercario',
                                                    text: 'Portugues',
                                                    key: 'bercario',
                                                },
                                                {
                                                    value: 'mini_maternal',
                                                    text: 'Mini Maternal',
                                                    key: 'mini_maternal',
                                                },
                                                {
                                                    value: 'maternal',
                                                    text: 'Maternal',
                                                    key: 'maternal',
                                                },
                                                {
                                                    value: 'pre_um',
                                                    text: 'Pré 1',
                                                    key: 'pre_um',
                                                },
                                                {
                                                    value: 'pre_dois',
                                                    text: 'Pré 2',
                                                    key: 'pre_dois',
                                                },
                                                {
                                                    value: 'primeira',
                                                    text: 'Primeira Série',
                                                    key: 'primeira',
                                                },
                                                {
                                                    value: 'segunda',
                                                    text: 'Segunda Série',
                                                    key: 'segunda',
                                                },
                                                {
                                                    value: 'terceira',
                                                    text: 'Terceira Série',
                                                    key: 'terceira',
                                                },
                                                {
                                                    value: 'quarta',
                                                    text: 'Quarta Série',
                                                    key: 'quarta',
                                                },
                                                {
                                                    value: 'quinta',
                                                    text: 'Quinta Série',
                                                    key: 'quinta',
                                                },
                                            ]}
                                        />
                                        <Select
                                            // ="Ação"
                                            label="Colaborador"
                                            // error={formState.errors.action}
                                            {...register(
                                                `matters.${index}.colaborattor`,
                                            )}
                                            divClassName="col-span-2"
                                            options={[
                                                {
                                                    value: 'bercario',
                                                    text: 'Tania',
                                                    key: 'bercario',
                                                },
                                                {
                                                    value: 'mini_maternal',
                                                    text: 'Marcela Tardelli',
                                                    key: 'mini_maternal',
                                                },
                                            ]}
                                        />
                                        <button
                                            onClick={() => remove(index)}
                                            className="col-span-1 border border-[#677074] mt-8 rounded-lg flex items-center justify-center flex-col bg-white hover:bg-[#e0e0e0]"
                                        >
                                            <FaTrash />
                                            <span className="hidden md:block">
                                                Remover
                                            </span>
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                        <button
                            onClick={() => {
                                append({
                                    matter: '',
                                    colaborattor: '',
                                });
                            }}
                            className="flex items-center justify-center py-4 cursor-pointer border-2 border-dashed bg-white hover:bg-[#e0e0e0] border-[#677074] transition rounded-lg"
                        >
                            <FaPlusCircle className="border-none text-gray-700 mr-2" />
                            Adicionar Matéria
                        </button>
                    </>
                </Toogle>
                <Toogle title="Alunos">
                    <Input type="text" placeholder="Ano" />
                    <Input type="text" placeholder="Série" />
                </Toogle>
            </ContentBodyForm>
        </Layout>
    );
}

export default ClassForm;

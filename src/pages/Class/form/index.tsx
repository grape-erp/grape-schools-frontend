/* eslint-disable react/no-array-index-key */
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { FaPlusCircle, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {
    ContentHeaderForm,
    ContentBodyForm,
} from '../../../components/Content';
import { Layout } from '../../../components/Layout';
import { Input } from '../../../components/Layout/components/Input';
import { Toogle } from '../../../components/Layout/components/Toogle';
import { Select } from '../../../components/Select';

interface IMatter {
    id: string;
    matter: string;
    colaborattor: string;
}

interface IClassMate {
    id: string;
    ra: string;
    classMate: string;
}

interface IFormProps {
    year: number;
    teaching: string;
    classType: string;
    period: string;
    classStart: number;
    classFinish: number;
    totalClassMates: number;
    matters: IMatter[];
    classMates: IClassMate[];
}

const schema = yup
    .object({
        teaching: yup.string().required('Ensino é obrigatório'),
    })
    .required();

function ClassForm() {
    const navigate = useNavigate();

    const {
        handleSubmit,
        register,
        formState,
        reset,
        // setValue,
        // getValues,
        control,
    } = useForm<IFormProps>({
        resolver: yupResolver(schema),
        // defaultValues: {
        //     isActive: 1,
        // },
    });

    const {
        fields: matters,
        append: appendMatter,
        remove: removeMatter,
    } = useFieldArray({
        control,
        name: 'matters',
    });

    const {
        fields: classMates,
        append: appendClassMates,
        remove: removeClassMates,
    } = useFieldArray({
        control,
        name: 'classMates',
    });

    const handleSave: SubmitHandler<IFormProps> = async data => {
        console.log(data);
        console.log('TETS');
    };

    useEffect(() => {
        const dataAtual = new Date();
        const anoAtual = dataAtual.getFullYear();
        reset({
            year: anoAtual,
        });
    }, [reset]);

    return (
        <Layout>
            <form onSubmit={handleSubmit(handleSave)}>
                <ContentHeaderForm
                    title="Classes"
                    back={() => navigate('/class')}
                />
                <ContentBodyForm>
                    <Toogle title="Informações Gerais" startOpen>
                        <Input
                            type="number"
                            defaultValue=""
                            label="Ano Letivo"
                            {...register('year', {
                                required: true,
                            })}
                            readOnly
                            // placeholder="Digite o ano atual"
                        />
                        <Select
                            // ="Ação"
                            label="Ensino"
                            error={formState.errors.teaching}
                            {...register('teaching', {
                                required: true,
                            })}
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
                                    value: 'primeiro',
                                    text: 'Primeiro Ano',
                                    key: 'primeiro',
                                },
                                {
                                    value: 'segunda',
                                    text: 'Segundo Ano',
                                    key: 'segunda',
                                },
                                {
                                    value: 'terceiro',
                                    text: 'Terceiro Ano',
                                    key: 'terceiro',
                                },
                                {
                                    value: 'quarto',
                                    text: 'Quarto Ano',
                                    key: 'quarto',
                                },
                                {
                                    value: 'quinto',
                                    text: 'Quinto Ano',
                                    key: 'quinto',
                                },
                                {
                                    value: 'sexto',
                                    text: 'Sexto Ano',
                                    key: 'sexto',
                                },
                                {
                                    value: 'setimo',
                                    text: 'Sétimo Ano',
                                    key: 'setimo',
                                },
                                {
                                    value: 'oitavo',
                                    text: 'Oitavo Ano',
                                    key: 'oitavo',
                                },
                                {
                                    value: 'nono',
                                    text: 'Nono Ano',
                                    key: 'nono',
                                },
                                {
                                    value: 'primeiro_medio',
                                    text: 'Primeiro Médio',
                                    key: 'primeiro_medio',
                                },
                                {
                                    value: 'segundo_medio',
                                    text: 'Segundo Médio',
                                    key: 'segundo_medio',
                                },
                                {
                                    value: 'terceiro_medio',
                                    text: 'Terceiro Médio',
                                    key: 'terceiro_medio',
                                },
                            ]}
                        />
                        <Input
                            type="text"
                            label="Turma"
                            placeholder="Exemplo: A, B ou C"
                            error={formState.errors.classType}
                            {...register('classType', {
                                required: true,
                            })}
                        />

                        <Input
                            type="text"
                            label="Período"
                            placeholder="Exemplo: manhã"
                            error={formState.errors.period}
                            {...register('period', {
                                required: true,
                            })}
                        />
                        <div className="grid grid-cols-2 gap-x-2">
                            <label className="block text-base text-start text-gray-600 mt-2 ml-2 col-span-2">
                                Horários de Aula
                            </label>
                            <Input
                                type="number"
                                defaultValue="0"
                                label="Início"
                                error={formState.errors.classStart}
                                {...register('classStart', {
                                    required: true,
                                })}
                            />
                            <Input
                                type="number"
                                defaultValue="0"
                                label="Término"
                                error={formState.errors.classFinish}
                                {...register('classFinish', {
                                    required: true,
                                })}
                            />
                        </div>
                        <Input
                            type="number"
                            defaultValue="0"
                            label="Quantidade máxima de alunos"
                            error={formState.errors.totalClassMates}
                            {...register('totalClassMates', {
                                required: true,
                            })}
                        />
                    </Toogle>
                    <Toogle title="Matérias">
                        <>
                            <ul>
                                {matters.map((field, index) => {
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
                                                onClick={() =>
                                                    removeMatter(index)
                                                }
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
                                    appendMatter({
                                        id: undefined,
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
                        <>
                            <ul>
                                {classMates.map((field, index) => {
                                    return (
                                        <li
                                            key={field.id}
                                            className="grid grid-cols-7 gap-4"
                                        >
                                            <Input
                                                labelClassName="col-span-2"
                                                type="text"
                                                label="R.A."
                                                placeholder="R.A."
                                                {...register(
                                                    `classMates.${index}.ra`,
                                                )}
                                                readOnly
                                            />
                                            <Select
                                                label="Aluno"
                                                // error={formState.errors.action}
                                                {...register(
                                                    `classMates.${index}.classMate`,
                                                )}
                                                divClassName="col-span-4"
                                                options={[
                                                    {
                                                        value: 'bercario',
                                                        text: 'Joãozinho',
                                                        key: 'bercario',
                                                    },
                                                    {
                                                        value: 'mini_maternal',
                                                        text: 'Maria',
                                                        key: 'mini_maternal',
                                                    },
                                                ]}
                                            />
                                            <button
                                                onClick={() =>
                                                    removeClassMates(index)
                                                }
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
                                    appendClassMates({
                                        id: undefined,
                                        ra: '',
                                        classMate: '',
                                    });
                                }}
                                className="flex items-center justify-center py-4 cursor-pointer border-2 border-dashed bg-white hover:bg-[#e0e0e0] border-[#677074] transition rounded-lg"
                            >
                                <FaPlusCircle className="border-none text-gray-700 mr-2" />
                                Adicionar Alunos
                            </button>
                        </>
                    </Toogle>
                </ContentBodyForm>
            </form>
        </Layout>
    );
}

export default ClassForm;

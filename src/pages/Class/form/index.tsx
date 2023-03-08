/* eslint-disable react/no-array-index-key */
import React from 'react';
import { ContentHeader, ContentBodyForm } from '../../../components/Content';
import { Layout } from '../../../components/Layout';
import { Input } from '../../../components/Layout/components/Input';
import { Toogle } from '../../../components/Layout/components/Toogle';
import { Select } from '../../../components/Select';

function ClassForm() {
    return (
        <Layout>
            <ContentHeader title="Classes" button={false}>
                {/* Colocar o elemento de search */}
                {/* <div></div>
                <p>Search</p> */}
            </ContentHeader>
            <ContentBodyForm>
                <Toogle title="Informações Gerais" startOpen>
                    <Input type="text" placeholder="Ano" />
                    <Select
                        // label="Ação"
                        placeholder="Selecione uma Série"
                        // error={formState.errors.action}
                        // {...register('action')}
                        options={[
                            { value: '1', text: 'Primeira Série', key: '1' },
                            { value: '2', text: 'Segunda Série', key: '2' },
                            { value: '3', text: 'Terceira Série', key: '3' },
                            { value: '4', text: 'Quarta Série', key: '4' },
                            { value: '5', text: 'Quinta Série', key: '5' },
                        ]}
                        // readOnly={mode !== 'edit' && mode !== 'insert'}
                    />
                    <Input type="text" placeholder="Tipo" />
                    <Input type="text" placeholder="Período" />
                    <Input type="text" placeholder="Horários de Aula" />
                    <Input
                        type="number"
                        defaultValue=""
                        placeholder="Quantidade máxima de alunos"
                    />
                </Toogle>
                <Toogle title="Matérias">
                    <Input type="text" placeholder="Ano" />
                    <Input
                        type="number"
                        defaultValue=""
                        placeholder="Quantidade máxima de alunos"
                    />
                </Toogle>
                <Toogle title="Informações Gerais" startOpen>
                    <Input type="text" placeholder="Ano" />
                    <Input type="text" placeholder="Série" />
                    <Input type="text" placeholder="Tipo" />
                    <Input type="text" placeholder="Período" />
                    <Input type="text" placeholder="Horários de Aula" />
                    <Input
                        type="number"
                        defaultValue=""
                        placeholder="Quantidade máxima de alunos"
                    />
                </Toogle>
            </ContentBodyForm>
        </Layout>
    );
}

export default ClassForm;

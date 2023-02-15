import React from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// import logo from '../public/assets/images/logo.png';

const loginSchema = yup
    .object({
        email: yup
            .string()
            .required('E-mail obrigatório')
            .email('E-mail inválido'),
        password: yup
            .string()
            .min(6, 'Minimo de 6 caracteres')
            .required('Senha obrigatória'),
    })
    .required();

interface IFormProps {
    email: string;
    password: string;
}

function Login() {
    const { register, handleSubmit, formState } = useForm<IFormProps>({
        resolver: yupResolver(loginSchema),
    });

    const handleSignIn: SubmitHandler<IFormProps> = async data => {
        console.log(data);
    };

    return (
        <div className="flex justify-center items-center h-screen w-full bg-[#EBDDE2]">
            <div className="flex flex-col justify-center bg-white h-96 w-96 rounded-lg p-12">
                <div className="text-center">
                    <img
                        className="m-auto w-10 mb-2"
                        src="./images/logo.png"
                        alt="Logo"
                    />
                    <h1 className="text-lg">Grape</h1>
                </div>
                <form
                    onSubmit={handleSubmit(handleSignIn)}
                    className="w-full flex flex-col justify-center content-center"
                >
                    <div className="flex items-center border-b border-teal-500 py-2">
                        <FaUserAlt />
                        <input
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="text"
                            placeholder="Usuário"
                            aria-label="Full name"
                            {...register('email', {
                                required: true,
                            })}
                        />
                    </div>
                    {formState.errors.email?.message && (
                        <span className="text-red-500 text-sm">
                            {formState.errors.email.message}
                        </span>
                    )}
                    <div className="flex items-center border-b border-teal-500 py-2">
                        <FaLock />
                        <input
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="password"
                            placeholder="Senha"
                            aria-label="Full name"
                            {...register('password', {
                                required: true,
                            })}
                        />
                    </div>
                    {formState.errors.password?.message && (
                        <span className="text-red-500 text-sm">
                            {formState.errors.password.message}
                        </span>
                    )}
                    <p className="text-xs text-center my-5">
                        Esqueceu a senha?
                    </p>
                    <button
                        type="submit"
                        className="mx-auto w-[241px] h-[45px] bg-[#95C37D]"
                    >
                        Acessar
                    </button>
                    <p className="text-xs text-center my-5">
                        Não tem cadastro?
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;

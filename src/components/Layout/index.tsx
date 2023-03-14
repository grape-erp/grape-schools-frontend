/* eslint-disable import/no-extraneous-dependencies */
import { ReactNode, useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// import { Logo } from '../Logo';
import { FaSignOutAlt } from 'react-icons/fa';
import { Menu } from './components/Menu';
import { MenuTop } from './components/Menu/MenuTop';
import { MenuItem } from './components/Menu/MenuItem';
import { MenuOptions } from './components/Menu/MenuOptions';
import { Sidebar } from './components/Sidebar';
// import { Button } from '../Button';
import { Container } from '../Container';
import { Content } from '../Content';

// import { MenuGroup } from './components/Menu/MenuGroup';

import Header from './components/Header';

interface ILayoutProps {
    children: ReactNode;
}

export function Layout({ children }: ILayoutProps) {
    const location = useLocation();

    const navigate = useNavigate();
    const [isMenuClosed, setIsMenuClosed] = useState(true);
    // const { signOut } = useAuth();

    const handleSignOut = useCallback(() => {
        // signOut();
        console.log('======');
    }, []);
    // }, [signOut]);

    const handleOpenCloseMenu = useCallback(() => {
        setIsMenuClosed(prev => !prev);
    }, []);

    // useEffect(() => {
    //     setIsMenuClosed(true);
    // }, [router.asPath]);

    return (
        <Container>
            <Sidebar
                isMenuClosed={isMenuClosed}
                addClassName="text-gray-50
                text-xs"
            >
                <Menu>
                    <MenuTop>
                        <h1 className=" text-[#263238] text-4xl font-medium">
                            Grape
                        </h1>
                    </MenuTop>
                    <MenuOptions>
                        <MenuItem
                            iconName="fluent:class-24-regular"
                            onClick={() => navigate('/class')}
                            selected={location.pathname === '/class'}
                        >
                            Classes
                        </MenuItem>
                        <MenuItem iconName="ph:student-light">Alunos</MenuItem>
                        <MenuItem iconName="ph:users">Colaboradores</MenuItem>
                        <MenuItem iconName="uil:diary" disable>
                            Diários de Classe
                        </MenuItem>
                        <MenuItem
                            iconName="healthicons:i-exam-qualification-outline"
                            disable
                        >
                            Boletim
                        </MenuItem>
                        <MenuItem iconName="uil:users-alt" disable>
                            Mural de Classe
                        </MenuItem>
                        <MenuItem
                            iconName="material-symbols:attach-money"
                            disable
                        >
                            Controle Financeiro
                        </MenuItem>
                        {/* <MenuGroup iconName="FaRegSun" label="Configurações">
                            <MenuItem iconName="FaBuilding" href="/company">
                                Empresas
                            </MenuItem>
                            <MenuItem iconName="FaUser" href="/users">
                                Usuários
                            </MenuItem>
                        </MenuGroup> */}
                        <MenuItem>
                            <div className="mt-4 space-y-1">
                                <p className="text-sm font-medium text-gray-300">
                                    Perfil
                                </p>
                                <h2 className="text-xl text-black font-medium">
                                    Luan Petruitis
                                </h2>
                                <p className="text-sm font-medium text-gray-300">
                                    email@gmail.com
                                </p>
                            </div>
                        </MenuItem>
                        <div
                            className={`
                                px-4
                                space-y-1
                                flex
                                items-center
                            `}
                        >
                            <button
                                className="cursor-pointer rounded-md transition duration-200 bg-[#d3d4d6] hover:bg-[#b2b4b5] w-full text-xl font-normal flex justify-center items-center py-2"
                                onClick={handleSignOut}
                            >
                                <FaSignOutAlt className="md:mr-2" />
                                <span className="hidden md:block">Sair</span>
                            </button>
                        </div>
                    </MenuOptions>
                </Menu>
            </Sidebar>
            <Content>
                <Header
                    addClassName="text-gray-50"
                    onButtonClick={handleOpenCloseMenu}
                />
                {children}
            </Content>
        </Container>
    );
}

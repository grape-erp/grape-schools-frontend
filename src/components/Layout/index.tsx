import { ReactNode, useCallback, useState } from 'react';

// import { Logo } from '../Logo';
import { Menu } from './components/Menu';
import { MenuTop } from './components/Menu/MenuTop';
import { MenuItem } from './components/Menu/MenuItem';
import { MenuOptions } from './components/Menu/MenuOptions';
import { Sidebar } from './components/Sidebar';
import { Button } from '../Button';
import { Container } from '../Container';
import { Content } from '../Content';

import { MenuGroup } from './components/Menu/MenuGroup';

import Header from './components/Header';

interface ILayoutProps {
    children: ReactNode;
}

export function Layout({ children }: ILayoutProps) {
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
                        {/* <Logo
                            vertical
                            addClassName="hidden md:block bg-white rounded-md p-1"
                        /> */}
                        <Button
                            pattern="confirm"
                            iconName="FaPlus"
                            iconClass="flex justify-center items-center"
                        >
                            Novo Pedido
                        </Button>
                    </MenuTop>
                    <MenuOptions>
                        <MenuItem iconName="FaWpforms" href="/documents">
                            Notas fiscais
                        </MenuItem>
                        <MenuItem
                            iconName="FaRegKeyboard"
                            href="/documents-occurrences"
                        >
                            Ocorrências
                        </MenuItem>
                        <MenuGroup iconName="FaPlus" label="Cadastro">
                            <MenuItem iconName="FaMap" href="/senders">
                                Remetentes
                            </MenuItem>
                            <MenuItem iconName="FaTruck" href="/transporters">
                                Transportadores
                            </MenuItem>
                            <MenuItem
                                iconName="FaBriefcaseMedical"
                                href="/occurrences"
                            >
                                Ocorrências
                            </MenuItem>
                        </MenuGroup>
                        <MenuGroup iconName="FaRegSun" label="Configurações">
                            <MenuItem iconName="FaBuilding" href="/company">
                                Empresas
                            </MenuItem>
                            <MenuItem iconName="FaUser" href="/users">
                                Usuários
                            </MenuItem>
                        </MenuGroup>
                    </MenuOptions>
                </Menu>
                <MenuItem iconName="FaPowerOff" onClick={handleSignOut}>
                    Sair
                </MenuItem>
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

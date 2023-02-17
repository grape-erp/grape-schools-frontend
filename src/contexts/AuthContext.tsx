/* eslint-disable react/jsx-no-constructed-context-values */
import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react';
import { setCookie, destroyCookie, parseCookies } from 'nookies';

import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { showNotification } from '../utils/notification';

interface ICompany {
    id: string;
}

interface ISignInData {
    email: string;
    password: string;
}

interface IUser {
    id: string;
    name: string;
}

// interface IAuthContextData {
//     user?: IUser;
//     company?: ICompany;
//     changeCompany: (company: ICompany) => void;
//     isAuthenticated: boolean;
//     signIn: (data: ISignInData) => Promise<ICompany[]>;
//     signOut: () => void;
// }

export function cleanCookies(redirectToLogin = false) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();

    destroyCookie(undefined, 'docs.token');
    destroyCookie(undefined, 'docs.refreshToken');
    destroyCookie(undefined, 'docs.company');
    destroyCookie(undefined, 'docs.user');
    delete api.defaults.headers['x-company'];
    delete api.defaults.headers['authorization'];

    if (redirectToLogin) {
        navigate('/');
    }
}

export const AuthContext = createContext({});
// IAuthContextData
export function AuthProvider({ children }) {
    // const navigate = useNavigate();

    const [user, setUser] = useState<IUser>(() => {
        const cookies = parseCookies();

        if (cookies['grape.user']) {
            return JSON.parse(cookies['grape.user']);
        }

        return null;
    });

    const [company, setCompany] = useState<ICompany>(() => {
        const cookies = parseCookies();

        if (cookies['grape.company']) {
            return JSON.parse(cookies['grape.company']);
        }

        return null;
    });

    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        const cookies = parseCookies();

        if (cookies['grape.token']) {
            return true;
        }

        return false;
    });

    const signIn = useCallback(async function signIn(
        data: ISignInData,
    ): Promise<ICompany[]> {
        try {
            const response = await api.post('/login', data);

            const { token, companies, user } = response.data;

            setCookie(undefined, 'grape.token', token, {
                maxAge: 60 * 60 * 12 * 1, // 1 hour
            });

            api.defaults.headers[
                'Authorization'
            ] = `Bearer ${response.data.token}`;

            setIsAuthenticated(true);

            setCookie(undefined, 'grape.user', JSON.stringify(user));

            setUser(user);
            // if (companies.length === 1) {
            //     changeCompany(companies[0]);
            // }

            return companies;
        } catch (error) {
            // console.log('Erro ao logar', JSON.stringify(error, null, 2));

            showNotification({ message: 'Login inválido.' });

            return [];
        }
    },
    []);

    const signOut = useCallback(function signOut() {
        delete api.defaults.headers['x-company'];
        cleanCookies();
        setCompany(null);
        setIsAuthenticated(false);
    }, []);

    const value = useMemo(
        () => ({
            signIn,
            signOut,
            isAuthenticated,
            user,
            company,
            // changeCompany,
        }),
        [signIn, signOut, isAuthenticated, company, user],
        // signIn, signOut, , changeCompany
    );

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}

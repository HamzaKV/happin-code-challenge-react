import React, { createContext, useState } from 'react';
import useCacheState from '../hooks/cache-state';
import usePersistentCacheState from '../hooks/persistant-cache-state';

interface IProps {
    children: React.ReactNode;
    logoutQuery: (token: string) => Promise<any>;
}

interface IContext {
    auth: boolean;
    setAuth: React.Dispatch<React.SetStateAction<boolean>>;
    getAccessToken: () => string;
    setAccessToken: (newValue: string) => void;
    getRefreshToken: () => string;
    setRefreshToken: (newValue: string) => void;
    logout: () => void;
}

const AuthContext = createContext<Partial<IContext>>({
    auth: false
});

const AuthContextProvider = (props: IProps) => {
    const [auth, setAuth] = useState<boolean>(false);
    const [getAccessToken, setAccessToken] = useCacheState<string>('');
    const [getRefreshToken, setRefreshToken] = usePersistentCacheState<string>(
        'token',
        ''
    );

    const logout = () => {
        props.logoutQuery(getAccessToken());
        setAuth(false);
        setAccessToken('');
        setRefreshToken('');
    };

    const value = {
        auth,
        setAuth,
        getAccessToken,
        setAccessToken,
        getRefreshToken,
        setRefreshToken,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    );
};

export { AuthContextProvider, AuthContext };

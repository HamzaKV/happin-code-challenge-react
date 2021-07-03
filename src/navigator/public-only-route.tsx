import { FC, useContext } from 'react';
import {
    Route,
    Redirect,
    RouteProps
} from 'react-router-dom';
import { AuthContext } from '../controls/contexts/auth';

interface IProps extends RouteProps{
    redirect?: string;
}

const PublicOnlyRoute: FC<IProps> = ({ children, redirect = '/', ...rest }) => {
    const { auth } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth ? (
                    <Redirect
                        to={{
                            pathname: redirect,
                            state: { from: location },
                        }}
                    />
                ) : (
                    children
                )
            }
        />
    );
};

export default PublicOnlyRoute;
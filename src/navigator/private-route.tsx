import { FC, useContext } from 'react';
import {
    Route,
    Redirect,
    RouteProps
} from 'react-router-dom';
import { AuthContext } from '../controls/contexts/auth';

interface IProps extends RouteProps {
}

const PrivateRoute: FC<IProps> = ({ children, ...rest }) => {
    const { auth } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
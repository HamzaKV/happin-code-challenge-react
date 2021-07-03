import { FC } from 'react';
import {
    Route,
    RouteProps
} from 'react-router-dom';

interface IProps extends RouteProps {
}

const PublicRoute: FC<IProps> = ({ children, ...rest }) => (
    <Route {...rest}>
        {children}
    </Route>
);

export default PublicRoute;
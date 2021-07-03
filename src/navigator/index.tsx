import { FC } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import PublicRoute from './public-route';
import PublicOnlyRoute from './public-only-route';
import PrivateRoute from './private-route';
import ErrorBoundary from '../screens/Error';
import NotFoundScreen from '../screens/NotFound';
import { MainTemplate } from '../components';

interface IProps {
    routes: Array<{
        path: string;
        exact: boolean;
        Component: React.ReactNode;
        type: 'public' | 'publiconly' | 'private';
        redirect?: string;
        title: string;
    }>;
}

const Navigator: FC<IProps> = ({ routes }) => {
    return (
        <ErrorBoundary>
            <Router>
                <MainTemplate>
                    <Switch>
                        {routes.map((item) => {
                            switch (item.type) {
                                case 'public':
                                    return (
                                        <PublicRoute
                                            key={item.path}
                                            exact={item.exact}
                                            path={item.path}
                                        >
                                            {item.Component}
                                        </PublicRoute>
                                    );
                                case 'publiconly':
                                    return (
                                        <PublicOnlyRoute
                                            key={item.path}
                                            exact={item.exact}
                                            path={item.path}
                                            redirect={item.redirect}
                                        >
                                            {item.Component}
                                        </PublicOnlyRoute>
                                    );
                                case 'private':
                                default:
                                    return (
                                        <PrivateRoute
                                            key={item.path}
                                            exact={item.exact}
                                            path={item.path}
                                        >
                                            {item.Component}
                                        </PrivateRoute>
                                    );
                            }
                        })}
                        <Route path='*'>
                            <NotFoundScreen />
                        </Route>
                    </Switch>
                </MainTemplate>
            </Router>
        </ErrorBoundary>
    );
};

export default Navigator;
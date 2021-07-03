import HomeScreen from '../screens/Home';

type RoutesArray = Array<{
    path: string;
    exact: boolean;
    Component: React.ReactNode;
    type: 'public' | 'publiconly' | 'private';
    redirect?: string;
    title: string;
}>;

const routes: RoutesArray = [
    {
        path: '/',
        exact: true,
        Component: <HomeScreen />,
        type: 'public',
        title: 'Home',
    }
];

export default routes;
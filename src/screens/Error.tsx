import React from 'react';
import Logger from '../services/logger';
import { ErrorPage } from '../components';

interface IProps {
    children: React.ReactNode;
}

interface IState {
    hasError: boolean;
}

export default class ErrorBoundary extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: any) {
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any) {
        console.error(error, errorInfo);
        Logger.error('REACT UNEXPECTED', error.message);
    }

    render() {
        if (this.state.hasError) {
            return <ErrorPage />;
        }
        return this.props.children;
    }
}

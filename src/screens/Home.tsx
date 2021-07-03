import { useEffect } from 'react';
import { HomePage, ContextComposer } from '../components';
import { BooksProvider, useBooksDispatch } from '../controls/store/books-store';
import {
    CitiesProvider,
    useCitiesDispatch,
} from '../controls/store/cities-store';
import Strings from '../constants/Strings';

const { cities, books } = Strings;

const Home = () => {
    const booksDispatch = useBooksDispatch();
    const citiesDispatch = useCitiesDispatch();

    useEffect(() => {
        booksDispatch({ type: 'seed', payload: books });
        citiesDispatch({ type: 'seed', payload: cities });
    }, []);

    return <HomePage />;
};

export default ContextComposer(
    Home,
    CitiesProvider, 
    BooksProvider
);

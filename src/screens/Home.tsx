import { useEffect } from 'react';
import { HomePage } from '../components';
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

const HomeRoot = () => (
    <CitiesProvider>
        <BooksProvider>
            <Home />
        </BooksProvider>
    </CitiesProvider>
);

export default HomeRoot;

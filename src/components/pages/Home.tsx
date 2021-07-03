import { Page, Section, Container, AutoComplete, Text } from '../';
import { useBooks } from '../..//controls/store/books-store';
import { useCities } from '../../controls/store/cities-store';

const HomePage = () => {
    const books = useBooks();
    const cities = useCities();

    return (
        <Page>
            <Section style={{ margin: 'auto' }}>
                <Container
                    style={{
                        margin: 'auto',
                        width: 300,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text type='t6'>Cities</Text>
                    <AutoComplete items={cities} name='cities' autoFocus />
                    <Text type='t6' style={{ marginTop: 25 }}>
                        Books
                    </Text>
                    <AutoComplete
                        items={books.map((book) => book.title)}
                        name='books'
                        ItemComponent={({ item }: { item: string }) => (
                            <>
                                <div>Title: {item}</div>
                                <div>
                                    Author: {
                                        books.find(
                                            (book) => book.title === item
                                        )?.author
                                    }
                                </div>
                            </>
                        )}
                    />
                </Container>
            </Section>
        </Page>
    );
};

export default HomePage;

import { Page, Section, Container, AutoComplete } from '../';

const HomePage = () => (
    <Page>
        <Section style={{ margin: 'auto 0' }}>
            <Container style={{ margin: 'auto', width: 200 }}>
                <AutoComplete
                    items={[
                        { value: 'Canada', label: 'Canada' },
                        { value: 'United States', label: 'United States' },
                    ]}
                    name='cities'
                />
            </Container>
        </Section>
    </Page>
);

export default HomePage;

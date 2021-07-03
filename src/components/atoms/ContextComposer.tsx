const ContextComposer =
    (ChildComponent: any, ...ContextComponents: any[]) =>
        () =>
            compose(ChildComponent, ...ContextComponents);

const compose: any = (ChildComponent: any, ...ContextComponents: any[]) => {
    const Contexts = ContextComponents;
    const Context = Contexts.pop();

    const Component = () => (
        <Context>
            <ChildComponent />
        </Context>
    );
    
    return Contexts.length === 0 ? <Component /> : (
        compose(
            Component,
            ...Contexts
        )
    );
};

export default ContextComposer;

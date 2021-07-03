
const ContextComposer = (ChildComponent: any, ContextComponents: any[]) =>
    compose(ChildComponent, ContextComponents);

const compose: any = (ChildComponent: any, ContextComponents: any[]) => {
    const Contexts = ContextComponents;
    const Context = Contexts.pop();

    return ContextComponents.length === 0
        ? ChildComponent
        : compose(
            <Context>
                <ChildComponent />
            </Context>,
            Contexts
        );
};

export default ContextComposer;
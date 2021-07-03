// eslint-disable-next-line import/no-anonymous-default-export
export default ({
    validArray: (arr: any[]) => {
        return Array.isArray(arr) && arr.length > 0;
    },
});
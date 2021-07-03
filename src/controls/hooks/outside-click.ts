import { useEffect, useRef } from 'react';

const useOutsideClick = (
    ref: any,
    callback: (event: MouseEvent) => void,
    ...excludedRefs: any[]
): void => {
    const callBackRef = useRef<(event: MouseEvent) => void>();
    callBackRef.current = callback;

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!ref.current?.contains(event.target) && callBackRef.current) {
                for (const excludedRef of excludedRefs) {
                    if (excludedRef.current?.contains(event.target)) {
                        return;
                    }
                }
                callBackRef.current(event);
            }
        };

        document.addEventListener('click', handleClickOutside, true);

        return (): void => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [ref, callback, excludedRefs]);
};

export default useOutsideClick;

export { ThemeContext, ThemeContextProvider } from './contexts/theme';

export { default as useDebounceState } from './hooks/debounce-state';
export { default as useCacheState } from './hooks/cache-state';
export { default as usePersistentState } from './hooks/persistant-state';
export { 
    default as usePersistentCacheState 
} from './hooks/persistant-cache-state';
export { default as useFetch, Status as FetchStatus } from './hooks/fetch';
export { default as usePagination } from './hooks/fetch-pagination';
export { default as useDarkTheme } from './hooks/dark-theme';
export { default as useDevice, breakpoints } from './hooks/device';
export { default as useOutsideClick } from './hooks/outside-click';
export { default as useColors } from './hooks/colors';

export { default as makeStore} from './store/make-store';

export type { IProps as ThemeContextProps } from './contexts/theme';
import { ReactNode } from "react";

declare module 'fetcher-lala/components/FetchLoader' {
    export interface IFetchLoaderProps<T> {
        Loader: () => ReactNode;
        children: (p: any) => Promise<ReactNode> | Promise<void>;
        payload?: T;
        deps?: any[];
        errorText?: string
    }
}
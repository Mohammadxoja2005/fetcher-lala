import { ReactNode } from "react";

declare module 'fetcher-lala' {
    interface IFetchLoaderProps<T> {
        Loader: () => ReactNode
        children: (p: any) => Promise<ReactNode> | Promise<void>
        payload?: T
        deps?: any[]
        errorText?: string
    }

    export const FetchLoader: (children: (p: any) => Promise<ReactNode> | Promise<void>) => JSX.Element; 
}
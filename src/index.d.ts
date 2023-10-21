import { ReactNode } from "react";

declare module 'fetcher-lala' {
    interface IFetchLoaderProps<T> {
        Loader: () => ReactNode
        children: (p: any) => Promise<ReactNode> | Promise<void>
        payload?: T
        deps?: any[]
        errorText?: string
    }

    export default function FetchLoader<T extends {}>({Loader, children, payload, deps, errorText}: IFetchLoaderProps<T>); 
}
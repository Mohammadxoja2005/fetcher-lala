import { ReactNode, useEffect, useState } from "react"
import { flushSync } from "react-dom"

interface IFetchLoaderProps<T> {
    Loader: () => ReactNode
    children: (p: any) => Promise<ReactNode> | Promise<void>
    payload?: T
    deps?: any[]
    errorText?: string
}

export const FetchLoader = <T extends {}>(props: IFetchLoaderProps<T>): any => {
    const { children, Loader, payload, deps = [], errorText } = props
    const [loading, setLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [child, setChild] = useState<any>()

    const loaderExecution = async () => {
        let isCancel = false
        try {
            const result = await children(payload!);

            if (!result) {
                isCancel = true
                return;
            };

            // flushSync is used to prevent batching
            flushSync(() => {
                setChild(result);
            })

        } catch (error) {
            setIsError(true)
            throw error;
        } finally {
            if (!isCancel) {
                setLoading(false)
            }
        }
    }

    useEffect(() => {
        loaderExecution()
    }, [payload, ...deps])

    if (isError) {
        return errorText ?
            errorText :
            "Error happened during fetching, please check your API or internet connection"
    }

    if (loading) {
        return <>{Loader()}</>
    }

    if (!loading) {
        return (
            <>{child}</>
        )
    }
}

export default FetchLoader;
import { ReactNode, useEffect, useState } from "react";

interface IFetchLoaderProps<T> {
    Loader: () => ReactNode;
    children: (p: any) => Promise<ReactNode> | Promise<void>;
    payload?: T;
    deps?: any[];
}

export const FetchLoader = <T extends {}>(props: IFetchLoaderProps<T>) => {
    const { children, Loader, payload, deps = [] } = props;
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [child, setChild] = useState<any>();

    const loaderExecution = async () => {
        let isCancel = false;
        try {
            const result = await children(payload!);

            if (!result) isCancel = true; 
            
            queueMicrotask(() => {
                setChild(result);
            })

        } catch (error) {
            setIsError(true);
            throw error;
        } finally {
            if (!isCancel) {
                setLoading(false);
            }
        }
    }

    // const checkResult = async () => {
    //     let isCancel = false;

    //     try {
    //         const result = await loaderExecution();
    //         if (!result) {
    //             isCancel = true;
    //             return;
    //         }

    //         queueMicrotask(() => {
    //             setChild(result);
    //         })
    //     } catch (error) {
    //         setIsError(true);
    //         throw error;
    //     } finally {
    //         if (!isCancel) {
    //             setLoading(false);
    //         }
    //     }
    // }


    useEffect(() => {
        loaderExecution()
    }, [payload, ...deps])

    if (isError) {
        return "Error happened during fetching, please check your API or internet connection";
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
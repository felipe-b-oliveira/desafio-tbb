import { ProductsFetchResponse } from "@/types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const fetcher = async (): Promise<ProductsFetchResponse> => {
    try {
        const res = await axios.get('http://localhost:3333/data');
        return res.data
        // dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
        //TODO: Send to analytics / TrackingService.sendException(error)
        console.log(error)
        throw error;
        // dispatch({ type: "API_ERROR" });
    }
}

export function useProducts() {
    const { data } = useQuery({
        queryFn: fetcher,
        queryKey: ['products']
    })

    return {
        data: data?.nodes
    }
}
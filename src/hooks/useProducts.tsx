import { ProductsFetchResponse } from "@/types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useFilter } from "./useFilter";
import { useDeferredValue } from "react";

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
    const { search, category } = useFilter()
    const searchDeferred = useDeferredValue(search)

    const { data } = useQuery({
        queryFn: fetcher,
        queryKey: ['products']
    })

    const products = data?.nodes
    const filteredProducts = products?.filter(product => product.name.toLocaleLowerCase().includes(searchDeferred.toLocaleLowerCase()))

    const filteredCategory = filteredProducts?.filter(product => product.category.name.toLocaleLowerCase().includes(category.toLocaleLowerCase()))

    return {
        data: filteredCategory
    }
}
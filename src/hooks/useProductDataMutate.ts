import axios, { AxiosPromise } from "axios";
import { ProductData } from "../interfaces/ProductData";
import { useMutation, useQueryClient } from "react-query";

const API_URL = 'http://localhost:8080';

const postData = async (data: ProductData): AxiosPromise<any> => {
    return await axios.post(API_URL + '/product', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export function useProductDataMutate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['product-data']);
        }
    });
    return mutate;
}

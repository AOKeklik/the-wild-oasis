import { useQuery } from "@tanstack/react-query"
import { getCabins } from "../../services/apiCabins"

export default function useCabins () {
    const {
        data,
        error,
        isLoading
    } = useQuery ({
        queryKey: ['cabins'],
        queryFn: getCabins
    })

    return {isLoading, cabins: data, error}
}
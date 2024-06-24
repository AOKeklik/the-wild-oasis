import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteCabin } from "../../services/apiCabins"

export default function useDeleteCabin () {
    const queryClient = useQueryClient()

    const {isLoading: isDeleting ,mutate} = useMutation({
        mutationFn: id => deleteCabin(id),
        onSuccess: () => {
            console.log("Cabin successfully deleted")

            queryClient.invalidateQueries({
                queryKey: ["cabins"]
            })
        },
        onError: (err) => console.log(err.message)
    })

    return {isDeleting, mutate}
}
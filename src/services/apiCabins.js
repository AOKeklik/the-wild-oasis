import supabase from "./supabase"

export async function getCabins () {    
    let { data: cabins, error } = await supabase
        .from('cabins')
        .select('*')

    if (error) {
        console.log(error)
        throw new Error ("Cabins could not be loaded.")
    }

    return cabins
}

export async function deleteCabin (id) {
    const { data: cabin, error } = await supabase
        .from('cabins')
        .delete()
        .eq('id', id)

    if (error) {
        console.log(error)
        throw new Error ("The cabin could not be deleted.")
    }

    return cabin
}
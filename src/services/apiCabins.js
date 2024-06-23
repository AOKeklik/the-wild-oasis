import supabase from "./supabase"

export async function getCabins () {    
    let { data: cabins, error } = await supabase
        .from('cabins')
        .select('id')

    if (error) {
        console.log(error)
        throw new Error ("Cabins could not be loaded.")
    }

    return cabins

}
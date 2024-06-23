import { useEffect } from "react"
import { getCabins } from "../services/apiCabins"

export default function Cabins () {

    useEffect(function () {
        getCabins().then(cabins => console.log(cabins))
    }, [])

    return <h1>Cabins</h1>
}
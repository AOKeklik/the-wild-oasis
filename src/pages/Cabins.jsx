import CabinTable from "../features/cabins/CabinTable";
import Flex from "../ui/Flex";
import Heading from "../ui/Heading";


export default function Cabins () {
    return <>
        <Flex mdColumn>
            <Heading as="h2">All cabins</Heading>
            <p>Filter / Short</p>
        </Flex>

        <CabinTable />
    </>

}
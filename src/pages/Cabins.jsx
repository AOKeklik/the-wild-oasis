import styled from "styled-components";
import CabinTable from "../features/cabins/CabinTable";
import Flex from "../ui/Flex";
import Heading from "../ui/Heading";

const CabinsWrapper = styled.div`
    & > *:not(:last-child) {margin-bottom: 5rem}
`
export default function Cabins () {
    return <CabinsWrapper>
        <Flex mdColumn>
            <Heading as="h2">All cabins</Heading>
            <p>Filter / Short</p>
        </Flex>

        <CabinTable />
    </CabinsWrapper>

}
import styled from "styled-components"
import Loading from "../../ui/Loading"
import useCabins from "./useCabins"
import CabinRow from "./CabinRow"

const Table = styled.div`
    border: 1px solid var(--clr-gray-200);
    border-radius: 1rem;
    overflow: hidden;
`
const TableHeader = styled.header`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    text-transform: uppercase;
    background-color: var(--clr-gray-100);
    border-bottom: 1px solid var(--clr-gray-200);

    & > * {padding: 1rem 2rem;text-align: center;}
`
export default function CabinTable () {
    const {isLoading, cabins} = useCabins()

    console.log(cabins)

    if (isLoading) return <Loading />
    return <Table role="table">
        <TableHeader role="row">
            <span></span>
            <span>cabin</span>
            <span>capacity</span>
            <span>price</span>
            <span>discount</span>
            <span></span>
        </TableHeader>
        {cabins.map((val, i) => {
            return <CabinRow cabin={val} key={i} />
        })}
    </Table>
}
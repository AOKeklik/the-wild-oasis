import PropTypes from 'prop-types'
import styled from 'styled-components'
import formatCurrency from '../../utils/helpers'
import Button from '../../ui/Button'
import useDeleteCabin from './useDeleteCabin'

const TableRow = styled.div`
    display: grid;
    grid-template-columns: repeat(6,1fr);
    align-items: center;
    justify-items: center;
    background-color: #fff;
    padding: .5rem 0;

    &:not(:last-child) {border-bottom: 1px solid var(--clr-gray-200)}
`
const Image = styled.img`
    width: 6.4rem;
    aspect-ratio: 3 / 2;    
`
const Cabin = styled.div`
    font-weight: 600;
    font-family: var(--ff-sono);
`
const Price = styled.div`
    font-weight: 600;
    font-family: var(--ff-sono);
`
const Discount = styled.div`
    font-family: var(--ff-sono);
    color: var(--clr-green-700);
    font-weight: 600;
`
export default function CabinRow  ({cabin}) {
    const {isDeleting, mutate} = useDeleteCabin()
    const {id: cabinId, image, name, maxCapacity, regularPrice, discount} = cabin

    console.log(cabin)
    return <TableRow>
        <Image src={image} alt={name} />
        <Cabin>{name}</Cabin>
        <p>Fits up tp {maxCapacity} guests</p>
        <Price>{formatCurrency(regularPrice)}</Price>
        <Discount>{formatCurrency(discount)}</Discount>
        <Button disabled={isDeleting} onClick={() => mutate(cabinId)} size="lg" type="alert">DELETE</Button>
    </TableRow>
}

CabinRow.propTypes = {
    cabin: PropTypes.object
}
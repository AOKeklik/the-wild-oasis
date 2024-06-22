import { IoCalendar, IoCalendarOutline, IoExtensionPuzzleOutline, IoExtensionPuzzleSharp, IoHomeOutline, IoHomeSharp, IoPerson, IoPersonOutline } from "react-icons/io5"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

const MainNavList = styled.ul`
    display: flex;
    flex-direction: column;
`
const MainNavListLink = styled(NavLink)`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 2rem 3rem;
    transition: background-color .3s;
    font-weight: 600;
    color: var(--clr-gray-600);
    text-transform: capitalize;

    & svg {width: 2.5rem;height: 2.5rem;transition: opacity .3s}
    & span:first-child {position: relative;}
    & svg:nth-child(2) {opacity: 0;position: absolute;left: 0;}

    &:hover {background-color: var(--clr-gray-200)}
    &:hover svg:first-child {opacity: 0}
    &:hover svg:last-child {opacity: 1}
`
export default function MainNav () {
    return <nav>
        <MainNavList>
            <li>
                <MainNavListLink to="dashboard">
                    <span>
                        <IoHomeOutline />
                        <IoHomeSharp />
                    </span>
                    <span>dashboard</span>
                </MainNavListLink>
            </li>
            <li>
                <MainNavListLink to="bookings">
                    <span>
                        <IoCalendarOutline  />
                        <IoCalendar />
                    </span>
                    bookings
                </MainNavListLink>
            </li>
            <li>
                <MainNavListLink to="cabins">
                    <span>
                        <IoExtensionPuzzleOutline />
                        <IoExtensionPuzzleSharp />
                    </span>
                    cabins
                </MainNavListLink>
            </li>
            <li>
                <MainNavListLink to="users">
                    <span>
                        <IoPersonOutline />
                        <IoPerson />
                    </span>
                    users
                </MainNavListLink>
            </li>
        </MainNavList>
    </nav>
}
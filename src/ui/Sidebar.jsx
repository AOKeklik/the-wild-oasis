import styled from "styled-components"
import Logo from "./Logo"
import MainNav from "./MainNav"

const SidebarWrapper = styled.div`
    grid-row: 1 / -1;
    padding: 1.2rem 0;
    background-color: var(--clr-gray-0);
    
    & > * {display: block;}
    & > *:not(:last-child) {display: block;margin-bottom: 5rem;}
`

export default function Sidebar () {
    return <SidebarWrapper>
        <Logo />
        <MainNav />
    </SidebarWrapper>
}
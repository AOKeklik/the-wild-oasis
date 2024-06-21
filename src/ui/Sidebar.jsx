import styled from "styled-components"

const SidebarWrapper = styled.div`
    grid-row: 1 / -1;
    padding: 1.2rem 4.8rem;
    background-color: var(--clr-gray-0);
`

export default function Sidebar () {
    return <SidebarWrapper>sidebar</SidebarWrapper>
}
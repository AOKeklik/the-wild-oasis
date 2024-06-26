import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { Container } from "./Layout";

const AppLayoutWrapper = styled.div`
    display: grid;
    grid-template-columns: 26rem 1fr;
    grid-template-rows: auto 1fr;
    height: 100vh;
`
const Main = styled.main`
    background-color: var(--clr-gray-50);
    overflow-y: auto;
`

export default function AppLayout () {
    return <AppLayoutWrapper>
        <Header />
        <Sidebar />
        <Main>
            <Container>
                <Outlet />
            </Container>
        </Main>
    </AppLayoutWrapper>
}
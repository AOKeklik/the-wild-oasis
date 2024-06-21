import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const AppLayoutWrapper = styled.div`
    display: grid;
    grid-template-columns: 26rem 1fr;
    grid-template-rows: auto 1fr;
    height: 100vh;
`
const AppLayoutMain = styled.main`
    padding: 4rem 4.8rem 6.4rem;
    background-color: var(--clr-gray-100);
`
export default function AppLayout () {
    return <AppLayoutWrapper>
        <Header />
        <Sidebar />
        <AppLayoutMain>
            <Outlet />
        </AppLayoutMain>
    </AppLayoutWrapper>
}
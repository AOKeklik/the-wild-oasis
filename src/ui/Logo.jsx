import styled from "styled-components"
import logo from "/logo-dark.png"
import { Link } from "react-router-dom"

const LogoWrapper = styled.div`
    text-align: center;
`
const Img = styled.img`
    height: 9.6rem;
    width: auto;
`

export default function Logo () {
    return <Link to="dashboard">
        <LogoWrapper>
            <Img src={logo} alt="logo" />
        </LogoWrapper>
    </Link>
}
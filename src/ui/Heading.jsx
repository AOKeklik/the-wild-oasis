import styled, { css } from "styled-components";


const Heading = styled.h1`
    ${props =>
        props.as === "h1" && css`
        font-size: 6rem;
        font-weight: 300;
        line-height: 1.2;
    `}

    ${props =>
        props.as === "h2" && css`
        font-size: 3.75rem;
        font-weight: 300;
        line-height: 1.3;
    `}

    ${props =>
        props.as === "h3" && css`
        font-size: 3rem;
        font-weight: 400;
        line-height: 1.3;
    `}

    ${props =>
        props.as === "h4" && css`
        font-size: 2.125rem;
        font-weight: 400;
        line-height: 1.4;
    `}
`

Heading.defaultProps = {
    as: "h1",
}

export default Heading
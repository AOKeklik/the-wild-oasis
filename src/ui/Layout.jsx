/* sm - 640px - md - 768px - lg - 1024px - xl - 1280px - 2xl - 1536px */

import styled, { css } from "styled-components";


export const Container = styled.div`
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: center;

    ${props => css`
        --gap: ${props.gap || 0}rem;
        gap: ${props.gap || 0 }rem;
    `};
`

export const Col = styled.div`
    width: 100%;

    ${props => props.sm === "2" && css`
        @media (min-width: 640px) {
            width: calc((100% - 1 * var(--gap)) / 2);
        }
    `};

    ${props => props.md === "3" && css`
        @media (min-width: 768px) {
            width: calc((100% - 2 * var(--gap)) / 3);
        }
    `};
`

Row.defaultProps = {
    gap: 0,
}
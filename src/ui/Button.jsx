import styled, { css } from 'styled-components'


const sizes = {
    sm: css`
        padding: .4rem .8rem;
        border-radius: var(--radius-sm);
        font-size: 1.2rem;
        font-weight: 600;
    `,
    lg: css`
        padding: 1.2rem 2.4rem;
        border-radius: var(--radius-md);
        font-size: 1.6rem;
        font-weight: 500;
    `
}
const types = {
    normal: css`
        color: var(--clr-gray-100);
        background-color: var(--clr-gray-500);

        &:hover {
            background-color: var(--clr-gray-700);     
        }
    `,
    primary: css`
        color: var(--clr-indigo-100);
        background-color: var(--clr-indigo-500);

        &:hover {
            background-color: var(--clr-indigo-700);     
        }
    `
}
const Button = styled.button`

    ${props => sizes[props.size]}
    ${props => types[props.type]}
`

Button.defaultProps = {
    size: "sm",
    type: "normal",
}


export default Button
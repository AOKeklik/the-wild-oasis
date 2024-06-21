import styled, { css } from "styled-components";

const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: ${props => props.gap || 0}rem;
    
    
    flex-direction: ${props => props.vertical 
        ? "column"
        :  "row"
    };    

    @media (min-width: 768px) {
        ${props => props.mdHorizontal && css`
            flex-direction: row;    
        `};
    }
`

Flex.defaultProps = {
    vertical: false,
    mdHorizontal: false,
    gap: 0,
}

export default Flex
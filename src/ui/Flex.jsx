import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: ${(props) => props.gap || 0}rem;  

    
    ${(props) => props.mdColumn && css`
        flex-direction: column; 
        @media (min-width: 768px) {
            flex-direction: row;    
        }
    `}
`
Flex.propTypes = {
    mdColumn: PropTypes.bool,
    gap: PropTypes.number,
}

Flex.defaultProps = {
    mdColumn: false,
    gap: 0,
}

export default Flex
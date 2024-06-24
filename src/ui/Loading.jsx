import { TbLoader2 } from "react-icons/tb";
import styled from "styled-components";

const LoadingWrapper = styled.div`
    width: 100%;
    display: grid;
    place-items: center;
    height: 100%;

    & > svg {
        font-size: 5rem;
        animation: animate-spin linear infinite 1s;
    }
`
export default function Loading () {
    return <LoadingWrapper>
        <TbLoader2 />
    </LoadingWrapper>
}
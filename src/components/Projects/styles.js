import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f2f2f2;
    color: #012940;
    padding: 2rem 2rem 5rem 2rem;
    gap: 2rem;

    p {
        opacity: 0.8;
    }

    @media (max-width: 800px) {
        padding: 1rem;
        gap: 1rem;
    }
`;
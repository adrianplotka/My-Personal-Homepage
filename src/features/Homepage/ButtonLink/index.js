import styled from "styled-components";

export const ButtonLink = styled.a`
    text-decoration: none;
    padding: 12px 16px;
    font-weight: 600;
    font-size: 20px;
    color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.mischka};
    border-radius: 4px;
    background-color: ${({ theme }) => theme.color.blue};

    &:hover {
        box-shadow: 2px -2px 0px ${({ theme }) => theme.color.anakiwa};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;
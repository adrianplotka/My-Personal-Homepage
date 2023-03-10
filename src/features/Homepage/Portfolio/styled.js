import styled from "styled-components";

export const Article = styled.article`
    margin: 72px 0px 24px 0px;
    text-align: center;
    display: flex ;
    flex-direction: column;
    gap: 8px
`;

export const Header = styled.h2`    
    color: ${({ theme }) => theme.colors.priorityText};
    font-size: 30px;
    font-weight: 900;
    line-height: 36px;
    letter-spacing: 0.05em;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 18px;
    }
`;

export const Text = styled.p`
    color: ${({ theme }) => theme.colors.priorityText};
    margin: 0;
    font-size: 20px;
    font-weight: 400;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 17px;
    }
`;

export const Icon = styled.div`
    height: 39px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        height: 31px;
    }
`;

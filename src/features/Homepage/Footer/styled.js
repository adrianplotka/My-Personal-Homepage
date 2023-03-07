import styled from "styled-components";

export const Wrapper = styled.div`
    width: 670px;
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const SubHeader = styled.h2`
    color: ${({ theme }) => theme.colors.site.text};
    font-size: 12px;
    font-weight: 700;
    line-height: 1.3;
    text-transform: uppercase;
`;

export const Email = styled.a`
    color: ${({ theme }) => theme.colors.priorityText};
    text-decoration: none;
    font-size: 32px;
    font-weight: 900;
    cursor: pointer;
    transition: 0.3s;

     &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const Text = styled.p`
    color: ${({ theme }) => theme.colors.priorityText};
    font-size: 18px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0.05em;
    text-align: justify; 
`;

export const Container = styled.div`
    margin-top: 56px;
`;

export const Link = styled.a`
    display: inline-block;
    width: 48px;
    height: 48px;
    margin-right: 24px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.priorityText};
    transition: 0.3s;
    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;
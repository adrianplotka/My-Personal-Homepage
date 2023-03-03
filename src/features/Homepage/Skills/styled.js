import styled from "styled-components";

export const Div = styled.article`
    background-color: ${({ theme }) => theme.colors.boxBackground};
    margin-top: 62px;
    padding: 32px;
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
`;

export const Header = styled.h2`
    margin: 0;
    font-weight: 900;
    font-size: 30px;
    color: ${({ theme }) => theme.colors.priorityText};
    border-bottom: solid 1px ${({ theme }) => theme.colors.headerLine};
    padding-bottom: 15px;
`;

export const List = styled.ul`
    margin-top: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 8px 32px;
    text-decoration: none;
`;

export const Li = styled.li`
    display: flex;
    font-weight: 400;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.site.text};
    line-height: 1.4;
`;

export const Index = styled.img`
    margin-right: 16px;
    align-items: center;
    width: 9px;
`;
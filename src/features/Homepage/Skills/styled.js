import styled from "styled-components";

export const Div = styled.article`
    background-color: ${({ theme }) => theme.color.white};
    margin-top: 62px;
    padding: 32px;
`;

export const Header = styled.h2`
    margin: 0;
    font-weight: 900;
    font-size: 30px;
    color: ${({ theme }) => theme.color.black};
    border-bottom: solid 1px ${({ theme }) => theme.color.mischka};
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
    color: ${({ theme }) => theme.color.slateGray};
    line-height: 1.4;
`;

export const Index = styled.img`
    margin-right: 16px;
    align-items: center;
    width: 9px;
`;
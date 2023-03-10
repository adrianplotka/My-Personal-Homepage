import styled from "styled-components";
import { ButtonLink} from "../ButtonLink";
import { ReactComponent as iconEmail} from "./images/iconEmail.svg"

export const Container = styled.header`
    margin-top: -30px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 66px;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: auto;
        grid-gap: 12px
    }
`;

export const Image = styled.img`
    width: 30vw;
    max-width: 398px;
    border-radius: 50%;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 133px;
    }
`;

export const Small = styled.header`
    font-weight: 700;
    font-size: 12px;
`;

export const Name = styled.h1`
    color: ${({ theme }) => theme.colors.priorityText};
    font-weight: 900;
    font-size: 38px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 22px;
        line-height: 27px;
    }
`;

export const Text = styled.p`
    color: ${({ theme }) => theme.colors.site.text};
    font-weight: 400;
    font-size: 20px;
    max-width: 633px;
    line-height: 1.4;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 17px
    }
`;

export const StyledButtonLink = styled(ButtonLink)`
    display: inline-flex;
    align-items: center;
    margin-top: 32px;
`;

export const ButtonIcon = styled(iconEmail)`
    margin-right: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-right: 0px;
    }
`;
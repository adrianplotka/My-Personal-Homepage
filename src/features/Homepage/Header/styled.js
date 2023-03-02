import styled from "styled-components";
import { ButtonLink} from "../ButtonLink";
import { ReactComponent as iconEmail} from "./images/iconEmail.svg"

export const Container = styled.header`
    padding-top: 115px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 66px;
`;

export const Image = styled.img`
    width: 398px;
    height: 398px;
    border-radius: 90%;
`;

export const Content = styled.div`
    padding: 68px 0 68px 0;
`;

export const Small = styled.header`
    color: ${({ theme }) => theme.color.slateGray};
    font-weight: 700;
    font-size: 12px;
`;

export const Name = styled.h1`
    font-weight: 900;
    font-size: 38px;
`;

export const Text = styled.p`
    color: ${({ theme }) => theme.color.slateGray};
    font-weight: 400;
    font-size: 20px;
`;

export const StyledButtonLink = styled(ButtonLink)`
    display: inline-flex;
    align-items: center;
    margin-top: 32px;
    
`;

export const ButtonIcon = styled(iconEmail)`
    margin-right: 16px;
`;
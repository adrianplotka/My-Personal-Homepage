import styled from "styled-components"
import { ReactComponent as SpaceCraft } from "./spacecraft.svg";

export const Container = styled.div`
margin-top: 100px;
display: flex;
justify-content: center;
transition: transform 0.3s ease-in-out;


&:hover {
     
     transform: scale(1.1);
}
`

export const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.colors.site.background};
    color: ${({ theme }) => theme.colors.site.text};
    cursor: pointer;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    font-size: 18px;
    font-weight: 700;
   
`

export const TopIcon = styled(SpaceCraft)`
    width: 50px;
`
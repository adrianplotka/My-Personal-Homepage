import {
    ButtonIcon,
    Content,
    Container,
    Text,
    Image,
    Name,
    Small,
    StyledButtonLink
} from "./styled";
import myPicture from "./images/myPicture.png"
import { email } from "./email.js"

export const MyInfo = () => (
        <Container>
            <Image src={myPicture} alt="" />
            <Content>
                <Small>THIS IS</Small>
                <Name>Adrian Płotka</Name>
                <Text>💻I’m a passionate Frontend Developer in love with React,currently looking for new job opportunities.</Text>
                <StyledButtonLink href={`mailto:${email}`} title={email}>
                    <ButtonIcon />
                    Hire Me
                </StyledButtonLink>
            </Content>
        </Container>
)
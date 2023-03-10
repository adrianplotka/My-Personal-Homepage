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
            <div>
                <Small>THIS IS</Small>
                <Name>Adrian Płotka</Name>
                <Text>💻😄 I am a beginner Frontend Developer who fell in love with React, I am currently looking for a job where I could further deepen my knowledge and where I could face new challenges</Text>
                <StyledButtonLink href={`mailto:${email}`} title={email}>
                    <ButtonIcon />
                    Hire Me
                </StyledButtonLink>
            </div>
        </Container>
)
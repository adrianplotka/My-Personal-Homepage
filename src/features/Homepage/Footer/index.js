import { email } from "../Header/email";
import { Container, Email, Link, SubHeader, Text, Wrapper } from "./styled";
import { ReactComponent as Github } from "./icons/git.svg";
import { ReactComponent as Facebook } from "./icons/facebook.svg";
import { ReactComponent as LinkedIn } from "./icons/linedin.svg";
import { ReactComponent as Instagram } from "./icons/instagram.svg";

export const Footer = () => (
    <>
        <Wrapper>
            <SubHeader>Let's Talk</SubHeader>
            <Email href={`mailto:${email}`}>{email}</Email>
            <Text>I will be happy to undertake the creation of a website, dashboard or mobile application once again. If you need help and would like me to help you create what you need, please contact me and I will definitely find time and help you👌</Text>
        </Wrapper>
        <Container>
            <Link target="_blank" rel="noreferrer" href="https://github.com/adrianplotka">
                <Github />
            </Link>
            <Link target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100003160549552">
                <Facebook />
            </Link>
            <Link target="_blank" rel="noreferrer" href="https://www.linkedin.com/">
                <LinkedIn />
            </Link>
            <Link target="_blank" rel="noreferrer" href="https://www.instagram.com/adrianplotkaa/?igshid=ZDdkNTZiNTM%3D&fbclid=IwAR0X3_ZJKh3vztPapwoZvxKEMymXaXX1O-pDBYjlx7X5b-EfBmyUDLwrDOk">
                <Instagram />
            </Link>
        </Container>
    </>
)
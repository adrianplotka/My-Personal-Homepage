import { email } from "../Header/email";
import { Container, Email, Link, SubHeader, Text, Wrapper } from "./styled";
import { ReactComponent as Github } from "./icons/git.svg";
import { ReactComponent as Facebook } from "./icons/facebook.svg";
import { ReactComponent as Instagram } from "./icons/instagram.svg";

export const Footer = () => (
    <>
        <Wrapper>
            <SubHeader>Let's Talk</SubHeader>
            <Email href={`mailto:${email}`}>{email}</Email>
            <Text>I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me 👌</Text>
        </Wrapper>
        <Container>
            <Link target="_blank" rel="noreferrer" href="https://github.com/adrianplotka">
                <Github />
            </Link>
            <Link target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100003160549552">
                <Facebook />
            </Link>
            <Link target="_blank" rel="noreferrer" href="https://www.instagram.com/adrianplotkaa/?igshid=ZDdkNTZiNTM%3D&fbclid=IwAR0X3_ZJKh3vztPapwoZvxKEMymXaXX1O-pDBYjlx7X5b-EfBmyUDLwrDOk">
                <Instagram />
            </Link>
        </Container>
    </>
)
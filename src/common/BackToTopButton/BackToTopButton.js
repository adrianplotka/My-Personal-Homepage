import React from 'react'
import { useEffect, useState } from 'react'
import { Container, StyledButton } from './styled';

const BackToTopButton = () => {
    const [backToTopButton, setBackToTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <Container>
            {backToTopButton && (
                <StyledButton onClick={scrollUp}> Back to top</StyledButton>
            )}
        </Container>
    )
}

export default BackToTopButton
import { Button, theme } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'
import { config, themeConfig } from '../../config'
import Navigation from './Navigation'

interface IHeaderProps {
    data: {
        name: string,
        title: string,
        showProfilePic: boolean,
        cvLink: string | null
    };
    modules: any[];
}

const StyledHeader = styled.div`
    width: 100vw;
    min-height: 50vh;
    padding-top: 1em;
    padding-bottom: 1em;
    background: url(${`./assets/themes/${config.theme}/bg.jpg`});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-position: 0%;
`

const StyledName = styled.h1`
    color: ${theme.colors.white};
    font-size: 50px;
    font-weight: 400;
`

const StyledWorkTitle = styled.h2`
    color: ${theme.colors.white};
    font-size: 25px;
    font-weight: 200;
`

const StyledImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
`;


const Header = ({data: {name, title, showProfilePic, cvLink}, modules}:IHeaderProps) => {
    return (
        <StyledHeader>
            <Navigation modules={modules} />
            {showProfilePic && <StyledImage src="./assets/profile.jpg" />}
            <StyledName>{name}</StyledName>
            <StyledWorkTitle>{title}</StyledWorkTitle>
            {cvLink && <Button colorScheme="gray" style={{color: "white"}} _hover={{color: themeConfig[config.theme].darker}} _pressed={{color: themeConfig[config.theme].darker}} onClick={() => window.open(cvLink)} mt="4" variant="outline" size="md">Download my CV</Button>}
        </StyledHeader>
    )
}

export default Header

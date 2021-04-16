import React from "react";
import styled from 'styled-components';

const StyleImage = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
`

const Image = (props) => {
    const {photo} = props
    return (
        <StyleImage>
            <img src={photo} alt={'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'} />
        </StyleImage>
    )
}



export default Image
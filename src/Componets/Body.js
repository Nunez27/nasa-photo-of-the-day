import React from 'react';
import styled from 'styled-components';

const StyledBody = styled.div`
    color: lime;
    font-weight: bold;
    font-size: 1.5rem;
    background-color: black;

    &:hover {
        color: 'orange'
    }
`

const Body = (props) => {
    const {title, explanation, date} = props;

    return (
        <StyledBody>
            <h1>{title}</h1>
            <p>{explanation}</p>
            <p>{date}</p>
        </StyledBody>
    );
};

export default Body;
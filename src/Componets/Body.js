import React from 'react';
import styled from 'styled-components';

const StyledBody = styled.h1`
    color: 'red',

`

const Body = (props) => {
    const {title, explanation, date} = props;

    return (
        <div>
            <h1>{title}</h1>
            <p>{explanation}</p>
            <p>{date}</p>
        </div>
    );
};

export default Body;
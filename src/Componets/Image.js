import React from "react";


const Image = (props) => {
    const {photo} = props
    return (
        <div>
            <img src={photo} alt={'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'} />
        </div>
    )
}



export default Image
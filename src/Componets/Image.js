import React from "react";


const Image = (props) => {
    const {photo} = props
    return (
        <div>
            <img src={photo} alt={'Space'} />
        </div>
    )
}







export default Image
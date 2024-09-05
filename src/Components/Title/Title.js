import React from "react";
import './Title.css'

const Title = ({subTitles, mTitle}) => {
    return (
        <div className="title">
            <p>{subTitles}</p>
            <h2>{mTitle}</h2>

        </div>
    )
}


export default Title
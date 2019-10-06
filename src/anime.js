import React from 'react';

const Anime = ({title,info,image}) => {
    return(
        <div>
            <h1 className="titleclass">{title}</h1>
            <p>{info}</p>
            <img src={image} alt=""/>
        </div>
    )
}


export default Anime;
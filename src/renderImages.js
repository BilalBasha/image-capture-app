import React, { Component } from 'react';
import styled from 'styled-components';


  // this div wraps around the main app to turn into a css grid
export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
  `

//this styled div sets styling to each Album
const StyledAlbum = styled.div`
     background: rgba(255, 255, 255, 0.2);
     box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
     padding: 20px;
     grid-template-columns: 150px 1fr;
     grid-gap: 10px;
     align-items: center;
     color: white;
     font-weight: 100;
 
  `;

export const AlbumList = ({users}) => {
    let albumArray = []
    console.log(users);
    for(let i = 0; i < users.length; i++){
    //   let imgurl = `https://source.unsplash.com/random/300x300?v=${i}`
      albumArray.push(<Album key={i} img={users[i].snapped_url}/>)
     }
    return albumArray;
  }
  
const Album = (props) => {
    return(
    <StyledAlbum>
        <img style={{"width":"100%"}}src={props.img}/>
        <div>
          <h2>{props.title}</h2>
          <p>{props.artist}</p>
          <p>{props.description}</p>
        </div>
     </StyledAlbum>
    )
}

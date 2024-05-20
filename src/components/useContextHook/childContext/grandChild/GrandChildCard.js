import React, { useContext } from 'react';
import { ThemeContext } from '../../ParentContext';


const GrandChildCard = () => {
    const theme = useContext(ThemeContext);
    const whiteStyle = {
        backgroundColor: "white",
        color:"black",
        width:"160px",
        height:"80px",
        border: "1px solid black",
        margin: "auto",
        textAlign: "center"
    }
    const blackStyle = {
        backgroundColor: "black",
        color:"white",
        width:"160px",
        height:"80px",
        border: "1px solid black",
        margin: "auto",
        textAlign: "center"
    }
  return (
    <div style={theme.dark? blackStyle : whiteStyle}>
        GrandChildCard
        <p>{theme.dark}</p>   
    </div>
  )
}

export default GrandChildCard
import React, { useContext } from 'react';
import { ThemeContext } from '../ParentContext';

const ChildHeader = () => {

    const theme = useContext(ThemeContext);

    const whiteStyle = {
        marginTop:'25px',
        backgroundColor: "white",
        color:"black",
        width:"240px",
        height:"40px",
        border: "1px solid black",
        margin: "auto",
        textAlign: "center"
    }
    const blackStyle = {
        marginTop:'25px',
        backgroundColor: "black",
        color:"white",
        width:"240px",
        height:"40px",
        border: "1px solid black",
        margin: "auto",
        textAlign: "center"
    }
  return (
    <div style={theme.dark? blackStyle : whiteStyle}>ChildHeader</div>
  )
}

export default ChildHeader
import React from 'react'

export default function Error() {
    const mystyle = {
        color: "red",
        fontSize: "30px",
        padding: "10px",
        fontFamily: "Arial",
        textAlign:"center"
      };
    return (
        <div>
            <h1 style={mystyle}>Verification Error</h1>
        </div>
    )
}

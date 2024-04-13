import React from 'react'

const Square = (props) => {
  let color;
  if (props.value === 'x') {
    color = 'red';
  } else if (props.value === 'o') {
    color = 'blue';
  }
  
  return (
    <div
    onClick={props.onClick}
    style={{
        border:"1px solid",
        height:"100px",
         width:"100%",
         display:'flex',
         justifyContent:'center',
         alignItems:"center"
        }}
   >
      <h1 style={{color}}>{props.value}</h1>
    </div>
  )
}

export default Square
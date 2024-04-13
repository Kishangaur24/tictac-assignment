import React from 'react'

const Square = (props) => {
  let color;
  if (props.value === 'X') {
    color = 'red';
  } else if (props.value === 'O') {
    color = 'black';
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
import React from "react";

const styles ={
  color:'#f999',
}
 
interface ButtonProps{
 title:string
}

export function Button(props:ButtonProps){

  return(
    <p style={styles}>{props.title}</p>
  )
}
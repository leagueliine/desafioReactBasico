import React from 'react';
import Main from '../main/main'
import './button.css'


const aumentaLetra = () =>{
  let texto = document.getElementById('texto');
  texto.innerText = texto.innerText.toUpperCase();
  }
  

function Button (props){
  return(
    <>
  <button className='btn' onClick={() => aumentaLetra()}>{props.textButton}</button>
    </>
  )
}




export default Button
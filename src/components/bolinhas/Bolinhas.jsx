import React, { useState, useEffect } from 'react';
import './bolinhas.css'; 


const bolinhas = 0 ;

function Bolinhas() {
    
    const myArray = [...Array(70).keys()];

    return(
        <div class="bolinhas-container">

            {myArray.map((_)=>{
                return <div class="bolinha"></div>
            })}

            
        </div>
    );
  }
  

export default Bolinhas;
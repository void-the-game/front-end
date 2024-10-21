import React, { useState, useEffect } from 'react';
import './bolinhasBrancas.css'; 


const bolinhas = 0 ;

function BolinhasBrancas() {
    
    const myArray = [...Array(70).keys()];

    return(
        <div class="bolinhasBrancas-container">

            {myArray.map((_)=>{
                return <div class="bolinhaBranca"></div>
            })}

            
        </div>
    );
  }
  

export default BolinhasBrancas;
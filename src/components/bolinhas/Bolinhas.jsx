import React, { useState, useEffect } from 'react';
import './bolinhas.css'; 


const bolinhasConfig = [
    { cor: 'var(--azul)', top: '10%', left: '5%', size: '12px' },
    { cor: 'var(--branco)', top: '15%', left: '12%', size: '8px' },
    { cor: 'var(--azul)', top: '20%', left: '25%', size: '10px' },
    { cor: 'var(--branco)', top: '37%', left: '3%', size: '15px' },
    { cor: 'var(--rosa)', top: '35%', left: '22%', size: '14px' },
    { cor: 'var(--azul)', top: '65%', left: '98%', size: '10px' },
    { cor: 'var(--branco)', top: '50%', left: '25%', size: '13px' },
    { cor: 'var(--branco)', top: '60%', left: '87%', size: '12px' },
    { cor: 'var(--verde)', top: '48%', left: '15%', size: '7px' },
    { cor: 'var(--amarelo)', top: '20%', left: '65%', size: '10px' },
    { cor: 'var(--branco)', top: '25%', left: '30%', size: '14px' },
    { cor: 'var(--azul)', top: '55%', left: '75%', size: '5px' },
    { cor: 'var(--branco)', top: '5%', left: '90%', size: '9px' },
    { cor: 'var(--rosa)', top: '60%', left: '10%', size: '11px' },
    { cor: 'var(--verde)', top: '45%', left: '25%', size: '7px' },
    { cor: 'var(--azul)', top: '8%', left: '78%', size: '6px' },
    { cor: 'var(--amarelo)', top: '15%', left: '35%', size: '8px' },
    { cor: 'var(--branco)', top: '25%', left: '65%', size: '12px' },
    { cor: 'var(--rosa)', top: '70%', left: '88%', size: '14px' },
    { cor: 'var(--verde)', top: '45%', left: '90%', size: '7px' },
    { cor: 'var(--azul)', top: '33%', left: '85%', size: '13px' },
    { cor: 'var(--rosa)', top: '40%', left: '80%', size: '10px' }, 
    { cor: 'var(--amarelo)', top: '80%', left: '40%', size: '8px' },  
    { cor: 'var(--verde)', top: '30%', left: '80%', size: '9px' },  
    { cor: 'var(--rosa)', top: '70%', left: '20%', size: '6px' },  
    { cor: 'var(--branco)', top: '80%', left: '20%', size: '10px' },  
    { cor: 'var(--verde)', top: '80%', left: '40%', size: '8px' },  
    { cor: 'var(--rosa)', top: '75%', left: '60%', size: '9px' },  
    { cor: 'var(--amarelo)', top: '70%', left: '80%', size: '14px' },  
    { cor: 'var(--amarelo)', top: '85%', left: '30%', size: '12px' },  
    { cor: 'var(--azul)', top: '85%', left: '70%', size: '6px' }, 
    { cor: 'var(--branco)', top: '85%', left: '10%', size: '7px' },  
    { cor: 'var(--branco)', top: '85%', left: '80%', size: '7px' },  

];


function Bolinhas({ isColored }) {
    return (
        <div className="bolinhas-container">
            {bolinhasConfig.map((bolinha, index) => (
                <div
                    key={index}
                    className="bolinha"
                    style={{
                        backgroundColor: isColored ? bolinha.cor : 'white', 
                        top: bolinha.top,
                        left: bolinha.left,
                        width: bolinha.size,
                        height: bolinha.size,
                        boxShadow: `0px 0px 10px 5px ${isColored ? bolinha.cor : 'white'}` 
                    }}
                />
            ))}
        </div>
    );
}


export default Bolinhas;
import React, { useState, useEffect } from 'react';
import './bolinhas.css'; 


const bolinhasConfig = [
    { cor: 'var(--cor1)', top: '10%', left: '5%', size: '12px' },
    { cor: 'var(--cor2)', top: '15%', left: '12%', size: '8px' },
    { cor: 'var(--cor3)', top: '20%', left: '25%', size: '10px' },
    { cor: 'var(--cor4)', top: '37%', left: '3%', size: '15px' },
    { cor: 'var(--cor5)', top: '60%', left: '80%', size: '7px' },
    { cor: 'var(--cor7)', top: '22%', left: '70%', size: '11px' },
    { cor: 'var(--cor8)', top: '8%', left: '20%', size: '5px' },
    { cor: 'var(--cor10)', top: '28%', left: '10%', size: '6px' },
    { cor: 'var(--cor11)', top: '35%', left: '22%', size: '14px' },
    { cor: 'var(--cor13)', top: '42%', left: '15%', size: '7px' },
    { cor: 'var(--cor14)', top: '65%', left: '98%', size: '10px' },
    { cor: 'var(--cor16)', top: '50%', left: '25%', size: '13px' },
    { cor: 'var(--cor18)', top: '60%', left: '87%', size: '12px' },
    { cor: 'var(--cor19)', top: '48%', left: '15%', size: '7px' },
    { cor: 'var(--cor20)', top: '20%', left: '65%', size: '10px' },
    { cor: 'var(--cor21)', top: '25%', left: '30%', size: '14px' },
    { cor: 'var(--cor22)', top: '55%', left: '75%', size: '5px' },
    { cor: 'var(--cor24)', top: '5%', left: '90%', size: '9px' },
    { cor: 'var(--cor25)', top: '60%', left: '10%', size: '11px' },
    { cor: 'var(--cor26)', top: '45%', left: '25%', size: '7px' },
    { cor: 'var(--cor30)', top: '8%', left: '78%', size: '6px' },
    { cor: 'var(--cor32)', top: '15%', left: '35%', size: '8px' },
    { cor: 'var(--cor33)', top: '25%', left: '65%', size: '12px' },
    { cor: 'var(--cor35)', top: '70%', left: '88%', size: '14px' },
    { cor: 'var(--cor37)', top: '45%', left: '90%', size: '7px' },
    { cor: 'var(--cor38)', top: '33%', left: '85%', size: '13px' },
    { cor: 'var(--cor39)', top: '12%', left: '95%', size: '11px' },
    { cor: 'var(--cor41)', top: '38%', left: '30%', size: '15px' },
    { cor: 'var(--cor42)', top: '65%', left: '25%', size: '5px' },
    { cor: 'var(--cor43)', top: '20%', left: '18%', size: '8px' },
    { cor: 'var(--cor44)', top: '25%', left: '8%', size: '9px' },
    { cor: 'var(--cor46)', top: '75%', left: '15%', size: '12px' },
    { cor: 'var(--cor47)', top: '35%', left: '80%', size: '7px' },
    { cor: 'var(--cor48)', top: '45%', left: '72%', size: '10px' }

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
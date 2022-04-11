import React, { useState, useContext } from 'react';
import './style.css';

import { useHistory, Link } from 'react-router-dom';

import { Context } from '../../Context/AuthContext';

export default function Footer() {
    
    return (
        <>
            <div className="footerBG">
                <div className="footerBox1">
                
                </div>
                <div className="footerBox2">
                    <p>Mustang</p>
                    <p>
                        O Ford Mustang é um automóvel desportivo produzido pela Ford Motor Company. 
                        O carro foi apresentado ao público em 17 de abril de 1964 durante a New York World's Fair. 
                        O Mustang, apesar de ter sofrido grandes alterações ao longo dos anos é a mais antiga linha de automóveis da Ford.
                    </p>
                    <button>Ver carros</button>
                </div>
            </div>
            
        </>
    );
};
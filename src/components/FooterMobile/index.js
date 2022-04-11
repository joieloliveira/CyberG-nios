import React, { useState, useContext } from 'react';
import './style.css';

import 'aos/dist/aos.css';

import { useHistory, Link } from 'react-router-dom';

import { Context } from '../../Context/AuthContext';


export default function FooterMobile() {

    return (
        <>
            <div className="footerBG2">
                <div className="footerBox2">
                    <p>O que são</p>
                    <p>
                        A sigla SUV significa Sport Utility Vehicle -- ou seja, veículo utilitário esportivo. 
                        As SUVs costumam ter porte avantajado, além de interior espaçoso e possibilidade de trafegar dentro e fora da cidade.
                    </p>
                    <button>Ver carros</button>
                </div>
                <div className="footerBox1">
                
                </div>
            </div>
            
        </>
    );
};
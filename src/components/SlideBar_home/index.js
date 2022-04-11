import React, { useState, useContext } from 'react';

import { Navbar, Offcanvas, Row } from 'react-bootstrap';

import buttonSideBar from '../../img/img/Vector3.png';
import LogoSideBar from '../../img/img/Vector4.png';
import userIcon from '../../img/img/Vector2_2.png';
import ModalCadastro from '../../components/ModalCadastro';

import { useHistory, Link } from 'react-router-dom';

import './style.css'

export default function SlidBar() {

    const [modalLoginShow, setModalLoginShow] = useState(false);
    const [modalCadastroShow, setModalCadastroShow] = useState(false);

    return (
        <>
            <ModalCadastro
                show={modalCadastroShow}
                onHide={() => setModalCadastroShow(false)}
            />
            <Navbar expand={false} id="navbar">
                <div style={{ width: "100%", textAlign: "start", marginLeft: 20, marginBottom: -56}}>
                    <Navbar.Toggle><img src={buttonSideBar} alt="logoImg" /></Navbar.Toggle>
                </div>
                <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{ 
                    backgroundColor: "#FFFFFF",
                    width: 270,
                    boxShadow: "3px 0px 9px rgba(0, 0, 0, 0.15)",
                    borderRadius: "0px 24px 24px 0px"
                }}>
                    <Offcanvas.Body style={{ 
                        display: "flex",
                        flexDirection: "column",
                        color: "#1D2527",
                }}>
                        <div className="sideBarBody">
                            <img src={LogoSideBar} alt="LogoSideBar"/>
                            <Link to="/">Home</Link>
                            <Link to="/">Sobre</Link>
                            <Link to="/tabelas">Tabela</Link>
                            <Link to="/">Fale conosco</Link>
                            <Link to="/">Entrar</Link>
                        </div>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Navbar>
        </>
    );
};
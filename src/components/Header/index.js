import React, { useState, useContext } from 'react';
import './style.css';

import 'aos/dist/aos.css';

import { useHistory, Link } from 'react-router-dom';
import ModalCadastro from '../../components/ModalCadastro';
import SlideBar_home from '../../components/SlideBar_home';

import { Context } from '../../Context/AuthContext';

import logoImg from '../../img/img/Vector.png';
import userIcon from '../../img/img/Vector2.png';


export default function Header(props) {

    const history = useHistory();

    const { authenticated, signIn } = useContext(Context);

    console.log("Situação do usuário na página login: " + authenticated);

    const [modalLoginShow, setModalLoginShow] = useState(false);
    const [modalCadastroShow, setModalCadastroShow] = useState(false);

    return (
        <>
            <SlideBar_home />
            <ModalCadastro
                show={modalCadastroShow}
                onHide={() => setModalCadastroShow(false)}
            />

            <div className="homeBG" style={{background:props.bg,height:props.ght}}>
                <div className="headerBar">
                    <img src={logoImg} alt="logoImg" />
                    <Link to="/">Home</Link>
                    <Link to="/">Sobre</Link>
                    <Link to="/tabelas">Tabela</Link>
                    <Link to="/">Fale conosco</Link>
                    <Link to="/">Entrar<img src={userIcon} alt="userIcon" /></Link>
                </div>
            </div>
            
        </>
    );
};
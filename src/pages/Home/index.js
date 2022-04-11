import React, { useState, useContext, useEffect } from 'react';
import './style.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { useHistory, Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import FooterMobile from '../../components/FooterMobile';

import { Context } from '../../Context/AuthContext';

import carro1 from '../../img/img/carro1.png';
import carro2 from '../../img/img/carro2.png';
import carro3 from '../../img/img/carro3.png';
import calendario from '../../img/img/calendar.png';
import veloz from '../../img/img/Vector6.png';
import power from '../../img/img/Vector5.png';
import user from '../../img/img/Vector7.png';

import Header from '../../components/Header';


export const Home = () => {

    AOS.init({
        once: false,
    });

    const history = useHistory();

    const { authenticated, signIn } = useContext(Context);

    console.log("Situação do usuário na página login: " + authenticated);

    useEffect(() => {
        
    }, []);

    return (
        <>
            <Header />
            <div className="carrossel">
                <OwlCarousel 
                    id="owlCarousel"
                    className="owl-theme"
                    dots
                    nav
                    responsive={{
                        250: {
                            items: 1,
                        },
                        375: {
                            items: 1,
                            margin: 10,
                            autoplay: true,
                            autoplayTimeout: 3000,
                            autoplayHoverPause: true,
                            loop: true,
                        },
                        600: {
                            items: 1,
                            margin: 10,
                            autoplay: true,
                            autoplayTimeout: 3000,
                            autoplayHoverPause: true,
                            loop: true,
                        },
                        768: {
                            items: 2,
                            margin: 10,
                            autoplay: true,
                            autoplayTimeout: 3000,
                            autoplayHoverPause: true,
                            loop: true,
                        },
                        860: {
                            items: 3,
                            margin: 10,
                            autoplay: true,
                            autoplayTimeout: 3000,
                            autoplayHoverPause: true,
                            loop: true,
                        },
                        1024: {
                            items: 3,
                            margin: 10,
                            autoplay: true,
                            autoplayTimeout: 3000,
                            autoplayHoverPause: true,
                            loop: true,
                        },
                    }}>
                    <div className="cardCarro item">
                        <img src={carro1} alt="carro1" />
                        <p>Mustang</p>
                        <div className="p_img">
                            <img src={calendario} alt="calendario"/><p>2015</p>
                        </div>
                        <div className="p_img">
                            <img src={veloz} alt="veloz" /><p>180 Km/h</p>
                        </div>
                        <div className="p_img">
                            <img src={power} alt="power" /><p>9/10</p>
                        </div>
                        <div className="p_img">
                            <img src={user} alt="user" /><p>8/10</p>
                        </div>
                        <button type="button">Ver carro</button>
                    </div>
                    <div className="cardCarro item">
                        <img src={carro2} alt="carro1" />
                        <p>Mustang</p>
                        <div className="p_img">
                            <img src={calendario} alt="calendario"/><p>2015</p>
                        </div>
                        <div className="p_img">
                            <img src={veloz} alt="veloz" /><p>180 Km/h</p>
                        </div>
                        <div className="p_img">
                            <img src={power} alt="power" /><p>9/10</p>
                        </div>
                        <div className="p_img">
                            <img src={user} alt="user" /><p>8/10</p>
                        </div>
                        <button type="button">Ver carro</button>
                    </div>
                    <div className="cardCarro item">
                        <img src={carro3} alt="carro1" />
                        <p>Mustang</p>
                        <div className="p_img">
                            <img src={calendario} alt="calendario"/><p>2015</p>
                        </div>
                        <div className="p_img">
                            <img src={veloz} alt="veloz" /><p>180 Km/h</p>
                        </div>
                        <div className="p_img">
                            <img src={power} alt="power" /><p>9/10</p>
                        </div>
                        <div className="p_img">
                            <img src={user} alt="user" /><p>8/10</p>
                        </div>
                        <button type="button">Ver carro</button>
                    </div>
                    <div className="cardCarro item">
                        <img src={carro2} alt="carro1" />
                        <p>Mustang</p>
                        <div className="p_img">
                            <img src={calendario} alt="calendario"/><p>2015</p>
                        </div>
                        <div className="p_img">
                            <img src={veloz} alt="veloz" /><p>180 Km/h</p>
                        </div>
                        <div className="p_img">
                            <img src={power} alt="power" /><p>9/10</p>
                        </div>
                        <div className="p_img">
                            <img src={user} alt="user" /><p>8/10</p>
                        </div>
                        <button type="button">Ver carro</button>
                    </div>
                    
                </OwlCarousel>
            </div>
            <Footer/>
            <FooterMobile/>
        </>
    );
};
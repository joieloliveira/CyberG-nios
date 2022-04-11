import React, { useState, useContext, useEffect } from 'react';

import { Spinner } from 'react-bootstrap';
import './style.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import InfiniteScroll from 'react-infinite-scroller';

import api from '../../config/configApi';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { useHistory, Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import FooterMobile from '../../components/FooterMobile';
import ModalCadastro from '../../components/ModalCadastro';
import ModalEditar from '../../components/ModalEditar';

import { Context } from '../../Context/AuthContext';
import lixo from '../../img/img/lixo.png';
import caneta from '../../img/img/caneta.png';

import Header from '../../components/Header';


export const Tabelas = () => {

    AOS.init({
        once: false,
    });

    const { modalCadastroShow, setModalCadastroShow } = useContext(Context);
    const { modalEditarShow, setModalEditarShow } = useContext(Context);

    const [carros, setCarros] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(
        { 
            page: 0,
            index: 18,
        }
    );

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });

    const data = async () => {

        const headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'get,put,post,delete',
        };

        await api.get('/tabelas' ,{
            params: {
                page: page.page,
                index: page.index
            }
        }, headers)
            .then((response) => {
                if(response.data != ""){
                    response.data.map((carro) => {
                        carros.push({
                            id:carro.id,
                            Nome:carro.Nome,
                            Ano:carro.Ano,
                            velocidadeMaxima:carro.velocidadeMaxima,
                            notaEconomia:carro.notaEconomia,
                            notaUsuarios:carro.notaUsuarios,
                            link:carro.link,
                        })
                    })
                }else{setHasMore(false)}
                setStatus({
                    type: 'success',
                    mensagem: response.data.message
                });
            }).catch((err) => {
                if (err.response) {
                    setStatus({
                        type: 'error',
                        mensagem: err.response.data.message
                    });
                } else {
                    setStatus({
                        type: 'error',
                        mensagem: "Erro: Tente novamente mais tarde!"
                    });
                }
            });
            setPage({...page, page:page.page+18, index:page.index+18})
    }

    const loader = <Spinner animation="border" role="status" style={{alignItems:"center"}}>
        <span className="visually-hidden">Loading...</span>
    </Spinner>

    var items = [];
    carros.map((carro) => {
        items.push(
            <tr key={carro.id}>
                <td>{carro.Nome}</td>
                <td>{carro.Ano}</td>
                <td>{carro.velocidadeMaxima}</td>
                <td>{carro.notaEconomia}</td>
                <td>{carro.notaUsuarios}</td>
                <td><img src={lixo} alt="lixo" style={{ marginRight: 10, marginLeft: 30 }} /></td>
                <td><td><img src={caneta} alt="caneta" onClick={() => setModalEditarShow(true)} /></td></td>
            </tr>
        );
    });

    useEffect(() => {
    }, []);

    return (
        <>
            <ModalCadastro
                show={modalCadastroShow}
            />
            <ModalEditar
                show={modalEditarShow}
                onHide={() => setModalEditarShow(false)}
            />
            <Header bg={"#1D2527"} ght={80} />
            <div className="listaBG">
                <div className="listaBox">
                    <p>Lista</p>
                    <button type="button" onClick={() => setModalCadastroShow(true)}>+ Adicionar Novo</button>
                </div>
            </div>
            <div className="tabelasBG">
                <InfiniteScroll
                    id="InfiniteScroll"
                    pageStart={0}
                    loadMore={data}
                    hasMore={hasMore}
                    loader={loader}
                >
                    <table>
                        <tr>
                            <th style={{ borderTopLeftRadius: 6, borderBottomLeftRadius: 6, }}>Nome</th>
                            <th>Ano</th>
                            <th>Velocidade máx Km/h</th>
                            <th>Nota Economia</th>
                            <th>Nota usuários</th>
                            <th> </th>
                            <th style={{ borderTopRightRadius: 6, borderBottomRightRadius: 6, }}> </th>
                        </tr>
                        {items}
                    </table>
                </InfiniteScroll>
            </div>
            <Footer />
            <FooterMobile />
        </>
    );
};
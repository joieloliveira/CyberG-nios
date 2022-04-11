import React, { useState ,useContext } from 'react';

import api from '../../config/configApi';

import Rectangle from '../../img/img/Rectangle.png';

import { Modal } from 'react-bootstrap';

import { Context } from '../../Context/AuthContext';

import './style.css'

export default function ModalCadastro() {

    const { modalCadastroShow, setModalCadastroShow } = useContext(Context);

    const [carro, setCarro] = useState({
        id:Math.floor(Math.random() * 10000),
        Nome:"",
        Ano:"",
        velocidadeMaxima:"",
        notaEconomia:"",
        notaUsuarios:"",
        link:""
    });

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });

    const valueInput = e => setCarro({ ...carro, [e.target.name]: e.target.value });

    const data = async e => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'get,put,post,delete',
        };

        await api.post('/tabelas' ,carro ,headers)
            .then((response) => {
                console.log(response.data);
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
            window.location.reload();
    }

    return (
        <Modal
            show={modalCadastroShow}
            onHide={() => setModalCadastroShow(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div className="modal-content-cadastro">
                <form onSubmit={data}>
                    <button type="button" onClick={()=>setModalCadastroShow(false)}>X</button>
                    <div className="ImgBox">
                        <p>Adicionar novo</p>
                        {status.type === 'error' ? <p style={{ color: "red" }}>{status.mensagem}</p> : ""}
                        {status.type === 'success' ? <p style={{ color: "green" }}>{status.mensagem}</p> : ""}
                        <img src={Rectangle} alt="Rectangle" />
                        <button type="button">Selecionar imagem</button>
                    </div>
                    <div className="formBox">
                        <button type="button" onClick={()=>setModalCadastroShow(false)}>X</button>
                        <div>
                            <label>Nome</label>
                            <input type="text" name="nome" placeholder="" onChange={valueInput} required />
                        </div>
                        <div>
                            <label>Ano</label>
                            <input type="text" name="ano" placeholder="" onChange={valueInput} required />
                        </div>
                        <div>
                            <label>Velocidade Máxima Km/h</label>
                            <input type="text" name="velocidade" placeholder="" onChange={valueInput} required />
                        </div>
                        <div>
                            <label>Nota economia</label>
                            <input type="text" name="notaEco" placeholder="" onChange={valueInput} required />
                        </div>
                        <div>
                            <label>Nota usuários</label>
                            <input type="text" name="NotaUse" placeholder="" onChange={valueInput} required />
                        </div>
                        <div>
                            <label>Link produto</label>
                            <input type="text" name="Link" placeholder="" onChange={valueInput} required />
                        </div>
                        <div className="butSalvarCancelar">
                            <button type="button" id="Adicionar2" onClick={()=>setModalCadastroShow(false)}>Cancelar</button>
                            <button id="Adicionar">+ Adicionar Novo</button>
                        </div>
                    </div>
                </form>
            </div>
        </Modal>
    );
}
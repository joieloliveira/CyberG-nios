import React, { useState ,useContext } from 'react';

import api from '../../config/configApi';

import Rectangle from '../../img/img/Rectangle.png';

import { Modal } from 'react-bootstrap';

import { Context } from '../../Context/AuthContext';

import './style.css'

export default function ModalEditar() {

    const { modalEditarShow, setModalEditarShow } = useContext(Context);

    const [user, setUser] = useState({
        nome: '',
        email: '',
        password: '',
        esporte: '',
        data_nascimento: '',
        accept: '',
    });

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });

    const valueInput = e => setUser({ ...user, [e.target.name]: e.target.value });

    const addUser = async e => {
        e.preventDefault();

        var confirmSenha = document.getElementById('confirmarSenha').value;
        if (confirmSenha!==user.password) {
            return alert("Confirmação de senha invalido")
        }

        const headers = {
            'headers': {
                'Content-Type': 'application/json',
            }
        };

        await api.post('v1/users', user, headers)
            .then((response) => {
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

    console.log(user);

    return (
        <Modal
            show={modalEditarShow}
            onHide={() => setModalEditarShow(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div className="modal-content-cadastro">
                <form onSubmit={addUser}>
                    <div className="ImgBox">
                        <p>Adicionar novo</p>
                        {status.type === 'error' ? <p style={{color:"red"}}>{status.mensagem}</p> : ""}
                        {status.type === 'success' ? <p style={{color:"green"}}>{status.mensagem}</p> : ""}
                        <img src={Rectangle} alt="Rectangle" />
                        <button type="button">Selecionar imagem</button>
                    </div>
                    <div className="formBox">
                    <button type="button" onClick={()=>setModalEditarShow(false)}>X</button>
                        <div>
                            <label>Nome</label>
                            <input type="text" name="nome" placeholder="Nome do carro" onChange={valueInput} required/>
                        </div>
                        <div>
                            <label>Ano</label>
                            <input type="text" name="ano" placeholder="Ano do carro" onChange={valueInput} required/>
                        </div>
                        <div>
                            <label>Velocidade Máxima Km/h</label>
                            <input type="text" name="velocidade" placeholder="Velocidade do carro" onChange={valueInput} required/>
                        </div>
                        <div>
                            <label>Nota economia</label>
                            <input type="text" name="notaEco" placeholder="Nota economia do carro" onChange={valueInput} required/>
                        </div>
                        <div>
                            <label>Nota usuários</label>
                            <input type="text" name="NotaUse" placeholder="Nota dos usuários" onChange={valueInput} required/>
                        </div>
                        <div>
                            <label>Link produto</label>
                            <input type="text" name="Link" placeholder="Link produto" onChange={valueInput} required/>
                        </div>
                        <div className="butSalvarCancelar">
                        <button type="button">Cancelar</button>
                        <button type="button">Salvar</button>
                        </div>
                    </div>
                </form>
            </div>
        </Modal>
    );
}
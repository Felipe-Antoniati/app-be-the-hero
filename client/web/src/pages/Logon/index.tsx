import React, { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/images/logo.svg';
import heroesImg from '../../assets/images/heroes.png';

const Logon = () => {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    try {
      const response = await api.post('sessions', { id });
      
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);
      
      history.push('/profile');
    } catch (err) {
      alert('Falha no login, tente novamente.');
    };
  };

  return (
    
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

      <form onSubmit={handleLogin}>
        <h1> Faça seu Logon </h1>
        <input placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)} />
        <button className="button" type="submit"> Entrar </button>
        <Link className="back-link" to="/register">
          <FiLogIn size={16} color="#e02041" />
          Não tenho cadastro
        </Link>
      </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
};

export default Logon;
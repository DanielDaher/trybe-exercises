import React from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

export default function Home() {
  return (
    <div className="App">
      <h1>Formulário</h1>
      <p>Bem vindo! Clique abaixo para preencher o formulário!</p>
      <Link to='/form' className="links">Desejo preencher o formulário</Link>
    </div>
  );
};
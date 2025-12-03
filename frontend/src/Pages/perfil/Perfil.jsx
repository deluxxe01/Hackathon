import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Perfil.css';

// --- ÍCONES ---
const ArrowLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6C5CE7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
);
const MenuIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6C5CE7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);
const UserIcon = () => (
  <img src="./icons/user.png" className='icon-user' alt="" />
);
const RulerIcon = () => (
 <img src="./icons/regua.png" className='icon-regua' alt="" />
);

export default function Perfil() {
  const navigate = useNavigate();
  const [view, setView] = useState('menu'); // 'menu', 'dados', 'medidas'

  // Simulação de dados do usuário
  const [userData, setUserData] = useState({
    nome: 'Maria Silva',
    email: 'maria@email.com',
    genero: 'Feminino',
    senha: '',
    altura: '1.65',
    peso: '60.0',
    abdomen: '75.0'
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    alert("Alterações salvas com sucesso!");
    setView('menu');
  };

  // --- RENDERIZAÇÃO DAS TELAS ---

  // 1. TELA PRINCIPAL (MENU)
  const renderMenu = () => (
    <div className="perfil-content fade-in">
      <header className="perfil-header-menu">
        <h2 className="title">Perfil</h2>
        <button className="btn-icon"><MenuIcon /></button>
      </header>

      <div className="menu-cards">
        {/* Card Dados Pessoais */}
        <div className="menu-card" onClick={() => setView('dados')}>
          <div className="card-icon">
            <UserIcon />
          </div>
          <h3>Dados Pessoais</h3>
        </div>

        {/* Card Medidas */}
        <div className="menu-card" onClick={() => setView('medidas')}>
          <div className="card-icon">
            <RulerIcon />
          </div>
          <h3>Medidas pessoais</h3>
        </div>
      </div>
    </div>
  );

  // 2. TELA DADOS PESSOAIS
  const renderDados = () => (
    <div className="perfil-content fade-in">
      <header className="perfil-header-back">
        <button onClick={() => setView('menu')} className="btn-back"><ArrowLeft /></button>
        <h2 className="subtitle">Dados Pessoais</h2>
      </header>

      <div className="form-container">
        <input className="input-field" name="nome" placeholder="Nome Completo" value={userData.nome} onChange={handleChange} />
        <input className="input-field" name="email" placeholder="Email" value={userData.email} onChange={handleChange} />
        <input className="input-field" name="genero" placeholder="Gênero" value={userData.genero} onChange={handleChange} />
        <input className="input-field" name="senha" type="password" placeholder="Senha" value={userData.senha} onChange={handleChange} />

        <div className="action-buttons">
          <button className="btn-edit">Editar dados</button>
          <button className="btn-save" onClick={handleSave}>Salvar alterações</button>
        </div>
      </div>
    </div>
  );

  // 3. TELA MEDIDAS
  const renderMedidas = () => (
    <div className="perfil-content fade-in">
      <header className="perfil-header-back">
        <button onClick={() => setView('menu')} className="btn-back"><ArrowLeft /></button>
        <h2 className="subtitle">Medidas Pessoais</h2>
      </header>

      <div className="form-container">
        <input className="input-field" name="altura" placeholder="Altura" value={userData.altura} onChange={handleChange} />
        <input className="input-field" name="peso" placeholder="Peso" value={userData.peso} onChange={handleChange} />
        <input className="input-field" name="abdomen" placeholder="Largura do abdômen" value={userData.abdomen} onChange={handleChange} />

        <div className="action-buttons">
          <button className="btn-edit">Editar dados</button>
          <button className="btn-save" onClick={handleSave}>Salvar alterações</button>
        </div>
      </div>
    </div>
  );


  return (
    <div className="perfil-container">
      
      {view === 'menu' && renderMenu()}
      {view === 'dados' && renderDados()}
      {view === 'medidas' && renderMedidas()}
    </div>
  );
}
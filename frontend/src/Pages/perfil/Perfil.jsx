import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Perfil.css';

// --- ÍCONES ---
const ArrowLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6C5CE7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
);

const MenuIcon = () => (
  <img src="./icons/lista.png" className='icon-lista' alt="" />
);

const UserIcon = () => (
  <img src="./icons/user.png" className='icon-user' alt="" />
);

const RulerIcon = () => (
  <img src="./icons/regua.png" className='icon-regua' alt="" />
);


export default function Perfil() {
  const navigate = useNavigate();
  const [view, setView] = useState('menu'); 
  const [openMenu, setOpenMenu] = useState(false); // <<< MENU LATERAL

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

  // MENU LATERAL (Hambúrguer)
  const renderSideMenu = () => (
    <>
      {/* Overlay escuro */}
      <div 
        className={`overlay ${openMenu ? "show" : ""}`} 
        onClick={() => setOpenMenu(false)}
      />

      {/* Menu Lateral */}
      <div className={`side-menu ${openMenu ? "open" : ""}`}>
        <h3 className="side-title">Menu</h3>

        <button className="side-item" onClick={() => navigate('/')}>🏠 Home</button>
        <button className="side-item" onClick={() => setOpenMenu(false)}>👤 Perfil</button>
        <button className="side-item" onClick={() => navigate('/Conquista')}>🏆 Conquistas</button>
        <button className="side-item" onClick={() => navigate('/Ranking')}>📊 Ranking</button>
        <button className="side-item" onClick={() => navigate('/Missao')}>🎯 Missões</button>
      </div>
    </>
  );

  // --- TELAS ---
  const renderMenu = () => (
    <div className="perfil-content fade-in">
      
      <header className="perfil-header-menu">
        <h2 className="title">Perfil</h2>

        {/* BOTÃO ABRE MENU */}
        <button className="btn-icon" onClick={() => setOpenMenu(true)}>
          <MenuIcon />
        </button>
      </header>

      <div className="menu-cards">
        <div className="menu-card" onClick={() => setView('dados')}>
          <div className="card-icon"><UserIcon /></div>
          <h3>Dados Pessoais</h3>
        </div>

        <div className="menu-card" onClick={() => setView('medidas')}>
          <div className="card-icon"><RulerIcon /></div>
          <h3>Medidas pessoais</h3>
        </div>
      </div>
    </div>
  );

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

      {renderSideMenu()}

      {view === 'menu' && renderMenu()}
      {view === 'dados' && renderDados()}
      {view === 'medidas' && renderMedidas()}
    </div>
  );
}

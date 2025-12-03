import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Barguer from "../../components/barguers/Barguer";
import './Perfil.css';

// --- ÍCONES ESPECÍFICOS DO PERFIL ---
// Removemos os ícones do menu (HomeRIcon, MedalRIcon, etc) pois agora vivem no Burguer.jsx

const ArrowLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6C5CE7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
);

const UserIcon = () => (
  <img src="./icons/user-b.png" className='icon-user' alt="User" />
);

const RulerIcon = () => (
  <img src="./icons/regua.png" className='icon-regua' alt="Régua" />
);

export default function Perfil() {
  const navigate = useNavigate();
  const [view, setView] = useState('menu'); 
  // O state 'openMenu' foi removido, pois o Burguer gerencia isso sozinho agora.

  // Simulação de dados do usuário
  const [userData, setUserData] = useState({
    nome: 'Maria Silva',
    email: 'maria@email.com',
    genero: 'Feminino',
    senha: '',
    altura: '0',
    peso: '0',
    abdomen: '0'
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    alert("Alterações salvas com sucesso!");
    setView('menu');
  };

  // --- TELAS ---

  const renderMenu = () => (
    <div className="perfil-content fade-in">
      
      <header className="perfil-header-menu">
        <h2 className="title">Perfil</h2>

        {/* AQUI ESTÁ A MÁGICA: O componente Burguer substitui todo aquele código antigo */}
        <Barguer />
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
        <div className='container_h1_dados_pessoais'>

        <h2 className="subtitle">Dados Pessoais</h2>
        </div>
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
        
        <div className='containerh_h1_med_pessoais'>

        <h2 className="subtitle">Medidas Pessoais</h2>
        </div>
      </header>

      <div className="form-container">
          <label htmlFor="">altura:</label>
        <input className="input-field" name="altura" placeholder="Altura" value={userData.altura} onChange={handleChange} />
        <label htmlFor="">peso</label>
        <input className="input-field" name="peso" placeholder="Peso" value={userData.peso} onChange={handleChange} />
        <label htmlFor="">largura do abdômen</label>
        <input className="input-field" name="abdomen" placeholder="Largura do abdômen" value={userData.abdomen} onChange={handleChange} />

        <div className="action-buttons">
          <button className="btn-edit">Editar dados</button>
          <button className="btn-save" onClick={handleSave}>Salvar alterações</button>
        </div>
      </div>
    </div>
  );



  
  // const criarUsuario = async () => {
  //   const payload = {
  //     nome: formData.nome,
  //     email: formData.email,
  //     senha: formData.senha,
  //     data_nascimento: formData.data_nascimento,
  //     genero: formData.genero,
  //   };

  //   try {
  //     const resposta = await axios.post("http://localhost:3000/user", payload);
  //     console.log("Usuário criado:", resposta.data);
  //     navigate('/Perfil');
  //   } catch (erro) {
  //     setErro("❌ Erro ao conectar à API. Verifique o backend.");
  //     console.error("Erro ao criar usuário:", erro);
  //     navigate('/Perfil');
  //   }
  // };

  return (
    <div className="perfil-container">
      {/* Removemos {renderSideMenu()} daqui */}

      {view === 'menu' && renderMenu()}
      {view === 'dados' && renderDados()}
      {view === 'medidas' && renderMedidas()}
    </div>
  );
}
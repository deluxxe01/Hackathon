import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Barguer from "../../components/barguers/Barguer";
import './Perfil.css';

// --- ÍCONES ---
const ArrowLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6C5CE7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
);

const UserIcon = () => (
  <img src="./icons/user-b.png" className='icon-user' alt="User" />
);

const RulerIcon = () => (
  <img src="./icons/regua.png" className='icon-regua' alt="Régua" />
);

// Placeholder para ilustração
const IllustrationGirl = () => (
  <img src="./img-vitta/tecnico.svg" className='illustration-wizard' alt="Ilustração" style={{maxWidth: '150px', marginTop: '20px'}} />
);
// src="./img-vitta/flor.svg"
export default function Perfil() {
  const navigate = useNavigate();

  // Estados apenas para controle de navegação de telas
  const [view, setView] = useState('menu'); 
  const [wizardStep, setWizardStep] = useState(1);
  const [isEditingMedidas, setIsEditingMedidas] = useState(false);

  // --- NAVEGAÇÃO ---

  const handleClickMedidasMenu = () => {
    // Redireciona sempre para o Wizard para demonstração
    setWizardStep(1);
    setView('medidas_wizard');
  };

  const handleSaveDados = () => {
    setView('menu');
  };

  const handleSaveMedidas = () => {
    setIsEditingMedidas(false);
  };

  const handleFinalizarWizard = () => {
    setView('medidas_resumo'); 
  };

  // --- RENDERIZAÇÃO DAS TELAS ---

  const renderMenu = () => (
    <div className="perfil-content fade-in">
      <header className="perfil-header-menu">
        <h2 className="title">Perfil</h2>
        <Barguer />
      </header>

      <div className="menu-cards">
        <div className="menu-card" onClick={() => setView('dados')}>
          <div className="card-icon"><UserIcon /></div>
          <h3>Dados Pessoais</h3>
        </div>

        <div className="menu-card" onClick={handleClickMedidasMenu}>
          <div className="card-icon"><RulerIcon /></div>
          <h3>Medidas pessoais</h3>
        </div>
      </div>
    </div>
  );

  const renderDadosPessoais = () => (
    <div className="perfil-content fade-in">
      <header className="perfil-header-back">
        <button onClick={() => setView('menu')} className="btn-back"><ArrowLeft /></button>
        <div className='container_h1_dados_pessoais'>
          <h2 className="subtitle">Dados Pessoais</h2>
        </div>
      </header>

      <div className="form-container">
        <input className="input-field" name="nome" placeholder="Nome Completo" />
        <input className="input-field" name="email" placeholder="Email" />
        <input className="input-field" name="genero" placeholder="Gênero" />
        <input className="input-field" name="senha" type="password" placeholder="Senha" />

        <div className="action-buttons">
          <button className="btn-edit">Editar dados</button>
          <button className="btn-save" onClick={handleSaveDados}>Salvar alterações</button>
        </div>
      </div>
    </div>
  );

  // TELA 1: WIZARD
  const renderMedidasWizard = () => (
    <div className="perfil-content fade-in">
      <header className="perfil-header-back">
        <button onClick={() => setView('menu')} className="btn-back"><ArrowLeft /></button>
        <div className='containerh_h1_med_pessoais'>
          <h2 className="subtitle">Minhas Medidas</h2>
        </div>
      </header>

      <div className="form-container" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        
        {/* Passo 1: Altura e Peso */}
        {wizardStep === 1 && (
          <>
            <div style={{width: '100%'}}>
              <label className="label-field">Altura (m)</label>
              <input className="input-field" name="altura" type="number" placeholder="Ex: 1.75" />
              
              <label className="label-field">Peso (kg)</label>
              <input className="input-field" name="peso" type="number" placeholder="Ex: 70" />
            </div>
            
            <button className="btn-save" style={{marginTop: '20px'}} onClick={() => setWizardStep(2)}>
              Próximo
            </button>
            <div className="step-dots" style={{marginTop: '10px', display:'flex', gap:'5px'}}>
               <span style={{width:'8px', height:'8px', borderRadius:'50%', background:'#6C5CE7'}}></span>
               <span style={{width:'8px', height:'8px', borderRadius:'50%', background:'#ccc'}}></span>
            </div>
          </>
        )}

        {/* Passo 2: Abdomen e Quadril */}
        {wizardStep === 2 && (
          <>
             <div style={{width: '100%'}}>
              <label className="label-field">Cintura/Abdômen (cm)</label>
              <input className="input-field" name="abdomen" type="number" placeholder="Ex: 80" />

              <label className="label-field">Quadril (cm)</label>
              <input className="input-field" name="quadril" type="number" placeholder="Ex: 100" />
            </div>

            <button className="btn-save" style={{marginTop: '20px'}} onClick={handleFinalizarWizard}>
              Finalizar
            </button>
             <div className="step-dots" style={{marginTop: '10px', display:'flex', gap:'5px'}}>
               <span style={{width:'8px', height:'8px', borderRadius:'50%', background:'#ccc'}}></span>
               <span style={{width:'8px', height:'8px', borderRadius:'50%', background:'#6C5CE7'}}></span>
            </div>
          </>
        )}
        <IllustrationGirl />
      </div>
    </div>
  );

  // TELA 2: RESUMO
  const renderMedidasResumo = () => (
    <div className="perfil-content fade-in">
      <header className="perfil-header-back">
        <button onClick={() => setView('menu')} className="btn-back"><ArrowLeft /></button>
        <div className='containerh_h1_med_pessoais'>
          <h2 className="subtitle">Medidas Pessoais</h2>
        </div>
      </header>

      <div className="form-container">
        <label>Altura (m)</label>
        <input className="input-field" placeholder="1.75" disabled={!isEditingMedidas} />
        
        <label>Peso (kg)</label>
        <input className="input-field" placeholder="70" disabled={!isEditingMedidas} />
        
        <label>Cintura/Abdômen (cm)</label>
        <input className="input-field" placeholder="80" disabled={!isEditingMedidas} />

        <label>Quadril (cm)</label>
        <input className="input-field" placeholder="100" disabled={!isEditingMedidas} />

        <div className="action-buttons">
          <button className="btn-edit" onClick={() => setIsEditingMedidas(true)}>Editar dados</button>

          {isEditingMedidas ? (
            <button className="btn-save" onClick={handleSaveMedidas}>Salvar alterações</button>
          ) : (
            <button className="btn-save" style={{backgroundColor: '#FF6B81'}} onClick={() => setView('calculos')}>
              Cálculos Corporais
            </button>
          )}
        </div>
      </div>
    </div>
  );

  // TELA 3: CÁLCULOS (Exibição estática)
  const renderCalculos = () => {
    return (
      <div className="perfil-content fade-in">
        <header className="perfil-header-back">
          <button onClick={() => setView('medidas_resumo')} className="btn-back"><ArrowLeft /></button>
          <div className='containerh_h1_med_pessoais'>
            <h2 className="subtitle">Cálculos Corporais</h2>
          </div>
        </header>

        <div className="form-container">
             <div className="results-grid">
               
               {/* CARD 1: IMC */}
               <div className="result-card" style={{borderLeftColor: '#6C5CE7'}}>
                 <h3>IMC (Massa Corporal)</h3>
                 <div className="result-value">22.85</div>
                 <span className="result-status status-good">Normal</span>
               </div>

               {/* CARD 2: ICA */}
               <div className="result-card" style={{borderLeftColor: '#00cec9'}}>
                 <h3>ICA (Cintura/Altura)</h3>
                 <div className="result-value">0.45</div>
                 <span className="result-status status-good">Saudável</span>
                 <p style={{fontSize:'0.75rem', marginTop:'5px', color:'#b2bec3'}}>Meta: Abaixo de 0.50</p>
               </div>

               {/* CARD 3: RCQ */}
               <div className="result-card" style={{borderLeftColor: '#FF7675'}}>
                 <h3>RCQ (Cintura/Quadril)</h3>
                 <div className="result-value">0.80</div>
                 <span className="result-status status-good">Risco Baixo</span>
               </div>

             </div>
        </div>
      </div>
    );
  };

  return (
    <div className="perfil-container">
      {view === 'menu' && renderMenu()}
      {view === 'dados' && renderDadosPessoais()}
      {view === 'medidas_wizard' && renderMedidasWizard()}
      {view === 'medidas_resumo' && renderMedidasResumo()}
      {view === 'calculos' && renderCalculos()}
    </div>
  );
}
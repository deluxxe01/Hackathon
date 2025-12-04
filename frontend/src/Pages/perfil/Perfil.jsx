import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Barguer from "../../components/barguers/Barguer";
import './Perfil.css';
import { GlobalContext } from '../../context/GlobalContext';

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
  <img src="./images/girl-flower.png" className='illustration-wizard' alt="Ilustração" style={{maxWidth: '150px', marginTop: '20px'}} />
);

export default function Perfil() {
  const navigate = useNavigate();
  const { userOn, setUserOn } = useContext(GlobalContext);

  const [view, setView] = useState('menu'); 
  const [wizardStep, setWizardStep] = useState(1);
  const [isEditingMedidas, setIsEditingMedidas] = useState(false);

  // ADICIONADO: Campo 'quadril' no estado
  const [medidas, setMedidas] = useState({
    altura: '',   // em metros (ex: 1.70)
    peso: '',     // em kg
    abdomen: '',  // em cm
    quadril: ''   // em cm (Necessário para o RCQ)
  });

  const handleChangeUser = (e) => {
    setUserOn({ ...userOn, [e.target.name]: e.target.value });
  };

  const handleChangeMedidas = (e) => {
    setMedidas({ ...medidas, [e.target.name]: e.target.value });
  };

  // --- LÓGICA DE NAVEGAÇÃO ---

  const handleClickMedidasMenu = () => {
    // Verifica se tem os dados mínimos
    const temMedidas = medidas.altura && medidas.peso;

    if (temMedidas) {
      setIsEditingMedidas(false);
      setView('medidas_resumo');
    } else {
      setWizardStep(1);
      setView('medidas_wizard');
    }
  };

  const handleSaveDados = () => {
    alert("Dados pessoais salvos!");
    setView('menu');
  };

  const handleSaveMedidas = () => {
    alert("Medidas atualizadas!");
    setIsEditingMedidas(false);
  };

  const handleFinalizarWizard = () => {
    if(!medidas.quadril) {
        alert("Por favor, preencha o quadril para cálculos precisos.");
        return;
    }
    alert("Medidas cadastradas com sucesso!");
    setView('medidas_resumo'); 
  };

  // --- FUNÇÕES DE CÁLCULO ---

  const calcularIndicadores = () => {
    const altura = parseFloat(medidas.altura.replace(',', '.'));
    const peso = parseFloat(medidas.peso);
    const abdomen = parseFloat(medidas.abdomen);
    const quadril = parseFloat(medidas.quadril);

    if (!altura || !peso) return null;

    // 1. IMC = Peso / Altura²
    const imc = (peso / (altura * altura)).toFixed(2);
    let imcStatus = "Normal";
    if (imc < 18.5) imcStatus = "Abaixo do peso";
    else if (imc >= 25 && imc < 30) imcStatus = "Sobrepeso";
    else if (imc >= 30) imcStatus = "Obesidade";

    // 2. ICA = Cintura (cm) / Altura (cm) 
    // Como altura está em metros, multiplicamos por 100, ou dividimos cintura por 100
    // Fórmula: Cintura(m) / Altura(m)
    const ica = ((abdomen / 100) / altura).toFixed(2);
    const icaStatus = ica < 0.5 ? "Saudável" : "Risco Aumentado";

    // 3. RCQ = Cintura / Quadril
    let rcq = "N/A";
    let rcqStatus = "Dados incompletos";
    
    if (abdomen && quadril) {
        rcq = (abdomen / quadril).toFixed(2);
        // Valor de referência genérico (0.85 mulheres / 0.90 homens)
        // Usando uma média simples para visualização se não soubermos gênero
        const limite = userOn.genero?.toLowerCase().includes('fem') ? 0.85 : 0.90;
        rcqStatus = rcq < limite ? "Risco Baixo" : "Risco Elevado";
    }

    return { imc, imcStatus, ica, icaStatus, rcq, rcqStatus };
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
        <input className="input-field" name="nome" placeholder="Nome Completo" value={userOn.nome || ''} onChange={handleChangeUser} />
        <input className="input-field" name="email" placeholder="Email" value={userOn.email || ''} onChange={handleChangeUser} />
        <input className="input-field" name="genero" placeholder="Gênero" value={userOn.genero || ''} onChange={handleChangeUser} />
        <input className="input-field" name="senha" type="password" placeholder="Senha" value={userOn.senha || ''} onChange={handleChangeUser} />

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
              <input className="input-field" name="altura" type="number" placeholder="Ex: 1.75" value={medidas.altura} onChange={handleChangeMedidas} />
              
              <label className="label-field">Peso (kg)</label>
              <input className="input-field" name="peso" type="number" placeholder="Ex: 70" value={medidas.peso} onChange={handleChangeMedidas} />
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
              <input className="input-field" name="abdomen" type="number" placeholder="Ex: 80" value={medidas.abdomen} onChange={handleChangeMedidas} />

              {/* CAMPO NOVO ADICIONADO */}
              <label className="label-field">Quadril (cm)</label>
              <input className="input-field" name="quadril" type="number" placeholder="Ex: 100" value={medidas.quadril} onChange={handleChangeMedidas} />
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
        <input className="input-field" name="altura" disabled={!isEditingMedidas} value={medidas.altura} onChange={handleChangeMedidas} />
        
        <label>Peso (kg)</label>
        <input className="input-field" name="peso" disabled={!isEditingMedidas} value={medidas.peso} onChange={handleChangeMedidas} />
        
        <label>Cintura/Abdômen (cm)</label>
        <input className="input-field" name="abdomen" disabled={!isEditingMedidas} value={medidas.abdomen} onChange={handleChangeMedidas} />

        {/* CAMPO NOVO ADICIONADO NO RESUMO */}
        <label>Quadril (cm)</label>
        <input className="input-field" name="quadril" disabled={!isEditingMedidas} value={medidas.quadril} onChange={handleChangeMedidas} />

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

  // TELA 3: CÁLCULOS
  const renderCalculos = () => {
    const results = calcularIndicadores();

    return (
      <div className="perfil-content fade-in">
        <header className="perfil-header-back">
          <button onClick={() => setView('medidas_resumo')} className="btn-back"><ArrowLeft /></button>
          <div className='containerh_h1_med_pessoais'>
            <h2 className="subtitle">Cálculos Corporais</h2>
          </div>
        </header>

        <div className="form-container">
           {results ? (
             <div className="results-grid">
               
               {/* CARD 1: IMC */}
               <div className="result-card" style={{borderLeftColor: '#6C5CE7'}}>
                 <h3>IMC (Massa Corporal)</h3>
                 <div className="result-value">{results.imc}</div>
                 <span className={`result-status ${results.imcStatus === 'Normal' ? 'status-good' : 'status-alert'}`}>
                   {results.imcStatus}
                 </span>
               </div>

               {/* CARD 2: ICA */}
               <div className="result-card" style={{borderLeftColor: '#00cec9'}}>
                 <h3>ICA (Cintura/Altura)</h3>
                 <div className="result-value">{results.ica}</div>
                 <span className={`result-status ${results.icaStatus === 'Saudável' ? 'status-good' : 'status-alert'}`}>
                   {results.icaStatus}
                 </span>
                 <p style={{fontSize:'0.75rem', marginTop:'5px', color:'#b2bec3'}}>Meta: Abaixo de 0.50</p>
               </div>

               {/* CARD 3: RCQ */}
               <div className="result-card" style={{borderLeftColor: '#FF7675'}}>
                 <h3>RCQ (Cintura/Quadril)</h3>
                 <div className="result-value">{results.rcq}</div>
                 <span className={`result-status ${results.rcqStatus.includes('Baixo') ? 'status-good' : 'status-alert'}`}>
                   {results.rcqStatus}
                 </span>
               </div>

             </div>
           ) : (
             <p>Preencha todas as medidas para ver os cálculos.</p>
           )}
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
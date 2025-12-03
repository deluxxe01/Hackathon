import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cadastro.css';

function Cadastro() {
  const navigate = useNavigate();

  function irpraraPerfil() {
    navigate('/Perfil');
  }

  const [step, setStep] = useState(1);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    data_nascimento: '',
    genero: '',
    senha: '',
    confirmar_senha: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.senha !== formData.confirmar_senha) {
      alert("As senhas não coincidem!");
      return;
    }

    console.log("Dados enviados:", formData);
    alert("Cadastro concluído!");
    navigate('/login');
  };

  return (
    <div className="cadastro-container">

      {/* HEADER */}
      <header className="header">
        {step > 1 && (
          <button type="button" className="btn-back" onClick={prevStep}>←</button>
        )}
        <h2>Criar Conta</h2>
      </header>

      {/* FORM */}
      <form className="form" onSubmit={handleSubmit}>

        {/* === PASSO 1 === */}
        {step === 1 && (
          <div className="fade">

            <div className="input-group">
              <label>Nome Completo</label>
              <input
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <button type="button" className="btn-next" onClick={nextStep}>
              Próximo →
            </button>

            <div className="steps">
              <span className="active"></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}

        {/* === PASSO 2 === */}
        {step === 2 && (
          <div className="fade">

            <div className="input-group">
              <label>Data Nascimento</label>
              <input
                name="data_nascimento"
                type="date"
                value={formData.data_nascimento}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Gênero</label>
              <select
                name="genero"
                value={formData.genero}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Selecione</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <button type="button" className="btn-next" onClick={nextStep}>
              Próximo →
            </button>

            <div className="steps">
              <span></span>
              <span className="active"></span>
              <span></span>
            </div>
          </div>
        )}

        {/* === PASSO 3 === */}
        {step === 3 && (
          <div className="fade">

            <div className="input-group password-group">
            <label>Senha</label>
            <input
              type={showPassword ? "text" : "password"}
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              required
            />
            <span
              className={`password-icon ${showPassword ? "open" : ""}`}
              onClick={() => setShowPassword(!showPassword)}
            ></span>
          </div>

          <div className="input-group password-group">
            <label>Confirmar Senha</label>
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmar_senha"
              value={formData.confirmar_senha}
              onChange={handleChange}
              required
            />
            <span
              className={`password-icon ${showConfirm ? "open" : ""}`}
              onClick={() => setShowConfirm(!showConfirm)}
            ></span>
          </div>

            <button type="submit" className="btn-next" onClick={irpraraPerfil}>
              Cadastrar
            </button>

            <div className="steps">
              <span></span>
              <span></span>
              <span className="active"></span>
            </div>
          </div>
        )}

      </form>

      {/* IMAGEM */}
      <div className="footer-img">
        <img src="/img-vitta/biking.svg" alt="Ciclista" />
      </div>

    </div>
  );
}

export default Cadastro;

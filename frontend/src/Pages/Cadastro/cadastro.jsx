import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cadastro.css';
import axios from 'axios';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';



function Cadastro() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [erro, setErro] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const {userOn,setUserOn} = useContext(GlobalContext)

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
    setErro("");
  };

  const validarPasso1 = () => {
    if (!formData.nome.trim()) {
      setErro("⚠️ Preencha seu nome.");
      return false;
    }
    if (!formData.email.trim()) {
      setErro("⚠️ Preencha seu email.");
      return false;
    }
    return true;
  };

  const validarPasso2 = () => {
    if (!formData.data_nascimento.trim()) {
      setErro("⚠️ Informe sua data de nascimento.");
      return false;
    }
    if (!formData.genero.trim()) {
      setErro("⚠️ Selecione seu gênero.");
      return false;
    }
    return true;
  };

  const validarPasso3 = () => {
    if (!formData.senha.trim()) {
      setErro("⚠️ A senha não pode ficar vazia.");
      return false;
    }
    if (!formData.confirmar_senha.trim()) {
      setErro("⚠️ Confirme sua senha.");
      return false;
    }
    if (formData.senha !== formData.confirmar_senha) {
      setErro("⚠️ As senhas não coincidem.");
      return false;
    }
    return true;
  };

  const nextStep = () => {
    if (step === 1 && !validarPasso1()) return;
    if (step === 2 && !validarPasso2()) return;
    setErro("");
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const criarUsuario = async () => {
    const payload = {
      nome: formData.nome,
      email: formData.email,
      senha: formData.senha,
      data_nascimento: formData.data_nascimento,
      genero: formData.genero,
    };

    try {
      const resposta = await axios.post("http://localhost:3000/user", payload);
      console.log("Usuário criado:", resposta.data);
      setUserOn(resposta.data)

      navigate('/Perfil');
    } catch (erro) {
      setErro("❌ Erro ao conectar à API. Verifique o backend.");
      console.error("Erro ao criar usuário:", erro);
      
    }
  };

  return (
    <div className="cadastro-container">
      <header className="header">
        {step > 1 && (
          <button type="button" className="btn-back" onClick={prevStep}>←</button>
        )}
        <h2>Criar Conta</h2>
      </header>

      <form className="form">

        {/* PASSO 1 */}
        {step === 1 && (
          <div className="fade">

            {erro && <p className="erro-msg">{erro}</p>}

            <div className="input-group">
              <label>Nome Completo</label>
              <input
                name="nome"
                value={formData.nome}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
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

        {/* PASSO 2 */}
        {step === 2 && (
          <div className="fade">

            {erro && <p className="erro-msg">{erro}</p>}

            <div className="input-group">
              <label>Data Nascimento</label>
              <input
                name="data_nascimento"
                type="date"
                value={formData.data_nascimento}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Gênero</label>
              <select
                name="genero"
                value={formData.genero}
                onChange={handleChange}
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

        {/* PASSO 3 */}
        {step === 3 && (
          <div className="fade">

            {erro && <p className="erro-msg">{erro}</p>}

            {/* SENHA */}
            <div className="input-group password-group">
              <label>Senha</label>
              <input
                type={showPassword ? "text" : "password"}
                name="senha"
                value={formData.senha}
                onChange={handleChange}
              />

              {/* icone do olho */}
              <img
                src={showPassword ?"../icons/icon_olho_aberto.png" : "../icons/icon_olho_fechado.png"}  // 👉 coloque o src da imagem AQUI
                alt="Mostrar senha"
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>

            {/* CONFIRMAR SENHA */}
            <div className="input-group password-group">
              <label>Confirmar Senha</label>
              <input
                type={showConfirm ? "text" : "password"}
                name="confirmar_senha"
                value={formData.confirmar_senha}
                onChange={handleChange}
              />

              {/* icone do olho */}
              <img
                src={showConfirm ? "../icons/icon_olho_aberto.png" : "../icons/icon_olho_fechado.png"} // 👉 coloque o src da imagem AQUI
                alt="Mostrar senha"
                className="eye-icon"
                onClick={() => setShowConfirm(!showConfirm)}
              />
            </div>

            <button
              type="submit"
              className="btn-next"
              onClick={(e) => {
                e.preventDefault();
                if (validarPasso3()) criarUsuario();
              }}
            >
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

      <div className="footer-img">
        <img src="/img-vitta/biking.svg" alt="Ciclista" />
      
      </div>

    </div>
  );
}

export default Cadastro;

import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { useContext } from 'react';

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {userOn,setUserOn} = useContext(GlobalContext)
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  });
  useEffect(()=>(
    console.log("user: ",formData)

  ),[formData])


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Ajuste a URL conforme sua API
     
      // alert('Login realizado com sucesso!'); // Opcional
      
      const res = await axios.post("http://localhost:3000/user/login",formData)
      
      console.log("Usuario: ", res)
      setUserOn(res.data)

      navigate('/perfil');

    } catch (error) {
      console.error('Erro de conexão:', error);
      alert('Erro ao conectar com o servidor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      
      {/* Área Superior (Branca) */}
      <div className="login-content">
        <h2 className="login-title">Entrar Login</h2>

        <form className="login-form" onSubmit={handleSubmit}>
          
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="login-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              name="senha"
              type="password"
              className="login-input"
              value={formData.senha}
              onChange={handleChange}
              required
            />
          </div>

          <button className="login-btn" disabled={loading}>
            {loading ? 'Carregando...' : 'Logar'}
          </button>
        </form>

        <p className="signup-text">
          Não tem uma conta?{' '}
          <span onClick={() => navigate('/cadastro')} className="signup-link">
            Crie uma aqui
          </span>
        </p>
      </div>

      {/* Área Inferior (Ilustração e Fundo Roxo) */}
      <div className="login-footer-illustration">
        {/* Coloque a imagem do casal correndo aqui */}
        <img src="/img-vitta/dupla_fit.svg" alt="Pessoas correndo" />
      </div>

    </div>
  );
}
export default Login;
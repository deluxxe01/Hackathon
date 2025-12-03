import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  });

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
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || 'Erro ao fazer login.');
        setLoading(false);
        return;
      }

      localStorage.setItem('usuario', JSON.stringify(data.user));
      // alert('Login realizado com sucesso!'); // Opcional
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
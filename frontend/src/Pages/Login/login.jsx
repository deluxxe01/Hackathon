import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import './Login.css';
import { FiEye, FiEyeOff } from 'react-icons/fi';
function Login() {
    
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();
      setMensagem('');

      if (!email || !senha) {
          setMensagem('Por favor, preencha o email e a senha.');
          return;
      }

      try {
          const response = await fetch('http://localhost:3001/api/user', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email, senha }),
          });

          const data = await response.json();

          if (response.ok) {
         
              localStorage.setItem('usuarioLogado', JSON.stringify(data));
              navigate('/perfil');
          } else {
              setMensagem(data.error || 'Falha no login. Verifique suas credenciais.');
          }
      } catch (err) {
          console.error('Erro de conexão:', err);
          setMensagem('Erro ao conectar com o servidor. Tente novamente.');
      }
  };
  return (
    <div className='pagina-login'>
        <h1 className='titulo-form'>Login</h1>
        <div className='form-container'>
            <form className='form-auth' onSubmit={handleSubmit}>
                <div className='form-group form-group-email'>
                    <p htmlFor="email">Email:</p>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                 <div className='form-group form-group-password'>
                    <p htmlFor="senha">Senha:</p>
                    <input 
                        // Muda o tipo baseado no estado 'showPassword'
                        type={showPassword ? "text" : "password"} 
                        id="senha" 
                        placeholder="Sua senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                    {/* Ícone que muda ao clicar */}
                    <span 
                        className="password-toggle-icon"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                    </span>
                </div>
                <button className='botao-form' type="submit">Entrar</button>
            </form>
            
            {mensagem && (
                <p className="mensagem-form-erro">
                    {mensagem}
                </p>
            )}

            {/* Link para a página de Cadastro */}
            <p className="auth-link">
                Não tem uma conta?{' '}
                <Link to="/cadastro">Cadastre-se</Link>
            </p>
        </div>
</div>
); 
}
export default Login;
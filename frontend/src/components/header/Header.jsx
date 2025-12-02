import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Header.css";

function Header() {
    const [usuarioLogado, setUsuarioLogado] = useState(null);
    const [menuAberto, setMenuAberto] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const usuarioStorage = localStorage.getItem('usuarioLogado');
        if (usuarioStorage) {
            setUsuarioLogado(JSON.parse(usuarioStorage));
        }
    }, []);
    const handleLogout = () => {
        localStorage.removeItem('usuarioLogado');
        setUsuarioLogado(null);
        setMenuAberto(false);
        navigate('/'); 
    };
    useEffect(() => {
        const fecharMenu = (e) => {
            if (!e.target.closest(".menu-usuario")) {
                setMenuAberto(false);
            }
        };
        document.addEventListener("click", fecharMenu);
        return () => document.removeEventListener("click", fecharMenu);
    }, []);
    return (
        <div className="container-header">
            <div className="logo">
                <Link className="espaco-logo" to="/">
                    <img className="Logo-Preto-P" src="./logos/logo_NIKE.PNG" alt="logovidafit" />
                </Link>
                <span className="texto-logo">vidafit</span>
            </div>

            <div className="header-links">

                <Link className="texto-header" to="/">Home</Link>

                {usuarioLogado && usuarioLogado.isAdmin && (
                    <Link className="texto-header" to="/funcionario">funcionário</Link>
                )}
                 <div className="menu-usuario">

{/* Botão que abre o dropdown */}
                <div 
                 className="usuario-trigger"
                 onClick={(e) => {
                 e.stopPropagation();
                 setMenuAberto(!menuAberto);
                 }}>

                <img src="icons/user.png" className="header-icon" alt="perfil" />
                <span className="seta">▾</span>
                </div>
                
                       {menuAberto && (
                        <div className="dropdown-usuario">

                            {!usuarioLogado ? (
                                <>
                                    <Link to="/Login" onClick={() => setMenuAberto(false)}>login</Link>
                                    <Link to="/Registrar" onClick={() => setMenuAberto(false)}>Registrar</Link>
                                </>
                            ) : (
                                <>
                                    <Link to="/minhaconta" onClick={() => setMenuAberto(false)}>Minha Conta</Link>
                                    <button onClick={handleLogout}>Sair</button>
                                </>
                            )}
                        </div>
                    )}
                </div>
             </div>
        </div>
    );
}

export default Header
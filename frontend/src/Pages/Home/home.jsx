import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// Dados dos slides baseados nas suas imagens
const slides = [
  {
    id: 1,
    // Use uma imagem ilustrativa (SVG ou PNG sem fundo fica melhor)
    image: "./img-vitta/meditacao_1.svg", // Ex: Moça alongando
    text: "Inspire-se. Cuide-se. Viva leve."
  },
  {
    id: 2,
    image: "./img-vitta/personal_trainer_homem.svg", // Ex: Casal treinando
    text: "Pequenas escolhas, grande bem-estar."
  },
  {
    id: 3,
    image: "./img-vitta/alongamento.svg", // Ex: Meditação
    text: "Hábitos saudáveis para uma vida leve."
  }
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="home-container">
      
      {/* Cabeçalho */}
      <header className="home-header">
        <div className="logo-container">
          {/* Ícone estilizado simulando o da imagem */}
          <span className="logo-icon"><img src="./Logo.png" className="logo_P" alt="" /></span> 
          <h1 className="logo-script">VittaLight</h1>
        </div>
      </header>

      {/* Área Principal (Slider) */}
      <main className="home-main">
        <div className="slide-content fade-in">
          <div className="illustration-container">
            <img 
              src={slides[currentSlide].image} 
              alt="Ilustração Fitness" 
              className="slide-image"
            />
          </div>

          <p className="slide-text">
            {slides[currentSlide].text}
          </p>
        </div>

        {/* Paginação */}
        <div className="pagination-dots">
          {slides.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </main>

      {/* Rodapé com Botão */}
      <footer className="home-footer">
        <Link to="/login" className="btn-entrar">
          Entrar
        </Link>
      </footer>

    </div>
  );
}

export default Home;
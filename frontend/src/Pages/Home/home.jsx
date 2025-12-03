import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// --- Configuração ---
const SLIDE_DURATION = 2000; // 5 segundos para a troca automática

// Dados dos slides
const slides = [
  {
    id: 1,
    image: "./img-vitta/meditacao_1.svg",
    text: "Inspire-se. Cuide-se. Viva leve.",
  },
  {
    id: 2,
    image: "./img-vitta/personal_trainer_homem.svg",
    text: "Pequenas escolhas, grande bem-estar.",
  },
  {
    id: 3,
    image: "./img-vitta/alongamento.svg",
    text: "Hábitos saudáveis para uma vida leve.",
  },
];
// --------------------

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Estado para controlar se o mouse está sobre o slider
  const [isPaused, setIsPaused] = useState(false); 

  // Efeito principal para a troca automática
  useEffect(() => {
    // Se estiver pausado, não configura o timer
    if (isPaused) {
      return; 
    }

    // Calcula o índice do próximo slide
    const nextSlideIndex = (currentSlide + 1) % slides.length;
    
    // Configura o temporizador para a troca automática
    const timer = setInterval(() => {
      setCurrentSlide(nextSlideIndex);
    }, SLIDE_DURATION);

    // Limpa o temporizador quando o componente desmonta ou quando 
    // a dependência (currentSlide ou isPaused) muda
    return () => clearInterval(timer);

  }, [currentSlide, isPaused]); 

  const handleDotClick = (index) => {
    // Troca manual do slide também reinicia o temporizador
    setCurrentSlide(index);
  };

  // Funções para pausar/retomar com o mouse
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="home-container">
      
      {/* Cabeçalho */}
      <header className="home-header">
        <div className="logo-container">
          <span className="logo-icon">
            <img src="./Logo.png" className="logo_P" alt="Logo VittaLight" />
          </span>
          <h1 className="logo-script">VittaLight</h1>
        </div>
      </header>

      {/* Área Principal (Slider) */}
      <main 
        className="home-main"
      
      >
        <div className="slide-content fade-in">
          <div className="illustration-container">
            <img
              src={slides[currentSlide].image}
              alt="Ilustração Fitness"
              className="slide-image"
              // A key força a animação a reiniciar em cada slide
              key={slides[currentSlide].id} 
            />
          </div>

          <p className="slide-text">{slides[currentSlide].text}</p>
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
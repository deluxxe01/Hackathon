import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// Simulação dos dados dos slides (Troque os caminhos das imagens pelos seus arquivos reais)
const slides = [
  {
    id: 1,
    image: "/logos/slide1.png", // Coloque a imagem da moça fazendo afundo
    text: "Inspire-se. Cuide-se. Viva leve."
  },
  {
    id: 2,
    image: "/logos/slide2.png", // Coloque a imagem do casal treinando
    text: "Pequenas escolhas, grande bem-estar."
  },
  {
    id: 3,
    image: "/logos/slide3.png", // Coloque a imagem da moça meditando
    text: "Hábitos saudáveis para uma vida leve."
  }
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Função para mudar o slide ao clicar nas bolinhas
  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="home-container">
      
      {/* Cabeçalho com Logo (Estilo Script) */}
      <header className="home-header">
        {/* Se você tiver a imagem do logo VittaLight, use a tag <img> aqui */}
        <h1 className="logo-script">VittaLight</h1> 
      </header>

      {/* Conteúdo dinâmico do Slider */}
      <main className="home-main">
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

        {/* Paginação (Bolinhas) */}
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

      {/* Botão de Ação */}
      <footer className="home-footer">
        <Link to="/login" className="btn-entrar">
          Entrar
        </Link>
      </footer>

    </div>
  );
}
export default Home;
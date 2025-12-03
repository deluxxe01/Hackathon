--Criar  extensão uuid-ossp para gerar UUIDs
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- 1. Tabela de Administradores (Quem cria as missões)
CREATE TABLE Admin (
    ID_Admin UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    Nome VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    Senha VARCHAR(255) NOT NULL
);


-- 2. Tabela de Usuários (O Jogador)
CREATE TABLE Usuarios (
    ID_Usuario UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    Nome VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    Senha VARCHAR(255) NOT NULL,
    Data_Nascimento DATE NOT NULL,
    Genero VARCHAR(20),
    Nivel_Atual INTEGER DEFAULT 0, 
    XP_Total INTEGER DEFAULT 0,    
    XP_Mensal INTEGER DEFAULT 0   
);

-- 3. Tabela de Missões
CREATE TABLE Missao (
    ID_Missao UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    Titulo VARCHAR(100) NOT NULL,
    Descricao TEXT,
    Tipo VARCHAR(50) NOT NULL, 
    Periodicidade VARCHAR(20) NOT NULL, 
    XP_Recompensa INTEGER NOT NULL,
    ID_Admin UUID NOT NULL,
    -- FK: Quem criou a missão
    CONSTRAINT fk_missao_admin FOREIGN KEY (ID_Admin) 
        REFERENCES Admin (ID_Admin)
);

-- 4. Tabela de Medidas (Histórico físico do usuário)

CREATE TABLE Medidas (
    ID_Medida UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ID_Usuario UUID NOT NULL,
    Peso NUMERIC(5, 2), 
    Altura NUMERIC(3, 2), 
    Largura_Abdomen NUMERIC(5, 2), 
    Data_Registro DATE DEFAULT CURRENT_DATE,
    -- FK: Liga a medida ao usuário
    CONSTRAINT fk_medidas_usuario FOREIGN KEY (ID_Usuario) 
        REFERENCES Usuarios (ID_Usuario) ON DELETE CASCADE
);

-- 5. Tabela de Histórico de Missões (Tabela Associativa "Realiza")
-- Une Usuário e Missão, registrando quando foi feito.
CREATE TABLE Historico_Missoes (
    ID_Execucao UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ID_Usuario UUID NOT NULL,
    ID_Missao UUID NOT NULL,
    Data_Conclusao TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    Pontos_Ganhos INTEGER NOT NULL,
    CONSTRAINT fk_hist_usuario FOREIGN KEY (ID_Usuario) 
        REFERENCES Usuarios (ID_Usuario) ON DELETE CASCADE,
    CONSTRAINT fk_hist_missao FOREIGN KEY (ID_Missao) 
        REFERENCES Missao (ID_Missao)
);

-- 6. Tabela de Ranking Passado (Histórico mensal)
CREATE TABLE Fechamento_Rank (
    ID_Ranking UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ID_Usuario UUID NOT NULL,
    Mes INTEGER NOT NULL,
    Ano INTEGER NOT NULL, 
    Posicao_Final INTEGER NOT NULL,
    XP_Acumulado_Mes INTEGER NOT NULL,
    CONSTRAINT fk_rank_usuario FOREIGN KEY (ID_Usuario) 
        REFERENCES Usuarios (ID_Usuario) ON DELETE CASCADE
);
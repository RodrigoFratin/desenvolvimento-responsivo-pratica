import { useEffect, useState } from "react";
import "./blocos.css";

const blocos = [
  { numero: 1, titulo: "França", descricao: "Conteúdo do primeiro bloco", cor: "#4f46e5" },
  { numero: 2, titulo: "Estados Unidos", descricao: "Conteúdo do segundo bloco", cor: "#0891b2" },
  { numero: 3, titulo: "Espanha", descricao: "Conteúdo do terceiro bloco", cor: "#059669" },
  { numero: 4, titulo: "China", descricao: "Conteúdo do quarto bloco", cor: "#d97706" },
  { numero: 5, titulo: "Itália", descricao: "Conteúdo do quinto bloco", cor: "#dc2626" },
  { numero: 6, titulo: "Turquia", descricao: "Conteúdo do sexto bloco", cor: "#7c3aed" },
];

function getLayoutInfo(largura: number): string {
  if (largura < 480) return "1 coluna (mobile pequeno)";
  if (largura < 768) return "2 colunas (mobile)";
  if (largura < 1024) return "3 colunas (tablet)";
  return "6 colunas (desktop)";
}

function App() {
  const [largura, setLargura] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setLargura(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="pagina">
      <header className="cabecalho">
        <h1>Layout Responsivo com Media Queries</h1>
        <p>Redimensione a janela para ver os blocos se adaptarem</p>
      </header>

      <div className="info-largura">
        Largura: {largura}px — Layout: {getLayoutInfo(largura)}
      </div>

      <main className="container">
        {blocos.map((bloco) => (
          <div
            key={bloco.numero}
            className="bloco"
            style={{ "--cor-bloco": bloco.cor } as React.CSSProperties}
          >
            <div className="bloco-numero">{bloco.numero}</div>
            <h2 className="bloco-titulo">{bloco.titulo}</h2>
            <p className="bloco-descricao">{bloco.descricao}</p>
          </div>
        ))}
      </main>

      <footer className="rodape">
        <p>Layout com 6 blocos responsivos usando Media Queries</p>
      </footer>
    </div>
  );
}

export default App;

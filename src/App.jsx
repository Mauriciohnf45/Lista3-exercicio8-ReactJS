import React from 'react';
import Card from './Card'; // Verifique o caminho do arquivo

function App() {
  return (
    <div>
      <h1>Exemplo de Componente Card com children</h1>

      <Card>
        <h2>Título do Card</h2>
        <p>Este é um exemplo de parágrafo dentro do Card.</p>
      </Card>

      <Card>
        <img src="https://tecnograna.com.br/wp-content/uploads/2019/07/Nubank.jpg"alt="Imagem exemplo" />
        <p>Este Card contém uma imagem e um texto.</p>
      </Card>

      <Card>
        <button onClick={() => alert('Botão dentro do Card clicado!')}>
          Clique Aqui
        </button>
      </Card>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import logo from './assets/logo.png';

function App() {

  const [textoFrase, setTextoFrase] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        "Acredite em si mesmo e em todo o potencial que você possui. Grandes conquistas começam com pequenos passos.",
"O sucesso é construído sobre uma base de falhas. A cada obstáculo superado, você está mais perto de alcançar seus objetivos.",
"Não deixe que o medo de errar o impeça de tentar. Lembre-se de que os erros são oportunidades de aprendizado e crescimento.",
"A jornada pode ser desafiadora, mas lembre-se de que você é mais forte do que pensa. Continue avançando com determinação e coragem.",
"Nunca subestime o poder do seu esforço contínuo. Cada pequena ação conta e o levará um passo mais perto de seus sonhos."
      ]
    },
    {
      id: 2,
      nome: "Desmotivação",
      frases: [
        "Por que se esforçar se o resultado nunca parece valer a pena?",
"Não importa o quanto você tente, as coisas sempre acabam dando errado.",
"Você não é bom o suficiente para alcançar seus objetivos. É melhor desistir agora.",
"Todas as suas tentativas anteriores falharam. Por que essa seria diferente?",
"Ninguém se importa com o que você faz. Você está apenas desperdiçando seu tempo."
      ]
    }
  ];

  function handleSwithCategory(index: number){
    setCategoriaSelecionada(index)
  }

  function gerarFrase() {
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length);
    setTextoFrase(allFrases[categoriaSelecionada].frases[numeroAleatorio]);
  }
  return (
    <div className='container'>
      <img src={logo} alt="logo" className='logo' />

      <h2 className='title'>categorias</h2>
      <section className='category-area'>
        {allFrases.map((item, index) => (
          <button key={item.id} className='category-button' style={{
            borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
            borderColor: '#1fa4bd'
          }}
          onClick={() => handleSwithCategory(index)}
          >
            {item.nome}
          </button>
        ))}
      </section>

      <button onClick={() => gerarFrase()} className='button-frase'>Gerar</button>

      {textoFrase != "" && (<h3 className='text'>{textoFrase}</h3>)}
    </div>
  )
}

export default App

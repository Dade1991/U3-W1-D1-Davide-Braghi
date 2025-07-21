import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyNavBar from './components/MyNavBar'
import PageFooter from './components/PageFooter'
import Welcome from './components/Welcome'
import Message from './components/Message'

// App è il nostro primo COMPONENTE REACT!
// un componente React può essere anche semplicemente una FUNZIONE
// che ritorna un po' di JSX
// i componenti React hanno SEMPRE il nome scritto in PascalCase

const App = function () {
  const myName = 'Stefano'

  return (
    // questa sintassi si chiama JSX
    // JSX è un linguaggio di template mooolto simile ad HTML
    // che viene arricchito con un po' di JS

    // quali sono le principali differenze tra JSX e HTML?
    // 1) il tag <></> ("React Fragment") non è presente in HTML
    // può servire a rispettare una fondamentale regola dei componenti React
    // la regola fondamentale è che un blocco di JSX può ritornare SOLO UN ELEMENTO
    // 2) l'attributo "class" di HTML diventa "className" in JSX, "for" diventa
    // "htmlFor", "onclick" diventa "onClick", "onsubmit" diventa "onSubmit", etc.
    // 3) in JSX posso racchiudere del codice JS semplicemente tra { }
    <>
      {/* qui ci metterei la MyNavBar */}
      <MyNavBar />
      <Welcome nomeDaUtilizzare="Stefano" />
      <Welcome nomeDaUtilizzare="Walter" />
      <Welcome nomeDaUtilizzare="Roberto" />
      <Message content="OPERAZIONE COMPLETATA" color="green" />
      <Message content="ERRORE CRITICO, SCAPPA" color="red" />
      <Message content="BELLO QUESTO VIOLA" color="purple" />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* volendo si possono invocare i componenti più volte! */}
      {/* <MyNavBar /> */}

      <h1>La mia prima app React con {myName}!</h1>

      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <p className="read-the-docs">Vite è una Single Page Application (SPA)</p>
      <PageFooter />
    </>
  )
}

export default App

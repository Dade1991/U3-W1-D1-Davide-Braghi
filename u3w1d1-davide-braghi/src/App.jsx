import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import "./Components/ImageComponent.css"
import "./Components/MyButton.css"
import MyButton from "./Components/MyButton"
import ImageComponent from "./Components/ImageComponent"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="button-section">
        <MyButton ButtonText="Click Here" />
        <MyButton ButtonText="Schissa QUA" />
        <MyButton ButtonText="Brau" />
      </div>
      <div className="images-section">
        <ImageComponent
          ImageToLoad="https://www.placecats.com/300/300"
          DescriptionToLoad="Image of cats"
        />
        <ImageComponent
          ImageToLoad="https://www.placebear.com/300/300"
          DescriptionToLoad="Image of bear"
        />
      </div>
    </>
  )
}

export default App

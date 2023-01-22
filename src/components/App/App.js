import { Routes, Route } from "react-router-dom"
import Home from "../../views/Home/Home"
import About from "../../views/About/About"
import Editor from "../../views/Editor/Editor"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="editor" element={ <Editor/> } />
      </Routes>
    </div>
  )
}

export default App;

import { Routes, Route } from "react-router-dom"
import Home from "../../views/Home/Home"
import About from "../../views/About/About"
import Editor from "../../views/Editor/Editor"
import Footer from "../../components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="editor" element={ <Editor/> } />
      </Routes>
    <Footer></Footer>
    </div>
  )
}

export default App;

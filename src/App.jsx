import { BrowserRouter } from "react-router-dom"
import { Hero, Navbar } from "./components"

const App = () => {
  return <>
    <BrowserRouter>
    <div className="relative">
    <div className="bg-primary">
        <Navbar />
        <Hero />
      </div>
    </div>

    </BrowserRouter>
  </>
}

export default App
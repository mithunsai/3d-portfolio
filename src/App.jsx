import { BrowserRouter } from "react-router-dom";
import { About, Experience, Hero, Navbar, Tech } from "./components";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="relative bg-primary z-0">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech/>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;

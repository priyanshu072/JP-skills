import Navbar from "./compnonets/Navbar";
import Home from "./compnonets/Home";
import Services from "./compnonets/Services";
import Contact from "./compnonets/Contact";
import Whatsapp from "./compnonets/Whatsapp";

const App = () => {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Home />
        <Services />
        <Contact />
        <Whatsapp />
      </main>
    </div>
  );
};

export default App;

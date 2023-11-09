import Home from './components/Home.js';
import Contact from './pages/Contact.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pas d'inspi pour les noms donc j'ai mis un 2...
import Header2 from './partials/Header.scss';
import Main2 from './partials/Main.scss';
import Footer2 from './partials/Footer.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;

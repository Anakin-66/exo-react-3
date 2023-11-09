import Home from './Home.js';
import Contact from './Contact.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pas d'inspi pour les noms donc j'ai mis un 2...
import Header2 from './Header.scss';
import Main2 from './Main.scss';
import Footer2 from './Footer.scss';

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

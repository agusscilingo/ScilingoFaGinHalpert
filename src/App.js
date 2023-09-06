import Home from './Components/Home/home';
import Carrito from './Components/carrito/carrito';
import DataProvider from './Components/Context/DataContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacto from './Components/Contacto/Contacto';
import Fincompra from './Components/Fincompra/Fincompra';
import SignIn from './Login/SignIn';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Carrito />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Fincompra" element={<Fincompra />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;

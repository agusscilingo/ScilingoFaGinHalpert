import Home from './Components/Home/home';
import Carrito from './Components/carrito/carrito';
import DataProvider from './Components/Context/DataContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Carrito/>} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;

import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home/Home';
import TelaPadrao from './pages/TelaPadrao/TelaPadrao';
import Ouro from './pages/Ouro/Ouro'
import Zinco from './pages/Zinco/Zinco'
import Vidro from './pages/Vidro/Vidro';
import LixosEletronicos from './pages/LixosEletronicos/LixosEletronicos';
import Cadmio from './pages/Cadmio/cadmio';
import Niobio from './pages/Niobio/niobio';
import Plastico from './pages/Plastico/Plastico';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                  <Route index element={<Home />}/>
                  <Route path='tela-padrao' element={<TelaPadrao />} />
                  <Route path='ouro' element={<Ouro/>} />
                  <Route path='zinco' element={<Zinco/>} />
                  <Route path='vidro' element={<Vidro/>} />
                  <Route path='/lixos-eletronicos' element={<LixosEletronicos/>} />
                  <Route path='cadmio' element={<Cadmio/>}/>
                  <Route path='niobio' element={<Niobio/>}/>
                  <Route path='/plastico' element={<Plastico/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

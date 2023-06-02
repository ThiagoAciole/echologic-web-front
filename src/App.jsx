import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home/Home';

import Ouro from './pages/Ouro/Ouro'
import Zinco from './pages/Zinco/Zinco'
import Vidro from './pages/Vidro/Vidro';
import Chumbo from './pages/Chumbo/Chumbo';
import LixosEletronicos from './pages/LixosEletronicos/LixosEletronicos';
import Cadmio from './pages/Cadmio/cadmio';
import Niobio from './pages/Niobio/niobio';
import Plastico from './pages/Plastico/Plastico';
import Mercurio from './pages/Mercurio/Mercurio';
import Silicio from './pages/Silicio/Silicio';
import Berilio from './pages/Berilio/Berilio';
import Cobre from './pages/Cobre/Cobre';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                  <Route index element={<Home />}/>
                  <Route path='/ouro' element={<Ouro/>} />
                  <Route path='/zinco' element={<Zinco/>} />
                  <Route path='/vidro' element={<Vidro/>} />
                  <Route path='/chumbo' element={<Chumbo/>} />
                  <Route path='/lixos-eletronicos' element={<LixosEletronicos/>} />
                  <Route path='/cadmio' element={<Cadmio/>}/>
                  <Route path='/niobio' element={<Niobio/>}/>
                  <Route path='/plastico' element={<Plastico/>} />
                  <Route path='/mercurio' element={<Mercurio/>} />
                  <Route path='/silicio' element={<Silicio/>}/>
                  <Route path='/berilio' element={<Berilio/>}/>
                  <Route path='/cobre' element={<Cobre/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

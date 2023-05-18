import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home/Home';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                  <Route index element={<Home />} />
                </Route>
               
            </Routes>
        </BrowserRouter>
    );
}

export default App;
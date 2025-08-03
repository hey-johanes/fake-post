import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './pages/Login';
import DashBoard from './pages/DashBoard';
import Social from './pages/Social';
import Pricing from './pages/Pricing';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<DashBoard />}>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/social" element={<Social />} />
          <Route path="/pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

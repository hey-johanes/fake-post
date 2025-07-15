import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Login />
      </div>
    </BrowserRouter>
  );
}

export default App;

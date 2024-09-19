import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Catalog from './catalog';  
import Home from './home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/catalog" element={<Catalog />} />  
        </Routes>
      </div>
    </Router>
  );
}

export default App;

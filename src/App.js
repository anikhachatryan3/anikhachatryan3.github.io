import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;

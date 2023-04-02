import './App.css';
import CountriesList from './components/CountriesList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CountryDetail from './components/CountryDetail';

function App() {
  
  return (
    <div>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<CountriesList />} />
      <Route path="/countries/:name" element={<CountryDetail />} />
    </Routes>
  </BrowserRouter>

  
    </div>
  );
}

export default App;

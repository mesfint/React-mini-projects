import React,{useState} from 'react';
import './App.css';


import { BrowserRouter, Routes,Route, Navigate } from 'react-router-dom';
import About from './components/router/About';
import Home from './components/router/Home';
import BlogDetails from './components/router/BlogDetails';
import NotFound from './components/router/NotFound';
import Navbar from './components/navbar/Navbar';
import Blogs from './components/router/Blogs';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  return (
    

<BrowserRouter>
<Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about/*" element={<About />} />
    <Route path="/blog/:id" element={<BlogDetails />} />
    <Route path="/blogs" element={<Blogs />} />

    <Route path="/view" element={ isLoggedIn ?  <Navigate to="/blogs" /> : <h4>Please Login</h4> } />
   

    <Route path="/blog/:id" element={<BlogDetails />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>
     
   
  );
}

export default App;

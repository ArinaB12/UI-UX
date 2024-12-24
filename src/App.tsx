import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Cat from './pages/Facts';
import { Header } from './components/header';
import { Footer } from './components/footer';
import Layout from './components/Layout';


function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/сats" element={<Cat />} />
                </Routes>
                <Footer />
            </Layout>
        </BrowserRouter>
    );
}

export default App
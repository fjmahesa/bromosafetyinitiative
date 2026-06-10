import React from 'react';
// Pastikan 'Route' sudah dimasukkan ke dalam daftar import di bawah ini
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import ArticlesPage from './pages/ArticlesPage';
import CategoryPage from './pages/CategoryPage';

// 1. Komponen Layout Global
function GlobalLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between">
      <Navbar /> 
      
      <main className="flex-grow">
        {/* Konten halaman akan berganti secara dinamis di sini */}
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}

// 2. Peta Jalan Router Aplikasi
function App() {
  return (
    <Router>
      <Routes>
        {/* Menggunakan Layout Global */}
        <Route path="/" element={<GlobalLayout />}>
          
          {/* Halaman Beranda Utama */}
          <Route index element={<Home />} />
          
          {/* Halaman Detail Artikel Berdasarkan ID WordPress */}
          <Route path="articles" element={<ArticlesPage />} />
          <Route path="post/:slug" element={<PostDetail />} />
          <Route path="category/:categorySlug" element={<CategoryPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
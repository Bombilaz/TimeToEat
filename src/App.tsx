import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Skills from './components/Skills';
import Header from './components/Header/Header';
import MainPage from './modules/MainPage/MainPage';
import Achievements from './components/Achievements';
import Donate from './components/Donate';
import Chat from './components/Chat';
import React from 'react';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Achievements" element={<Achievements />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Donate" element={<Donate />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

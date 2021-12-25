import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Skills from './components/Skills';
import Header from './components/Header';
import Main from './components/Main';
import React from 'react';
import {Blabla} from './Test'



const App: React.FC = () =>{
 
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/Skills' element={<Skills />} />
          <Route path='/' element={<Main />} />
          <Route path='/Test' element={<Blabla />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;



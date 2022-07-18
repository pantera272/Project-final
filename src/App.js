import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Contact from './components/view/Contact/Contact';
import Home from './components/view/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
      
  );
}

export default App;

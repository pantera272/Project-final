import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Configurator from './components/features/Configurator/Configurator';
import Contact from './components/view/Contact/Contact';
import Home from './components/view/Home/Home';
import CardShoping from './components/features/CardShopping/CardShopping';
import DeliveryForm from './components/features/DeliveryForm/DeliveryForm';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchStart } from './redux/foilsReducer';
import Order from './components/view/Order/Order';
import NotFound from './components/view/NotFound/NotFound';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => dispatch(fetchStart()), [dispatch]);
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/configurator' element={<Configurator />} />
          <Route path='/cardshopping' element={<CardShoping />} />
          <Route path='/delivery' element={<DeliveryForm />} />
          <Route path='/order' element={<Order />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
      
  );
}

export default App;

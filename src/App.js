import logo from './logo.svg';
import './App.css';
import Loginto from './components/Loginto';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loginto/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/viewall' element={<ViewAll/>}/>
        </Routes></BrowserRouter>
  );
}

export default App;

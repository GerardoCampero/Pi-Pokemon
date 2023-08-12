import './App.css';
import { Detail, Home, Landing, Form } from './Views/index'
import NavBar from './Componets/NavBar/NavBar';
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      { pathname !== '/' && <NavBar/> }
      <Routes>
        <Route exact path='/detail/:id' element={<Detail/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/' element={<Landing/>}/>
        <Route exact path='/form' element={<Form/>}/>
        <Route exact path='/home/:name' element={<Home/>}/>
      </Routes>
    </div>
        
  );
}

export default App;

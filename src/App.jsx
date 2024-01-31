import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeScreen from './pages/HomeScreen';
import AboutScreen from './pages/About';
import ErrorScreen from './pages/ErrorScreen';
import NavBarMenu from './components/NavBarMenu';
import AdminScreen from './pages/AdminScreen';
/* import {Container} from 'react-bootstrap' */

function App() {


  return (
    <>
      <BrowserRouter>
      <NavBarMenu/>
        <Routes>
          {/* primera pagina de renderizado por eso colocamos la barra con el props path; q es la direccion de la ruta y el componente elemento que es el componete al q nos dirigimos  */}
          <Route path='/' element={<HomeScreen/>} />
          {/* Agregamos otra Ruta de la cual quiero navehar */}
          <Route path='about' element={<AboutScreen/>} />
          {/* Ruta proteginda Administracion  */}
           {/* Agregamos la pagina de error cuando la ruta no este definida */}
           <Route path='admin' element={<AdminScreen/>} />
          {/* Agregamos la pagina de error cuando la ruta no este definida */}
          <Route path='*' element={<ErrorScreen/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App

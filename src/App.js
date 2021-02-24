import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavbarContainer from './components/NavbarContainer';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <BrowserRouter>
      <NavbarContainer></NavbarContainer>
    </BrowserRouter>
  );
}

export default App;

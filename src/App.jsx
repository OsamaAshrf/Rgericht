
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import App1 from './Page.jsx';
import App2 from './Page2.jsx';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/index' element={<App1/>}/>
        <Route path='/' element={<App1/>}/>
        <Route path='/about' element={<App2/>}/>
      </Routes>
      
    </BrowserRouter>
  );    
}

export default App
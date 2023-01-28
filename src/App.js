
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter}from 'react-router-dom';
import AuthContextProvider from './context/AuthUser';
import Routes from './routes/Routes';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <AuthContextProvider>
          <Routes/>
      </AuthContextProvider>
    </div>
    </BrowserRouter>
  );
}

export default App;
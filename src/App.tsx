import { Header } from './components/header'
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routers from './routes';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </>
  )
}

export default App

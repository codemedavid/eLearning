import 'bootstrap/dist/css/bootstrap.min.css';
import { MainDashboard } from './pages/MainDashboard/MainDashboard';
import Header from './components/header/Header';
import Router from './Routers/Router';
function App() {
  
  return (
    <div className="App">
    <Header></Header>
     <Router></Router>

    </div>
  );
}

export default App;

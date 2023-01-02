import './App.css';
import Nav from './components/Nav';
import data from '../data'
import Landing from './components/Landing';
import Highlights from './components/Highlights';


function App() {
  return (
    <div className="App">
    <Nav />
    <Landing />
    <Highlights />
    <Featured />
    <Discounted />
    <Explore />

    </div>
  );
}

export default App;

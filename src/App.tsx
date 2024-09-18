
import './App.css';
import Main from './pages/Main';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/my-site-ts/" element={<Main/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;

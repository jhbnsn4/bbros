import { Route, Routes } from 'react-router-dom';
import HomePage from './Homepage/HomePage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;

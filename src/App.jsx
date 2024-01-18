import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import TimeTable from './pages/TimeTable';

function App() {
  return (
    <Routes>
      {' '}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/timetable" element={<TimeTable />} />
    </Routes>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

const Layout = () => {
  
  return (
    <div className="">

      {/* Routing */}
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout />  
    </Router>
  );
}

export default App;

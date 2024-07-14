import { Routes, Route, HashRouter } from 'react-router-dom';
import Landing from './components/landing/Landing';

const App = () => {
  return(
    <>
      <HashRouter>
        <Routes>  
          <Route path="/" element={<Landing/>} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
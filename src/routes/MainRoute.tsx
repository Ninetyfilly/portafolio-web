import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Principal from '../screens/Principal.tsx';

const App: React.FC = () => {
  return (
    <Router >
     <Routes>
      <Route path="/" Component={Principal} />
     </Routes>
    </Router>
  );
};

export default App;

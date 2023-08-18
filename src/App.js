import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Note the use of 'Routes' instead of 'Switch'
import Navigation from './components/Navigation';
import Home from './Pages/Home';
import CreateCardPage from './Pages/CreateCardPage';
import store from './store/store';
import { Provider } from 'react-redux';
import Search from './Pages/Search'; 

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateCardPage />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};
export default App;

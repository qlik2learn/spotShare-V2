import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import Users from './Users/pages/Users';
import NewPlaces from './Places/pages/NewPlace';
import UserPlaces from './Places/pages/UserPlaces';

const App = () => {
  return (
    <Router>
      <MainNavigation/>
      <main>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/places/new" element={<NewPlaces />} />
          <Route path="/:userId/places" element={<UserPlaces />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
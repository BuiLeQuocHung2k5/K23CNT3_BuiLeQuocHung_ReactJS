import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import BlqhHome from './components/BlqhHome';
import BlqhNavBar from './components/BlqhNavBar';
import BlqhListUser from './components/BlqhListUser';
import BlqhCreateUser from './components/BlqhCreateUser';
import BlqhEditUser from './components/BlqhEditUser';

export default function BlqhApp() {
  return (
    <div>
      <div className="container border my-3">
        <h1>ReactJs - MockAPI - MinniProject - [Bùi Lê Quốc Hùng - k23cnt3]</h1>
        <hr />
        <Router>
          <BlqhNavBar /> 
          <Routes>
            <Route path="/" element={<BlqhHome />} />
            <Route path="/list-user" element={<BlqhListUser />} /> 
            <Route path="/create-user" element={<BlqhCreateUser />} />
            <Route path="/edit-user/:id" element={<BlqhEditUser />} /> 
          </Routes>
        </Router>
      </div>
    </div>
  );
}
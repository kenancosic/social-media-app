import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from './components/Signin';
import Signup from './components/Signup';
import Profile from './components/Profile';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;

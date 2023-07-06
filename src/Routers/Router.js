import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainDashboard from '../pages/MainDashboard';
import Topics from '../pages/Topics';
import Lessons from '../pages/Lessons'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainDashboard />} />
      <Route path="/topics/:courseId" element={<Topics/>} />
      <Route path='/lessons/:topicId' element={<Lessons />}/>
    </Routes>
  );
}

export default Router;

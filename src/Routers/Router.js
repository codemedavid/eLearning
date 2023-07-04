import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { MainDashboard } from '../pages/MainDashboard/MainDashboard'
import Topics from '../pages/Topics/Topics'
function Router() {
  return (
   <Routes>
    <Route path='/' element={<MainDashboard />}></Route>
    <Route path='topics' element={<Topics />}></Route>
   </Routes>
  )
}

export default Router

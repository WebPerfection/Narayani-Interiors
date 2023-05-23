import React from 'react'
import { Routes, Route } from "react-router-dom"
import AdminPanel from '../Admin/Upload'
import AllImagesPage from '../Body/AllImagesPage/AllImagesPage'
import Home from '../Body/Home/Home'
import ConceptPage from '../ConceptPage/ConceptPage';
import GetAllData from '../Admin/GetAllData'
export default function Allpage() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/concept-designed' element={<ConceptPage />}></Route>
      <Route path='/Images/:id' element={<AllImagesPage />}></Route>
      <Route path='/admin-page' element={<GetAllData />}></Route>
    </Routes>
  )
}

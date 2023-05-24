import React from 'react'
import { Routes, Route } from "react-router-dom"
import AllImagesPage from '../Body/AllImagesPage/AllImagesPage'
import Home from '../Body/Home/Home'
import ConceptPage from '../ConceptPage/ConceptPage';
import GetAllData from '../Admin/GetAllData'
import Upload from '../Admin/Upload/Upload';


export default function Allpage() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/concept-designed' element={<ConceptPage />}></Route>
      <Route path='/Images/:id' element={<AllImagesPage />}></Route>
      <Route path='/Admin/Home' element={<Upload />}></Route>
      <Route path='/Admin/GetAllData' element={<GetAllData />}></Route>
    </Routes>
  )
}

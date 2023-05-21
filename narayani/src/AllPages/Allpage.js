import React from 'react'
import {Routes,Route} from "react-router-dom"
import AdminPanel from '../Admin/Admin'
import AllImagesPage from '../Body/AllImagesPage/AllImagesPage'
import Home from '../Body/Home/Home'
import ConceptPage from '../ConceptPage/ConceptPage'
export default function Allpage() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/concept-designed' element={<ConceptPage/>}></Route>
        <Route path='/Images' element={<AllImagesPage/>}></Route>
        <Route path='/admin-page' element={<AdminPanel/>}></Route>
    </Routes>
  )
}

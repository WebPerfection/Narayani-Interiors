import React from 'react'
import { Routes, Route } from "react-router-dom"
import AllImagesPage from '../Body/AllImagesPage/AllImagesPage'
import Home from '../Body/Home/Home'
import ConceptPage from '../ConceptPage/ConceptPage';
import GetAllData from '../Admin/GetAllData'
import Upload from '../Admin/Upload/AddItem/Upload';
import AllProduct from '../Body/AllCetegory/AllProduct';
import AdddCarousel from '../Admin/Upload/AddCarousel/AddCarousel';
import Dummy from '../Body/About/components/Dummy';
import GetAllUser from '../Admin/GetAllUser/GetAllUser';

export default function Allpage() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/get-In-Touch' element={<ConceptPage />}></Route>
      <Route path='/Images/:id' element={<AllImagesPage />}></Route>
      <Route path='/Admin/Home' element={<Upload />}></Route>
      <Route path='/Admin/GetAllData' element={<GetAllData />}></Route>
      <Route path='/allCategory' element={<AllProduct />}></Route>
      <Route path='/Admin/AddCarousel' element={<AdddCarousel />}></Route>
      <Route path='/aboutUs' element={<Dummy />}></Route>
      <Route path='/Admin/Users' element={<GetAllUser />}></Route>
    </Routes>
  )
}

import React from 'react'
import { Routes, Route } from "react-router-dom"
import AllImagesPage from '../Body/AllImagesPage/AllImagesPage'
import Home from '../Body/Home/Home'
import ConceptPage from '../ConceptPage/ConceptPage';
import Upload from '../Admin/Upload/AddItem/Upload';
import AllProduct from '../Body/AllCetegory/AllProduct';
import AdddCarousel from '../Admin/Upload/AddCarousel/AddCarousel';
import Dummy from '../Body/About/components/Dummy';
import AddTestimonial from '../Admin/Upload/AddTestimonial/AddTestimonial';
import GetAllData from '../Admin/Get/GetAllData/GetAllData';
import GetAllUser from '../Admin/Get/GetAllUser/GetAllUser';
import AddAchievement from '../Admin/Upload/AddAchievement/AddAchievement';
import Kitchen from '../Body/AllCetegory/Kitchen';
import Appointment from '../Admin/Appointment/Appointment';

export default function Allpage() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/get-In-Touch' element={<ConceptPage />}></Route>
      <Route path='/Images/:id' element={<AllImagesPage />}></Route>
      <Route path='/admin' element={<Upload />}></Route>
      <Route path='/admin/GetAllData' element={<GetAllData />}></Route>
      <Route path='/allCategory' element={<AllProduct />}></Route>
      <Route path='/allkitchen/:id' element={<Kitchen/>}></Route>
      <Route path='/admin/AddCarousel' element={<AdddCarousel />}></Route>
      <Route path='/aboutUs' element={<Dummy />}></Route>
      <Route path='/admin/Users' element={<GetAllUser />}></Route>
      <Route path='/admin/AddTestimonial' element={<AddTestimonial />}></Route>
      <Route path="/admin/appointment/:id" element={<Appointment/>}></Route>
      <Route path='/admin/Achievement' element={<AddAchievement />}></Route>
    </Routes>
  )
}

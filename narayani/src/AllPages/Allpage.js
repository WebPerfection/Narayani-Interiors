import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Body/Home/Home'
import ConceptPage from '../ConceptPage/ConceptPage'
export default function Allpage() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/concept-designed' element={<ConceptPage/>}></Route>
    </Routes>
  )
}

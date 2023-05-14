import React from 'react'
import { openModel, closeModel } from './ActionType'
export const toggelModel=()=>{
    return {type:openModel,ModelCheck:true}
}
export const CloseModel=()=>{
    return {type:closeModel,ModelCheck:false}
}
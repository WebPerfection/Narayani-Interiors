import React from 'react'
import { openModel, closeModel } from './ActionType'
const initialData = {
    ModelCheck: true
}
export default function Reducer(oldData = initialData, action) {
    switch (action.type) {
        case openModel:
            return { ...oldData, ModelCheck: true }
        case closeModel:
            return { ...oldData, ModelCheck: false }
        default:
            return oldData
    }
}

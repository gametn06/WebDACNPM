import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slides/counterSlide'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
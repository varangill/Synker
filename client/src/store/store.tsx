import { configureStore } from '@reduxjs/toolkit'

import userProfileSlice from './userProfileSlice'
const store = configureStore({
    reducer: {
        userProfile: userProfile.reducer
    }
})
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentStep: 1,
    persnalDetail: {
        details:""
    }
}

const eventSlice = createSlice({
    name: "event",
    initialState,
    reducers: {
        nextStep: (state) => {
            state.currentStep += 1;   
        },
        prevStep: (state) => {
            state.currentStep -= 1;
        }
    }   
})

export const { nextStep, prevStep } = eventSlice.actions;
export default eventSlice.reducer;
// const initialState = {
//   currentStep: 1,
//   basicInfo: {
//     fullName: "",
//     email: "",
//     phone: ""
//   },

// };

// const eventSlice = createSlice({
//   name: "event",
//   initialState,
//   reducers: {
//     nextStep: (state) => {
//       state.currentStep += 1;
//     },
//     prevStep: (state) => {
//       state.currentStep -= 1;
//     },
//     updateBasicInfo: (state, action) => {
//       state.basicInfo = action.payload;
//     },
   
//   }
// });

// export const {
//   nextStep,
//   prevStep,
//   updateBasicInfo,
// } = eventSlice.actions;

// export default eventSlice.reducer;

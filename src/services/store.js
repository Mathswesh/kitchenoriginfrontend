import { configureStore } from "@reduxjs/toolkit";

import dishReducer from './slices/dishslice'
import caterarReducer from './slices/caterarslice'
import deliverystaffReducer from "./slices/deliverystaffslice";

export const store = configureStore({
    reducer:{
        dishdata: dishReducer,
        caterardata:caterarReducer,
        deliverystaffdata:deliverystaffReducer,
    },
})
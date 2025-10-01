import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from "@reduxjs/toolkit";
import { recipeInterface } from '@/interfaces/recipe';

const initialState: recipeInterface[] = [];

const recipeSlice = createSlice({
    name: "recipeList",
    initialState,
    reducers: {
        addRecipes: (state, action: PayloadAction<recipeInterface[]>) => {
            const newList = action.payload || [];
            state = [...state, ...newList];
        }
    }
});

export default recipeSlice.reducer;
export const { addRecipes } = recipeSlice.actions;
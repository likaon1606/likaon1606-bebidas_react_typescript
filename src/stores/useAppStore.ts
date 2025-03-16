import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipeSlice, RecipiesSliceType } from "./recipeSlice";
import { FavoritesSliceType, createFavoritesSlice } from './favoritesSlice'

export const useAppStore= create<RecipiesSliceType & FavoritesSliceType>()(devtools((...a) => ({
  ...createRecipeSlice(...a),
  ...createFavoritesSlice(...a)
})))
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipeSlice, RecipiesSliceType } from "./recipeSlice";
import { FavoritesSliceType, createFavoritesSlice } from './favoritesSlice'
import { NotificationSliceType, createNotificationSlice } from './notificationSlice'

export const useAppStore= create<RecipiesSliceType & FavoritesSliceType & NotificationSliceType>()(devtools((...a) => ({
  ...createRecipeSlice(...a),
  ...createFavoritesSlice(...a),
  ...createNotificationSlice(...a)
})))
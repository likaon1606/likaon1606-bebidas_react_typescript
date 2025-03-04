import { StateCreator } from "zustand"
import { getCategories, getRecipies } from "../services/RecipeService"
import type { Categories, Drinks, SearchFilter } from "../types"

export type RecipiesSliceType = {
  categories: Categories
  drinks: Drinks
  fetchCategories: () => Promise<void>
  searchRecipes: (searchFilters: SearchFilter) => Promise<void>
}

export const createRecipeSlice : StateCreator<RecipiesSliceType> = (set) => ({
  categories: {
    drinks: []
  },
  drinks: {
    drinks: []
  },
  fetchCategories: async () => {
    const categories = await getCategories()
    set({
      categories
    })
  },
  searchRecipes: async (filters) => {
    const drinks = await getRecipies(filters)
    set({
      drinks
    })
    
  }
})
import { z } from 'zod'
import { CategoriesAPIResponseSchema, DrinksAPIResponse, SearhFilterSchema } from '../utils/recipes-schema'

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>
export type SearchFilter = z.infer<typeof SearhFilterSchema>
export type Drinks = z.infer<typeof DrinksAPIResponse>
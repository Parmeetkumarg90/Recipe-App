import zod from 'zod';

const recipeSchema = zod.object({
    caloriesPerServing: zod.number(),
    cookTimeMinutes: zod.number(),
    cuisine: zod.string(),
    difficulty: zod.string(),
    id: zod.number(),
    image: zod.string(),
    ingredients: zod.array(zod.string()),
    instructions: zod.array(zod.string()),
    mealType: zod.array(zod.string()),
    name: zod.string(),
    prepTimeMinutes: zod.number(),
    rating: zod.number(),
    reviewCount: zod.number(),
    servings: zod.number(),
    tags: zod.array(zod.string()),
    userId: zod.number(),
});

const recipesSchema = zod.array(recipeSchema);

export { recipeSchema, recipesSchema };
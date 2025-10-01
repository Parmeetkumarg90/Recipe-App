interface recipeInterface {
    caloriesPerServing: number,
    cookTimeMinutes: number,
    cuisine: string,
    difficulty: string,
    id: number,
    image: string,
    ingredients: string[]
    instructions: string[],
    mealType: string[],
    name: string,
    prepTimeMinutes: number,
    rating: number,
    reviewCount: number,
    servings: number,
    tags: string[],
    userId: number,
}

interface recipePageProps {
    params: { recipeId: string };
}

export type { recipeInterface, recipePageProps };
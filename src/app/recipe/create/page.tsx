"use client"
import { recipeInterface } from '@/interfaces/recipe';
import { logInUserInterface } from '@/interfaces/user';
import { addCredentials } from '@/redux/slices/currentUser';
import { RootState } from '@/redux/store'
import { recipeSchema } from '@/schema/recipe';
import { logInUserSchema } from '@/schema/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'

const CreateRecipe = () => {
    const { handleSubmit, reset, register } = useForm({
        resolver: zodResolver(recipeSchema),
    });
    const users = useSelector((state: RootState) => state.users);
    const loggedInUser = useSelector((state: RootState) => state.currentUser);
    const dispatch = useDispatch();

    useEffect(() => {
        const isValidLogIn = isUserValid(loggedInUser);
        if (!isValidLogIn.success) {
            redirect('/login');
        }
    }, []);

    const isUserValid = (user: logInUserInterface) => {
        const isValid = logInUserSchema.safeParse(user);
        if (isValid.success) {
            const userDetail = users.find((eachUser) => (eachUser.email === user.email || eachUser.username === user.username) && eachUser.password === user.password);
            if (logInUserSchema.safeParse(userDetail).success) {
                return {
                    success: true, email: userDetail?.email === user.email, username: userDetail?.username === user.username
                };
            }
        }
        return { success: false, email: null, username: null };
    }


    const onSubmit: SubmitHandler<recipeInterface> = (data) => { };

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <div>CreateRecipe</div>
        </form>
    )
}

export default CreateRecipe;

// caloriesPerServing
// cookTimeMinutes
// cuisine
// difficulty
// id
// image
// ingredients
// instructions
// mealType
// name
// prepTimeMinutes
// rating
// reviewCount
// servings
// tags
// userId
"use client"
import { recipeInterface } from '@/interfaces/recipe';
import { RootState } from '@/redux/store'
import { recipeSchema } from '@/schema/recipe';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const CreateRecipeForm = () => {
    const [tags, setTags] = useState<string[]>([]);
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [instructions, setInstructions] = useState<string[]>([]);
    const [mealType, setMealType] = useState<string[]>([]);

    const recipes = useSelector((state: RootState) => state.recipes);

    const { handleSubmit, reset, register } = useForm({
        resolver: zodResolver(recipeSchema),
    });
    const dispatch = useDispatch();

    const onSubmit: SubmitHandler<recipeInterface> = (data) => {
    };

    const handleMealType = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "enter") {
            const newData = [...mealType, e.currentTarget.value];
            setMealType(newData);
        }
    }
    const handleIngredients = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "enter") {
            const newData = [...ingredients, e.currentTarget.value];
            setIngredients(newData);
        }
    }
    const handleInstructions = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "enter") {
            const newData = [...instructions, e.currentTarget.value];
            setInstructions(newData);
        }
    }
    const handleTags = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "enter") {
            const newData = [...tags, e.currentTarget.value];
            setTags(newData);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <Card className={style.card}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className={style.text_center}>
                        Make your own recipes
                    </Typography>
                    <CardContent className={` ${style.grid} `}>
                        <Card className={`${style.mX} ${style.hidden}`}>
                            <TextField
                                // required
                                id="filled-basic-id"
                                {...register("id", { required: true })}
                                label="Id"
                                variant="filled"
                                type='number'
                                value={recipes.length + 1}
                            />
                        </Card>
                        <Card className={`${style.mX}`}>
                            <TextField
                                // required
                                id="filled-basic-name"
                                {...register("name", { required: true })}
                                label="Name"
                                variant="filled"
                            />
                        </Card>
                        <Card className={`${style.mX}`}>
                            <TextField
                                // required
                                id="filled-basic-image"
                                {...register("image", { required: true })}
                                label="Image Link"
                                variant="filled"
                            />
                        </Card>
                        <Card className={`${style.mX}`}>
                            <TextField
                                // required
                                id="filled-basic-caloriesPerServing"
                                {...register("caloriesPerServing", { required: true })}
                                label="Calories(Per Serving)"
                                variant="filled"
                                type='number'
                            />
                        </Card>
                        <Card className={`${style.mX}`}>
                            <TextField
                                // required
                                id="filled-basic-cookTimeMinutes"
                                {...register("cookTimeMinutes", { required: true })}
                                label="Cook Time(Minutes)"
                                variant="filled"
                                type='number'
                            />
                        </Card>
                        <Card className={`${style.mX}`}>
                            <TextField
                                // required
                                id="filled-basic-cuisine"
                                {...register("cuisine", { required: true })}
                                label="Cuisine"
                                variant="filled"
                            />
                        </Card>
                        <Card className={`${style.mX}`}>
                            <TextField
                                // required
                                id="filled-basic-difficulty"
                                {...register("difficulty", { required: true })}
                                label="Difficulty"
                                variant="filled"
                            />
                        </Card>
                        <Card className={`${style.mX}`}>
                            <TextField
                                // required
                                id="filled-basic-prepTimeMinutes"
                                {...register("prepTimeMinutes", { required: true })}
                                label="Preparation Time(Minutes)"
                                variant="filled"
                                type='number'
                            />
                        </Card>
                        <Card className={`${style.mX}`}>
                            <TextField
                                // required
                                id="filled-basic-rating"
                                {...register("rating", { required: true })}
                                label="Rating"
                                variant="filled"
                                type='number'
                            />
                        </Card>
                        <Card className={`${style.mX}`}>
                            <TextField
                                // required
                                id="filled-basic-reviewCount"
                                {...register("reviewCount", { required: true })}
                                label="Review Count"
                                variant="filled"
                                type='number'
                            />
                        </Card>
                        <Card className={`${style.mX}`}>
                            <TextField
                                // required
                                id="filled-basic-servings"
                                {...register("servings", { required: true })}
                                label="Servings"
                                variant="filled"
                                type='number'
                            />
                        </Card>
                        <Card className={`${style.mX}`}>
                            <TextField
                                // required
                                id="filled-basic-mealType"
                                {...register("mealType", { required: true })}
                                label="Meal Type"
                                variant="filled"
                                onKeyDown={handleMealType}
                                value={mealType}
                            />
                        </Card>
                        <Card className={`${style.mX}`}>
                            <TextField
                                // required
                                id="filled-basic-ingredients"
                                {...register("ingredients", { required: true })}
                                label="Ingredients"
                                variant="filled"
                                onKeyDown={handleIngredients}
                                value={ingredients}
                            />
                        </Card>
                        <Card className={`${style.mX}`}>
                            <TextField
                                // required
                                id="filled-basic-instructions"
                                {...register("instructions", { required: true })}
                                label="instructions"
                                variant="filled"
                                onKeyDown={handleInstructions}
                                value={instructions}
                            />
                        </Card>
                        <Card className={`${style.mX}`}>
                            <TextField
                                // required
                                id="filled-basic-password"
                                {...register("tags", { required: true })}
                                label="Tags"
                                variant="filled"
                                onKeyDown={handleTags}
                                value={tags}
                            />
                        </Card>
                    </CardContent>
                </CardContent>
                <CardActions>
                    <Button size="small" type='submit'>Add Recipe</Button>
                </CardActions>
                <List className={`${style.eachGridList}`}>
                    <Typography variant='h5'>Instructions: </Typography>
                    {mealType?.map((step, index) =>
                        <ListItem key={index}>
                            <ListItemIcon>
                                <Typography variant="body1" component="span" sx={{ fontWeight: 'bold', minWidth: '24px', textAlign: 'center' }}>
                                    {index + 1}
                                </Typography>
                            </ListItemIcon>
                            <ListItemText primary={step} />
                        </ListItem>
                    )}
                </List>
                <List className={`${style.eachGridList}`}>
                    <Typography variant='h5'>Meal Type: </Typography>
                    {mealType?.map((step, index) =>
                        <ListItem key={index}>
                            <ListItemIcon>
                                <Typography variant="body1" component="span" sx={{ fontWeight: 'bold', minWidth: '24px', textAlign: 'center' }}>
                                    {index + 1}
                                </Typography>
                            </ListItemIcon>
                            <ListItemText primary={step} />
                        </ListItem>
                    )}
                </List>
                <List className={`${style.eachGridList}`}>
                    <Typography variant='h5'>Ingredients: </Typography>
                    {ingredients?.map((step, index) =>
                        <ListItem key={index}>
                            <ListItemIcon>
                                <Typography variant="body1" component="span" sx={{ fontWeight: 'bold', minWidth: '24px', textAlign: 'center' }}>
                                    {index + 1}
                                </Typography>
                            </ListItemIcon>
                            <ListItemText primary={step} />
                        </ListItem>
                    )}
                </List>
                <List className={`${style.eachGridList}`}>
                    <Typography variant='h5'>Instructions: </Typography>
                    {instructions?.map((step, index) =>
                        <ListItem key={index}>
                            <ListItemIcon>
                                <Typography variant="body1" component="span" sx={{ fontWeight: 'bold', minWidth: '24px', textAlign: 'center' }}>
                                    {index + 1}
                                </Typography>
                            </ListItemIcon>
                            <ListItemText primary={step} />
                        </ListItem>
                    )}
                </List>
                <List className={`${style.eachGridList}`}>
                    <Typography variant='h5'>Tags: </Typography>
                    {tags?.map((step, index) =>
                        <ListItem key={index}>
                            <ListItemIcon>
                                <Typography variant="body1" component="span" sx={{ fontWeight: 'bold', minWidth: '24px', textAlign: 'center' }}>
                                    {index + 1}
                                </Typography>
                            </ListItemIcon>
                            <ListItemText primary={step} />
                        </ListItem>
                    )}
                </List>
            </Card>
        </form>
    );
}

export default CreateRecipeForm;

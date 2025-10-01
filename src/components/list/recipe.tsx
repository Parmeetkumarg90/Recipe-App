import { recipeInterface } from "@/interfaces/recipe";
import Grid from '@mui/material/Grid';
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Link from "next/link";
import Image from "next/image";
import style from './style.module.css'

const RecipeList = ({ data, loading }: { data: recipeInterface[], loading: boolean }) => {
    return (
        < Grid container spacing={2} justifyContent={"center"} sx={{ margin: "10px" }} >
            {loading && <CircularProgress size="3rem" />}
            {!loading &&
                <>
                    {
                        data?.map((item) => {
                            return (
                                < Card className={`${style.Card}`} key={item.id}>
                                    <Typography variant='h5' gutterBottom sx={{ textAlign: "center" }}>
                                        {item.name}
                                    </Typography>
                                    <Typography>
                                        Meal Type: {item.mealType}
                                    </Typography>
                                    <Image src={item.image} alt={item.name + " image"} width={300} height={300} />
                                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Review: {item.rating}</Typography>
                                    <Typography variant="body2">
                                        Preparation Time: {item.prepTimeMinutes}
                                    </Typography>
                                    <Link href={`/recipe/${item.id}`}>
                                        <Button size="small" variant='outlined'>Show Details</Button>
                                    </Link>
                                </Card >
                            )
                        })
                    }
                </>
            }
        </Grid >
    );
}

export default RecipeList;
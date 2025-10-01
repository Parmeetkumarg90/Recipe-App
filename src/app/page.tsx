"use client";
import { useState, useEffect } from "react";
import { getAllProducts } from "@/services/recipe";
import Pagination from '@mui/material/Pagination';
import PaginationItem from "@mui/material/PaginationItem";
import RecipeList from "@/components/list/recipe";
import style from './style.module.css';
import { recipeInterface } from "@/interfaces/recipe";
import { Stack } from "@mui/material";

const RecipeCards = () => {
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productList, setProductList] = useState<recipeInterface[] | []>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getProducts(0);
  }, []);

  useEffect(() => {
    setLoading(true);
    getProducts((currentPage - 1) * 10);
  }, [currentPage])

  const getProducts = async (current_skip: number) => {
    try {
      const result = await getAllProducts(current_skip);
      console.log(result);
      setTotalProducts(Math.floor(result.total / 10))
      if (Array.isArray(result.recipes)) {
        setProductList(result.recipes);
      }
    }
    catch (err) {
      console.log(err);
    }
    finally {
      const timer = setInterval(() => {
        clearInterval(timer);
        setLoading(false);
      }, 500);
    }
  };

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  }

  return (
    <Stack>
      <RecipeList data={productList} loading={isLoading} />
      <Pagination count={totalProducts} page={currentPage} onChange={handlePageChange}
        color="primary" variant="outlined" shape="rounded" className={`${style.pagination}`}
        renderItem={(item) => (
          <PaginationItem
            {...item}
            sx={{ color: 'white', '&.Mui-selected': { color: 'white', }, }}
          />
        )}
      />
    </Stack>
  );
}

export default RecipeCards;
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import axios from 'axios';
import { CategoryType, ProductType } from '@/types/type';
import Categories from '@/components/Categories';
import ProductList from '@/components/ProductList';
import { Stack } from 'expo-router';
import Header from '@/components/Header';  


type Props = {};

const HomeScreen = (props: Props) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/products');
      setProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const getCategories = async () => {
    try {
      const response = await axios.get('http://localhost:8000/categories');
      setCategories(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <Header />,
        }}
      />
      <Categories categories={categories} />
      <ProductList products={products} />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

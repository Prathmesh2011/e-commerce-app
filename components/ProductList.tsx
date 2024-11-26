import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ProductItem from '@/components/ProductItem';
import { ProductType } from '@/types/type';


const Colors = {
  black: '#000000',
  white: '#FFFFFF',
  primary: '#3498db', 
  gray: '#808080',    
};

type Props = {
  products: ProductType[];
};

const ProductList = ({ products }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>For You</Text>
        <TouchableOpacity>
          <Text style={styles.titleBtn}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 20 }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ index, item }) => <ProductItem item={item} index={index} />}
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black,
  },
  titleBtn: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.black,
  },
});

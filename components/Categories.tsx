import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { CategoryType } from '@/types/type';

type Props = {
  categories: CategoryType[];
};

const Colors = {
  black: '#000000',
  lightGray: '#D3D3D3',
};

const Categories = ({ categories }: Props) => {
  return (
    <View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.titleBtn}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={styles.item}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <Text>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginHorizontal: 20,
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
  item: {
    marginVertical: 10,
    alignItems: 'center',
    marginLeft: 20,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: Colors.lightGray, 
  },
});

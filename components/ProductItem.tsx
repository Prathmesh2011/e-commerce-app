import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { ProductType } from '@/types/type';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  item: ProductType;
  index: number;
};


const Colors = {
  black: '#000000',
  white: '#FFFFFF',
  primary: '#3498db',  
};

const width = Dimensions.get('window').width - 40;

const ProductItem = ({ item, index }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.images[0] }} style={styles.productImg} />
      <TouchableOpacity style={styles.bookmarkBtn}>
        <Ionicons name="heart-outline" size={22} color={Colors.black} />
      </TouchableOpacity>
      <View style={styles.productInfo}>
        <Text style={styles.price}>${item.price}</Text>
        <View style={styles.ratingWrapper}>
          <Ionicons name="star" size={20} color="#D4AF37" />
          <Text>4.7</Text>
        </View>
      </View>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 10,
  },
  productImg: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 10,
  },
  bookmarkBtn: {
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: 5,
    borderRadius: 30,
  },
  productInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.primary,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.black,
  },
});

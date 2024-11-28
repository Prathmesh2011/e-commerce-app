import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, Modal, Button } from 'react-native';
import { CartItemType, ProductType } from '@/types/type'; // Assuming this is defined in your project
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { addToCart } from '@/redux/cartSlice'; // Import addToCart action

// Colors definition for styling
const Colors = {
  black: '#000000',
  white: '#FFFFFF',
  primary: '#3498db',
};

// Define dimensions for product image
const width = Dimensions.get('window').width - 40;

// Define the Props type for ProductItem
type Props = {
  item: ProductType; 
  index: number; 
};

const ProductItem = ({ item, index }: Props) => {
  const dispatch = useDispatch(); // Initialize dispatch
  const [modalVisible, setModalVisible] = useState(false); // State to manage modal visibility

  // Function to handle the "Add to Cart" action from the modal
  const handleAddToCart = () => {
    const cartItem: CartItemType = {
      id: item.id,
      title: item.title,
      price: item.price, 
      description: item.description, 
      images: item.images, 
      category: item.category,
      quantity: 1,
    };
    dispatch(addToCart(cartItem)); 
    setModalVisible(false); 
  };

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

      {/* Button to open modal */}
      <TouchableOpacity style={styles.addToCartBtn} onPress={() => setModalVisible(true)}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>

      {/* Modal for confirming the "Add to Cart" action */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)} // Close modal on back press
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Add to Cart</Text>
            <Text style={styles.modalProductName}>{item.title}</Text>
            <Text style={styles.modalPrice}>${item.price}</Text>

            <View style={styles.modalActions}>
              <Button title="Cancel" onPress={() => setModalVisible(false)} />
              <Button title="Add to Cart" onPress={handleAddToCart} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

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
  addToCartBtn: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  addToCartText: {
    textAlign: 'center',
    color: Colors.white,
    fontWeight: '600',
  },

  // Modal styles
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  modalProductName: {
    fontSize: 18,
    marginBottom: 5,
  },
  modalPrice: {
    fontSize: 16,
    color: Colors.primary,
    marginBottom: 20,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20
  },
});

export default ProductItem;

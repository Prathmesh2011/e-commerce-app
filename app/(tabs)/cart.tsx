import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';  // Import RootState for typing
import { CartItemType } from '@/types/type';  // Import CartItemType for proper typing
import { removeFromCart } from '@/redux/cartSlice';  // Import removeFromCart action

const CartScreen = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();  // Initialize dispatch

  // Handle item removal from cart
  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>

      {/* Conditional rendering: Show a message if the cart is empty */}
      {cartItems.length === 0 ? (
        <Text style={styles.noItemsText}>No items in the cart</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }: { item: CartItemType }) => (
            <View style={styles.cartItem}>
              <Image source={{ uri: item.images[0] }} style={styles.productImg} />
              <Text>{item.title}</Text>
              <Text>${item.price}</Text>
              <Text>Quantity: {item.quantity}</Text>
              <Text>{item.description}</Text>
              <Text>Category: {item.category.name}</Text>

              {/* Remove button */}
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => handleRemoveFromCart(item.id)}
              >
                <Text style={styles.removeButtonText}>Remove from Cart</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
  noItemsText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 30,
    color: 'gray',
  },
  cartItem: {
    marginBottom: 15,
    padding: 10,
    borderBottomWidth: 1,
  },
  productImg: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  removeButton: {
    backgroundColor: 'red',
    paddingVertical: 8,
    borderRadius: 5,
    marginTop: 10,
  },
  removeButtonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
  },
});

export default CartScreen;

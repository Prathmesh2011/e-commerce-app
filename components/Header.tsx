import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

type Props = {};


const Colors = {
  black: '#000000',
  white: '#FFFFFF',
  gray: '#808080',
  primary: '#3498db',  
  background: '#f4f4f4',  
};

const Header = (props: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.logo}>SX</Text>
      <Link href={'/explore'} asChild>
        <TouchableOpacity style={styles.searchBox}>
          <Text style={styles.searchTxt}>Search</Text>
          <Ionicons name="search-circle-outline" size={20} color={Colors.gray} />
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white,  
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  logo: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.primary,  
  },
  searchBox: {
    flex: 1,
    backgroundColor: Colors.background,  
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchTxt: {
    color: Colors.gray,  
  },
});

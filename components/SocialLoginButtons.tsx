import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';

const Colors = {
  black: '#000000',
  gray: '#888888',
  white: '#FFFFFF',
  primary: '#1E90FF',
};

type Props = {
  emailHref: string;
};

const SocialLoginButtons = ({ emailHref }: Props) => {
  return (
    <View style={styles.socialLoginWrapper}>
      <Animated.View entering={FadeInDown.delay(300).duration(500)}>
        <Link href={emailHref} asChild>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="mail-outline" size={20} color={Colors.black} />
            <Text style={styles.btnTxt}>Continue with Email</Text>
          </TouchableOpacity>
        </Link>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(700).duration(500)}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="logo-google" size={20} color={Colors.black} />
          <Text style={styles.btnTxt}>Continue with Google</Text>
        </TouchableOpacity>
      </Animated.View>
      
      <Animated.View entering={FadeInDown.delay(1100).duration(500)}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="logo-apple" size={20} color={Colors.black} />
          <Text style={styles.btnTxt}>Continue with Apple</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  socialLoginWrapper: {
    alignSelf: 'stretch',
  },
  button: {
    flexDirection: 'row',
    padding: 12,
    borderColor: Colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  btnTxt: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.black,
    marginLeft: 8,
  },
});

export default SocialLoginButtons;

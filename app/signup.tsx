import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Link, useRouter, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import InputField from '@/components/InputField';
import SocialLoginButtons from '@/components/SocialLoginButtons';

const Colors = {
  black: '#000000',
  gray: '#888888',
  white: '#FFFFFF',
  primary: '#1E90FF',
  background: '#F5F5F5',
};

const SignUpScreen = () => {
  const router = useRouter();

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: 'Sign Up',
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close" size={24} color={Colors.black} />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Create an Account</Text>
        <InputField
          placeholder="Email Address"
          placeholderTextColor={Colors.gray}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <InputField
          placeholder="Password"
          placeholderTextColor={Colors.gray}
          secureTextEntry={true}
        />
        <InputField
          placeholder="Confirm Password"
          placeholderTextColor={Colors.gray}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>Create an Account</Text>
        </TouchableOpacity>

        <Text style={styles.loginTxt}>
          Already have an account?{' '}
          <Link href="/signin" asChild>
            <TouchableOpacity>
              <Text style={styles.loginTxtSpan}>Sign In</Text>
            </TouchableOpacity>
          </Link>
        </Text>

        <View style={styles.divider} />

        <SocialLoginButtons emailHref="/signin" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 1.2,
    color: Colors.black,
    marginBottom: 50,
  },
  btn: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    borderRadius: 5,
    marginBottom: 20,
  },
  btnTxt: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  loginTxt: {
    fontSize: 14,
    color: Colors.black,
    marginBottom: 30,
  },
  loginTxtSpan: {
    color: Colors.primary,
    fontWeight: '600',
  },
  divider: {
    borderTopColor: Colors.gray,
    borderTopWidth: StyleSheet.hairlineWidth,
    width: '30%',
    marginBottom: 30,
  },
});

export default SignUpScreen;

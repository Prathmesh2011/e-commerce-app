import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import { Link, useRouter, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebaseConfig';
import InputField from '@/components/InputField';
import SocialLoginButtons from '@/components/SocialLoginButtons';

const Colors = {
  black: '#000000',
  gray: '#888888',
  white: '#FFFFFF',
  primary: '#1E90FF',
  background: '#F5F5F5',
};

const SignInScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace('/(tabs)'); // Navigate to the home page
    } catch (error: any) {
      Alert.alert('Sign-In Failed', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: 'Sign In',
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close" size={24} color={Colors.black} />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Login to your Account</Text>
        <InputField
          placeholder="Email Address"
          placeholderTextColor={Colors.gray}
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <InputField
          placeholder="Password"
          placeholderTextColor={Colors.gray}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.btn} onPress={handleSignIn} disabled={loading}>
          <Text style={styles.btnTxt}>{loading ? 'Signing In...' : 'Login'}</Text>
        </TouchableOpacity>

        <Text style={styles.loginTxt}>
          Don't have an account?{' '}
          <Link href="/signup" asChild>
            <TouchableOpacity>
              <Text style={styles.loginTxtSpan}>Sign Up</Text>
            </TouchableOpacity>
          </Link>
        </Text>

        <View style={styles.divider} />

        <SocialLoginButtons emailHref="/signup" />
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
    width: '100%',
    alignItems: 'center',
  },
  btnTxt: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
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

export default SignInScreen;

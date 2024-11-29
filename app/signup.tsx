import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import { Link, useRouter, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebaseConfig';
import InputField from '@/components/InputField';

const Colors = {
  black: '#000000',
  gray: '#888888',
  white: '#FFFFFF',
  primary: '#1E90FF',
  background: '#F5F5F5',
};

const SignUpScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill out all fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.replace('/(tabs)'); // Navigate to the home page
    } catch (error: any) {
      Alert.alert('Sign-Up Failed', error.message);
    } finally {
      setLoading(false);
    }
  };

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
        <Text style={styles.title}>Create a New Account</Text>
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
        <InputField
          placeholder="Confirm Password"
          placeholderTextColor={Colors.gray}
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity style={styles.btn} onPress={handleSignUp} disabled={loading}>
          <Text style={styles.btnTxt}>{loading ? 'Signing Up...' : 'Sign Up'}</Text>
        </TouchableOpacity>

        <Text style={styles.loginTxt}>
          Already have an account?{' '}
          <Link href="/signin" asChild>
            <TouchableOpacity>
              <Text style={styles.loginTxtSpan}>Sign In</Text>
            </TouchableOpacity>
          </Link>
        </Text>
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
});

export default SignUpScreen;

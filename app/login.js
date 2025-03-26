import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import MyButton from '../components/navigation/MyButton';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const isFormFilled = email.trim() !== '' && password.trim() !== '';

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Signin to your PopX Account</Text>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </View>

      <View>
        {/* Email Field */}
        <View style={styles.inputContainer}>
          {emailFocused || email ? <Text style={styles.label}>Email Address</Text> : null}
          <TextInput
            placeholder={!emailFocused ? 'Enter email address' : ''}
            style={styles.input}
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(email !== '')}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        {/* Password Field */}
        <View style={styles.inputContainer}>
          {passwordFocused || password ? <Text style={styles.label}>Password</Text> : null}
          <TextInput
            placeholder={!passwordFocused ? 'Enter password' : ''}
            style={styles.input}
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(password !== '')}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
      </View>

      {/* Login Button using MyButton component */}
      <MyButton
        title="Login"
        color={isFormFilled ? 'blue' : 'grey'}
        onPress={() => console.log('Login pressed')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    gap: 7,
    margin: 7,
  },
  header: {
    paddingVertical: 20,
    paddingRight: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'grey',
  },
  inputContainer: {
    position: 'relative',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingTop: 14,
    paddingBottom: 8,
  },
  label: {
    position: 'absolute',
    top: 5,
    left: 12,
    fontSize: 12,
    color: 'purple',
    paddingHorizontal: 2,
  },
  input: {
    fontSize: 16,
    paddingVertical: 6,
  },
});

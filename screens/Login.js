import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      navigation.replace('Home');
    } catch (err) {
      Alert.alert('Đăng nhập thất bại', err.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.header}>Đăng Nhập</Text>

        <Image
          source={require('../assets/logolab3.png')}
          style={styles.image}
          resizeMode="contain"
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          secureTextEntry
          placeholderTextColor="#aaa"
          value={password}
          onChangeText={setPassword}
        />
        <Button
          onPress={handleLogin}
          color="#1e88e5"
          title="Đăng nhập"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#FFEB3B', // màu nền vàng
    padding: 20,
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 120,
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    marginBottom: 15,
    fontSize: 16,
  },
});

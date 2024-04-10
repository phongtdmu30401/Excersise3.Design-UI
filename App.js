import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const OnChangeEmail = (value) => setEmail(value);
  const OnChangePassword = (value) => setPassword(value);
  const onPress = () => {
    alert(`Email ${email} - Password ${password}`)
  }
  const imageBackground = { uri: 'https://img.freepik.com/free-vector/geometric-gradient-futuristic-background_23-2149116406.jpg' };
  const image = { uri: 'https://cdn-icons-png.flaticon.com/512/5087/5087579.png' };

  return (
    <View style={styles.container}>
      <ImageBackground style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }} source={imageBackground} resizeMode="cover">
        <Image source={image} style={styles.Image} />
        <TextInput
          value={email}
          style={styles.TextInput}
          onChangeText={value => OnChangeEmail(value)}
        />
        <TextInput
          value={password}
          style={styles.TextInput}
          onChangeText={value => OnChangePassword(value)}
        />
        <TouchableOpacity
          style={styles.Button}
          onPress={() => onPress()}
        ><Text style={{ color: '#fff', padding: '1%' }}>Login</Text></TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TextInput: {
    borderWidth: 1,
    borderRadius: 20,
    width: "50%",
    height: "5%",
    marginTop: '5%',
    backgroundColor: '#fff',
  },
  Button: {
    backgroundColor: '#000',
    borderRadius: 5,
    width: "50%",
    height: "3%",
    alignItems: 'center',
    marginTop: '5%',
  },
  Image: {
    width: "30%",
    height: "15%",
    borderRadius: 90,
  },
});
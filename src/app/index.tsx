// src/app/index.tsx
import { navigate } from 'expo-router/build/global-state/router';
import { Button, Alert, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carpe Diem</Text>
      <Text style={styles.text}>Definition: Seize The Day</Text>
      <Button
      title="Get Started"
      color="#ffffff"
      onPress={() => navigate('./createAccountPage')}
      />
       <Button
      title="Login"
      color="#ffffff"
      onPress={() => navigate('./loginPage')}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191919',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#F5F5F5',
    paddingBottom: 4,
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
    color: '#F5F5F5',
    paddingBottom: 40,
    paddingTop: 40,
  },
});
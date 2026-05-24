import { View, Text, StyleSheet } from 'react-native';

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>
        You hate Ronkonkoma too!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b6cad3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
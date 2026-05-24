import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function TitleScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 65, color: 'black', fontWeight: 'bold', textAlign: 'center', position: 'absolute', top: 80 }}>
        Do you hate Ronkonkoma?
      </Text>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Main')}
        style={{ backgroundColor: 'green', width: 300, height: 50, borderRadius: 10, position: 'absolute', top: 300, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'black', fontSize: 40, fontWeight: 'bold' }}>Yes</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => Alert.alert('I disagree with you')}
        style={{ backgroundColor: 'red', width: 300, height: 50, borderRadius: 10, position: 'absolute', top: 500, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'black', fontSize: 40, fontWeight: 'bold' }}>No</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8c23e2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
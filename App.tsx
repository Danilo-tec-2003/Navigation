import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

// Definindo o tipo para a navegação
type RootStackParamList = {
  TelaOne: undefined;
  TelaTwo: undefined;
};

// Tipando a prop `navigation`
type TelaOneProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'TelaOne'>;
};

// Definindo a TelaOne
function TelaOne({ navigation }: TelaOneProps) {
  return (
    <View style={styles.container}>
      <Text>TELA ONE</Text>
      <Button
        title="Ir para Tela Two"
        onPress={() => navigation.navigate('TelaTwo')}
      />
    </View>
  );
}

// Definindo a TelaTwo
function TelaTwo() {
  return (
    <View style={styles.container}>
      <Text>TELA TWO</Text>
    </View>
  );
}

// Criando a pilha de navegação
const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TelaOne" component={TelaOne} />
        <Stack.Screen name="TelaTwo" component={TelaTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

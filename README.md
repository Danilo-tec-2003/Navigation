PACOTE NECESSARIO:

pacote navegção:
1- npm install @react-navigation/native
2- npx expo install react-native-screens react-native-safe-area-context

As bibliotecas que instalamos até agora são os blocos de construção e fundações compartilhadas para navegadores, e cada 
navegador no React Navigation vive em sua própria biblioteca. Para usar o navegador de pilha nativo, precisamos instalar 
@react-navigation/native-stack:



LEMBRETES: TIPAR A NAVEGAÇÃO POR CONTA DO TYPESCRIPT
type RootStackParamList = {
  TelaOne: undefined;
  TelaTwo: undefined;
};

TIPANDO A PROP 'NAVIGATION'
type TelaOneProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'TelaOne'>;
};


principais dependencias: 

Dependências Principais:

@react-navigation/native: A biblioteca principal para navegação.
@react-navigation/native-stack: A biblioteca para navegação usando pilhas nativas.
react-native-screens: Melhora o desempenho de navegação ao usar navegação nativa.
react-native-safe-area-context: Lida com as áreas seguras em dispositivos com entalhes ou áreas não utilizáveis.
Dependências para TypeScript:

@types/react: Tipos para React.
@types/react-native: Tipos para React Native.


EMULADOR: MOBILE VIEW

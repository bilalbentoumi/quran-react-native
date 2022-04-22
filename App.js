import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useFonts } from 'expo-font'
import LoadingScreen from './screens/LoadingScreen'
import HomeScreen from './screens/HomeScreen'
import ViewChapter from './screens/ViewChapter'
import heart from './assets/images/heart.png'
import cog from './assets/images/cog.png'
import dots from './assets/images/dots.png'
import fonts from "./constants/Fonts";

const Stack = createNativeStackNavigator()

export default function App() {

  const [ fontsLoaded ] = useFonts(fonts)

  if (!fontsLoaded) {
    return <LoadingScreen/>
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ HomeScreen } options={ homeScreenHeader } />
        <Stack.Screen name="ViewChapter" component={ ViewChapter } options={ viewChapterHeader } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const header = {
  headerStyle: {
    backgroundColor: '#15803d'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}

const homeScreenHeader = {
  ...header,
  title: 'Quran App',
  headerRight: () => getActions()
}
const viewChapterHeader = ({ route }) => ({
  ...header,
  title: route.params.name,
  headerRight: () => getActions()
})

const getActions = () => (
  <View style={styles.actions}>
    <TouchableOpacity style={styles.action}>
      <Image source={ heart } style={ { width: 20, height: 20 } } resizeMode="contain" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.action}>
      <Image source={ cog } style={ { width: 20, height: 20 } } resizeMode="contain" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.action}>
      <Image source={ dots } style={ { width: 20, height: 20 } } resizeMode="contain" />
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row'
  },
  action: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25
  },
})
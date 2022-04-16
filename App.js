import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import HomeScreen from './screens/HomeScreen'
import ViewChapter from './screens/ViewChapter'
import heart from './assets/heart.png'
import cog from './assets/cog.png'
import dots from './assets/dots.png'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ HomeScreen } options={ { ...header, title: 'Quran App' } } />
        <Stack.Screen name="ViewChapter" component={ ViewChapter } options={ { ...header, title: 'ViewChapter' } } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const header = {
  headerStyle: {
    backgroundColor: '#15803d',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerRight: () => getActions()
}

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
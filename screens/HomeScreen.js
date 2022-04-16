import { StyleSheet, View, ScrollView } from 'react-native'
import ListItem from '../components/ListItem'
import chapters from '../data/chapters.json'

export default function HomeScreen({ navigation }) {
  return (
      <ScrollView style={ styles.container }>
        { chapters.map((chapter) => (
          <ListItem chapter={ chapter } navigation={ navigation } key={ chapter.id }>Bilal Bentoumi</ListItem>
        )) }
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  }
})
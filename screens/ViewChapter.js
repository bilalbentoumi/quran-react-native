import {ImageBackground, ScrollView, StyleSheet, Text, View} from 'react-native'
import chapters from '../data/chapters.json'
import verseBg from '../assets/verse-number.png'

export default function ViewChapter({ navigation, route }) {

  const chapter = chapters.filter((chapter) => {
    return chapter.id === route.params.id
  }).pop()

  const verses = chapter.content.trim().split(/\[[0-9]+\]/).filter(e => e)

  return (
    <ScrollView style={ styles.container }>
        { verses.map((verse, index) => (
          <View style={ styles.verse } key={ index }>

            <Text style={ styles.verseText }>{ verse }</Text>
            <ImageBackground source={ verseBg } resizeMode="cover" style={ styles.verseNumber }>
              <Text style={ styles.verseNumberText }>{ (index + 1) }</Text>
            </ImageBackground>
          </View>
        )) }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  verse: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#eee',
    padding: 20
  },
  verseNumber: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  verseNumberText: {
    fontWeight: 'bold',
    color: '#166534FF'
  },
  verseText: {
    flexShrink: 1,
    flexGrow: 1,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'right',
    lineHeight: 36
  }
})
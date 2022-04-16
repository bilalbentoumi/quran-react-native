import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import chapters from '../data/chapters.json'
import verseBullet from '../assets/images/verse.png'

export default function ViewChapter({ route }) {

  const [ chapter, setChapter ] = useState(null)

  useEffect(() => {

    setChapter(() => {
      let chapter = chapters.filter(chapter => chapter.id === route.params.id).pop()
      chapter.verses = chapter.content.trim().split(/\[[0-9]+\]/).filter(e => e)
      return chapter
    })

  }, [])

  if (!chapter) {
    return (
      <View style={ styles.loadingContainer }>
        <Text style={ styles.loadingText }>Loading...</Text>
      </View>
    )
  }

  return (
    <ScrollView style={ styles.container }>
        { chapter && chapter.verses.map((verse, index) => (
          <View style={ styles.verse } key={ index }>
            <Image source={ verseBullet } style={ styles.verseBullet }></Image>
            <Text style={ styles.verseText }>{ verse }</Text>
          </View>
        )) }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  loadingContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#808080'
  },
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
  verseBullet: {
    width: 22,
    height: 22,
    marginLeft: 10,
    marginTop: 8
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
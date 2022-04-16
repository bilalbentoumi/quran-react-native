import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import verseBullet from '../assets/images/verse.png'
import play from '../assets/images/play.png'
import copy from '../assets/images/copy.png'
import favorite from '../assets/images/favorite.png'

export default function ViewChapter({ route }) {

  const [ chapter, setChapter ] = useState(null)

  useEffect(() => {

    let chapter = route.params.chapter

    setChapter(() => {
      chapter.verses = chapter.content.trim().split(/\s*\[[0-9]+\]\s*/).filter(a => a)
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
      <View style={ styles.verses }>
        { chapter.verses && chapter.verses.map((verse, index) => (
          <View style={ styles.verseContainer } key={ index }>
            <View style={ styles.verseActions }>
              <Image source={ play } resizeMode="contain" style={ styles.verseAction }></Image>
              <Image source={ copy } resizeMode="contain" style={ styles.verseAction }></Image>
              <Image source={ favorite } resizeMode="contain" style={ styles.verseAction }></Image>
            </View>
            <Text style={ styles.verse }>
              <Image source={ verseBullet } resizeMode="contain" style={ styles.verseBullet }></Image>
              <Text>
                { verse }
              </Text>
            </Text>
          </View>
        )) }
      </View>
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
    backgroundColor: '#f8f8f8'
  },
  verses: {
    padding: 20,
    paddingBottom: 10
  },
  verseContainer: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    marginBottom: 10,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderColor: '#f1f1f1'
  },
  verseActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    marginBottom: 20
  },
  verseAction: {
    width: 20,
    height: 20,
    marginLeft: 20
  },
  verse: {
    flexShrink: 1,
    flexGrow: 1,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'right',
    lineHeight: 36,
    paddingHorizontal: 20
  },
  verseBullet: {
    width: 40,
    height: 26,
    marginLeft: 10,
    marginTop: 8
  }
})
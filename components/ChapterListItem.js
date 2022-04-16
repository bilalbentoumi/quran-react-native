import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native'
import chapterBg from '../assets/images/chapter-number.png'

export default function ChapterListItem({ navigation, chapter }) {

  function viewChapter(chapter) {
    navigation.navigate('ViewChapter', { name: chapter.name_pron_en, chapter: chapter })
  }

  return (
    <TouchableOpacity style={ styles.listItem } onPress={ () => viewChapter(chapter) }>
        <ImageBackground source={ chapterBg } resizeMode="cover" style={ styles.chapterNumber }>
          <Text style={ styles.chapterNumberText }>{ chapter.id }</Text>
        </ImageBackground>
      <View style={ { flexGrow: 1 } }>
        <Text style={ styles.name }>{ chapter.name_pron_en }</Text>
        <View style={ { flexDirection: 'row', alignItems: 'center' } }>
          <Text style={ styles.class }>
            { chapter.class === 'مكية' ? 'MECCAN' : 'MEDINAN' }
          </Text>
          <Text style={ styles.bullet }>•</Text>
          <Text style={ styles.versesNumber }>
            { chapter.verses_number  + ' VERSES' }
          </Text>
        </View>
      </View>
      <Text style={ styles.nameAr }>{ chapter.name_ar }</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center'
  },
  chapterNumber: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  },
  chapterNumberText: {
    fontWeight: 'bold',
    color: '#15803D'
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#484b48'
  },
  nameAr: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#484b48'
  },
  bullet: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#9CA3AFFF',
    paddingHorizontal: 5
  },
  class: {
    fontSize: 12,
    color: '#9CA3AFFF'
  },
  versesNumber: {
    fontSize: 12,
    color: '#9CA3AFFF'
  }
})
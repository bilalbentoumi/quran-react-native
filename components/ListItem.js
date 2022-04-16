import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native'
import chapterBg from '../assets/chapter-number.png'

export default function ListItem({ navigation, chapter }) {

  function goToChapter(id) {
    navigation.navigate('ShowChapter', { id: id })
  }

  return (
    <TouchableOpacity style={ styles.listItem } onPress={ () => goToChapter(chapter.id) }>
        <ImageBackground source={ chapterBg } resizeMode="cover" style={ styles.chapterNumber }>
          <Text style={ styles.chapterNumberText }>{ chapter.id }</Text>
        </ImageBackground>
      <View style={ {flexGrow: 1} }>
        <Text style={ styles.name }>{ chapter.name_pron_en }</Text>
        <Text style={ styles.subName }>{ chapter.name_ar }</Text>
      </View>
      <View style={ styles.versesNumber }>
        <Text style={ styles.versesNumberText }>{ chapter.verses_number + ' Ayat' }</Text>
      </View>
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
    alignItems: 'flex-start'
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
  subName: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#9CA3AFFF'
  },
  versesNumber: {
    marginTop: 10,
    backgroundColor: '#F3F4F6FF',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  versesNumberText: {
    color: '#9CA3AFFF',
    fontSize: 12,
    fontWeight: 'bold'
  },
})
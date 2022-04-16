import ChapterListItem from './ChapterListItem'
import { useNavigation } from '@react-navigation/native'
import chapters from '../data/chapters.json'

export default function ChapterListIem() {

  const navigation = useNavigation()

  return (
    <>
      { chapters.map((chapter) => (
        <ChapterListItem chapter={ chapter } navigation={ navigation } key={ chapter.id }>Bilal Bentoumi</ChapterListItem>
      )) }
    </>
  )
}
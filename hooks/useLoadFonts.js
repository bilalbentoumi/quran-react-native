import { useEffect, useState } from 'react'
import * as Font from "expo-font";

export default function useLoadFonts() {

  const [ fontsLoaded, setFontsLoaded ] = useState(false)

  useEffect(() => {
    Font.loadAsync({
      'AlQalamQuran': require('../assets/fonts/AlQalamQuran.ttf'),
      'PdmsIslamicFont': require('../assets/fonts/PdmsIslamicFont.ttf'),
      'PdmsSaleemQuranFont': require('../assets/fonts/PdmsSaleemQuranFont.ttf')
    }).then(() => {
      setFontsLoaded(true)
    })
  }, [])

  return fontsLoaded
}
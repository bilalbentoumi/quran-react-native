import { useEffect, useState } from 'react'
import * as Font from 'expo-font'
import fonts from '../constants/Fonts'

export default function useLoadFonts() {

  const [ fontsLoaded, setFontsLoaded ] = useState(false)

  useEffect(() => {
    Font.loadAsync(fonts).then(() => setFontsLoaded(true))
  }, [])

  return fontsLoaded
}
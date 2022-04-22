import { StyleSheet, Text, View } from 'react-native'

export default function LoadingScreen() {

  return (
    <View style={ styles.loadingContainer }>
      <Text style={ styles.loadingText }>Loading...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  loadingText: {
    color: '#383838',
    fontSize: 18
  },
})
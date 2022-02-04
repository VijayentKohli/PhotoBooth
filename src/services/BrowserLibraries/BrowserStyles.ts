import { StyleSheet, Dimensions } from 'react-native'

const windowWidth: number = Dimensions.get('window').width

export const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#231E32',
      height: 100,
      padding: 20,
      width: windowWidth,
    },
    webViewStyle: {
      flex: 1,
      width: windowWidth,
      opacity: 1,
      backgroundColor: 'white',
    },
  })

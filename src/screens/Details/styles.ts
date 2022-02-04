import { StyleSheet, Dimensions } from 'react-native'

const windowWidth: number = Dimensions.get('window').width

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#231E32',
  },
  header: {
    backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    height: 50,
    width: '100%',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  card: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  photo: {
    height: 260,
  },
  imageGalleryFooter: {
    padding: 10,
    height: 100,
    flexDirection: 'row',
  },
  imageGalleryButtonContainer: {
    borderWidth: 2,
    borderColor: 'black',
    margin: 5,
    padding: 5,
  },
  imageGalleryButton: {
    padding: 10,
    backgroundColor: 'gray',
  },
  text: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  webviewcontainer: {
    flex: 1,
    backgroundColor: 'white',
    height: 100,
    padding: 10,
    width: windowWidth,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  webViewStyle: {
    flex: 1,
    width: windowWidth,
    opacity: 1,
    backgroundColor: 'white',
  },
})

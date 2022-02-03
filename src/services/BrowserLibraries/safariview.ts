import { Linking } from 'react-native'
import SafariView from 'react-native-safari-view'

export default {
  openUrl: async (url: string) => {
    if (await SafariView.isAvailable()) {
      SafariView.show({
        url: url,
      })
    } else {
      Linking.openURL(url)
    }
  },
}

import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { StatusBar, View } from 'react-native'
import { useNetInfo } from '@react-native-community/netinfo'
import LottieView from 'lottie-react-native'
import R from 'res'

import { MenuButton, PhotoCard } from '../../components'
import { CustomListContainer } from '../../containers'
import { usePhotoList } from '../../hooks'
import styles from './styles'

const PhotoListScreen = () => {
  const items = usePhotoList()
  const netInfo = useNetInfo()

  if (items.length > 0) {
    items[0].last = 'react-native-inappbrowser-reborn'
    items[0].first = ''

    items[1].last = 'react-native-safari-view'
    items[1].first = ''

    items[2].last = 'react-native-wkwebview-reborn'
    items[2].first = ''

    items[3].last = 'react-native-wkwebview'
    items[3].first = ''

    items[4].last = 'react-native-webview'
    items[4].first = ''

    items.splice(6)
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container} forceInset={{ bottom: 'always' }}>
        <CustomListContainer
          items={items}
          style={styles.content}
          renderItem={({ item }) => <PhotoCard {...item} />}
        />
      </SafeAreaView>
      <View style={styles.footer}>
        <LottieView
          autoSize
          autoPlay
          loop={false}
          style={styles.netInfo}
          resizeMode="contain"
          source={
            netInfo.isInternetReachable
              ? R.animations.online
              : R.animations.offline
          }
        />
      </View>
    </>
  )
}

PhotoListScreen.navigationOptions = (props: any) => {
  return {
    title: 'Photos',
    headerLeft: () => <MenuButton {...props} />,
  }
}

export default PhotoListScreen

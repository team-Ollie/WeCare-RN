import ScreenLayout from '@/components/ScreenLayout'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import WebView from 'react-native-webview'

export default function App() {
  return (
    <SafeAreaProvider>
      <ScreenLayout>
        <WebView source={{ uri: 'https://team-ollie.github.io/WeCare-FE/main' }} allowsBackForwardNavigationGestures />
      </ScreenLayout>
    </SafeAreaProvider>
  )
}

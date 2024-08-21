import HomeNavigation from '@/components/navigation/mainNavigation'
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import CardHomeComponent from '../components/tenantHomeComponent/cardHomeComponent'

function TenantHomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <HomeNavigation/>
        <CardHomeComponent/>
      </View>
    </SafeAreaView>
  )
}

export default TenantHomeScreen

const styles = StyleSheet.create({
    container: {
      margin: 10,
      alignItems: 'center',
    },
})
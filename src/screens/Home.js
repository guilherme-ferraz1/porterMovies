import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import { useListMovies } from '../hooks/useListMovies'
import { Card, Loading } from '../components'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export const HomeScreen = ({ navigation }) => {
  const { movies = [], handlePagination, loading } = useListMovies()

  if (movies.length === 0) return <Loading/>

  const renderItem = ({ item, id }) => {
    return (
      <Card 
        key={id} 
        movie={item} 
        navigation={navigation}
      />
    )
  }

  const renderFooter = () => {
    return (
      loading ? <Loading /> : null
    )
  }

  const renderHeader = () => {
    return (
      <Text style={styles.headerTitle}>
        Próximos lançamentos
      </Text>
    )
  }

  return (
    <View>
      <StatusBar style="auto"/>
      <FlatList 
        data={movies}
        keyExtractor={(item, index) => item.id + index.toString()}
        onEndReached={handlePagination}
        renderItem={renderItem}
        ListFooterComponent={renderFooter}
        ListHeaderComponent={renderHeader}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  headerTitle: {
    marginLeft: wp(5),
    marginTop: hp(3),
    marginBottom: hp(2),
    fontSize: hp('3.5%'),
    fontWeight: 'bold'
  }
})
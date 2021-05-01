import React from 'react';
import { Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useFetchDetails } from '../hooks/useFetchDetails'
import { Loading } from '../components'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export const DetailsScreen = ({ route }) => {
  const { id } = route.params
  const { details = {}, loading } = useFetchDetails(id)

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <ScrollView>
      <Image
        style={styles.logo}
        source={{ uri:`https://image.tmdb.org/t/p/w500${details.backdrop_path}` }}
      />
      <Text style={styles.title}>
        {details.title}
      </Text>
      <Text style={styles.overview}>
        {details.overview}
      </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: wp('100%'),
    height: hp(30),
    resizeMode: 'stretch'
  },
  title: {
    fontSize: hp('4%'),
    fontWeight: 'bold',
    marginTop: hp(3),
    marginHorizontal: wp(2),
    alignSelf: 'center',
    textAlign: 'center'
  },
  overview: {
    fontSize: hp('2.3%'),
    width: wp('80%'),
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: hp(3)
  }
})
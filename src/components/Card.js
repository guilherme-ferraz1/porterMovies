import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { format } from "date-fns"
import { ProgressBar, Colors } from 'react-native-paper'

export const Card = ({ movie = {}, navigation }) => {
  const date = new Date(movie.release_date)
  const formattedDate = format(date, "MMMM, yyyy");
  const progressRate = movie.vote_average / 10

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={{ uri:`https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text numberOfLines={1} style={styles.title}>
          {movie.title}
        </Text>
        <Text style={styles.info}>
          {formattedDate}
        </Text>
        <View style={styles.progress}>
          <ProgressBar progress={progressRate} color={Colors.red800} />
        </View>
        <Text style={styles.info}>
          {movie.vote_count} votos
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Detalhes', { id: movie.id })}>
          <Text style={styles.details}>
            Ver detalhes
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: wp(3),
    height: hp(35)
  },
  logoContainer: {
    justifyContent: 'center',
    marginLeft: wp(2)
  },
  logo: {
    width: wp(40),
    height: hp(30),
    borderRadius: 6,
    resizeMode: 'center'
  },
  infoContainer: {
    justifyContent: 'flex-start',
    marginLeft: wp(6),
    marginVertical: hp(4)
  },
  title: {
    fontWeight: 'bold',
    fontSize: hp('3%'),
    width: hp(22)
  },
  info: {
    fontSize: hp('2.8%'),
    marginTop: hp(1.5)
  },
  progress: {
    width: wp('35%'),
    marginTop: hp(2.5)
  },
  details: {
    fontSize: hp('2.2%'),
    marginTop: hp(2.5),
    fontWeight: 'bold'
  }
})
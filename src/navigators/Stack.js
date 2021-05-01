import * as React from 'react';
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, DetailsScreen } from '../screens'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Voltar" 
          component={HomeScreen} 
          options={{
            headerTitle: () => (
              <Image
                source={require('./../../assets/headerLogo.png')}
                style={{ width: wp(35), height: hp(5), marginBottom: hp(1) }}
              />
            ),
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen 
          name="Detalhes" 
          component={DetailsScreen} 
          options={{
            headerTitle: () => (
              <Image
                source={require('./../../assets/headerLogo.png')}
                style={{ width: wp(35), height: hp(5), marginBottom: hp(1) }}
              />
            ),
            headerTitleAlign: 'center'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
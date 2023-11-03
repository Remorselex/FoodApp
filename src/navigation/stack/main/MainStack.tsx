import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../../../screens/MainScreen';
import {Screens} from '../../constants/Screens';

const MainStack = () => {
  const {Navigator, Screen} = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          options={{
            title: 'тайтл',
          }}
          name={Screens.MAIN_SCREEN}
          component={MainScreen}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default MainStack;

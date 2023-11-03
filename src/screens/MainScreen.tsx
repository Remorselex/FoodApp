import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Все, хватит пока
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default MainScreen;

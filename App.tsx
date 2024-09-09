/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import Calculator from './src/screens/calculator';
import Ticket from './src/screens/Ticket';
import {Text} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Text
          style={{
            fontSize: 20,
            paddingBottom: 10

          }}>
          Componente ticket
        </Text>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={() => {
            return <Ticket />;
          }}
          ItemSeparatorComponent={() => <View style={{height: 10}} />}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SearchScreen from './src/screens/searchScreen';
import HomeScreen from './src/screens/homescreen';
import CinemaListScreen from './src/screens/cinemaListScreen';

import { store } from './store';
import { Provider } from 'react-redux';

const Drawer= createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Drawer.Navigator
                       screenOptions={{
                          drawerStyle: {
                            backgroundColor: '#c6cbef',
                            width: 240,
                          },
                          drawerActiveBackgroundColor: 'orange',
                          drawerActiveTintColor: 'white',
                          drawerInactiveTintColor: 'gray',
                          

                        }}
                      >
          <Drawer.Screen name="Heim" component={HomeScreen} />
          <Drawer.Screen name="Kvikmyndahús" component={CinemaListScreen} />
          <Drawer.Screen name="Leita" component={SearchScreen} />

        </Drawer.Navigator>
      </Provider>
    </NavigationContainer>
  );
}



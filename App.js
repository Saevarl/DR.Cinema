import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
import HomeScreen from './src/screens/homescreen';
import Upcoming from './src/screens/upcoming';
=======
>>>>>>> saevar
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SearchScreen from './src/screens/searchScreen';
import HomeScreen from './src/screens/homescreen';
import CinemaListScreen from './src/screens/cinemaListScreen';
import { store } from './store';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
<<<<<<< HEAD
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Upcoming" component={Upcoming} />
        </Stack.Navigator>
=======
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
>>>>>>> saevar
      </Provider>
    </NavigationContainer>
  );
}



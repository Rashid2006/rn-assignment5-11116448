// App.js
import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import Icon from 'react-native-vector-icons/Ionicons'; 
import Home from './components/Home';
import Settings from './components/Settings';
import MyCards from './components/MyCards';
import Statistics from './components/Statistics';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

const AppContent = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <NavigationContainer theme={isDarkTheme ? DarkTheme : DefaultTheme}>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          }else if (route.name === 'My Cards') {
            iconName = 'card-outline';
          } else if (route.name === 'Statistics') {
            iconName = 'podium';
          } else if (route.name === 'Settings') {
            iconName = 'settings-outline';
          }


          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      >
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Tab.Screen name="My Cards" component={MyCards} options={{ headerShown: false }} />
        <Tab.Screen name="Statistics" component={Statistics} options={{ headerShown: false }} />
        <Tab.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;

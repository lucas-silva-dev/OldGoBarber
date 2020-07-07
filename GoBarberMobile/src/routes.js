import 'react-native-gesture-handler';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

import SelectProvider from './pages/New/SelectProvider';
import SelectDateTime from './pages/New/SelectDateTime';
import Confirm from './pages/New/Confirm';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function NewScreen({ navigation }) {
  function BackDashboard() {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
        <Icon name="chevron-left" size={25} color="#fff" />
      </TouchableOpacity>
    );
  }

  function GoBack() {
    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" size={25} color="#fff" />
      </TouchableOpacity>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerTransparent: true,
        headerLeftContainerStyle: { marginLeft: 20 },
      }}
    >
      <Stack.Screen
        name="SelectProvider"
        component={SelectProvider}
        options={{
          title: 'Selecione o prestador',
          headerLeft: BackDashboard,
        }}
      />
      <Stack.Screen
        name="SelectDateTime"
        component={SelectDateTime}
        options={{ title: 'Selecione o horário' }}
      />
      <Stack.Screen
        name="Confirm"
        component={Confirm}
        options={{ title: 'Confirmar agendamento' }}
      />
    </Stack.Navigator>
  );
}

export default function Routes() {
  const signed = useSelector((state) => state.auth.signed);

  return (
    <NavigationContainer>
      {signed ? (
        <Tab.Navigator
          unmountOnBlur
          tabBarOptions={{
            keyboardHidesTabBar: true,
            activeTintColor: '#fff',
            inactiveTintColor: '#fff8',
            style: {
              backgroundColor: '#54428F',
              borderTopWidth: 0,
              paddingBottom: 5,
            },
          }}
        >
          <Tab.Screen
            options={{
              unmountOnBlur: true,
              title: 'Agendamentos',
              tabBarIcon: ({ color }) => (
                <Icon name="event" focused size={20} color={color} />
              ),
            }}
            name="Dashboard"
            component={Dashboard}
          />
          <Tab.Screen
            options={{
              unmountOnBlur: true,
              tabBarVisible: false,
              title: 'Agendar',
              tabBarIcon: ({ color }) => (
                <Icon
                  name="add-circle-outline"
                  focused
                  size={20}
                  color={color}
                />
              ),
            }}
            name="NewScreen"
            component={NewScreen}
          />
          <Tab.Screen
            options={{
              unmountOnBlur: true,
              title: 'Meu perfil',
              tabBarIcon: ({ color }) => (
                <Icon name="person" focused size={20} color={color} />
              ),
            }}
            name="Profile"
            component={Profile}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

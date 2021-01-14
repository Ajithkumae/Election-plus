import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Login from '../views/Login';
import Dashboard from '../views/Dashboard';
import Users from '../views/Users';
import Settings from '../views/Settings';
import { Image } from 'react-native';
import { Images } from '../Assets/images';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

function MyStack() {
    return (
        <Stack.Navigator
            headerMode="none"
            initialRouteName="login"
            screenOptions={{ gestureEnabled: false }}
        >
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="dashbord" component={HomeTabs} />

        </Stack.Navigator>
    )
}

export function HomeTabs() {
    return (
      <Tab.Navigator
        initialRouteName="dashbord"

        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color }) => {
            if (route.name === 'dashbord') {
              return <Image source={Images.paichat} style={{height: hp(5), width: wp(10)}} />
            }
             else if (route.name === 'users') {
                return <Image source={Images.boxicon} style={{height: hp(5), width: wp(10)}}/>
            }
            else if (route.name === 'settings') {
                return <Image source={Images.settings} style={{height: hp(5), width: wp(10)}} />
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'white',
          keyboardHidesTabBar:true,
          style:{backgroundColor:'#000080',},
          showLabel: false


        }}
      >
        <Tab.Screen name="dashbord" component={Dashboard}/>
         <Tab.Screen name="users" component={Users} />
        <Tab.Screen name="settings" component={Settings}/>
      
      </Tab.Navigator>
    );
  }

export default MyStack;

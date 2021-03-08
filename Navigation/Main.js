import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignOutScreen from '../screens/Signout';
import PhotoScreen from '../screens/PhotoScreen';
import ProfileScreen from '../screens/ProfileScreen';
import UsersScreen from '../screens/UsersScreen';

const Tab = createBottomTabNavigator();

const AppNav = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="avatar" component={PhotoScreen} />
            <Tab.Screen name="profile" component={ProfileScreen} />
            <Tab.Screen name="signout" component={SignOutScreen} />
            <Tab.Screen name="attendees" component={UsersScreen} />
        </Tab.Navigator>
    )
}


export default AppNav;
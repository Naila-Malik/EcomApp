import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Products from '../Screens/Products';
import Settings from '../Screens/Settings';
import Location from '../Screens/Location';
import React from 'react'
import COLORS from '../Screens/Constants/Colors';

const Tab = createBottomTabNavigator();

export default function TabNav() {
    return (
        <Tab.Navigator screenOptions={{
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: COLORS.primary },
        }}>
            <Tab.Screen name="Prodcuts" component={Products} />
            <Tab.Screen name="Location" component={Location} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    )
}

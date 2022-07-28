import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';

import Ionicons from '@expo/vector-icons/Ionicons';

//Screens
import Home from './../screens/home';
import DeliveryAddress from './../screens/delivery-address';
import Account from './../screens/account';
import OrderHistory from './../screens/order-history';
import Contact from './../screens/contact';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: '#F05742'
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: "INÍCIO",
                    tabBarLabelStyle:{
                        fontWeight: 'bold',
                        fontSize: 14,
                    },
                    tabBarIcon: ({color, size}) =>{
                        return <Ionicons name="md-home-outline" size={size} color={color} />;
                    }
                }}
            >
            </Tab.Screen>
            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    headerTitle: 'MEUS DADOS',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#F05742',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    tabBarLabel: "MEUS DADOS",
                    tabBarLabelStyle:{
                        fontWeight: 'bold',
                        fontSize: 14,
                    },
                    tabBarIcon: ({color, size}) =>{
                        return <Ionicons name="md-person-circle-outline" size={size} color={color} />;
                    }
                }}
            ></Tab.Screen>
            <Tab.Screen
                name="Contact"
                component={Contact}
                options={{
                    headerTitle: 'FALE CONOSCO',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#F05742',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    tabBarLabel: "FALE CONOSCO",
                    tabBarLabelStyle:{
                        fontWeight: 'bold',
                        fontSize: 14,
                    },
                    tabBarIcon: ({color, size}) =>{
                        return <Ionicons name="md-call-outline" size={size} color={color} />;
                    }
                }}
            ></Tab.Screen>
        </Tab.Navigator>
    );
}


export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}
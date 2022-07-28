import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';

import Ionicons from '@expo/vector-icons/Ionicons';

//Screens
import Home from './../screens/home';
import DeliveryAddressScreen from './../screens/delivery-address';
import AccountScreen from './../screens/account';
import UpdateProfileScreen from './../screens/update-profile';
import OrderHistoryScreen from './../screens/order-history';
import PrivatePolicyScreen from './../screens/privacy-policy';
import HelpScreen from './../screens/help';
import ContactScreen from './../screens/contact';

const Tab = createBottomTabNavigator();
const AccountStackNavigator = createNativeStackNavigator();

function AccountStack(){
    return(
        <AccountStackNavigator.Navigator
            initialRouteName="AccountScreen"
        >
            <AccountStackNavigator.Screen 
                name="AccountScreen"
                component={AccountScreen}
                options={{
                    headerTitle: 'MEUS DADOS',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#F05742',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                }}
            />
            <AccountStackNavigator.Screen 
                name="OrderHistoryScreen"
                component={OrderHistoryScreen}
                options={{
                    headerTitle: 'HISTÓRICO DE PEDIDOS',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#F05742',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                }}
            />
            <AccountStackNavigator.Screen 
                name="PrivatePolicyScreen"
                component={PrivatePolicyScreen}
                options={{
                    headerTitle: 'POLÍTICA DE PRIVACIDADE',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#F05742',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                }}
            />
            <AccountStackNavigator.Screen 
                name="HelpScreen"
                component={HelpScreen}
                options={{
                    headerTitle: 'FAQ',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#F05742',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                }}
            />
            <AccountStackNavigator.Screen 
                name="UpdateProfileScreen"
                component={UpdateProfileScreen}
                options={{
                    headerTitle: 'ATUALIZAR PERFIL',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#F05742',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                }}
            />
        </AccountStackNavigator.Navigator>
    );
}

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
                component={AccountStack}
                options={{
                    headerShown: false,
                    headerTitle: 'MEUS DADOS',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#fff',
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
                name="ContactScreen"
                component={ContactScreen}
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
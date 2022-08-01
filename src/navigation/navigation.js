import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { RFPercentage } from "react-native-responsive-fontsize";

//Screens
import HomeScreen from './../screens/home';
import DeliveryAddressScreen from './../screens/delivery-address';
import AccountScreen from './../screens/account';
import UpdateProfileScreen from './../screens/update-profile';
import OrderHistoryScreen from './../screens/order-history';
import PrivatePolicyScreen from './../screens/privacy-policy';
import HelpScreen from './../screens/help';
import ContactScreen from './../screens/contact';
import NewOrderScreen from './../screens/cart';
import theme from "../theme";

const Tab = createBottomTabNavigator();
const HomeTabsBottomTabNavigator = createBottomTabNavigator();
const AccountStackNavigator = createNativeStackNavigator();
const NewOrderStackNavigator = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
    return (
        <HomeTabsBottomTabNavigator.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                tabBarActiveTintColor: theme.COLORS.PRIMARY
            }}
        >
            <HomeTabsBottomTabNavigator.Screen 
                name="HomeScreen" 
                component={HomeScreen} 
                options={{
                    headerShown: false,
                    tabBarLabel: "INÍCIO",
                    tabBarLabelStyle: {
                        fontFamily: theme.FONTS.BOLD,
                        fontSize: RFPercentage(1.8),
                    },
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="md-home-outline" size={RFPercentage(4)} color={color} />;
                    }
                }}
            />
            <HomeTabsBottomTabNavigator.Screen 
                name="AccountScreen" 
                component={AccountScreen} 
                options={{
                    headerTitle: 'MEUS DADOS',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: theme.COLORS.PRIMARY,
                    },
                    headerTintColor: theme.COLORS.TEXT_BRAND,
                    headerTitleStyle: {
                        fontFamily: theme.FONTS.BOLD,
                    },
                    tabBarLabel: "MEUS DADOS",
                    tabBarLabelStyle: {
                        fontFamily: theme.FONTS.BOLD,
                        fontSize: RFPercentage(1.8),
                    },
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="md-person-circle-outline" size={RFPercentage(4)} color={color} />;
                    }
                }}
            />
            <HomeTabsBottomTabNavigator.Screen 
                name="ContactScreen" 
                component={ContactScreen} 
                options={{
                    headerTitle: 'FALE CONOSCO',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: theme.COLORS.PRIMARY,
                    },
                    headerTintColor: theme.COLORS.TEXT_BRAND,
                    headerTitleStyle: {
                        fontFamily: theme.FONTS.BOLD,
                    },
                    tabBarLabel: "FALE CONOSCO",
                    tabBarLabelStyle: {
                        fontFamily: theme.FONTS.BOLD,
                        fontSize: RFPercentage(1.8),
                    },
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="md-call-outline" size={RFPercentage(4)} color={color} />;
                    }
                }}
            />
            <HomeTabsBottomTabNavigator.Screen 
                name="HelpScreen" 
                component={HelpScreen} 
                options={{
                    headerTitle: 'FAQ',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: theme.COLORS.PRIMARY,
                    },
                    headerTintColor: theme.COLORS.TEXT_BRAND,
                    headerTitleStyle: {
                        fontFamily: theme.FONTS.BOLD,
                    },
                    tabBarLabel: "AJUDA",
                    tabBarLabelStyle: {
                        fontFamily: theme.FONTS.BOLD,
                        fontSize: RFPercentage(1.8),
                    },
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="md-help-outline" size={RFPercentage(4)} color={color} />;
                    }
                }}
            />
        </HomeTabsBottomTabNavigator.Navigator>
    );

}
function App(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={HomeTabs}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="NewOrderScreen" 
                component={NewOrderScreen} 
                options={{
                    headerTitle: 'MONTE SEU CARRINHOç',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: theme.COLORS.PRIMARY,
                    },
                    headerTintColor: theme.COLORS.TEXT_BRAND,
                    headerTitleStyle: {
                        fontFamily: theme.FONTS.BOLD,
                    },
                    tabBarLabel: "MEUS DADOS",
                    tabBarLabelStyle: {
                        fontFamily: theme.FONTS.BOLD,
                        fontSize: RFPercentage(1.8),
                    },
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="md-person-outline" size={RFPercentage(4)} color={color} />;
                    }
                }}
            />
            <Stack.Screen 
                name="UpdateProfileScreen"
                component={UpdateProfileScreen}
                options={{
                    headerTitle: 'ATUALIZAR PERFIL',
                    headerTitleAlign: 'center',
                    headerBackTitleVisible: false,
                    headerStyle: {
                        backgroundColor: theme.COLORS.PRIMARY,
                    },
                    headerTintColor: theme.COLORS.TEXT_BRAND,
                    headerTitleStyle: {
                        fontFamily: theme.FONTS.BOLD,
                        fontSize: RFPercentage(2.3),
                    }
                }}
            />
        </Stack.Navigator>
    );
}

function AccountStack() {
    return (
        <AccountStackNavigator.Navigator
            initialRouteName="AccountScreen"
        >
            <AccountStackNavigator.Screen
                name="AccountScreen"
                component={AccountScreen}
                options={{
                    headerTitle: 'MEUS DADOS',
                    headerTitleAlign: 'center',
                    headerBackTitleVisible: false,
                    headerStyle: {
                        backgroundColor: theme.COLORS.PRIMARY,
                    },
                    headerTintColor: theme.COLORS.TEXT_BRAND,
                    headerTitleStyle: {
                        fontFamily: theme.FONTS.BOLD,
                        fontSize: RFPercentage(2.3),
                    }
                }}
            />
            <AccountStackNavigator.Screen
                name="OrderHistoryScreen"
                component={OrderHistoryScreen}
                options={{
                    headerTitle: 'HISTÓRICO DE PEDIDOS',
                    headerTitleAlign: 'center',
                    headerBackTitleVisible: false,
                    headerStyle: {
                        backgroundColor: theme.COLORS.PRIMARY,
                    },
                    headerTintColor: theme.COLORS.TEXT_BRAND,
                    headerTitleStyle: {
                        fontFamily: theme.FONTS.BOLD,
                        fontSize: RFPercentage(2.3),
                    }
                }}
            />
            <AccountStackNavigator.Screen
                name="PrivatePolicyScreen"
                component={PrivatePolicyScreen}
                options={{
                    headerTitle: 'POLÍTICA DE PRIVACIDADE',
                    headerTitleAlign: 'center',
                    headerBackTitleVisible: false,
                    headerStyle: {
                        backgroundColor: theme.COLORS.PRIMARY,
                    },
                    headerTintColor: theme.COLORS.TEXT_BRAND,
                    headerTitleStyle: {
                        fontFamily: theme.FONTS.BOLD,
                        fontSize: RFPercentage(2.3),
                    }
                }}
            />
            <AccountStackNavigator.Screen
                name="HelpScreen"
                component={HelpScreen}
                options={{
                    headerTitle: 'FAQ',
                    headerTitleAlign: 'center',
                    headerBackTitleVisible: false,
                    headerStyle: {
                        backgroundColor: theme.COLORS.PRIMARY,
                    },
                    headerTintColor: theme.COLORS.TEXT_BRAND,
                    headerTitleStyle: {
                        fontFamily: theme.FONTS.BOLD,
                        fontSize: RFPercentage(2.3),
                    }
                }}
            />
            <AccountStackNavigator.Screen
                name="UpdateProfileScreen"
                component={UpdateProfileScreen}
                options={{
                    headerTitle: 'ATUALIZAR PERFIL',
                    headerTitleAlign: 'center',
                    headerBackTitleVisible: false,
                    headerStyle: {
                        backgroundColor: theme.COLORS.PRIMARY,
                    },
                    headerTintColor: theme.COLORS.TEXT_BRAND,
                    headerTitleStyle: {
                        fontFamily: theme.FONTS.BOLD,
                        fontSize: RFPercentage(2.3),
                    }
                }}
            />
        </AccountStackNavigator.Navigator>
    );
}

function NewOrderStack() {
    return (
        <NewOrderStackNavigator.Navigator
            initialRouteName="NewOrderScreen"
        >
            <NewOrderStackNavigator.Screen
                name="NewOrderScreen"
                component={NewOrderScreen}
            />
        </NewOrderStackNavigator.Navigator>
    );
}

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: theme.COLORS.PRIMARY
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                
            >
            </Tab.Screen>
            <Tab.Screen
                name="NewOrder"
                component={NewOrderStack}
                
            ></Tab.Screen>
            <Tab.Screen
                name="Account"
                component={AccountStack}
                
            ></Tab.Screen>
            <Tab.Screen
                name="ContactScreen"
                component={ContactScreen}
                
            ></Tab.Screen>
        </Tab.Navigator>
    );
}


export default function Navigation() {
    return (
        <NavigationContainer>
            <App />
        </NavigationContainer>
    );
}
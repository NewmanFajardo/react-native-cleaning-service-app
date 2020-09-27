import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign, Octicons } from "@expo/vector-icons";

/* import app view */
import HomeScreen from "./src/layout/Home";
import PaymentsScreen from "./src/layout/Payments";
import SettingsScreen from "./src/layout/Settings";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const PaymentsStack = createStackNavigator();
const SettingsStack = createStackNavigator();


function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "Inicio", tabBarLabel: "Home!" }}
      />
    </HomeStack.Navigator>
  );
}

function PaymentsStackScreen() {
  return (
    <PaymentsStack.Navigator>
      <PaymentsStack.Screen
        name="PaymentsScreen"
        component={PaymentsScreen}
        options={{ title: "Pagar", tabBarLabel: "Payments!" }}
      />
    </PaymentsStack.Navigator>
  );
}

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ title: "Configuración", tabBarLabel: "Settings!" }}
      />
    </SettingsStack.Navigator>
  );
}

export default RouterApp = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            title: "Inicio",
            tabBarIcon: ({ color }) => (
              <Octicons name="home" size={24} color={color} />
            )
          }}
        />
        <Tab.Screen
          name="Payments"
          component={PaymentsStackScreen}
          options={{
            title: "Pagar",
            tabBarIcon: ({ color }) => (
              <AntDesign name="carryout" size={24} color={color} />
            )
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsStackScreen}
          options={{
            title: "Configuración",
            tabBarIcon: ({ color }) => (
              <AntDesign name="setting" size={24} color={color} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
} 
import React, { useCallback, useEffect } from "react";
import { Redirect, SplashScreen } from "expo-router";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useAuth, useIsFirstTime } from "src/core";
import { Image } from "react-native";
import HomeScreens from "../(app)/(index)/index";
import NotificationScreen from "../(app)/shop/index";
import Scan from "../(app)/help/index";
import CardScreen from "../(app)/profile/add-payment";
import Profile from "../(app)/profile/";

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  const status = useAuth.use.status();
  const { isFirstTime } = useIsFirstTime();

  const hideSplash = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    if (status !== "idle") {
      setTimeout(() => {
        hideSplash();
      }, 1000);
    }
  }, [hideSplash, status]);

  if (isFirstTime) {
    return <Redirect href="/onboarding" />;
  }

  if (status === "signIn") {
    return <Redirect href="/auth" />;
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#FAF9FF",
          borderTopColor: "#ddd",
          height: 50,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "gilroySemibold",
        },
        tabBarActiveTintColor: "#4CAF50",
        tabBarInactiveTintColor: "#939393",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreens}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/images/Home.png")}
              style={{ tintColor: color, width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/images/shopping-basket.png")}
              style={{ tintColor: color, width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Recipes"
        component={Scan}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/images/player.png")}
              style={{ tintColor: color, width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={CardScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/images/shopping-cart.png")}
              style={{ tintColor: color, width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/images/profile.png")}
              style={{ tintColor: color, width: 24, height: 24 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

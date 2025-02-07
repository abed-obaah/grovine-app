/* eslint-disable react/no-unstable-nested-components */
import { Redirect, SplashScreen } from "expo-router";
import { Tabs } from "expo-router/tabs";
import { useCallback, useEffect } from "react";
import Svg, { Circle } from "react-native-svg";

import { useAuth, useIsFirstTime } from "src/core";
import { HEIGHT, Image, Pressable, Text, View } from "src/ui";

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
    <Tabs
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen
        name="(index)/index"
        options={{
          tabBarLabel: "Home",
          title: "overview",
        }}
      />
      {/* <Tabs.Screen
        name="bookings/index"
        options={{
          tabBarLabel: "Bookings",
          title: "overview",
        }}
      />
      <Tabs.Screen
        name="notification/index"
        options={{
          tabBarLabel: "Notification",
          title: "overview",
        }}
      />
      <Tabs.Screen
        name="help/index"
        options={{
          tabBarLabel: "Help",
          title: "overview",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          title: "overview",
        }}
      /> */}
    </Tabs>
  );
}

type MyDrawerProps = {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  state: any; // Use any for the state
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  descriptors: any;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  navigation: any; // Use any for the navigation
};
export const MyDrawer = ({ state, navigation }: MyDrawerProps) => {
  const onPress = (name: string) => {
    const route = state?.routes?.find(
      (item: { key: string | number; name: string }) => item?.name === name
    );
    const index = state?.routes?.findIndex(
      (item: { key: string | number; name: string }) => item?.name === name
    );

    if (!route || index === undefined || index === null) return;

    const event = navigation.emit({
      type: "drawerItemPress",
      target: route.key,
    });

    const isFocused = state.index === index;

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  return (
    <View className="flex-1 flex px-4 py-10 bg-[#FAF9FF]">
      <Pressable
        onPress={() => onPress("(index)/index")}
        style={{ marginTop: 0.08 * HEIGHT }}
        className="w-[127px] aspect-[127/44]"
      >
        <Image
          source={require("../../assets/images/logo.png")}
          contentFit="contain"
          className="w-full h-full"
        />
      </Pressable>

      <View className="flex-1 justify-center flex gap-8">
        <Text className="font-gilroySemibold text-base text-subTextColor">
          Menu
        </Text>

        <View className="flex gap-12">
          <Pressable
            onPress={() => onPress("bookings/index")}
            className="flex flex-row items-center gap-2"
          >
            <Image
              source={require("../../assets/icons/bookings.svg")}
              contentFit="contain"
              className="w-6 h-6"
            />

            <Text className="font-gilroySemibold text-base text-textColor">
              My bookings
            </Text>
          </Pressable>

          <Pressable
            onPress={() => onPress("notification/index")}
            className="flex flex-row items-center gap-2"
          >
            <Image
              source={require("../../assets/icons/notification.svg")}
              contentFit="contain"
              className="w-6 h-6"
            />

            <Text className="font-gilroySemibold text-base text-textColor">
              Notification
            </Text>
          </Pressable>

          <Pressable
            onPress={() => onPress("help/index")}
            className="flex flex-row items-center gap-2"
          >
            <Image
              source={require("../../assets/icons/help.svg")}
              contentFit="contain"
              className="w-6 h-6"
            />

            <Text className="font-gilroySemibold text-base text-textColor">
              Help & support
            </Text>
          </Pressable>

          <Pressable className="flex flex-row items-center gap-2">
            <Image
              source={require("../../assets/icons/logout.svg")}
              contentFit="contain"
              className="w-6 h-6"
            />

            <Text className="font-gilroySemibold text-base text-textColor">
              Log out
            </Text>
          </Pressable>
        </View>
      </View>

      <View className="flex gap-10">
        {/* referral code */}
        {/* <View className="w-full flex gap-3">
          <Text className="font-gilroySemibold text-base text-black">
            Referral link
          </Text>

          <View className="w-full h-[46px] flex flex-row rounded-lg border border-[#5554ED26] px-[5px] items-center justify-between">
            <Text className="font-gilroyMedium text-xs text-subTextColor">
              Trubooker.com/krvw-224
            </Text>

            <Pressable>
              <Image
                source={require("../assets/icons/copy.svg")}
                contentFit="contain"
                className="w-5 h-5"
              />
            </Pressable>
          </View>
        </View> */}

        {/* incomplete profile */}
        <View className="w-full h-[60px] rounded-lg bg-[#6670851A] px-2 flex flex-row items-center">
          <View className="flex-1">
            <Text className="font-gilroyMedium text-sm text-textColor">
              Profile completion
            </Text>

            <Text className="font-gilroyRegular text-xs text-textColor">
              60% left to complete your profile
            </Text>
          </View>

          <CircularProgress percentage={40} />
        </View>

        <Pressable
          onPress={() => onPress("profile")}
          className="w-full flex flex-row gap-3"
        >
          <View className="w-[68px] h-[68px] rounded-full overflow-hidden">
            <Image
              source={require("../../assets/images/user.jpg")}
              contentFit="cover"
              className="w-full h-full"
            />
          </View>

          <View className="flex-1 flex justify-center">
            <Text className="font-gilroySemibold text-lg text-textColor">
              Esther Adebisi
            </Text>

            <Text className="font-gilroyMedium text-sm text-subTextColor">
              Edit your profile
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

interface CircularProgressProps {
  percentage: number;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
}) => {
  const radius = 40;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const progress = (percentage / 100) * circumference;

  return (
    <View className="justify-center items-center relative">
      <Svg width={40} height={40} viewBox="0 0 100 100">
        {/* Background Circle */}
        <Circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#5554ED4D"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress Circle */}
        <Circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#9747FF"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
        />
      </Svg>
      <View className="absolute justify-center items-center top-0 bottom-0 right-0 left-0">
        <Text className="font-gilroyMedium text-xs text-textColor">{`${percentage}%`}</Text>
      </View>
    </View>
  );
};

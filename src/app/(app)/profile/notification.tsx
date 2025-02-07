import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { ScreenLayout } from "src/components/screen-layout";
import {
  Button,
  Image,
  Input,
  Option,
  Pressable,
  renderBackdrop,
  ScrollView,
  Select,
  Text,
  View,
} from "src/ui";
import { router } from "expo-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { CustomHandle } from "src/components/home/search-modal";
import {
  Animated,
  Keyboard,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

export default function Screen() {
  return (
    <>
      <ScreenLayout useStaticView backgroundColor="#FAF9F6">
        <View className="w-full flex gap-4 bg-white">
          <View className="w-full px-4 flex flex-row items-center justify-between pt-[40px] pb-5 relative">
            <Pressable onPress={() => router.back()} className="">
              <AntDesign name="left" size={24} color="black" />
            </Pressable>

            <View className="flex-1 flex items-center justify-center">
              <Text className="text-textColor font-gilroySemibold text-lg">
                Notification settings
              </Text>
            </View>

            <View className="w-6 h-6" />
          </View>
        </View>

        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          automaticallyAdjustKeyboardInsets
        >
          <View className="flex-1 py-[24px] px-4 gap-10">
            <View className="gap-6">
              <Text>Manage your notification preferences</Text>

              <View className="w-full gap-5">
                <NotificationItem
                  title="In-app notification"
                  subtitle="Enable or disable notifications that appear within the app to keep you updated on your activities and alerts."
                />
                <NotificationItem
                  title="Email Notifications"
                  subtitle="Control whether you receive updates and alerts via email, including trip confirmations and important announcements."
                />
                <NotificationItem
                  title="Push Notifications"
                  subtitle="Choose to receive real-time updates and alerts on your device’s lock screen or notification center."
                />
              </View>
            </View>

            <View className="gap-6">
              <Text>Notification preferences</Text>

              <View className="w-full gap-5">
                <NotificationItem
                  title="Trip Reminders"
                  subtitle="Receive notifications for new trip requests, trip status updates, and passenger cancellations."
                />
                <NotificationItem
                  title="Payment notification"
                  subtitle="Receive notifications for payment confirmations, payment issues, and wallet balance updates."
                />
                <NotificationItem
                  title="Promotions and Offers"
                  subtitle="Get notified about special promotions, discounts, and exclusive offers available through the app."
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </ScreenLayout>
    </>
  );
}

type Props = {
  title: string;
  subtitle: string;
};
export const NotificationItem = ({ ...props }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const toggleAnim = useRef(new Animated.Value(0)).current; // Animation reference

  const toggleSwitch = () => {
    setIsActive(!isActive);
  };

  // Handle animation whenever the switch is toggled
  useEffect(() => {
    Animated.timing(toggleAnim, {
      toValue: isActive ? 26 : 0, // The width difference of 48 - 22 (switch movement)
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isActive, toggleAnim]);

  return (
    <View className="w-full gap-[10px]">
      <View className="w-full flex-row items-center justify-between gap-4">
        <Text className="text-sm font-gilroyMedium text-textColor">
          {props?.title}
        </Text>

        <TouchableWithoutFeedback onPress={toggleSwitch}>
          <View
            style={[
              styles.switchContainer,
              { backgroundColor: isActive ? "#5554ED" : "#667085" },
            ]}
          >
            <Animated.View
              style={[
                styles.circle,
                {
                  transform: [{ translateX: toggleAnim }],
                },
              ]}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>

      <Text className="text-xs font-gilroyRegular text-textColor">
        {props?.subtitle}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    width: 48,
    height: 22,
    borderRadius: 11, // Half of the height for a rounded border
    backgroundColor: "#5554ED",
    justifyContent: "center",
    padding: 2,
  },
  circle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "white",
  },
});

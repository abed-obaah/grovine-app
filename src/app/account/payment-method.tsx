import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import { Header } from "@/components/header";
import { ScreenLayout } from "@/components/screen-layout";
import { Image, Text, View } from "@/ui";
import { Pressable, ScrollView, StyleSheet } from "react-native";
import { CompleteKYC } from "@/components/home/complete-kyc";
import { router } from "expo-router";
import { useState } from "react";

export default function Screen() {
  const [selected, setSelected] = useState("");

  return (
    <ScreenLayout useStaticView backgroundColor="#FDFDFD">
      <View className="pt-[20px]">
        <View
          style={styles.shadowBox}
          className="w-full px-4 py-[26px] flex flex-row items-center justify-center relative shadow-lg bg-white"
        >
          <Pressable
            onPress={() => router.back()}
            className="absolute left-[16px]"
          >
            <AntDesign name="left" size={24} color="black" />
          </Pressable>

          <Text className="text-base text-textColor font-gilroySemibold">
            Payment method
          </Text>

          <Pressable
            onPress={() => router.navigate("/account/add-payment")}
            className="absolute right-[16px] flex-row items-center gap-[5px]"
          >
            <FontAwesome6 name="add" size={20} color="#FD8C00" />

            <Text className="text-sm text-secondary font-gilroyMedium">
              Add
            </Text>
          </Pressable>
        </View>
      </View>
      <View className="flex-1">
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingVertical: 20,
            paddingHorizontal: 16,
            gap: 25,
          }}
        >
          <Text className="font-gilroyMedium text-sm text-subTextColor">
            Select a payment method
          </Text>

          <View className="gap-4">
            <PaymentOption
              type="visa"
              onPress={() => setSelected("visa")}
              isActive={selected === "visa"}
            />
            <PaymentOption
              type="mastercard"
              onPress={() => setSelected("mastercard")}
              isActive={selected === "mastercard"}
            />
            <PaymentOption
              type="paypal"
              onPress={() => setSelected("paypal")}
              isActive={selected === "paypal"}
            />
          </View>
        </ScrollView>
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  shadowBox: {
    shadowColor: "#000000", // Black color
    shadowOffset: {
      width: 0, // X
      height: 4, // Y
    },
    shadowOpacity: 0.02, // 2% opacity
    shadowRadius: 5.3, // Blur

    // For Android
    elevation: 4, // Approximate elevation for the shadow effect
  },
});

type Props = {
  type: "visa" | "mastercard" | "paypal";
  onPress?: () => void;
  isActive?: boolean;
};
export const PaymentOption = ({ type, isActive, onPress }: Props) => {
  const iconSrc =
    type === "mastercard"
      ? require("@/assets/icons/mastercard.png")
      : type === "paypal"
      ? require("@/assets/icons/paypal.png")
      : require("@/assets/icons/visa.png");

  return (
    <Pressable onPress={onPress} className="w-full flex-row items-center gap-3">
      <View
        className={`w-5 h-5 items-center justify-center border rounded-full ${
          isActive ? "border-secondary" : "border-black"
        }`}
      >
        <View
          className={`w-[10px] h-[10px] rounded-full ${
            isActive ? "bg-secondary" : "bg-transparent"
          }`}
        />
      </View>

      <View
        className={`flex-1 h-[60px] flex-row items-center gap-[10px] border rounded-lg ${
          isActive
            ? "border-[#FD8C0080] bg-[#FD8C001A]"
            : "border-[#66708533] bg-transparent"
        } px-[10px]`}
      >
        <Image
          className="w-[50px] h-[50px]"
          source={iconSrc}
          contentFit="contain"
        />

        <View>
          <Text className="text-sm font-gilroyMedium text-textColor">
            ***** **** ***** **** 346
          </Text>
          <Text className="text-xs font-gilroyRegular text-textColor">
            expires 10/24
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

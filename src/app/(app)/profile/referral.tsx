import AntDesign from "@expo/vector-icons/AntDesign";

import { ScreenLayout } from "src/components/screen-layout";
import { Button, Image, Input, Text, View } from "src/ui";
import { Pressable, ScrollView, StyleSheet } from "react-native";
import { router } from "expo-router";
import { ReferralLink } from "src/components/referral-link";

export default function Screen() {
  return (
    <ScreenLayout useStaticView backgroundColor="#FAF9F6">
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
            Referrals
          </Text>

          <View className="w-6 h-6" />
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        automaticallyAdjustKeyboardInsets
      >
        <View className="flex-1 py-[34px] px-4 gap-10 items-center">
          <View className="w-full items-center gap-10">
            <Image
              className="w-[204px] h-[176px]"
              source={require("../../../assets/icons/referral.svg")}
              contentFit="contain"
            />

            <View className="gap-[10px]">
              <Text className="font-gilroySemibold text-base text-textColor text-center">
                Refer 5 people and get up to 5% off trips
              </Text>

              <Text className="font-gilroyRegular text-sm text-textColor text-center">
                Get 5% off 5 successful referral, when your referred Trubooker
                friends becomes active in booking trips.
              </Text>

              <ReferralLink />
            </View>
          </View>

          <View className="w-full flex-row gap-2">
            <View className="flex-1 h-[84px] rounded-[10px] bg-[#5554ED1A] px-[10px] justify-center gap-1">
              <Text className="font-gilroyRegular text-sm text-textColor">
                Friends referred
              </Text>
              <Text className="font-gilroySemibold text-[18px] text-primary">
                10
              </Text>
            </View>

            <Pressable
              onPress={() => router.navigate("profile/coupons")}
              className="flex-1 h-[84px] rounded-[10px] bg-[#5554ED1A] px-[10px] justify-center gap-1"
            >
              <Text className="font-gilroyRegular text-sm text-textColor">
                Coupon
              </Text>
              <View className="flex-row items-center">
                <Text className="font-gilroySemibold text-[18px] text-primary">
                  2
                </Text>

                <AntDesign name="right" size={16} color="black" />
              </View>
            </Pressable>
          </View>

          <View className="w-full bg-white rounded-lg px-[10px] py-[20px] gap-4">
            <Text className="font-gilroySemibold text-base text-subTextColor">
              Referral summary
            </Text>

            <View className="w-full gap-2">
              <View className="w-full flex-row items-center justify-between gap-4">
                <Text className="font-gilroyMedium text-sm text-textColor">
                  James adeyemi
                </Text>

                <Text className="font-gilroyMedium text-xs text-subTextColor">
                  10/02/24
                </Text>
              </View>

              <View className="w-full flex-row items-center justify-between gap-4">
                <Text className="font-gilroyMedium text-sm text-textColor">
                  Grace james
                </Text>

                <Text className="font-gilroyMedium text-xs text-subTextColor">
                  10/02/24
                </Text>
              </View>

              <View className="w-full flex-row items-center justify-between gap-4">
                <Text className="font-gilroyMedium text-sm text-textColor">
                  Glory Micheal
                </Text>

                <Text className="font-gilroyMedium text-xs text-subTextColor">
                  10/02/24
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
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

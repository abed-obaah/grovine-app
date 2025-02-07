import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { ScreenLayout } from "src/components/screen-layout";
import { Button, Image, Input, Pressable, ScrollView, Text, View } from "src/ui";
import { router } from "expo-router";
import { Platform, TextInput } from "react-native";
import { useState } from "react";
// import { CircularProgress } from "../_layout";

export default function Screen() {
  return (
    <ScreenLayout useStaticView backgroundColor="#FAF9F6">
      <View className="w-full flex gap-4 bg-white">
        <View className="w-full px-4 flex flex-row items-center justify-between pt-[40px] pb-5 relative">
          <Pressable onPress={() => router.back()} className="">
            <AntDesign name="left" size={24} color="black" />
          </Pressable>

          <View className="flex-1 flex items-center justify-center">
            <Text className="text-textColor font-gilroySemibold text-lg">
              Personal info
            </Text>
          </View>

          <Pressable onPress={() => router.navigate("profile/edit")}>
            <Text className="text-primary font-gilroyMedium text-sm">Edit</Text>
          </Pressable>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        automaticallyAdjustKeyboardInsets
      >
        <View className="pt-[10px] pb-[30px] px-4 gap-[26px]">
          <View className="w-full h-[60px] rounded-lg bg-[#6670851A] px-4 flex flex-row items-center border border-[#5554ED80]">
            <View className="flex-1">
              <Text className="font-gilroyMedium text-sm text-textColor">
                Profile completion
              </Text>

              <Text className="font-gilroyRegular text-xs text-textColor">
                60% left to complete your profile
              </Text>
            </View>

            {/* <CircularProgress percentage={40} /> */}
          </View>

          <View className="w-full items-center justify-center gap-[14px]">
            <View className="w-[130px] aspect-square rounded-full bg-[#6670854D] relative">
              <Image
                source={require("../../../assets/images/profile.png")}
                contentFit="cover"
                className="w-full h-full rounded-full"
              />

              <Pressable className="w-[32px] h-[32px] rounded-full bg-primary items-center justify-center absolute bottom-0 right-0">
                <FontAwesome6 name="add" size={18} color="white" />
              </Pressable>
            </View>

            <View>
              <Text className="text-center text-base font-gilroySemibold text-textColor">
                Esther Adebisi
              </Text>
              <Text className="text-center text-sm font-gilroyRegular text-textColor">
                Joined March 2024
              </Text>
            </View>
          </View>
        </View>

        <View className="flex-1 bg-white px-4 py-[26px] gap-6">
          <Text className="font-gilroySemibold text-base text-textColor">
            Profile details
          </Text>

          <View className="w-full gap-5">
            <View className="w-full flex-row items-center justify-between">
              <Text className="font-gilroyMedium text-xs text-subTextColor">
                Phone number
              </Text>

              <Text className="font-gilroyMedium text-sm text-textColor">
                +234 9023 456 679
              </Text>
            </View>
            <View className="w-full flex-row items-center justify-between">
              <Text className="font-gilroyMedium text-xs text-subTextColor">
                Gender
              </Text>

              <Text className="font-gilroyMedium text-sm text-textColor">
                Female
              </Text>
            </View>
            <View className="w-full flex-row items-center justify-between">
              <Text className="font-gilroyMedium text-xs text-subTextColor">
                Email
              </Text>

              <Text className="font-gilroyMedium text-sm text-textColor">
                estheradd2@gmail.com
              </Text>
            </View>
            <View className="w-full flex-row items-center justify-between">
              <Text className="font-gilroyMedium text-xs text-subTextColor">
                Address
              </Text>

              <Text className="font-gilroyMedium text-sm text-textColor">
                123, Test street, Abuja
              </Text>
            </View>
            <View className="w-full flex-row items-center justify-between">
              <Text className="font-gilroyMedium text-xs text-subTextColor">
                Date of birth
              </Text>

              <Text className="font-gilroyMedium text-sm text-textColor">
                10/10/2001
              </Text>
            </View>
            <View className="w-full flex-row items-center justify-between">
              <Text className="font-gilroyMedium text-xs text-subTextColor">
                Country
              </Text>

              <Text className="font-gilroyMedium text-sm text-textColor">
                Nigeria
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenLayout>
  );
}

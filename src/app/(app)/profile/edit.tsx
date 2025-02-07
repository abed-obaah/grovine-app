import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { ScreenLayout } from "src/components/screen-layout";
import {
  Button,
  Image,
  Input,
  Option,
  Pressable,
  ScrollView,
  Select,
  Text,
  View,
} from "src/ui";
import { router } from "expo-router";
import { Platform, TextInput } from "react-native";
import { useState } from "react";
import { CircularProgress } from "../_layout";
import { DatePicker } from "src/ui/date-picker";

const genders: Option[] = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

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
              Edit profile
            </Text>
          </View>

          <View className="w-6 h-6" />
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        automaticallyAdjustKeyboardInsets
      >
        <View className="flex-1 py-[28px] px-4 gap-[30px]">
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

          <View className="w-full rounded-[10px] border border-[#66708526] px-4 py-[22px] flex gap-4">
            <Input label="First name" placeholder="Esther" sm />

            <Input label="Last name" placeholder="Adebisi" sm />

            <Input label="Address" placeholder="123, Test street, Abuja" sm />

            <Input label="City" placeholder="Abuja" sm />

            <Select label="Gender" placeholder="female" options={genders} sm />

            <DatePicker label="Date of birth" placeholder="10/10/2001" />

            <Input label="Country" placeholder="Nigeria" sm />
          </View>
        </View>
      </ScrollView>
      <View className="w-full bg-[#F7F7F7] py-6 px-4">
        <Button label="Save changes" />
      </View>
    </ScreenLayout>
  );
}

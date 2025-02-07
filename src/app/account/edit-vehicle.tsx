import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { Header } from "@/components/header";
import { ScreenLayout } from "@/components/screen-layout";
import { Button, Image, Input, Pressable, Text, View } from "@/ui";
import { useState } from "react";
import { DismissKeyboardWrapper } from "@/components/account/security-tab";
import { Modal, ScrollView } from "react-native";
import { router } from "expo-router";
import { ImagePicker } from "@/ui/image-picker";

export default function Screen() {
  return (
    <ScreenLayout useStaticView backgroundColor="#FDFDFD">
      <DismissKeyboardWrapper>
        <View className="flex-1">
          <View className="pt-[20px]">
            <Header title="Edit vehicle" />
          </View>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            automaticallyAdjustKeyboardInsets
          >
            <View className="flex-1 py-[18px] px-4 gap-6">
              <Text className="font-gilroyRegular text-base text-subTextColor">
                Keep your vehicle information up-to-date for accurate trip
                bookings.
              </Text>

              <View className="w-full rounded-[10px] border border-[#66708526] px-4 py-[22px] flex gap-4">
                <Input label="Vehicle type" placeholder="Bus" sm />
                <Input
                  label="Vehicle model"
                  placeholder="Toyota Heice 2018"
                  sm
                />
                <Input
                  label="License plate number"
                  placeholder="ABC-123-XYZ"
                  sm
                />
                <Input label="Vehicle capacity" placeholder="18" sm />
                <Input label="Vehicle color" placeholder="yellow" sm />

                <ImagePicker
                  label="Upload vehicle photo"
                  placeholder="Upload a clear photo fo your vehicle"
                  maxNumOfImages={5}
                />
              </View>
            </View>
          </ScrollView>
          <View className="w-full bg-[#F7F7F7] px-5 py-6 flex flex-row items-center gap-7">
            <View className="flex-1">
              <Button
                label="Save vehicle"
                onPress={() => router.navigate("/account/vehicle-success")}
              />
            </View>
          </View>
        </View>
      </DismissKeyboardWrapper>
    </ScreenLayout>
  );
}

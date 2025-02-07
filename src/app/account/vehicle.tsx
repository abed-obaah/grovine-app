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
            <Header title="Vehicle information" />
          </View>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View className="flex-1 py-[18px] px-4 gap-8">
              <Text className="font-gilroyRegular text-base text-subTextColor">
                Keep your vehicle information up-to-date for accurate trip
                bookings.
              </Text>

              <View className="gap-4">
                <Text className="font-gilroySemibold text-base text-subTextColor">
                  Vehicle details
                </Text>

                <View className="gap-2">
                  <View className="w-full flex-row items-center justify-between">
                    <Text className="font-gilroyMedium text-xs text-subTextColor">
                      Plate number
                    </Text>

                    <Text className="font-gilroyMedium text-sm text-textColor">
                      123-AXCD4
                    </Text>
                  </View>

                  <View className="w-full flex-row items-center justify-between">
                    <Text className="font-gilroyMedium text-xs text-subTextColor">
                      Vehicle Model
                    </Text>

                    <Text className="font-gilroyMedium text-sm text-textColor">
                      Toyota hiace 2018
                    </Text>
                  </View>

                  <View className="w-full flex-row items-center justify-between">
                    <Text className="font-gilroyMedium text-xs text-subTextColor">
                      Vehicle color
                    </Text>

                    <Text className="font-gilroyMedium text-sm text-textColor">
                      Yellow
                    </Text>
                  </View>

                  <View className="w-full flex-row items-center justify-between">
                    <Text className="font-gilroyMedium text-xs text-subTextColor">
                      Vehicle Type
                    </Text>

                    <Text className="font-gilroyMedium text-sm text-textColor">
                      Luxury
                    </Text>
                  </View>

                  <View className="w-full flex-row items-center justify-between">
                    <Text className="font-gilroyMedium text-xs text-subTextColor">
                      Seating capacity
                    </Text>

                    <Text className="font-gilroyMedium text-sm text-textColor">
                      14 seats
                    </Text>
                  </View>
                </View>
              </View>

              <View className="gap-4">
                <Text className="font-gilroySemibold text-base text-subTextColor">
                  Vehicle photos
                </Text>

                <View className="w-full flex-row gap-[10px] flex-wrap">
                  <Image
                    source={require("@/assets/images/car-1.jpg")}
                    className="w-[100px] h-[100px] rounded-[5px]"
                  />
                  <Image
                    source={require("@/assets/images/car-1.jpg")}
                    className="w-[100px] h-[100px] rounded-[5px]"
                  />
                  <Image
                    source={require("@/assets/images/car-1.jpg")}
                    className="w-[100px] h-[100px] rounded-[5px]"
                  />
                </View>
              </View>
            </View>
          </ScrollView>
          <View className="w-full bg-[#F7F7F7] px-5 py-6 flex flex-row items-center gap-7">
            <View className="flex-1">
              <Button
                label="Delete"
                // onPress={() => router.back()}
                style={{ backgroundColor: "#B3261E99" }}
              />
            </View>
            <View className="flex-1">
              <Button
                label="Edit"
                onPress={() => router.navigate("/account/edit-vehicle")}
              />
            </View>
          </View>
        </View>
      </DismissKeyboardWrapper>
    </ScreenLayout>
  );
}

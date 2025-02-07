import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { Header } from "@/components/header";
import { ScreenLayout } from "@/components/screen-layout";
import { Button, Input, Pressable, Text, View } from "@/ui";
import { useState } from "react";
import { DismissKeyboardWrapper } from "@/components/account/security-tab";
import { Modal, ScrollView } from "react-native";
import { router } from "expo-router";
import { ImagePicker } from "@/ui/image-picker";

export default function Screen() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  return (
    <ScreenLayout useStaticView backgroundColor="#FDFDFD">
      <DismissKeyboardWrapper>
        <View className="flex-1">
          <View className="pt-[20px]">
            <Header title="Document verification" />
          </View>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View className="flex-1 py-[18px] px-4 gap-7">
              <Text className="font-gilroyRegular text-base text-subTextColor">
                Upload your documents here to verify your identity and vehicle
                information. This helps us ensure everything is in order for
                your trips.
              </Text>

              <ImagePicker
                label="Driver's licence"
                placeholder="Upload a photo of your driver's license"
                maxNumOfImages={1}
              />

              <ImagePicker
                label="Upload vehicle Insurance (Optional)"
                placeholder="Upload a photo of your vehicle's insurance document"
                maxNumOfImages={1}
              />

              <ImagePicker
                label="Upload vehicle registration document"
                placeholder="Upload a photo of your vehicle's registration document"
                maxNumOfImages={1}
              />
            </View>
          </ScrollView>
          <View className="w-full bg-[#F7F7F7] px-5 py-6 flex flex-row items-center gap-7">
            <View className="flex-1">
              <Button
                label="Cancel"
                variant="ghost"
                onPress={() => router.back()}
              />
            </View>
            <View className="flex-1">
              <Button
                label="Confirm"
                onPress={() => router.navigate("/account/vehicle-success")}
              />
            </View>
          </View>
        </View>
      </DismissKeyboardWrapper>
    </ScreenLayout>
  );
}

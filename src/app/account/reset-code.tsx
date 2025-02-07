import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { Header } from "@/components/header";
import { ScreenLayout } from "@/components/screen-layout";
import { Button, Input, Pressable, Text, View } from "@/ui";
import { useState } from "react";
import { DismissKeyboardWrapper } from "@/components/account/security-tab";
import { Modal } from "react-native";
import { router } from "expo-router";

export default function Screen() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  return (
    <ScreenLayout useStaticView backgroundColor="#FDFDFD">
      <DismissKeyboardWrapper>
        <>
          <View className="pt-[20px]">
            <Header title="Reset password" />
          </View>
          <View className="flex-1 py-[18px] px-4 gap-10">
            <Text className="font-gilroyRegular text-base text-subTextColor">
              Enter a new password and confirm it.
            </Text>

            <View className="w-full rounded-[10px] border border-[#66708526] px-4 py-[22px] flex gap-4">
              <View className="w-full gap-2">
                <Input
                  label="New password"
                  placeholder="********"
                  sm
                  secureTextEntry
                />

                <View className="flex-row items-center gap-[10px]">
                  <View className="flex-row items-center gap-1">
                    <View className="w-[18px] h-[6px] rounded-lg bg-secondary" />
                    <View className="w-[18px] h-[6px] rounded-lg bg-[#D9D9D9]" />
                    <View className="w-[18px] h-[6px] rounded-lg bg-[#D9D9D9]" />
                    <View className="w-[18px] h-[6px] rounded-lg bg-[#D9D9D9]" />
                    <View className="w-[18px] h-[6px] rounded-lg bg-[#D9D9D9]" />
                  </View>

                  <Text className="font-gilroyRegular text-xs text-textColor">
                    Too weak
                  </Text>
                </View>
              </View>

              <Input
                label="Confirm new password"
                placeholder="********"
                sm
                secureTextEntry
              />

              <View className="w-[50%]">
                <Button
                  label="Confirm"
                  onPress={() => {
                    setShowSuccessModal(true);
                  }}
                />
              </View>
            </View>
          </View>
        </>
      </DismissKeyboardWrapper>

      {/* success modal */}
      <Modal transparent visible={showSuccessModal}>
        <View className="flex-1 bg-black/50 items-center justify-center">
          <Pressable
            onPress={() => setShowSuccessModal(false)}
            className="absolute top-0 left-0 bottom-0 right-0"
          />

          <View className="w-[346px] aspect-[346/356] bg-white rounded-[20px] gap-6 items-center justify-center">
            <View className="w-[127px] aspect-square rounded-full flex items-center justify-center bg-[#FD8C0080]/5">
              <View className="w-[74px] aspect-square rounded-full flex items-center justify-center bg-secondary">
                <FontAwesome5 name="check" size={37} color="white" />
              </View>
            </View>

            <Text className="font-gilroyBold text-2xl text-textColor text-center">
              Password Successful!
            </Text>

            <Text className="font-gilroyRegular text-base text-subTextColor text-center max-w-[60%]">
              Your password as been changed successfully
            </Text>

            <View className="w-full px-[35px]">
              <Button
                label="Got it"
                onPress={() => {
                  setShowSuccessModal(false);
                  router.navigate("/account");
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </ScreenLayout>
  );
}

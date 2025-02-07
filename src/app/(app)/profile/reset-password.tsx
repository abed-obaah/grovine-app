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
import { useMemo, useRef, useState } from "react";
import { CustomHandle } from "src/components/home/search-modal";
import {
  Keyboard,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

export default function Screen() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

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
                Reset password
              </Text>
            </View>

            <View className="w-6 h-6" />
          </View>
        </View>

        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          automaticallyAdjustKeyboardInsets
        >
          <View className="flex-1 py-[20px] px-4 gap-[28px]">
            <Text className="font-gilroyMedium text-sm text-subTextColor">
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
        </ScrollView>
      </ScreenLayout>

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
              Changed successfully
            </Text>

            <Text className="font-gilroyRegular text-base text-subTextColor text-center max-w-[60%]">
              Your password has been changed successfully.
            </Text>

            <View className="w-full px-[35px]">
              <Button
                label="Got it"
                onPress={() => {
                  setShowSuccessModal(false);
                  router.navigate("profile");
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

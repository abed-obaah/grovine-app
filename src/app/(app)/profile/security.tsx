import AntDesign from "@expo/vector-icons/AntDesign";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

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
import { Keyboard, StyleSheet, TouchableWithoutFeedback } from "react-native";

export default function Screen() {
  const forgotSheetRef = useRef<BottomSheetModal>(null);
  const forgotSnapPoints = useMemo(() => [506], []);

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
                Security
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
              Manage your login details and security settings
            </Text>

            <View className="w-full rounded-[10px] border border-[#66708526] px-4 py-[22px] flex gap-4">
              <View className="w-full gap-2">
                <Input
                  label="Current password"
                  placeholder="********"
                  sm
                  secureTextEntry
                />

                <Pressable onPress={() => forgotSheetRef?.current?.present()}>
                  <Text className="font-gilroyRegular text-xs text-primary">
                    Forgot current password?
                  </Text>
                </Pressable>
              </View>

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
                <Button label="Save changes" />
              </View>
            </View>
          </View>
        </ScrollView>
      </ScreenLayout>

      <BottomSheetModal
        ref={forgotSheetRef}
        index={0} // Default to 30% when modal is opened
        snapPoints={forgotSnapPoints}
        enableDismissOnClose={true}
        enablePanDownToClose={true}
        handleComponent={CustomHandle}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetView style={styles.contentContainer}>
          <DismissKeyboardWrapper>
            <View className="flex-1 justify-between">
              <View className="w-full flex px-4 flex-row justify-between border-b border-b-[#66708526] py-[14px]">
                <Pressable
                  onPress={() => {
                    forgotSheetRef?.current?.close();
                  }}
                  className="w-6 h-6 flex items-center justify-center"
                >
                  <AntDesign name="close" size={24} color="black" />
                </Pressable>

                <Text className="font-gilroySemibold text-base text-textColor">
                  Forgot password
                </Text>

                <View className="w-6 h-6" />
              </View>

              <View className="flex-1 px-4 py-[28px] gap-9">
                <Text className="font-gilroyMedium text-sm text-subTextColor">
                  Enter your registered email address or username associated
                  with the account.
                </Text>

                <Input
                  label="Email address"
                  placeholder="stanleyjames334@gmail.com"
                  sm
                />

                <Button
                  label="Send recovery link"
                  onPress={() => {
                    forgotSheetRef?.current?.close();
                    router.navigate("profile/reset-password");
                  }}
                />
              </View>
            </View>
          </DismissKeyboardWrapper>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // paddingHorizontal: 16,
  },
});

export const DismissKeyboardWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    {children}
  </TouchableWithoutFeedback>
);

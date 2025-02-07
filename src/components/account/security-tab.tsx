import AntDesign from "@expo/vector-icons/AntDesign";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import OtpTextInput from "react-native-text-input-otp";

import {
  Button,
  colors,
  DatePicker,
  Image,
  Input,
  Option,
  Pressable,
  renderBackdrop,
  ScrollView,
  Select,
  Text,
  View,
  WIDTH,
} from "@/ui";
import { useMemo, useRef, useState } from "react";
import { CustomHandle } from "@/app/trip/passengers";
import { Keyboard, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { router } from "expo-router";

export const SecurityTab = () => {
  const [otp, setOtp] = useState("");

  const pinSheetRef = useRef<BottomSheetModal>(null);
  const pinSnapPoints = useMemo(() => [506], []);

  const forgotSheetRef = useRef<BottomSheetModal>(null);
  const forgotSnapPoints = useMemo(() => [506], []);

  return (
    <>
      <View style={{ width: WIDTH }} className="flex-1">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          automaticallyAdjustKeyboardInsets
        >
          <View className="flex-1 gap-10 py-[30px] px-4">
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
                  <Text className="font-gilroyRegular text-xs text-secondary">
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

            <View className="w-full rounded-[10px] border border-[#66708526] px-4 py-[22px] flex gap-4">
              <View className="w-full gap-2">
                <Input placeholder="enter 4-digit pin" sm secureTextEntry />

                <Text className="font-gilroyRegular text-xs text-subTextColor">
                  Set a 4-digit pin for withdrawal from your wallet
                </Text>
              </View>

              <Input placeholder="confirm pin" sm secureTextEntry />

              <View className="w-[50%]">
                <Button
                  label="Save"
                  onPress={() => pinSheetRef?.current?.present()}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      <BottomSheetModal
        ref={pinSheetRef}
        index={0} // Default to 30% when modal is opened
        snapPoints={pinSnapPoints}
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
                    pinSheetRef?.current?.close();
                  }}
                  className="w-6 h-6 flex items-center justify-center"
                >
                  <AntDesign name="close" size={24} color="black" />
                </Pressable>

                <Text className="font-gilroySemibold text-base text-textColor">
                  Transaction pin
                </Text>

                <View className="w-6 h-6" />
              </View>

              <View className="flex-1 px-4 py-[28px] gap-9">
                <Text className="font-gilroyMedium text-sm text-subTextColor">
                  Enter the verification code sent to your email to continue.
                </Text>

                <View
                  style={{ width: 60 * 4 + 14 * 3 }}
                  className="flex flex-row"
                >
                  <OtpTextInput
                    otp={otp}
                    setOtp={setOtp}
                    digits={4}
                    style={{
                      width: 60,
                      aspectRatio: 1,
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: "#FD8C0033",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    fontStyle={{
                      fontSize: 16,
                      color: "#000000",
                      fontFamily: "Gilroy-SemiBold",
                    }}
                    focusedStyle={{
                      borderColor: colors.primary,
                    }}
                  />
                </View>

                <Button label="Set pin" />
              </View>
            </View>
          </DismissKeyboardWrapper>
        </BottomSheetView>
      </BottomSheetModal>

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
                  label="Send code"
                  onPress={() => {
                    forgotSheetRef?.current?.close();
                    router.navigate("/account/verify-code");
                  }}
                />
              </View>
            </View>
          </DismissKeyboardWrapper>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
};

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

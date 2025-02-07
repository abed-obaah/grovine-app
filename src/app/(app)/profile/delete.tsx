import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import OtpTextInput from "react-native-text-input-otp";

import { ScreenLayout } from "src/components/screen-layout";
import { Button, colors, Pressable, renderBackdrop, Text, View } from "src/ui";
import { useMemo, useRef, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { router } from "expo-router";
import { DismissKeyboardWrapper } from "./security";

export default function Screen() {
  const [otp, setOtp] = useState("");

  const pinSheetRef = useRef<BottomSheetModal>(null);
  const pinSnapPoints = useMemo(() => [406], []);

  return (
    <>
      <ScreenLayout useStaticView backgroundColor="#FDFDFD">
        <DismissKeyboardWrapper>
          <View className="flex-1">
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
                  Delete account
                </Text>

                <View className="w-6 h-6" />
              </View>
            </View>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              <View className="flex-1 py-[18px] px-4 gap-7">
                <Text className="font-gilroyRegular text-base text-subTextColor">
                  We're sorry to see you go 😔. Deleting your account will
                  permanently erase all your data, including booking history and
                  personal information. This action cannot be undone.
                </Text>

                <View className="">
                  <DeleteItem label="I no longer require the services provided" />
                  <DeleteItem label="I am dissatisfied with the app’s performance" />
                  <DeleteItem label="I have concerns about my personal data" />
                  <DeleteItem label="I haven't used the app in a long time " />
                  <DeleteItem label="I’m facing unresolved technical problem" />
                  <DeleteItem label="I’m moving to a different app" />
                  <DeleteItem label="I’m unhappy with the customer support" />
                  <DeleteItem label="Other" />
                </View>
              </View>
            </ScrollView>
            <View className="w-full bg-[#F7F7F7] px-5 py-6 flex flex-row items-center gap-7">
              <View className="flex-1">
                <Button
                  label="Delete account"
                  style={{ backgroundColor: "#B3261E" }}
                />
              </View>
            </View>
          </View>
        </DismissKeyboardWrapper>
      </ScreenLayout>

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
                  Delete account verification
                </Text>

                <View className="w-6 h-6" />
              </View>

              <View className="flex-1 px-4 py-[28px] gap-9">
                <Text className="font-gilroyMedium text-sm text-subTextColor">
                  Enter the verification code sent to your email to permanently
                  delete account.
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

                <Button
                  label="Delete account"
                  style={{ backgroundColor: "#B3261E" }}
                />
              </View>
            </View>
          </DismissKeyboardWrapper>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
}

type Props = {
  label: string;
};
export const DeleteItem = ({ label }: Props) => {
  const [checked, setChecked] = useState(false);

  return (
    <Pressable
      onPress={() => setChecked((prev) => !prev)}
      className={`w-full flex-row gap-[10px] items-center py-3 px-[10px] border-b border-b-[#6670854D]`}
    >
      <View
        className={`w-[25px] h-[25px] border rounded-[5px] items-center justify-center ${
          checked ? "border-[#FAF9F6] bg-primary" : "border-[#667085] bg-white"
        }`}
      >
        <FontAwesome6 name="check" size={10} color="white" />
      </View>

      <Text className="text-sm font-gilroyMedium text-black">{label}</Text>
    </Pressable>
  );
};

const CustomHandle = () => {
  return (
    <View className="w-full flex ">
      <View className="w-full flex items-center justify-center py-[14px]">
        <View className="w-[64px] h-[6px] bg-[#D9D9D9] rounded-[10px]" />
      </View>
    </View>
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

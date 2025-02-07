import OtpTextInput from "react-native-text-input-otp";

import { Header } from "@/components/header";
import { ScreenLayout } from "@/components/screen-layout";
import { useTimer } from "@/core";
import { Button, colors, Pressable, Text, View, WIDTH } from "@/ui";
import { useRef, useState } from "react";
import { router } from "expo-router";
import { DismissKeyboardWrapper } from "@/components/account/security-tab";

export default function Screen() {
  const [otp, setOtp] = useState("");
  const [timerValue, setTimerValue] = useState(0); //value is in seconds
  const { seconds } = useTimer({ sec: timerValue });

  return (
    <ScreenLayout useStaticView backgroundColor="#FDFDFD">
      <DismissKeyboardWrapper>
        <View className="flex-1">
          <View className="pt-[20px]">
            <Header title="Verification code" />
          </View>
          <View className="flex-1 py-[18px] px-4 gap-10">
            <Text className="font-gilroyRegular text-base text-subTextColor">
              Enter the verification code sent to your phone number to continue.
            </Text>

            <View style={{ width: 60 * 4 + 14 * 3 }} className="flex flex-row">
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

            <View className="w-full flex gap-4">
              <Button
                label="Verify Otp"
                onPress={() => router.navigate("/account/reset-code")}
              />

              <View className="w-full flex flex-row flex-wrap items-center">
                <Text className="font-gilroyRegular text-base text-[#667085] relative">
                  If you don't find the Otp that we've sent try checking spam
                  {Number(seconds) > 0 ? (
                    <Text className="font-gilroyRegular text-base text-secondary">
                      {" 00:"}
                      {seconds}secs
                    </Text>
                  ) : (
                    <Pressable
                      onPress={() => setTimerValue((prev) => prev + 30)}
                      style={{ transform: [{ translateY: 3 }] }}
                      className="flex flex-row pl-2"
                    >
                      <Text className="font-gilroyRegular text-base text-secondary">
                        or send the code again
                      </Text>
                    </Pressable>
                  )}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </DismissKeyboardWrapper>
    </ScreenLayout>
  );
}

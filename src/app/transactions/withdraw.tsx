import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useEffect, useMemo, useRef, useState } from "react";

import { ScreenLayout } from "@/components/screen-layout";
import {
  Button,
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
} from "@/ui";
import { StyleSheet } from "react-native";
import { CustomHandle } from "../trip/passengers";
import { router } from "expo-router";

const options: Option[] = [
  { value: "bus", label: "Bus" },
  { value: "suv", label: "SUV" },
  { value: "mini-van", label: "Mini Van" },
];

export default function Screen() {
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const [pin, setPin] = useState("");

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => [632], []);

  const successSheetModalRef = useRef<BottomSheetModal>(null);
  const successSnapPoints = useMemo(() => [600], []);

  useEffect(() => {
    if (showSuccessModal) {
      successSheetModalRef?.current?.present();
    }
  }, [showSuccessModal]);

  const handleOnPinPress = (value: string) => {
    if (pin.length < 4) {
      setPin((prev) => prev + value);
    }
  };

  const handleOnClear = () => {
    setPin((prev) => {
      if (prev?.length === 0) {
        return "";
      } else {
        return prev.slice(0, prev?.length - 1);
      }
    });
  };

  return (
    <>
      <BottomSheetModalProvider>
        <ScreenLayout useStaticView backgroundColor="#FDFDFD">
          <View className="pt-5">
            <View className="w-full px-4 py-[26px] flex flex-row items-center justify-center relative bg-white">
              <Pressable
                onPress={() => router.back()}
                className="absolute left-[16px]"
              >
                <AntDesign name="left" size={24} color="black" />
              </Pressable>

              <Text className="text-base text-textColor font-gilroySemibold">
                Withdraw
              </Text>
            </View>
          </View>

          <View className="flex-1">
            <ScrollView
              contentContainerStyle={{
                flexGrow: 1,
                paddingVertical: 24,
                paddingHorizontal: 16,
                gap: 42,
              }}
              automaticallyAdjustKeyboardInsets
            >
              <View className="gap-3">
                <Text className="text-base text-textColor font-gilroySemibold">
                  Beneficiaries
                </Text>

                <View className="flex-row gap-5">
                  <View className="gap-[10px] items-center">
                    <View className="w-[44px] aspect-square rounded-full items-center justify-center bg-[#FF8B7B]">
                      <Text className="text-base text-white font-gilroySemibold">
                        E
                      </Text>
                    </View>

                    <Text className="text-sm text-textColor font-gilroyMedium">
                      Esther
                    </Text>
                  </View>

                  <View className="gap-[10px] items-center">
                    <View className="w-[44px] aspect-square rounded-full items-center justify-center bg-[#5554ED]">
                      <Text className="text-base text-white font-gilroySemibold">
                        M
                      </Text>
                    </View>

                    <Text className="text-sm text-textColor font-gilroyMedium">
                      Micheal
                    </Text>
                  </View>

                  <View className="gap-[10px] items-center">
                    <View className="w-[44px] aspect-square rounded-full items-center justify-center bg-[#FFB458]">
                      <Text className="text-base text-white font-gilroySemibold">
                        I
                      </Text>
                    </View>

                    <Text className="text-sm text-textColor font-gilroyMedium">
                      Idowu
                    </Text>
                  </View>
                </View>
              </View>

              <View className="w-full gap-5">
                <Input label="Account number" placeholder="00112233" />

                <Select
                  label="Bank name"
                  options={options}
                  placeholder="Select bank"
                />

                <Input label="Bank holder name" placeholder="John doe" />

                <Input label="Amount" placeholder="NGN20,000.00" />

                <Input
                  label="Narration"
                  placeholder="e.g sent from trubooker wallet"
                />

                <View className="w-full flex flex-row">
                  <Pressable
                    className="flex flex-row items-center gap-2"
                    onPress={() => setAgreedToTerms((prev) => !prev)}
                  >
                    <View
                      className={`w-5 h-5 flex items-center justify-center rounded border border-secondary ${
                        agreedToTerms ? "bg-secondary" : "bg-white"
                      }`}
                    >
                      <FontAwesome5 name="check" size={10} color="white" />
                    </View>

                    <Text className="font-gilroyRegular text-sm text-[#667085]">
                      Save as beneficiary
                    </Text>
                  </Pressable>
                </View>
              </View>

              <Button
                label="Withdraw"
                onPress={() => {
                  bottomSheetModalRef?.current?.present();
                }}
              />
            </ScrollView>
          </View>
        </ScreenLayout>

        {/* <BottomSheetModalProvider> */}
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0} // Default to 30% when modal is opened
          snapPoints={snapPoints}
          enableDismissOnClose={true}
          enablePanDownToClose={true}
          handleComponent={CustomHandle}
          backdropComponent={renderBackdrop}
        >
          <BottomSheetView style={styles.contentContainer}>
            <View className="flex-1 justify-between">
              <View className="w-full flex px-4 flex-row justify-between border-b border-b-[#66708526] py-[14px]">
                <Pressable
                  onPress={() => {
                    bottomSheetModalRef?.current?.close();
                  }}
                  className="w-6 h-6 flex items-center justify-center"
                >
                  <AntDesign name="close" size={24} color="black" />
                </Pressable>

                <Text className="font-gilroySemibold text-base text-textColor">
                  Enter your pin
                </Text>

                <View className="w-6 h-6" />
              </View>

              <View className="flex-1 gap-6 px-4 py-[28px]">
                <Text className="font-gilroyMedium text-sm text-subTextColor">
                  Enter your four digit pin to process this withdrawal.
                </Text>

                <View className="w-full flex-row gap-2">
                  <View className="flex-1 h-[38px] border-b-[2px] border-b-[#667085] items-center justify-center">
                    <Text className="font-gilroySemibold text-3xl text-textColor">
                      {pin[0] ? "*" : ""}
                    </Text>
                  </View>
                  <View className="flex-1 h-[38px] border-b-[2px] border-b-[#667085] items-center justify-center">
                    <Text className="font-gilroySemibold text-3xl text-textColor">
                      {pin[1] ? "*" : ""}
                    </Text>
                  </View>
                  <View className="flex-1 h-[38px] border-b-[2px] border-b-[#667085] items-center justify-center">
                    <Text className="font-gilroySemibold text-3xl text-textColor">
                      {pin[2] ? "*" : ""}
                    </Text>
                  </View>
                  <View className="flex-1 h-[38px] border-b-[2px] border-b-[#667085] items-center justify-center">
                    <Text className="font-gilroySemibold text-3xl text-textColor">
                      {pin[3] ? "*" : ""}
                    </Text>
                  </View>
                </View>

                <Text className="font-gilroySemibold text-sm text-secondary text-center">
                  Forgot pin?
                </Text>

                <View className="w-full gap-2">
                  <View className="w-full flex-row gap-2">
                    <Pressable
                      onPress={() => handleOnPinPress("1")}
                      className="flex-1 h-[60px] items-center justify-center"
                    >
                      <Text className="font-gilroySemibold text-2xl text-textColor">
                        1
                      </Text>
                    </Pressable>
                    <Pressable
                      onPress={() => handleOnPinPress("2")}
                      className="flex-1 h-[60px] items-center justify-center"
                    >
                      <Text className="font-gilroySemibold text-2xl text-textColor">
                        2
                      </Text>
                    </Pressable>
                    <Pressable
                      onPress={() => handleOnPinPress("3")}
                      className="flex-1 h-[60px] items-center justify-center"
                    >
                      <Text className="font-gilroySemibold text-2xl text-textColor">
                        3
                      </Text>
                    </Pressable>
                  </View>
                  <View className="w-full flex-row gap-2">
                    <Pressable
                      onPress={() => handleOnPinPress("4")}
                      className="flex-1 h-[60px] items-center justify-center"
                    >
                      <Text className="font-gilroySemibold text-2xl text-textColor">
                        4
                      </Text>
                    </Pressable>
                    <Pressable
                      onPress={() => handleOnPinPress("5")}
                      className="flex-1 h-[60px] items-center justify-center"
                    >
                      <Text className="font-gilroySemibold text-2xl text-textColor">
                        5
                      </Text>
                    </Pressable>
                    <Pressable
                      onPress={() => handleOnPinPress("6")}
                      className="flex-1 h-[60px] items-center justify-center"
                    >
                      <Text className="font-gilroySemibold text-2xl text-textColor">
                        6
                      </Text>
                    </Pressable>
                  </View>
                  <View className="w-full flex-row gap-2">
                    <Pressable
                      onPress={() => handleOnPinPress("7")}
                      className="flex-1 h-[60px] items-center justify-center"
                    >
                      <Text className="font-gilroySemibold text-2xl text-textColor">
                        7
                      </Text>
                    </Pressable>
                    <Pressable
                      onPress={() => handleOnPinPress("8")}
                      className="flex-1 h-[60px] items-center justify-center"
                    >
                      <Text className="font-gilroySemibold text-2xl text-textColor">
                        8
                      </Text>
                    </Pressable>
                    <Pressable
                      onPress={() => handleOnPinPress("9")}
                      className="flex-1 h-[60px] items-center justify-center"
                    >
                      <Text className="font-gilroySemibold text-2xl text-textColor">
                        9
                      </Text>
                    </Pressable>
                  </View>
                  <View className="w-full flex-row gap-2">
                    <Pressable className="flex-1 h-[60px] items-center justify-center"></Pressable>
                    <Pressable
                      onPress={() => handleOnPinPress("0")}
                      className="flex-1 h-[60px] items-center justify-center"
                    >
                      <Text className="font-gilroySemibold text-2xl text-textColor">
                        0
                      </Text>
                    </Pressable>
                    <Pressable
                      onPress={handleOnClear}
                      className="flex-1 h-[60px] items-center justify-center"
                    >
                      <AntDesign
                        name="closecircleo"
                        size={24}
                        color="#B3261E"
                      />
                    </Pressable>
                  </View>
                </View>

                <Button
                  label="Apply"
                  onPress={() => {
                    setPin("");
                    bottomSheetModalRef?.current?.close();
                    setShowSuccessModal(true);
                  }}
                />
              </View>
            </View>
          </BottomSheetView>
        </BottomSheetModal>
        {/* </BottomSheetModalProvider> */}

        {/* <SuccessSheetModalProvider> */}
        <BottomSheetModal
          ref={successSheetModalRef}
          index={0} // Default to 30% when modal is opened
          snapPoints={successSnapPoints}
          enableDismissOnClose={true}
          enablePanDownToClose={true}
          handleComponent={() => <View className="absolute w-0 h-0" />}
          backdropComponent={renderBackdrop}
        >
          <BottomSheetView style={styles.contentContainer}>
            <View className="flex-1 justify-center gap-10 items-center p-5">
              <View className="w-[180px] aspect-square rounded-full flex items-center justify-center bg-[#FD8C0080]/5">
                <View className="w-[100px] aspect-square rounded-full flex items-center justify-center bg-secondary">
                  <FontAwesome5 name="check" size={50} color="white" />
                </View>
              </View>

              <View>
                <Text className="text-center font-gilroyBold text-2xl text-textColor">
                  Transfer successfully!
                </Text>
                <Text className="text-center font-gilroyRegular text-base text-textColor mt-1">
                  NGN12,000 is on its way to
                </Text>
                <Text className="text-center font-gilroyBold text-base text-textColor">
                  Esther Adeleke.
                </Text>
              </View>

              <View className="w-full flex-row gap-[30px]">
                <View className="flex-1">
                  <Button
                    onPress={() => {
                      setShowSuccessModal(false);
                      successSheetModalRef?.current?.close();
                      router.navigate("/transactions");
                    }}
                    label="Share receipt"
                    variant="ghost"
                  />
                </View>
                <View className="flex-1">
                  <Button label="Ok, Got it" />
                </View>
              </View>
            </View>
          </BottomSheetView>
        </BottomSheetModal>
        {/* </BottomSheetModalProvider> */}
      </BottomSheetModalProvider>
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

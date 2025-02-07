import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { useMemo, useRef } from "react";

import { ScreenLayout } from "@/components/screen-layout";

import { Button, Image, Pressable, ScrollView, Text, View } from "@/ui";
import { router } from "expo-router";
import { Linking, Platform, StyleSheet } from "react-native";

export default function Screen() {
  return (
    <ScreenLayout useStaticView backgroundColor="#FFFFFF">
      <View className="pt-[20px]">
        <View className="w-full px-4 py-[26px] flex flex-row items-center justify-center relative bg-white border-b border-[#00000005]">
          <Pressable
            onPress={() => router.back()}
            className="absolute left-[16px]"
          >
            <AntDesign name="left" size={24} color="black" />
          </Pressable>

          <Text className="text-base text-textColor font-gilroyBold">
            Passengers info
          </Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingVertical: 24,
          paddingHorizontal: 16,
          gap: 14,
        }}
        // bounces={false}
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets
      >
        <PassengerCard label="Tobi Samson & 3 others" />
        <PassengerCard label="Esther Alabi James" />
        <PassengerCard label="Esther Alabi James" />
        <PassengerCard label="Esther Alabi James" />
      </ScrollView>
    </ScreenLayout>
  );
}

type Props = {
  label: string;
};
export const PassengerCard = ({ label }: Props) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // Snap points: 30% for the initial position, 80% for expanded position
  const snapPoints = useMemo(() => ["80%"], []);

  const dialCall = () => {
    let phoneNumber = "";

    if (Platform.OS === "android") {
      phoneNumber = "tel:+1234567890";
    } else {
      phoneNumber = "telprompt:+1234567890";
    }

    Linking.openURL(phoneNumber);
  };

  return (
    <>
      <Pressable
        onPress={() => bottomSheetModalRef?.current?.present()}
        className="w-full px-[10px] py-4 rounded-[10px] bg-[#FAF9F6] flex gap-5"
      >
        <Text className="text-base font-gilroySemibold text-textColor">
          {label}
        </Text>

        <View className="w-full flex flex-row items-center justify-between">
          <Text className="font-gilroyMedium text-base text-textColor">
            Wuse bus station
          </Text>

          <Image
            source={require("@/assets/icons/arrow.svg")}
            className="w-[50px] h-[16px]"
            contentFit="contain"
          />

          <Text className="font-gilroyMedium text-base text-textColor text-right">
            Kogi bus station
          </Text>
        </View>

        <Text className="text-base font-gilroySemibold text-textColor">
          NGN12,000
        </Text>
      </Pressable>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0} // Default to 30% when modal is opened
        snapPoints={snapPoints}
        enableDismissOnClose={true}
        enablePanDownToClose={true}
        handleComponent={CustomHandle}
      >
        <BottomSheetView style={styles.contentContainer}>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 24 }}
            // bounces={false}
            showsVerticalScrollIndicator={false}
            automaticallyAdjustKeyboardInsets
          >
            <View className="flex-1 flex gap-5">
              <View className="flex border-b border-b-[#6670851A] pb-[10px]">
                <View className="w-full flex flex-row items-center justify-between">
                  <Text className="font-gilroySemibold text-base text-textColor">
                    Micheal Adebayo
                  </Text>

                  <Pressable
                    onPress={dialCall}
                    className="w-[38px] h-[38px] rounded-full flex items-center justify-center bg-[#6670851A]"
                  >
                    <Feather name="phone" size={24} color="#FD8C00" />
                  </Pressable>
                </View>
                <Text className="font-gilroyMedium text-sm text-textColor">
                  Booked with 3 others
                </Text>
              </View>

              <View className="flex border-b border-b-[#6670851A] pb-[10px]">
                <View className="w-full flex flex-row items-center justify-between">
                  <Text className="font-gilroyMedium text-xs text-subTextColor">
                    Booking date & time
                  </Text>

                  <Text className="font-gilroyMedium text-sm text-textColor">
                    15th Aug 2024, 12:00pm
                  </Text>
                </View>
              </View>

              <View className="flex gap-4 border-b border-b-[#6670851A] pb-[10px]">
                <Text className="font-gilroyMedium text-xs text-subTextColor">
                  Other passengers
                </Text>
                <View className="w-full flex gap-[10px]">
                  <Text className="font-gilroyMedium text-sm text-textColor">
                    Grace James
                  </Text>
                  <Text className="font-gilroyMedium text-sm text-textColor">
                    Miracle David
                  </Text>
                  <Text className="font-gilroyMedium text-sm text-textColor">
                    Chineye Praise
                  </Text>
                </View>
              </View>

              <View className="flex gap-4 border-b border-b-[#6670851A] pb-[10px]">
                <Text className="font-gilroyMedium text-xs text-subTextColor">
                  Luggage
                </Text>

                <View className="w-full flex gap-[10px]">
                  <View className="w-full flex flex-row items-center justify-between">
                    <Text className="font-gilroyMedium text-xs text-subTextColor">
                      Number of luggage
                    </Text>

                    <Text className="font-gilroyMedium text-sm text-textColor">
                      5 (20kg)
                    </Text>
                  </View>

                  <View className="w-full flex flex-row items-center justify-between">
                    <Text className="font-gilroyMedium text-xs text-subTextColor">
                      Extra luggage
                    </Text>

                    <Text className="font-gilroyMedium text-sm text-textColor">
                      yes (4 additional bags)
                    </Text>
                  </View>
                </View>
              </View>

              <View className="flex gap-4 border-b border-b-[#6670851A] pb-[10px]">
                <Text className="font-gilroyMedium text-xs text-subTextColor">
                  Payment information
                </Text>

                <View className="w-full flex gap-[10px]">
                  <View className="w-full flex flex-row items-center justify-between">
                    <Text className="font-gilroyMedium text-xs text-subTextColor">
                      Method
                    </Text>

                    <Text className="font-gilroyMedium text-sm text-textColor">
                      Paypal
                    </Text>
                  </View>

                  <View className="w-full flex flex-row items-center justify-between">
                    <Text className="font-gilroyMedium text-xs text-subTextColor">
                      Total paid
                    </Text>

                    <Text className="font-gilroyMedium text-sm text-textColor">
                      NGN60,000
                    </Text>
                  </View>
                </View>
              </View>

              <Button label="Validate " />
            </View>
          </ScrollView>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
};

export const CustomHandle = () => {
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
    paddingHorizontal: 16,
  },
});

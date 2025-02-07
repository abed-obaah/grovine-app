import Feather from "@expo/vector-icons/Feather";
import { Platform, Linking, Pressable } from "react-native";

import { Header } from "@/components/header";
import { ScreenLayout } from "@/components/screen-layout";
import { ScrollView, Text, View } from "@/ui";

export default function Screen() {
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
    <ScreenLayout useStaticView backgroundColor="#FDFDFD">
      <View className="pt-[20px]">
        <Header title="Trip details" />
      </View>
      <View className="flex-1">
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingVertical: 24,
            paddingHorizontal: 16,
          }}
          bounces={false}
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
          </View>
        </ScrollView>
      </View>
    </ScreenLayout>
  );
}

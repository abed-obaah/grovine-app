import { router } from "expo-router";

import {
  Button,
  FocusAwareStatusBar,
  Image,
  ScrollView,
  Text,
  View,
} from "@/ui";

export default function Success() {
  return (
    <View className="flex-1 bg-white px-4">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        bounces={false}
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets
      >
        <FocusAwareStatusBar />
        <View className="flex-1 items-center justify-center flex gap-[117px] py-[36px] pt-[80px]">
          <View className="w-full flex gap-[45px] items-center justify-center">
            <View className="w-[130px] aspect-square rounded-full flex items-center justify-center bg-[#FD8C0080]/5">
              <Image
                source={require("@/assets/icons/clock.svg")}
                contentFit="contain"
                className="w-[70px] h-[70px]"
              />
            </View>

            <View className="w-full flex gap-[10px]">
              <Text className="font-gilroyBold text-2xl text-textColor text-center">
                Verification in progress
              </Text>

              <Text className="font-gilroyRegular text-base text-subTextColor text-center">
                Your documents are in review and may take up to 20-48 hours
                before getting verified.
              </Text>
            </View>
          </View>

          <View className="w-full">
            <Button
              label="Continue"
              onPress={() => {
                // router.dismissAll();
                router.navigate("/settings");
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

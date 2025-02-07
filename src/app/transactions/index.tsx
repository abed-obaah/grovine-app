import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { ScreenLayout } from "@/components/screen-layout";
import { DatePicker, Image, Pressable, ScrollView, Text, View } from "@/ui";

export default function Screen() {
  return (
    <>
      <ScreenLayout useStaticView backgroundColor="#FDFDFD">
        <View className="pt-5">
          <View className="w-full px-4 py-[26px] flex flex-row items-center justify-center relative bg-white">
            <Pressable className="absolute left-[16px]">
              <AntDesign name="left" size={24} color="black" />
            </Pressable>

            <Text className="text-base text-textColor font-gilroySemibold">
              Transaction history
            </Text>
          </View>
        </View>

        <View className="flex-1">
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              paddingVertical: 38,
              paddingHorizontal: 16,
              gap: 50,
            }}
          >
            <View className="items-center justify-center gap-[18px]">
              <View className="h-[45px] bg-[#6670851A] rounded-[5px] px-[10px] flex-row items-center gap-[5px]">
                <Feather name="send" size={18} color="#FD8C00" />

                <Text className="text-sm text-black font-gilroyMedium">
                  Withdrawal
                </Text>
              </View>

              <View className="gap-1">
                <Text className="font-gilroyMedium text-sm text-black text-center">
                  July 20th, 2024 at 2:30PM
                </Text>
                <Text className="font-gilroyMedium text-xs text-subTextColor text-center">
                  #TRX548793
                </Text>
              </View>
            </View>

            <View className="gap-6 w-full">
              <View className="w-full border-b border-b-[#6670851A] pb-4 flex-row justify-between">
                <View>
                  <Text className="text-base text-black font-gilroySemibold">
                    -NGN20,000
                  </Text>
                  <Text className="text-sm text-textColor font-gilroyMedium">
                    Bank account withdrawal
                  </Text>
                </View>

                <Text className="text-sm text-[#2EB565] font-gilroyMedium">
                  Successful
                </Text>
              </View>

              <View className="w-full border-b border-b-[#6670851A] pb-4 flex-row justify-between">
                <View>
                  <Text className="text-xs text-subTextColor font-gilroyMedium">
                    Narration
                  </Text>
                  <Text className="text-sm text-black font-gilroyMedium">
                    Sent to my bank
                  </Text>
                </View>
              </View>

              <View className="w-full border-b border-b-[#6670851A] pb-4 flex-row justify-between">
                <View>
                  <Text className="text-xs text-subTextColor font-gilroyMedium">
                    To
                  </Text>
                  <Text className="text-sm text-black font-gilroyMedium">
                    Opay Digital Services Limited
                  </Text>
                </View>
              </View>
            </View>

            <View className="gap-5">
              <Text className="text-base text-black font-gilroySemibold">
                More actions
              </Text>

              <View className="w-full flex-row justify-between items-center gap-4">
                <View className="flex-row items-center gap-[15px]">
                  <View className="w-[35px] h-[35px] bg-[#0000000D] items-center justify-center">
                    <FontAwesome5 name="copy" size={20} color="#FD8C00" />
                  </View>

                  <View>
                    <Text className="text-sm text-black font-gilroySemibold">
                      Repeat transaction
                    </Text>
                    <Text className="text-xs text-subTextColor font-gilroyMedium">
                      Make this payment again
                    </Text>
                  </View>
                </View>

                <AntDesign name="right" size={24} color="black" />
              </View>
            </View>
          </ScrollView>
        </View>
      </ScreenLayout>
    </>
  );
}

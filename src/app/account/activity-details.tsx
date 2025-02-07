import AntDesign from "@expo/vector-icons/AntDesign";

import { Header } from "@/components/header";
import { ScreenLayout } from "@/components/screen-layout";
import { Button, Image, Input, Pressable, ScrollView, Text, View } from "@/ui";

import { DismissKeyboardWrapper } from "@/components/account/security-tab";

export default function Screen() {
  return (
    <ScreenLayout useStaticView backgroundColor="#FDFDFD">
      <DismissKeyboardWrapper>
        <>
          <View className="pt-[20px]">
            <Header title="Trip summary details" />
          </View>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View className="flex-1 pb-[18px] px-4 gap-5">
              <View className="w-full gap-3 px-[10px] py-4 border-b border-b-[#6670851A]">
                <View className="flex flex-row items-center justify-between">
                  <Text className="font-gilroyMedium text-xs text-subTextColor">
                    08 Oct, 3:00
                  </Text>

                  <Text className="font-gilroyMedium text-sm text-subTextColor">
                    12 Passengers
                  </Text>
                </View>

                <View className="flex gap-1">
                  <View className="w-full flex flex-row items-center justify-between">
                    <Text className="font-gilroySemibold text-base text-textColor">
                      Wuse bus station
                    </Text>

                    <Image
                      source={require("@/assets/icons/arrow.svg")}
                      className="w-[50px] h-[16px]"
                      contentFit="contain"
                    />

                    <Text className="font-gilroySemibold text-base text-textColor text-right">
                      Kogi bus station
                    </Text>
                  </View>
                </View>

                <View className="flex flex-row items-center justify-between">
                  <Text className="font-gilroyMedium text-xs text-subTextColor">
                    10:00am
                  </Text>

                  <Text className="font-gilroyMedium text-sm text-subTextColor">
                    2:00pm
                  </Text>
                </View>
              </View>

              <View className="w-full gap-3 px-[10px] py-4 border-b border-b-[#6670851A]">
                <View className="flex flex-row items-center justify-between">
                  <Text className="font-gilroyMedium text-xs text-subTextColor">
                    Vehicle used
                  </Text>

                  <Text className="font-gilroyMedium text-sm text-textColor">
                    Toyota Hiace
                  </Text>
                </View>

                <View className="flex flex-row items-center justify-between">
                  <Text className="font-gilroyMedium text-xs text-subTextColor">
                    Vehicle capacity
                  </Text>

                  <Text className="font-gilroyMedium text-sm text-textColor">
                    15
                  </Text>
                </View>

                <View className="flex flex-row items-center justify-between">
                  <Text className="font-gilroyMedium text-xs text-subTextColor">
                    Passengers booked
                  </Text>

                  <Text className="font-gilroyMedium text-sm text-textColor">
                    12
                  </Text>
                </View>
              </View>

              <View className="w-full gap-3 px-[10px] py-4 border-b border-b-[#6670851A]">
                <View className="flex flex-row items-center justify-between">
                  <Text className="font-gilroyMedium text-xs text-subTextColor">
                    Luggage
                  </Text>
                </View>

                <View className="flex flex-row items-center justify-between">
                  <Text className="font-gilroyMedium text-xs text-subTextColor">
                    Number of luggage
                  </Text>

                  <Text className="font-gilroyMedium text-sm text-textColor">
                    5 (20kg)
                  </Text>
                </View>

                <View className="flex flex-row items-center justify-between">
                  <Text className="font-gilroyMedium text-xs text-subTextColor">
                    Extra luggage
                  </Text>

                  <Text className="font-gilroyMedium text-sm text-textColor">
                    yes (4 additional bags)
                  </Text>
                </View>
              </View>

              <View className="w-full gap-3 px-[10px] py-4 border-b border-b-[#6670851A]">
                <View className="flex flex-row items-center justify-between">
                  <Text className="font-gilroyMedium text-xs text-subTextColor">
                    Earnings
                  </Text>
                </View>

                <View className="flex flex-row items-center justify-between">
                  <Text className="font-gilroyMedium text-xs text-subTextColor">
                    Total earnings
                  </Text>

                  <Text className="font-gilroyMedium text-sm text-textColor">
                    NGN144,000
                  </Text>
                </View>

                <View className="flex flex-row items-center justify-between">
                  <Text className="font-gilroyMedium text-xs text-subTextColor">
                    Luggage fee
                  </Text>

                  <Text className="font-gilroyMedium text-sm text-textColor">
                    NGN24,000
                  </Text>
                </View>
              </View>

              <View className="w-full gap-3 px-[10px] py-4 border-b border-b-[#6670851A]">
                <View className="flex flex-row items-center justify-between">
                  <Text className="font-gilroyMedium text-xs text-subTextColor">
                    Passengers
                  </Text>
                </View>

                <View className="flex flex-row items-center justify-between">
                  <Text className="font-gilroyMedium text-sm text-textColor">
                    Grace James
                  </Text>
                </View>
                <View className="flex flex-row items-center justify-between">
                  <Text className="font-gilroyMedium text-sm text-textColor">
                    Miracle David
                  </Text>
                </View>
                <View className="flex flex-row items-center justify-between">
                  <Text className="font-gilroyMedium text-sm text-textColor">
                    Chineye Praise
                  </Text>
                </View>
                <View className="flex flex-row items-center justify-between">
                  <Text className="font-gilroyMedium text-sm text-textColor">
                    John Doe
                  </Text>
                </View>
                <View className="flex flex-row items-center justify-between">
                  <Text className="font-gilroyMedium text-sm text-textColor">
                    Hossana Adepoju
                  </Text>
                </View>
              </View>

              <View className="w-full gap-[30px] px-[10px] py-4 border-b border-b-[#6670851A]">
                <View className="flex flex-row items-center justify-between">
                  <Text className="font-gilroyMedium text-xs text-subTextColor">
                    User Reviews
                  </Text>
                </View>

                <View className="gap-[30px]">
                  <Review />
                  <Review />
                </View>
              </View>
            </View>
          </ScrollView>
        </>
      </DismissKeyboardWrapper>
    </ScreenLayout>
  );
}

export const Review = () => {
  return (
    <View className="w-full flex gap-5">
      <View className="w-full flex flex-row justify-between gap-4">
        <View className="flex flex-row items-center gap-[14px]">
          <View className="w-[50px] aspect-square rounded-full overflow-hidden flex items-center justify-center">
            <Image
              source={require("@/assets/images/user.jpg")}
              className="w-full h-full"
              contentFit="cover"
            />
          </View>

          <View className="flex gap-[6px]">
            <Text className="font-gilroySemibold text-base text-textColor">
              Micheal Adebayo
            </Text>
            <Text className="font-gilroyRegular text-xs text-textColor">
              MichealADE@gmail.com
            </Text>

            <View className="flex flex-row items-end gap-1">
              <Text className="font-gilroyMedium text-xs text-textColor">
                5.0
              </Text>

              <AntDesign name="star" size={20} color="#FDC500" />
              <AntDesign name="star" size={20} color="#FDC500" />
              <AntDesign name="star" size={20} color="#FDC500" />
              <AntDesign name="star" size={20} color="#FDC500" />
              <AntDesign name="star" size={20} color="#FDC500" />
            </View>
          </View>
        </View>

        <Text className="font-gilroyRegular text-sm text-textColor">
          11 month ago
        </Text>
      </View>

      <Text className="font-gilroyMedium text-sm text-textColor">
        John Doe is an experienced driver with over 10 years in the
        transportation industry.
      </Text>
    </View>
  );
};

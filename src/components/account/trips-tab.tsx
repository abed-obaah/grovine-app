import AntDesign from "@expo/vector-icons/AntDesign";

import {
  Button,
  DatePicker,
  Image,
  Input,
  Option,
  Pressable,
  ScrollView,
  Select,
  Text,
  View,
  WIDTH,
} from "@/ui";
import { router } from "expo-router";

export const TripsTab = () => {
  return (
    <View style={{ width: WIDTH }} className="flex-1">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets
      >
        <View className="flex-1 gap-[36px] pb-[20px] px-4">
          <View className="gap-4">
            <View className="w-full flex-row justify-between items-center h-[56px] border-b border-b-[#6670851A]">
              <Pressable className="">
                <Text className="font-gilroyMedium text-sm text-subTextColor">
                  01.10 - 07.10
                </Text>
              </Pressable>

              <Pressable className="">
                <Text className="font-gilroyMedium text-sm text-secondary">
                  08.10 - 14.10
                </Text>
              </Pressable>

              <Pressable className="">
                <Text className="font-gilroyMedium text-sm text-subTextColor">
                  15.10 - 21.10
                </Text>
              </Pressable>
            </View>

            <View className="w-full aspect-[343/246] gap-9 border border-[#6670851A] rounded-lg px-2 py-4">
              <View className="w-full items-center justify-center">
                <View className="h-[36px] bg-[#FAF9F6] px-[22px] items-center justify-center">
                  <Text className="font-gilroySemibold text-base text-textColor">
                    6/7
                  </Text>
                </View>
              </View>

              <View className="flex-1 flex-row items-end gap-4">
                <View className="gap-2 items-center flex-1">
                  <View className="h-[60%] w-full bg-[#FFB458]" />
                  <Text className="font-gilroyMedium text-xs text-black text-center">
                    Mon
                  </Text>
                </View>

                <View className="gap-2 items-center flex-1">
                  <View className="h-[40%] w-full bg-[#FFB458]" />
                  <Text className="font-gilroyMedium text-xs text-black text-center">
                    Tues
                  </Text>
                </View>

                <View className="gap-2 items-center flex-1">
                  <View className="h-[80%] w-full bg-[#FFB458]" />
                  <Text className="font-gilroyMedium text-xs text-black text-center">
                    Wed
                  </Text>
                </View>

                <View className="gap-2 items-center flex-1">
                  <View className="h-[50%] w-full bg-[#FFB458]" />
                  <Text className="font-gilroyMedium text-xs text-black text-center">
                    Thurs
                  </Text>
                </View>

                <View className="gap-2 items-center flex-1">
                  <View className="h-[0%] w-full bg-[#FFB458]" />
                  <Text className="font-gilroyMedium text-xs text-black text-center">
                    Fri
                  </Text>
                </View>

                <View className="gap-2 items-center flex-1">
                  <View className="h-[70%] w-full bg-[#FFB458]" />
                  <Text className="font-gilroyMedium text-xs text-black text-center">
                    Sat
                  </Text>
                </View>

                <View className="gap-2 items-center flex-1">
                  <View className="h-[70%] w-full bg-[#FFB458]" />
                  <Text className="font-gilroyMedium text-xs text-black text-center">
                    Sun
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View className="gap-5">
            <Text className="font-gilroySemibold text-base text-textColor">
              Trip summary
            </Text>

            <View>
              <TripCard />
              <TripCard />
              <TripCard />
              <TripCard />
              <TripCard />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export const TripCard = () => {
  return (
    <Pressable
      onPress={() => router.navigate("/account/activity-details")}
      className="w-full gap-3 px-[10px] py-4 border-b border-b-[#6670851A]"
    >
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

      <View className="w-full flex-row items-center justify-between">
        <Text className="font-gilroySemibold text-base text-textColor">
          NGN12,000
        </Text>

        <AntDesign name="right" size={20} color="#667085" />
      </View>
    </Pressable>
  );
};

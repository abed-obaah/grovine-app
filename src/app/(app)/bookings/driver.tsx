import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

import { ScreenLayout } from "src/components/screen-layout";
import { Image, Text, View } from "src/ui";
import { SimpleLineIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, TouchableOpacity } from "react-native";

const Screen: React.FC = () => {
  return (
    <ScreenLayout useStaticView>
      <View className="flex-1 bg-white pt-10">
        <View className=" bg-white gap-4">
          <View className="flex-row items-center justify-between px-4 py-5">
            <TouchableOpacity onPress={() => router.navigate("bookings")}>
              <SimpleLineIcons name="arrow-left" size={20} color="black" />
            </TouchableOpacity>
            <Text className="text-[16px] font-gilroySemibold">
              Driver Details
            </Text>
            <View className="w-6" />
          </View>
        </View>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View className="flex-1 bg-[#F7F7F7] py-6 px-4 gap-[28px]">
            <View className="w-full flex-row justify-between pb-3 border-b border-b-[#66708533]">
              <View className="flex-1 flex-row gap-[14px]">
                <View className="w-[75px] h-[75px] rounded-full overflow-hidden">
                  <Image
                    source={require("../../../assets/images/user.jpg")}
                    className="w-full h-full"
                    contentFit="cover"
                  />
                </View>

                <View className="gap-[10px]">
                  <Text className="font-gilroySemibold text-base text-textColor">
                    Micheal Adebayo
                  </Text>
                  <Text className="font-gilroyRegular text-xs text-textColor">
                    MichealADE@gmail.com
                  </Text>

                  <View className="flex-row items-center">
                    <Feather name="map-pin" size={20} color="#FD8C00" />

                    <Text className="font-gilroyRegular text-sm text-textColor">
                      123, test abc, London
                    </Text>
                  </View>
                </View>
              </View>

              <View className="w-[38px] h-[38px] rounded-full bg-[#6670851A] items-center justify-center">
                <Feather name="phone" size={20} color="#FD8C00" />
              </View>
            </View>

            <View className="w-full flex-row justify-between">
              <View className="gap-2 items-center">
                <View className="w-[48px] h-[48px] rounded-full items-center justify-center bg-[#6670851A]">
                  <Ionicons name="people-outline" size={20} color="#FD8C00" />
                </View>

                <View>
                  <Text className="font-gilroySemibold text-base text-textColor text-center">
                    2000+
                  </Text>
                  <Text className="font-gilroyRegular text-xs text-textColor text-center">
                    Customers
                  </Text>
                </View>
              </View>

              <View className="gap-2 items-center">
                <View className="w-[48px] h-[48px] rounded-full items-center justify-center bg-[#6670851A]">
                  <Ionicons name="people-outline" size={20} color="#FD8C00" />
                </View>

                <View>
                  <Text className="font-gilroySemibold text-base text-textColor text-center">
                    10+
                  </Text>
                  <Text className="font-gilroyRegular text-xs text-textColor text-center">
                    Years of Exp.
                  </Text>
                </View>
              </View>

              <View className="gap-2 items-center">
                <View className="w-[48px] h-[48px] rounded-full items-center justify-center bg-[#6670851A]">
                  <Ionicons name="people-outline" size={20} color="#FD8C00" />
                </View>

                <View>
                  <Text className="font-gilroySemibold text-base text-textColor text-center">
                    4.9+
                  </Text>
                  <Text className="font-gilroyRegular text-xs text-textColor text-center">
                    Ratings
                  </Text>
                </View>
              </View>

              <View className="gap-2 items-center">
                <View className="w-[48px] h-[48px] rounded-full items-center justify-center bg-[#6670851A]">
                  <Ionicons name="people-outline" size={20} color="#FD8C00" />
                </View>

                <View>
                  <Text className="font-gilroySemibold text-base text-textColor text-center">
                    4300
                  </Text>
                  <Text className="font-gilroyRegular text-xs text-textColor text-center">
                    User reviews
                  </Text>
                </View>
              </View>
            </View>

            <View className="gap-2">
              <Text className="font-gilroyMedium text-xs text-subTextColor">
                About the driver
              </Text>
              <Text className="font-gilroyMedium text-sm text-textColor">
                John Doe is an experienced driver with over 10 years in the
                transportation industry. Highly rated by passengers for his
                reliability and excellent service, John holds a valid driver's
                license with a clean accident history. He is fluent in English
                and Yoruba and has training in defensive driving and first aid,
                ensuring a safe and comfortable journey.
              </Text>
            </View>

            <View className="gap-4">
              <Text className="font-gilroyMedium text-xs text-subTextColor">
                About the vehicle
              </Text>
              <View className="w-full flex-row justify-between items-center">
                <Text className="font-gilroyMedium text-xs text-subTextColor">
                  Car number
                </Text>

                <Text className="font-gilroyBold text-sm text-textColor">
                  123-AXCD4
                </Text>
              </View>
              <View className="w-full flex-row justify-between items-center">
                <Text className="font-gilroyMedium text-xs text-subTextColor">
                  Car Model
                </Text>

                <Text className="font-gilroyBold text-sm text-textColor">
                  Mercedes-Benz Tourismo
                </Text>
              </View>
              <View className="w-full flex-row justify-between items-center">
                <Text className="font-gilroyMedium text-xs text-subTextColor">
                  Car color
                </Text>

                <Text className="font-gilroyBold text-sm text-textColor">
                  Yellow
                </Text>
              </View>
              <View className="w-full flex-row justify-between items-center">
                <Text className="font-gilroyMedium text-xs text-subTextColor">
                  Car Type
                </Text>

                <Text className="font-gilroyBold text-sm text-textColor">
                  Luxury
                </Text>
              </View>
              <View className="w-full flex-row justify-between items-center">
                <Text className="font-gilroyMedium text-xs text-subTextColor">
                  Seating capacity
                </Text>

                <Text className="font-gilroyBold text-sm text-textColor">
                  14 seats
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </ScreenLayout>
  );
};

export default Screen;

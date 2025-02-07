import AntDesign from "@expo/vector-icons/AntDesign";

import { ScreenLayout } from "src/components/screen-layout";
import { Button, Image, Input, Text, View } from "src/ui";
import { Pressable, ScrollView, StyleSheet, TextInput } from "react-native";
import { router } from "expo-router";
import { UpcomingTrips } from "../../../components/home/upcoming-trips";
import {Transactions} from "../profile/transactions"

export default function Screen() {
  return (
    <ScreenLayout useStaticView backgroundColor="#FDFDFD">
      <View className="pt-[20px]">
        <View
          className="w-full px-4 py-[26px] flex flex-row items-center justify-center relative shadow-lg bg-white"
        >
          <Text className="text-base text-textColor font-gilroyLight">
            Virtual Card
          </Text>
          <View className="w-6 h-6" />
        </View>
      </View>
      <UpcomingTrips/>
     
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        automaticallyAdjustKeyboardInsets
      >
        <View className="flex-1 py-[26px] px-4 gap-5">
        <View className="w-full flex-row items-center justify-between">
              <Text className="font-gilroySemibold text-base text-textColor">
              </Text>

              <Text className="font-gilroyLight text-sm text-[#221D7A]">
                 Card Limit: 120,000.00 of 200,000.00
              </Text>
            </View>
          <View className="w-full justify-between aspect-[341/186] rounded-[20] bg-[#5554ED14] px-[10px] py-[10px] border border-[#5554ED80]">
          
            <View className="w-full flex-row items-center justify-between">
              <Text className="font-gilroySemibold text-base text-textColor">
                Esther Adebisi
              </Text>

              <Image
                source={require("../../../assets/icons/mastercard.png")}
                className="w-[50px] h-[50px]"
                contentFit="contain"
              />
            </View>

            <View>
              <Text className="font-gilroyMedium text-sm text-subTextColor">
                1200   9856   4356   7832
              </Text>
              <View className="flex-row justify-between">
                  <Text className="font-gilroySemibold text-base text-textColor">
                  Okokon Ewomazino Gift
                  </Text>
                  <Text className="font-gilroyMedium text-sm text-subTextColor">
                      344
                      </Text>
              </View>
              
            </View>

            <View className="flex-row">
              <View className="flex-1">
                <View>
                  <Text className="font-gilroyMedium text-sm text-subTextColor">
                  09/26
                  </Text>
                  <Text className="font-gilroySemibold text-base text-textColor">
                    01/26
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View className="w-full px-2 py-1 flex flex-row items-center gap-7">
        <View className="flex-1">
          <Button label="View Card Details" />
        </View>
      </View>
          <View className="w-full rounded-[10px] border border-[#66708526] px-4 py-[22px] flex gap-4">
           
            <Transactions/>
          </View>
        </View>
      </ScrollView>
     
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
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

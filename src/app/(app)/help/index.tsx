import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { ScreenLayout } from "src/components/screen-layout";
import { Button, Image, Input, Pressable, ScrollView, Text, View } from "src/ui";
import { router } from "expo-router";
import { Platform, TextInput } from "react-native";
import { useState } from "react";
// import { CircularProgress } from "../_layout";

export default function Screen() {
  return (
    <ScreenLayout useStaticView backgroundColor="#FAF9FF">
       <View className="w-full px-4 flex gap-4 bg-white">
				<View className="w-full flex flex-row items-center justify-between pt-[40px] pb-5 relative">
					<Pressable onPress={() => router.back()} className="flex-row">
						<AntDesign name="left" size={24} color="black" />
            <Text className="text-[#000000] font-gilroyLight text-lg">
             Scan Code
						</Text>
					</Pressable>

					{/* <View className="flex-1 flex items-center justify-center">
						<Text className="text-[#000000] font-gilroyLight text-lg">
							Transactions History
						</Text>
					</View> */}
					<Image
							source={require("../../../assets/images/upload.png")}
							contentFit="contain"
							className="w-[51px] h-10"
						/>
				</View>
			</View>

      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        automaticallyAdjustKeyboardInsets
      >
        <View className="pt-[10px] pb-[30px] px-4 gap-[26px]">
         

          <View className="w-full items-center justify-center gap-[14px]">
          <View>
              <Text className="text-center text-2xl font-gilroySemibold text-[#221D7A]">
              Scan Payment Code 
              </Text>
              <Text className="text-center text-sm font-gilroyRegular text-[#8C8C8C]">
              Place the code inside the frame
              </Text>
            </View>
            <View className="w-[180px] aspect-square  bg-[#FAF9FF] relative">
              <Image
                source={require("../../../assets/images/QR.png")}
                contentFit="cover"
                className="w-full h-full "
              />
            </View>

            <View>
            <Image
							source={require("../../../assets/images/Touch.png")}
							contentFit="contain"
							className="w-[51px] h-20"
						/>
            </View>
          </View>
        </View>
        
      </ScrollView>
      <View className="w-full bg-[#F7F7F7] px-5 py-20 flex flex-row items-center gap-7">
        <View className="flex-1">
          <Button label="Generate Your Payment Code" />
        </View>
        
      </View>
      
    </ScreenLayout>
  );
}

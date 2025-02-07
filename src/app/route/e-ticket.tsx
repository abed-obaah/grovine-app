import Feather from "@expo/vector-icons/Feather";
import { useRef, useCallback } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import type BottomSheet from "@gorhom/bottom-sheet";
import { TripDetailsHeader } from "src/components/route/trip-details";
import { ScreenLayout } from "src/components/screen-layout";
import { Button, Image, Pressable, ScrollView, Text, View } from "src/ui";
import { router } from "expo-router";
import TicketCard from "src/components/route/ticket";

export default function Screen() {
  // Create a ref for the bottom sheet
  const bottomSheetRef = useRef<BottomSheet>(null);

  // Function to open the bottom sheet
  const handlePresentBottomSheet = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  return (
    <ScreenLayout useStaticView backgroundColor="#FAF9F6">
      <View className="w-full flex gap-4 bg-white">
        <View className="w-full px-4 flex flex-row items-center justify-between pt-[40px] pb-5 relative">
          <Pressable onPress={() => router.back()} className="">
            <AntDesign name="left" size={24} color="black" />
          </Pressable>

          <View className="flex-1 flex items-center justify-center">
            <Text className="text-textColor font-gilroySemibold text-lg">
              E-ticket
            </Text>
          </View>

          <Pressable className="">
            <Feather name="share-2" size={24} color="black" />
          </Pressable>
        </View>
        {/* <TripDetailsHeader /> */}
      </View>

      <View className="flex-1 pt-[26px] px-4 bg-[#FAF9F6]">
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <TicketCard />
        </ScrollView>
      </View>

      <View className="w-full px-4 py-[18px] flex gap-4">
        <View className="w-full flex-row gap-[34px]">
          <View className="flex-1">
            <Button
              className="bg-gray-200 "
              onPress={() => router.navigate("route/cancel-ticket")}
            >
              <Text className="text-primary font-gilroySemibold">
                Cancel ticket
              </Text>
            </Button>
          </View>

          <View className="flex-1">
            <Button
              label="Download"
              onPress={() => router.navigate("route/e-ticket")}
            />
          </View>
        </View>
      </View>
    </ScreenLayout>
  );
}

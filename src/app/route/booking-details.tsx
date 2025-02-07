import { useRef, useCallback } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import type BottomSheet from "@gorhom/bottom-sheet";
import { TripDetailsHeader } from "src/components/route/trip-details";
import { ScreenLayout } from "src/components/screen-layout";
import { Button, Image, Pressable, Text, View } from "src/ui";
import { router } from "expo-router";
import TripContent from "src/components/route/trip-content";

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
              Booking details
            </Text>
          </View>

          <View className="w-6 h-6" />
        </View>

        <TripDetailsHeader />
      </View>

      <TripContent />

      <View className="w-full px-4 py-[18px] flex gap-4">
        <View className="w-full flex flex-row items-end justify-between">
          <View className="flex flex-row items-center gap-2">
            <Image
              source={require("../../assets/icons/calendar.svg")}
              contentFit="contain"
              className="w-5 h-5"
            />

            <View>
              <Text className="text-[#667085] font-gilroyRegular text-xs">
                DepartureDate
              </Text>
              <Text className="text-textColor font-gilroyMedium text-sm">
                July 24, 2024
              </Text>
            </View>
          </View>

          <Text className="text-textColor font-gilroyRegular text-xs">
            NGN
            <Text className="font-gilroySemibold text-base">12,000</Text>
          </Text>
        </View>

        <Button
          label="Continue"
          onPress={() => router.navigate("route/booking-confirmation")}
        />
      </View>
    </ScreenLayout>
  );
}

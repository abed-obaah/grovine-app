import React, { useRef, useState, useCallback } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { FlatList, TextInput, TouchableOpacity } from "react-native";
import BottomSheet, { BottomSheetModal } from "@gorhom/bottom-sheet";
import Feather from "@expo/vector-icons/Feather";

import { CancellationTab } from "src/components/route/cancellation-tab";
import { InformationTab } from "src/components/route/information-tab";
import { ReviewsTab } from "src/components/route/reviews-tab";
import {
  DetailTabButton,
  TripDetailsHeader,
} from "src/components/route/trip-details";
import { ScreenLayout } from "src/components/screen-layout";
import {
  Button,
  Image,
  Pressable,
  Text,
  View,
  WIDTH,
  Input,
  renderBackdrop,
} from "src/ui";
import { router } from "expo-router";

// import DateTimePickerModal from "react-native-modal-datetime-picker";
import { DismissKeyboardWrapper } from "../(app)/profile/security";
import { CustomHandle } from "src/components/home/search-modal";

const TAB_DATA = [
  {
    id: 0,
    component: <InformationTab />,
  },
  {
    id: 1,
    component: <CancellationTab />,
  },
  {
    id: 2,
    component: <ReviewsTab />,
  },
];

export default function Screen() {
  const tabListRef = useRef<FlatList>(null);
  const [currentTabId, setCurrentTabId] = useState(0);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [gender, setGender] = useState(""); // For storing the selected gender
  const [address, setAddress] = useState(""); // For storing the address
  const [country, setCountry] = useState("");
  const [fullName, setName] = useState("");
  const [nextOfKin, setNextOfKin] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Show date picker
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  // Hide date picker
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  // Handle date confirm
  const handleConfirm = (date) => {
    const formattedDate = date.toLocaleDateString(); // Format the date as DD/MM/YYYY
    setSelectedDate(formattedDate); // Save the selected date
    hideDatePicker(); // Close the date picker
  };

  const [step, setStep] = useState(1);

  // Create a ref for the bottom sheet
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const handleScrollToIndex = (index: number) => {
    setCurrentTabId(index);

    const offset = index > 0 ? index * WIDTH : 1;

    tabListRef.current?.scrollToOffset({ offset });
  };

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
              Trip Details
            </Text>
          </View>

          <View className="w-6 h-6" />
        </View>

        <TripDetailsHeader />

        <View className="w-full flex flex-row border-b border-b-[#66708533]">
          <DetailTabButton
            onPress={() => handleScrollToIndex(0)}
            active={currentTabId === 0}
            label="Information"
          />
          <DetailTabButton
            onPress={() => handleScrollToIndex(1)}
            active={currentTabId === 1}
            label="Cancellation policy"
          />
          <DetailTabButton
            onPress={() => handleScrollToIndex(2)}
            active={currentTabId === 2}
            label="User reviews"
          />
        </View>
      </View>

      <FlatList
        ref={tabListRef}
        data={TAB_DATA}
        renderItem={({ item }) => item.component}
        horizontal
        pagingEnabled
        bounces={false}
        scrollEnabled={false}
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}
      />

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
          label="Book Now"
          onPress={() => bottomSheetRef?.current?.present()}
        />
      </View>

      {/* Bottom sheet */}
      <BottomSheetModal
        ref={bottomSheetRef}
        index={0} // Initially hidden
        snapPoints={[600]}
        enableDismissOnClose={true}
        enablePanDownToClose={true}
        handleComponent={CustomHandle}
        backdropComponent={renderBackdrop}
      >
        <DismissKeyboardWrapper>
          <View className="px-4">
            {/* Cancel Icon */}
            <View className="w-full flex flex-row items-center justify-between">
              <Pressable onPress={() => bottomSheetRef.current?.close()}>
                <AntDesign name="close" size={24} color="#000000" />
              </Pressable>
              {/* Empty View to balance alignment */}
              <View style={{ width: 24 }} />
            </View>

            {step === 1 ? (
              <>
                <View className="items-center py-4">
                  <Text className="font-gilroyBold text-2xl">
                    Complete your profile
                  </Text>
                  <Text className="text-[#667085] font-gilroyRegular mt-2">
                    Let’s get to know you better!
                  </Text>

                  <View className="w-full mt-4">
                    <Text className="font-gilroyMedium text-sm mb-2 text-[#344054]">
                      Date of Birth
                    </Text>
                    <View className="flex flex-row items-center justify-between w-full border border-[#66708533] rounded-lg p-3">
                      <Text className="text-gray-500">
                        {selectedDate || "DD/MM/YY"}
                      </Text>
                      <Pressable onPress={showDatePicker}>
                        <Image
                          source={require("../../assets/icons/Frame.svg")}
                          contentFit="contain"
                          className="w-6 h-6"
                        />
                      </Pressable>
                    </View>
                  </View>

                  <View className="w-full mt-4">
                    <Text className="font-gilroyMedium text-sm mb-2 text-[#344054]">
                      Gender
                    </Text>
                    <View className="flex flex-row items-center justify-between w-full border border-gray-300 rounded-lg p-3">
                      <TextInput
                        className="flex-1 text-gray-500 font-gilroyRegular"
                        placeholder="Select gender"
                        value={gender}
                        onChangeText={setGender}
                        placeholderTextColor="#667085"
                      />
                      <Image
                        source={require("../../assets/icons/caret.svg")}
                        contentFit="contain"
                        className="w-6 h-6"
                      />
                    </View>
                  </View>

                  <View className="w-full mt-4">
                    <Text className="font-gilroyMedium text-sm mb-2 text-[#344054]">
                      Address
                    </Text>
                    <View className="flex flex-row items-center justify-between w-full border border-gray-300 rounded-lg p-3">
                      <TextInput
                        className="flex-1 text-gray-500 font-gilroyRegular"
                        placeholder="Enter your address"
                        value={address}
                        onChangeText={setAddress}
                        placeholderTextColor="#667085"
                      />
                      <Image
                        source={require("../../assets/icons/caret.svg")}
                        contentFit="contain"
                        className="w-6 h-6"
                      />
                    </View>
                  </View>

                  <View className="w-full mt-4">
                    <Text className="font-gilroyMedium text-sm mb-2 text-[#344054]">
                      Country/Region
                    </Text>
                    <View className="flex flex-row items-center justify-between w-full border border-gray-300 rounded-lg p-3">
                      <TextInput
                        className="flex-1 text-gray-500 font-gilroyRegular"
                        placeholder="Select country/region"
                        value={country}
                        onChangeText={setCountry}
                        placeholderTextColor="#667085"
                      />
                      <Image
                        source={require("../../assets/icons/caret.svg")}
                        contentFit="contain"
                        className="w-6 h-6"
                      />
                    </View>
                  </View>

                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                  />
                </View>
                <Button
                  label="Next"
                  //   className="mt-4 w-[95%]"
                  onPress={() => setStep(2)}
                />
              </>
            ) : (
              <>
                <View className="items-center py-4">
                  <Text className="font-gilroyBold text-2xl">
                    Complete your profile
                  </Text>
                  <Text className="text-[#667085] font-gilroyRegular mt-2">
                    Let’s get to know you better!
                  </Text>

                  <View className="w-full mt-4">
                    <Text className="font-gilroyMedium text-sm mb-2 text-[#344054]">
                      Full name
                    </Text>
                    <View className="flex flex-row items-center justify-between w-full border border-gray-300 rounded-lg p-3">
                      <TextInput
                        className="flex-1 text-gray-500 font-gilroyRegular"
                        placeholder="Esther John"
                        value={fullName}
                        onChangeText={setName}
                        placeholderTextColor="#667085"
                      />
                    </View>
                  </View>
                  <View className="w-full mt-4">
                    <Text className="font-gilroyMedium text-sm mb-2 text-[#344054]">
                      Relationship to next of kin{" "}
                    </Text>
                    <View className="flex flex-row items-center justify-between w-full border border-gray-300 rounded-lg p-3">
                      <TextInput
                        className="flex-1 text-gray-500 font-gilroyRegular "
                        placeholder="Mother"
                        value={nextOfKin}
                        onChangeText={setNextOfKin}
                        placeholderTextColor="#667085"
                      />
                    </View>
                  </View>
                  <View className="w-full mt-4">
                    <Text className="font-gilroyMedium text-sm mb-2 text-[#344054]">
                      Phone number
                    </Text>
                    <View className="flex flex-row items-center justify-between w-full border border-gray-300 rounded-lg p-3">
                      <TouchableOpacity className="flex-row items-center space-x-1 mr-3">
                        <Text className="text-[#344054] font-gilroyRegular">
                          NGN
                        </Text>
                        <Feather
                          name="chevron-down"
                          size={20}
                          color="#667085"
                        />
                      </TouchableOpacity>

                      <TextInput
                        placeholder="Enter your phone number"
                        placeholderTextColor="#667085"
                        keyboardType="phone-pad"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        className="flex-1 text-gray-500 font-gilroyRegular "
                      />
                    </View>
                  </View>
                </View>
                <Button
                  label="Continue"
                  onPress={() => {
                    bottomSheetRef?.current?.close();
                    router.navigate("route/booking-details");
                  }}
                />
              </>
            )}
          </View>
        </DismissKeyboardWrapper>
      </BottomSheetModal>
    </ScreenLayout>
  );
}

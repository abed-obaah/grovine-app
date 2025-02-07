import { useRef, useState } from "react";

import { ScrollView, TextInput, TouchableOpacity } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

import { ScreenLayout } from "src/components/screen-layout";
import { Button, Image, Pressable, Text, View, renderBackdrop } from "src/ui";
import Coupon from "./coupon";
import { DismissKeyboardWrapper } from "src/app/(app)/profile/security";
import { AntDesign, Feather } from "@expo/vector-icons";
// import { router } from "react-query-kit";
import { CustomHandle } from "../home/search-modal";
import { router } from 'expo-router'
import React from "react";

export default function Screen() {
  const [passengersNmae, setPassengersName] = useState("");
  const [fullName, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [state, setState] = useState("");
  const [Male, setMale] = useState("");
  const [Female, setFemale] = useState("");
  const [kinName, setKinName] = useState("");
  const [kinRelationship, setKinRelationship] = useState("");
  const [kinnumber, setKinNumber] = useState("");
  const [weight, setWeight] =useState("");
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Create a ref for the bottom sheet
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const handlePress = () => {
    // Close the bottom sheet
    bottomSheetRef.current?.close();

    // Navigate to the booking confirmation screen
    router.navigate("route/booking-confirmation");
  };

  return (
    <ScreenLayout useStaticView backgroundColor="#FAF9F6">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="w-full px-4 py-[18px] flex gap-4">
          <View className="border border-[#66708526] rounded-md p-4">
            <Text className="text-textColor font-gilroySemibold text-lg">
              Saved Passengers
            </Text>
            <View className="w-full mt-4">
              {/* <Text className="font-gilroyMedium text-sm mb-2 text-[#344054]">Country/Region</Text> */}
              <View className="flex flex-row items-center justify-between w-full border border-gray-300 rounded-lg p-3">
                <TextInput
                  className="flex-1 text-gray-500 font-gilroyRegular"
                  placeholder="John doe, male, 23"
                  value={passengersNmae}
                  onChangeText={setPassengersName}
                  placeholderTextColor="#667085"
                />
                <Image
                  source={require("../../assets/icons/share.svg")}
                  contentFit="contain"
                  className="w-6 h-6 mr-2"
                />
                <Image
                  source={require("../../assets/icons/trash.svg")}
                  contentFit="contain"
                  className="w-6 h-6"
                />
              </View>
            </View>
          </View>
          <View className="border border-[#66708526] rounded-md p-4">
            <View className="flex-row items-center justify-between">
              <Text className="text-textColor font-gilroySemibold text-lg">
                Passenger details
              </Text>
              <View className="flex-row">
                <Image
                  source={require("../../assets/icons/add.svg")}
                  className="w-6 h-6 ml-2"
                  resizeMode="contain"
                />
                <Text className="text-[#5554ED] font-gilroyMeduim text-lg ml-2">
                  Add
                </Text>
              </View>
            </View>

            <View className="w-full mt-4">
              <View className="flex-row items-center justify-between w-full  rounded-lg p-0">
                <TextInput
                  className="flex-1 text-gray-500 font-gilroyRegular rounded-lg border border-gray-300 p-2"
                  placeholder="Name"
                  value={fullName}
                  onChangeText={setName}
                  placeholderTextColor="#667085"
                />
                <TextInput
                  className="w-1/3 text-gray-500 font-gilroyRegular ml-2 rounded-lg border border-gray-300 p-2"
                  placeholder="age"
                  value={age}
                  onChangeText={setAge}
                  placeholderTextColor="#667085"
                />
              </View>
            </View>

            <View className="mt-4 flex flex-row items-center justify-between w-full border border-gray-300 rounded-lg p-3">
              <TextInput
                className="flex-1 text-gray-500 font-gilroyRegular"
                placeholder="Phone"
                value={Phone}
                onChangeText={setPhone}
                placeholderTextColor="#667085"
              />
            </View>

            <View className="flex-row justify-between w-full rounded-lg py-3">
              <TextInput
                className="w-1/3 text-gray-500 font-gilroyRegular border border-gray-300 p-2 rounded-lg"
                placeholder="State"
                value={state}
                onChangeText={setState}
                placeholderTextColor="#667085"
              />
              <View className="relative flex-1 mx-2">
                <TextInput
                  className="w-full text-gray-500 font-gilroyRegular border border-gray-300 p-2 pl-3 pr-12 rounded-lg"
                  placeholder="Male"
                  value={Male}
                  onChangeText={setMale}
                  placeholderTextColor="#667085"
                />
                <View className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <Image
                    source={require("../../assets/icons/man.svg")} // Replace with your icon path
                    className="w-6 h-6"
                  />
                </View>
              </View>
              <View className="relative flex-1">
                <TextInput
                  className="w-full text-gray-500 font-gilroyRegular border border-gray-300 p-2 pl-3 pr-12 rounded-lg"
                  placeholder="Woman"
                  value={Female}
                  onChangeText={setFemale}
                  placeholderTextColor="#667085"
                />
                <View className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <Image
                    source={require("../../assets/icons/woman.svg")} // Replace with your icon path
                    className="w-6 h-6"
                  />
                </View>
              </View>
            </View>

            <View className="flex-row items-center justify-between">
              <Text className="text-textColor font-gilroySemibold text-lg">
                Next of kin
              </Text>
            </View>

            <View className="w-full mt-4">
              {/* <Text className="font-gilroyMedium text-sm mb-2 text-[#344054]">Country/Region</Text> */}
              <View className="flex flex-row items-center justify-between w-full border border-gray-300 rounded-lg p-3">
                <TextInput
                  className="flex-1 text-[#667085] font-gilroyMeduim"
                  placeholder="Name"
                  value={kinName}
                  onChangeText={setKinName}
                  placeholderTextColor="#667085"
                />
              </View>
              <View className="flex flex-row items-center justify-between w-full border border-gray-300 rounded-lg p-3 my-2">
                <TextInput
                  className="flex-1 text-[#667085] font-gilroyMeduim"
                  placeholder="Relationship to next of kin"
                  value={kinRelationship}
                  onChangeText={setKinRelationship}
                  placeholderTextColor="#667085"
                />
              </View>
              <View className="flex flex-row items-center justify-between w-full border border-gray-300 rounded-lg p-3">
                <TextInput
                  className="flex-1 text-[#667085] font-gilroyMeduim"
                  placeholder="Phone number "
                  value={kinnumber}
                  onChangeText={setKinNumber}
                  placeholderTextColor="#667085"
                />
              </View>
            </View>
          </View>

          <View className="border border-[#66708526] rounded-md p-4">
            <View className="flex-row items-center justify-between">
              <Text className="text-textColor font-gilroySemibold text-lg">
                Contact details
              </Text>
              <View className="flex-row">
                <Text className="text-[#5554ED] font-gilroyMeduim text-lg ml-2">
                  Edit
                </Text>
              </View>
            </View>

            <View className="w-full mt-4">
              {/* <Text className="font-gilroyMedium text-sm mb-2 text-[#344054]">Country/Region</Text> */}
              <View className="flex flex-row items-center justify-between w-full border border-gray-300 rounded-lg p-3">
                <TextInput
                  className="flex-1 text-gray-500 font-gilroyMeduim"
                  placeholder="johndoe229@gmail.com"
                  value={passengersNmae}
                  onChangeText={setPassengersName}
                  placeholderTextColor="#667085"
                />
              </View>
              <View className="flex flex-row items-center justify-between w-full border border-gray-300 rounded-lg p-3 my-2">
                <TextInput
                  className="flex-1 text-gray-500 font-gilroyMeduim"
                  placeholder="09066789756"
                  value={passengersNmae}
                  onChangeText={setPassengersName}
                  placeholderTextColor="#667085"
                />
              </View>
            </View>
          </View>

          <View className="rounded-md p-4">
              <View className="flex-row items-center justify-between" >
                <Text className="text-textColor font-gilroySemibold text-lg">
                  Extra luggage
                </Text>
              </View>

            <View className="w-full mt-4 gap-6">
              <View className="flex flex-row items-center">
                <Image
                  source={require("../../assets/icons/bag.svg")}
                  className="w-10 h-10 mr-2 rounded-md"
                />
                <View>
                  <Text className="text-[#28282B] font-gilroyMeduim text-lg">
                    Included per person
                  </Text>
                  <Text className="text-[#28282B] font-gilroyRegular">
                    1 standard luggage | 20kg
                  </Text>
                </View>
              </View>

              <Pressable onPress={() => bottomSheetRef?.current?.present()}>
                <View className="flex flex-row items-center justify-between w-full border border-gray-300 rounded-lg py-2 mt-2">
                  <View className="flex-row items-center">
                    <Image
                      source={require("../../assets/icons/shopping-bag.svg")}
                      className="w-7 h-7 mx-2 rounded-md"
                    />
                    <View>
                      <Text className="text-[#28282B] font-gilroyMeduim text-lg pb-2">
                        Add extra luggage
                      </Text>
                      <Text className="text-[#28282B] font-gilroyRegular">
                        from{" "}
                        <Text className="text-primary font-gilroyRegular">
                          NGN2000{" "}
                        </Text>{" "}
                        per piece
                      </Text>
                    </View>
                  </View>
                  {/* Move the Vecleft.svg to a separate position */}
                  <Image
                    source={require("../../assets/icons/Vecleft.svg")}
                    className="w-4 h-5 mr-2"
                  />
                </View>
              </Pressable>
            </View>
          </View>

          <View className="rounded-md p-4">
            <View className="flex-row items-center justify-between">
              <Text className="text-textColor font-gilroySemibold text-lg">
                Apply coupon
              </Text>
            </View>

            <View className="w-full mt-4">
              <View className="flex flex-row items-center justify-between w-full">
                <Coupon />
              </View>
            </View>
          </View>
        </View>
        <BottomSheetModal
        ref={bottomSheetRef}
        index={0}
        snapPoints={[470]}
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
            <View className="items-center py-4">
                  <Text className="font-gilroyBold text-2xl">
                   Extra luggage
                  </Text>
                  <Text className="text-[#667085] font-gilroyRegular mt-2">
                    Wuse, Abuja - Kogi, Lokoja
                  </Text>

                  <View className="w-full mt-4 gap-6">
              <View className="flex flex-row items-center">
                <Image
                  source={require("../../assets/icons/bag.svg")}
                  className="w-10 h-10 mr-2 rounded-md"
                />
                <View>
                  <Text className="text-[#28282B] font-gilroyMeduim text-lg">
                    Included per person
                  </Text>
                  <Text className="text-[#28282B] font-gilroyRegular">
                    1 standard luggage | 20kg
                  </Text>
                </View>
              </View>
            </View>

                  <View className="w-full mt-4">
                    <Text className="font-gilroyMedium text-sm mb-2 text-[#344054]">
                     Weight (KG) of luggage
                    </Text>
                    <View className="flex flex-row items-center justify-between w-full border border-gray-300 rounded-lg p-3">
                      <TextInput
                        className="flex-1 text-gray-500 font-gilroyRegular "
                        placeholder="0cm"
                        value={weight}
                        onChangeText={setWeight}
                        placeholderTextColor="#667085"
                      />
                    </View>
                  </View>
                  <Pressable onPress={() => bottomSheetRef?.current?.present()}>
                <View className="flex flex-row items-center justify-between w-full  rounded-lg py-2 mt-2">
                  <View className="flex-row items-center">
                    <Image
                      source={require("../../assets/icons/shopping-bag.svg")}
                      className="w-7 h-7 mx-2 rounded-md"
                    />
                    <View>
                      <Text className="text-[#28282B] font-gilroyMeduim text-lg pb-2">
                      Additional standard luggage 
                      </Text>
                      <Text className="text-[#28282B] font-gilroyRegular">
                      20kg{" "}
                       NGN2000
                      </Text>
                    </View>
                  </View>
                  {/* Move the Vecleft.svg to a separate position */}
                  <View className="flex-row items-center space-x-4">
                  <TouchableOpacity
                          className="bg-gray-200 w-12 h-10 justify-center items-center rounded-md mr-2"
                          onPress={decrement}
                        >
                          <Text className="text-xl font-bold text-[#FD8C00]">-</Text>
                        </TouchableOpacity>
                        <Text className="text-xl font-gilroyMeduim">{count}</Text>
                        <TouchableOpacity
                          className="bg-gray-200 w-12 h-10 justify-center items-center rounded-md mr-2 ml-2"
                          onPress={increment}
                        >
                          <Text className="text-xl font-bold text-[#FD8C00]">+</Text>
                        </TouchableOpacity>
                      </View>
                </View>
              </Pressable>
                </View>
                <View className="w-full px-4 py-[30px] flex gap-4">
                  <View className="w-full flex flex-row items-end justify-between">
                    <View className="flex flex-row items-center gap-2">
                      {/* <Image
                        source={require("../assets/icons/calendar.svg")}
                        contentFit="contain"
                        className="w-5 h-5"
                      /> */}

                      <View>
                        <Text className="text-[#667085] font-gilroyRegular text-xs">
                        0 pieces of extra luggage
                        </Text>
                        <Text className="text-textColor font-gilroyMedium text-sm">
                        NGN0.00
                        </Text>
                      </View>
                    </View>

                    <Button
                    label="Continue"
                    onPress={handlePress}
                  />
                  </View>
                </View>
          </View>
        </DismissKeyboardWrapper>
      </BottomSheetModal>
      </ScrollView>
    </ScreenLayout>
  );
}

import AntDesign from "@expo/vector-icons/AntDesign";
import { RadioButton } from "react-native-paper";
import { ScreenLayout } from "src/components/screen-layout";
import { Button, Image, Pressable, Text, View } from "src/ui";
import { router } from "expo-router";
import { Switch, ScrollView, TextInput } from "react-native";
import { useState } from "react";
import { SummaryCard } from "src/components/route/summary";
import Billing from "src/components/route/billing-address";

export default function Screen() {
  const [isEnabled, setIsEnabled] = useState(true);
  const [Enabled, setEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitchEnabled = () =>
    setEnabled((previousState) => !previousState);
  const [selectedValue, setSelectedValue] = useState("first");

  return (
    <ScreenLayout useStaticView backgroundColor="#FAF9F6">
      <View className="w-full flex gap-4 bg-white">
        <View className="w-full px-4 flex flex-row items-center justify-between pt-[40px] pb-5 relative">
          <Pressable onPress={() => router.back()} className="">
            <AntDesign name="left" size={24} color="black" />
          </Pressable>

          <View className="flex-1 flex items-center justify-center">
            <Text className="text-textColor font-gilroySemibold text-lg">
              Booking Confirmation
            </Text>
          </View>

          <View className="w-6 h-6" />
        </View>
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Header Section */}

        {/* Payment Method Section */}
        <View className="rounded-md p-4">
          <View className="flex-col justify-between">
            <Text className="text-textColor font-gilroySemibold text-lg">
              Payment method
            </Text>
            <Text className="text-[#28282B] font-gilroyRegular">
              How do you want to pay?
            </Text>
          </View>

          <View className="border border-[#66708526] rounded-md p-4 mt-4">
            {/* Save payment method */}
            <View className="flex-row items-center justify-between w-full">
              <Text className="text-textColor font-gilroyMeduim text-md">
                Save payment method
              </Text>
              <View className="">
                <Switch
                  trackColor={{ false: "#767577", true: "#5554ED" }}
                  thumbColor={isEnabled ? "#ffffff" : "#f4f3f4"}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </View>

            {/* Payment options */}
            <View className="w-full mt-4">
              {/* Cards */}
              <View className="flex-row items-center justify-between border border-[#66708526] rounded-xl p-4">
                <Pressable
                  className="flex-row items-center"
                  onPress={() => setSelectedValue("first")}
                >
                  <Pressable
                    onPress={() => setSelectedValue("first")}
                    className={`w-5 h-5 rounded-full border ${
                      selectedValue === "first"
                        ? "border-secondary"
                        : "border-black"
                    } items-center justify-center`}
                  >
                    {selectedValue === "first" && (
                      <View className="w-[10px] h-[10px] bg-secondary rounded-full" />
                    )}
                  </Pressable>
                  {/* <RadioButton
                    value="first"
                    status={selectedValue === "first" ? "checked" : "unchecked"}
                    onPress={() => setSelectedValue("first")}
                    color="#FD8C00"
                  /> */}
                  <Text className="text-md ml-2">Cards</Text>
                </Pressable>

                <View className="flex-row items-center">
                  <Image
                    source={require("../../assets/icons/mastercard.png")}
                    className="w-10 h-10"
                    resizeMode="contain"
                  />
                </View>
              </View>
              {/* Card Form (conditionally displayed) */}
              {selectedValue === "first" && (
                <View className="mt-4">
                  {/* Card Holder Name */}
                  <View className="mb-4">
                    <Text className="text-textColor font-gilroyMedium text-md mb-2">
                      Card Holder Name
                    </Text>
                    <TextInput
                      placeholder="Adebisi"
                      className="w-full text-gray-500 font-gilroyRegular border border-gray-300 p-2 pl-3 pr-12 rounded-lg"
                    />
                  </View>

                  {/* Card Number */}
                  <View className="mb-4">
                    <Text className="text-textColor font-gilroyMedium text-md mb-2">
                      Card Number
                    </Text>
                    <TextInput
                      placeholder="**** *** ***"
                      keyboardType="numeric"
                      className="w-full text-gray-500 font-gilroyRegular border border-gray-300 p-2 pl-3 pr-12 rounded-lg"
                    />
                  </View>

                  {/* Expiration Date */}
                  <View className="w-full">
                    <View className="flex-row justify-between w-full mb-4">
                      {/* CVV - First Input */}
                      <View className="w-1/3">
                        <Text className="text-textColor font-gilroyMedium text-md mb-2">
                          Expires
                        </Text>
                        <TextInput
                          className="text-gray-500 font-gilroyRegular border border-gray-300 p-2 rounded-lg"
                          placeholder="**** *** ***"
                          keyboardType="numeric"
                          placeholderTextColor="#667085"
                        />
                      </View>

                      {/* CVV - Second Input with Icon */}
                      <View className="relative flex-1 mx-2">
                        <Text className="text-textColor font-gilroyMedium text-md mb-2">
                          CVV
                        </Text>
                        <TextInput
                          className="w-full text-gray-500 font-gilroyRegular border border-gray-300 p-2 pl-3 pr-12 rounded-lg"
                          placeholder="xxx"
                          keyboardType="numeric"
                          placeholderTextColor="#667085"
                        />
                      </View>
                    </View>
                  </View>
                </View>
              )}

              {/* Paypal */}
              <View className="mt-4 flex-row items-center justify-between border border-[#66708526] rounded-xl p-4">
                <Pressable
                  className="flex-row items-center"
                  onPress={() => setSelectedValue("second")}
                >
                  <Pressable
                    onPress={() => setSelectedValue("second")}
                    className={`w-5 h-5 rounded-full border ${
                      selectedValue === "second"
                        ? "border-secondary"
                        : "border-black"
                    } items-center justify-center`}
                  >
                    {selectedValue === "second" && (
                      <View className="w-[10px] h-[10px] bg-secondary rounded-full" />
                    )}
                  </Pressable>
                  {/* <RadioButton
                    value="second"
                    status={
                      selectedValue === "second" ? "checked" : "unchecked"
                    }
                    onPress={() => setSelectedValue("second")}
                    color="#FD8C00"
                  /> */}
                  <Text className="text-md ml-2">Paypal</Text>
                </Pressable>

                <View className="flex-row items-center">
                  <Image
                    source={require("../../assets/icons/PayPal.svg")}
                    className="w-10 h-10"
                    resizeMode="contain"
                  />
                </View>
              </View>
            </View>

            {/* Billing Address Switch */}
            <View className="flex-row items-center justify-between mt-4">
              <Text className="text-textColor font-gilroyMeduim text-md">
                Add billing address (optional)
              </Text>
              <View className="">
                <Switch
                  trackColor={{ false: "#767577", true: "#5554ED" }}
                  thumbColor={Enabled ? "#ffffff" : "#f4f3f4"}
                  onValueChange={toggleSwitchEnabled}
                  value={Enabled}
                />
              </View>
            </View>
          </View>
        </View>

        {/* Billing Section */}
        {Enabled && (
          <View className="rounded-md p-4 mt-4">
            <Billing />
          </View>
        )}

        {/* Booking Summary Section */}
        <View className="rounded-md p-4 mb-10">
          <View className="flex-col justify-between">
            <Text className="text-textColor font-gilroySemibold text-lg">
              Booking summary
            </Text>
          </View>

          <View className="rounded-md mt-4">
            <SummaryCard label="Mercedes-Benz Tourismo" />
          </View>
        </View>
      </ScrollView>

      {/* Continue Button */}
      <View className="w-full px-4 py-[20px] flex gap-4">
        <Button
          label="Proceed to pay"
          onPress={() => router.navigate("route/confirmation")}
        />
      </View>
    </ScreenLayout>
  );
}

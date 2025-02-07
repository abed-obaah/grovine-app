import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";

import { Input, Pressable, Text, View } from "@/ui";

// Define the Props type
type Props = {
  tripSpecification: {
    tripPrice: string;
    luggageSize: string;
    extraLuggageCharge: string;
    vehicleFeatures: string[]; // Array of strings for vehicle features
  };
  setTripSpecification: React.Dispatch<React.SetStateAction<{
    tripPrice: string;
    luggageSize: string;
    extraLuggageCharge: string;
    vehicleFeatures: string[];
  }>>;
};

export const TripSpecificationForm = ({ tripSpecification, setTripSpecification }: Props) => {
  // Vehicle features can be defined based on your requirements
  const vehicleFeatures = [
    { id: 1, name: "Air conditioner" },
    { id: 2, name: "Wifi" },
    { id: 3, name: "USB charging port" },
    { id: 4, name: "Neck pillow" },
    { id: 5, name: "Onboard refreshment" },
    { id: 6, name: "Bluetooth connectivity" },
    { id: 7, name: "Extra legroom" },
    { id: 8, name: "Others" },
  ];

  return (
    <View className="w-full flex gap-4">
      <View className="w-full rounded-[10px] border border-[#66708526] px-4 py-[22px] flex gap-4">
        <Text className="text-base font-gilroySemibold text-textColor">
          Trip specification
        </Text>

        <View className="w-full flex flex-row justify-between gap-[10px]">
          <View className="w-1/3">
            <Input 
              placeholder="Trip price" 
              value={tripSpecification.tripPrice} 
              onChangeText={(text) => setTripSpecification((prev) => ({ ...prev, tripPrice: text }))} 
              sm 
            />
          </View>

          <View className="flex-1">
            <Input 
              placeholder="Luggage size (kg)" 
              value={tripSpecification.luggageSize} 
              onChangeText={(text) => setTripSpecification((prev) => ({ ...prev, luggageSize: text }))} 
              sm 
            />
          </View>
        </View>

        <Input 
          placeholder="Charge for extra luggage" 
          value={tripSpecification.extraLuggageCharge} 
          onChangeText={(text) => setTripSpecification((prev) => ({ ...prev, extraLuggageCharge: text }))} 
          sm 
        />

        <Text className="text-xs font-gilroyMedium text-subTextColor">
          Specify the free luggage allowance in kg and set the charge for any
          additional luggage.
        </Text>
      </View>

      <View className="w-full rounded-[10px] border border-[#66708526] px-4 py-[22px] flex gap-4">
				<Text className="text-base font-gilroySemibold text-textColor">
					Vehicle features
				</Text>

				<Checkbox label="Air conditioner" />

				<Checkbox label="Wifi" />
				<Checkbox label="USB charging port" />
				<Checkbox label="Neck pillow" />
				<Checkbox label="Onboard refreshment" />
				<Checkbox label="Bluetooth connectivity" />
				<Checkbox label="Extra legroom" />
				<Checkbox label="Others" />
			</View>
    </View>
  );
};

type CheckboxProps = {
  label: string;
  isChecked: boolean;
  onChange: () => void;
};

const Checkbox = ({ label, isChecked, onChange }: CheckboxProps) => {
  return (
    <Pressable
      onPress={onChange}
      className="flex flex-row items-center gap-[10px]"
    >
      <View
        style={{
          backgroundColor: isChecked ? "#FD8C00" : "white",
          borderColor: isChecked ? "#FD8C00" : "#667085",
        }}
        className="w-[25px] h-[25px] border rounded-[5px] flex items-center justify-center"
      >
        {isChecked && <Feather name="check" size={20} color="white" />}
      </View>

      <Text className="text-sm font-gilroyMedium text-black">{label}</Text>
    </Pressable>
  );
};

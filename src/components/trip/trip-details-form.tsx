import { DatePicker, Input, type Option, Select, Text, View } from "@/ui";
import { TimePicker } from "@/ui/time-picker";
import React from "react";
import { useState } from "react";

const options: Option[] = [
  { value: "bus", label: "Bus" },
  { value: "suv", label: "SUV" },
  { value: "mini-van", label: "Mini Van" },
];

// Define Props type
type Props = {
  tripDetails: {
    departureLocation: string;
    arrivalLocation: string;
    departureDate: string;
    departureTime: string;
    arrivalDate: string;
    arrivalTime: string;
    vehicle: string;
  };
  setTripDetails: React.Dispatch<React.SetStateAction<{
    departureLocation: string;
    arrivalLocation: string;
    departureDate: string;
    departureTime: string;
    arrivalDate: string;
    arrivalTime: string;
    vehicle: string;
  }>>;
};

export const TripDetailsForm = ({ tripDetails, setTripDetails }: Props) => {
  return (
    <View className="w-full rounded-[10px] border border-[#66708526] px-4 py-[22px] flex gap-4">
      <Text className="text-base font-gilroySemibold text-textColor">Trip details</Text>

      <Input
        value={tripDetails.departureLocation}
        onChangeText={(text) => setTripDetails((prev) => ({ ...prev, departureLocation: text }))}
        placeholder="Departure location"
        sm
      />

      <View className="w-full flex flex-row justify-between gap-[10px]">
        <View className="flex-1">
          {/* <DatePicker 
            placeholder="Departure date" 
            value={tripDetails.departureDate} 
            onChange={(date) => setTripDetails((prev) => ({ ...prev, departureDate: date }))} 
          /> */}
        </View>

        <View className="flex-1">
          <TimePicker 
            placeholder="Departure time" 
            value={tripDetails.departureTime} 
            onChange={(time) => setTripDetails((prev) => ({ ...prev, departureTime: time }))} 
          />
        </View>
      </View>

      <Input
        value={tripDetails.arrivalLocation}
        onChangeText={(text) => setTripDetails((prev) => ({ ...prev, arrivalLocation: text }))}
        placeholder="Arrival location"
        sm
      />

      <View className="w-full flex flex-row justify-between gap-[10px]">
        {/* <View className="flex-1">
          <DatePicker 
            placeholder="Arrival date" 
            value={tripDetails.arrivalDate} 
            onChange={(date) => setTripDetails((prev) => ({ ...prev, arrivalDate: date }))} 
          />
        </View> */}

        <View className="flex-1">
          <TimePicker 
            placeholder="Arrival time" 
            value={tripDetails.arrivalTime} 
            onChange={(time) => setTripDetails((prev) => ({ ...prev, arrivalTime: time }))} 
          />
        </View>
      </View>

      <Select
        placeholder="Select vehicle"
        options={options}
        value={tripDetails.vehicle}
        onValueChange={(value) => setTripDetails((prev) => ({ ...prev, vehicle: value }))}
        sm
      />
    </View>
  );
};

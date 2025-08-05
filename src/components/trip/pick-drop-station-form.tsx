import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import {
  DatePicker,
  Input,
  type Option,
  Pressable,
  Select,
  Text,
  View,
} from "@/ui";
// import { TimePicker } from "@/ui/time-picker";
import { useState } from "react";

const options: Option[] = [
  { value: "bus", label: "Bus" },
  { value: "suv", label: "SUV" },
  { value: "mini-van", label: "Mini Van" },
];

// type Props = {

// };

type Props = {
  pickDropStation: {
    pickupStation: string;
    dropOffStation: string;
    stops: number[];
    closeBookingDate: string;
    closeBookingTime: string;
  };
  setPickDropStation: React.Dispatch<React.SetStateAction<{
    pickupStation: string;
    dropOffStation: string;
    stops: number[];
    closeBookingDate: string;
    closeBookingTime: string;
  }>>;
};


export const PickDropStationForm = ({ pickDropStation, setPickDropStation }: Props) => {
  

  const [stops, setStops] = useState<number[]>([1]);

  const addStop = () => {
    setStops((prevStops) => {
      const nextNumber = prevStops.length > 0 ? Math.max(...prevStops) + 1 : 1;
      return [...prevStops, nextNumber];
    });
  };

  const removeStop = (index: number) => {
    setStops((prevStops) => prevStops.filter((_, i) => i !== index));
  };

  const handlePickupStationChange = (text: string) => {
    setPickDropStation((prev) => ({ ...prev, pickupStation: text }));
  };

  const handleDropOffStationChange = (text: string) => {
    setPickDropStation((prev) => ({ ...prev, dropOffStation: text }));
  };

  const handleCloseBookingDateChange = (date: string) => {
    setPickDropStation((prev) => ({ ...prev, closeBookingDate: date }));
  };

  const handleCloseBookingTimeChange = (time: string) => {
    setPickDropStation((prev) => ({ ...prev, closeBookingTime: time }));
  };

  return (
    <View className="w-full flex gap-4">
      <View className="w-full rounded-[10px] border border-[#66708526] px-4 py-[22px] flex gap-4">
        <View className="w-full flex flex-row items-center justify-between">
          <Text className="text-base font-gilroySemibold text-textColor">
            Pickup & drop-off station
          </Text>
        </View>

        <Select
          placeholder="Pickup station"
          options={options}
          value={pickDropStation.pickupStation}
          onChange={handlePickupStationChange}
          sm
        />

        <Input
          placeholder="Drop-off station or town"
          value={pickDropStation.dropOffStation}
          onChangeText={handleDropOffStationChange}
          sm
        />

        <View className="w-full flex flex-row items-center justify-between">
          <Text className="text-xs font-gilroyRegular text-[#667085]">
            Bus stops
          </Text>

          <Pressable onPress={addStop}>
            <Text className="text-sm font-gilroyRegular text-secondary">
              Add stops
            </Text>
          </Pressable>
        </View>

        {stops?.map((item, index) => (
          <Input
          key={item}
          placeholder="Stop"
          value={`Stop ${item}`}
          sm
          style={{ paddingRight: 48 }}
          rightIconComponent={
            <Pressable
              onPress={() => removeStop(index)}
              className="absolute right-0 top-0 bottom-0 w-[48px] flex flex-row items-center justify-center"
            >
              <MaterialCommunityIcons
                name="trash-can-outline"
                size={20}
                color="#667085"
              />
            </Pressable>
          }
        />
        ))}
      </View>

      <View className="w-full rounded-[10px] border border-[#66708526] px-4 py-[22px] flex gap-4">
        <Text className="text-base font-gilroySemibold text-textColor">
          Set close booking
        </Text>

        <View className="w-full flex flex-row justify-between gap-[10px]">
          <View className="flex-1">
          <DatePicker
              placeholder="Closing date"
              value={pickDropStation.closeBookingDate}
              onChange={handleCloseBookingDateChange}
            />
          </View>

          <View className="w-1/3">
          <TimePicker
              placeholder="Time"
              value={pickDropStation.closeBookingTime}
              onChange={handleCloseBookingTimeChange}
            />
          </View>
        </View>

        <Text className="text-xs font-gilroyMedium text-subTextColor">
          Set a close booking time to automatically allow space for in-person
          bookings.
        </Text>
      </View>
    </View>
  );
};

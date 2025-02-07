import BookingDetails from "src/app/(app)/bookings/booking-details";
import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

// Define the type for trip data
interface Trip {
  id: string;
  startTime: string;
  endTime: string;
  startLocation: string;
  endLocation: string;
  startDate: string;
  endDate: string;
  duration: string;
  timeLeft?: string;
}

const tripData: Trip[] = [
  {
    id: "ABC-123GHZ",
    startTime: "10:00AM",
    endTime: "12:50PM",
    startLocation: "Wuse, Abuja",
    endLocation: "Ogamniana, Kogi state",
    startDate: "July 30th 2023",
    endDate: "July 30th 2023",
    duration: "2hr 45min",
    timeLeft: "6 hours left",
  },
  {
    id: "ABC-456XYZ",
    startTime: "10:00AM",
    endTime: "12:50PM",
    startLocation: "Wuse, Abuja",
    endLocation: "Ogamniana, Kogi state",
    startDate: "July 30th 2023",
    endDate: "July 30th 2023",
    duration: "2hr 45min",
    timeLeft: "3 days left",
  },
];

export default function ActiveTrips() {
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);

  const renderItem = ({ item }: { item: Trip }) => (
    <TouchableOpacity
      onPress={() => setSelectedTrip(item)}
      className="p-5 bg-white rounded-lg shadow-sm mb-5"
    >
      <View>
        <View className="flex-row justify-between pb-2">
          <Text className="text-[14px] font-gilroyMedium">
            Booking Id: {item.id}
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text className="text-[14px] font-gilroyMedium text-blue-600">
              {item.timeLeft}
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-between pb-2">
          <Text className="text-[12px] font-gilroyRegular">
            {item.startTime}
          </Text>
          <Text className="text-[12px] font-gilroyRegular">{item.endTime}</Text>
        </View>

        <View className="flex-row justify-between pb-2">
          <Text className="text-[14px] font-gilroyMedium">
            {item.startLocation}
          </Text>
          <Text className="text-lg font-gilroyBold text-orange-500 justify-center">
            ------&gt;
          </Text>
          <Text className="text-[14px] font-gilroyMedium">
            {item.endLocation}
          </Text>
        </View>

        <View className="flex-row justify-between">
          <Text className="text-[12px] font-gilroyRegular">
            {item.startDate}
          </Text>
          <Text className="text-[12px] font-gilroyRegular">
            {item.duration}
          </Text>
          <Text className="text-[12px] font-gilroyRegular">{item.endDate}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 p-4 bg-gray-100">
      {selectedTrip ? (
        <BookingDetails />
      ) : (
        <FlatList
          data={tripData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

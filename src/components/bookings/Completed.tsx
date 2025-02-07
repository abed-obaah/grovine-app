import BookingDetails from "src/app/(app)/bookings/completed-details";
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
	status?: string;
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
		status: "Cancelled",
	},
	{
		id: "ABC-456XYZ",
		startTime: "11:00AM",
		endTime: "1:50PM",
		startLocation: "Lagos, Nigeria",
		endLocation: "Enugu, Nigeria",
		startDate: "August 10th 2023",
		endDate: "August 10th 2023",
		duration: "2hr 30min",
		timeLeft: "3 days left",
	},
];

export default function ActiveTrips() {
	const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);

	const renderItem = ({ item, index }: { item: Trip; index: number }) => (
		<TouchableOpacity
			onPress={() => setSelectedTrip(item)}
			className="p-5 rounded-lg mb-5"
			style={{
				backgroundColor: index % 2 === 0 ? "#6670851A" : "white",
			}}
		>
			<View>
				<View className="flex-row justify-between pb-2">
					<Text className="text-[14px] font-gilroyMedium">
						Booking Id: {item.id}
					</Text>
					{/* Conditionally render the status only on the first card */}
					{index === 0 && (
						<TouchableOpacity onPress={() => {}}>
							<Text className="text-[14px] font-gilroyMedium inline-flex items-center rounded-md bg-[#6670851A] px-2.5 py-0.5  text-[#667085]">
								{item.status}
							</Text>
						</TouchableOpacity>
					)}
				</View>

				<View className="flex-row justify-between pb-2">
					<Text className="text-[12px] font-gilroyRegular">
						{item.startTime}
					</Text>
					<Text className="text-[12px] font-gilroyRegular">{item.endTime}</Text>
				</View>

				<View className="flex-row justify-between pb-2 items-center">
					<Text className="text-[14px] font-gilroyMedium">
						{item.startLocation}
					</Text>
					<Text
						className={`text-lg font-gilroyBold ${index === 0 ? "text-[#667085]" : "text-orange-500"} justify-center`}
					>
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

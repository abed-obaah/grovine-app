import { Button, Image, Text, View } from "src/ui";
import { router } from "expo-router";
import {
	FlatList,
	Pressable,
	ScrollView,
	TouchableOpacity,
} from "react-native";

// Define the type for vehicle details
type VehicleDetail = {
	label: string;
	value: string;
};

const vehicleDetails: VehicleDetail[] = [
	{ label: "Car number", value: "123-AXCD4" },
	{ label: "Car model", value: "Mercedes-Benz Tourismo" },
	{ label: "Car color", value: "Yellow" },
	{ label: "Car type", value: "Luxury" },
	{ label: "Seating capacity", value: "14 seats (6 left)" },
];

const BookingDetails = () => {
	// Define the type of the parameter in the render function
	const renderVehicleDetail = ({ item }: { item: VehicleDetail }) => (
		<View className="flex-row justify-between mb-2">
			<Text className="text-[12px] font-gilroyRegular">{item.label}</Text>
			<Text className="text-[14px] font-gilroyMeduim">{item.value}</Text>
		</View>
	);

	return (
		<>
			<ScrollView className="p-4 bg-white">
				{/* Bus Info */}
				<View className="p-4 mb-4">
					<View className="flex flex-row justify-between items-center mb-2">
						<Text className="text-[16px] font-gilroySemibold">
							Mercedes-Benz Tourismo
						</Text>
						<Text className="text-blue-600 text-[14px] font-gilroyMedium">
							6 hours left
						</Text>
					</View>
					<View className="flex-row justify-between pb-2">
						<Text className="text-[14px] font-gilroyMedium">
							Wuse bus station
						</Text>
						<Text className="text-lg font-gilroyBold text-orange-500 justify-center">
							------&gt;
						</Text>
						<Text className="text-[14px] font-gilroyMedium">
							Kogi bus station
						</Text>
					</View>

					<View className="flex-row justify-between">
						<Text className="text-[12px] font-gilroyRegular">10:00AM</Text>
						<Text className="text-[12px] font-gilroyMedium">12:50PM</Text>
						<Text className="text-[12px] font-gilroyRegular">(2hr 45min)</Text>
					</View>

					{/* Rest stops */}
					<View className="mt-4">
						<View className="flex flex-row justify-between items-center mb-2">
							<Text className="text-[16px] text-[#667085] font-gilroySemibold">
								Rest stops
							</Text>
							<TouchableOpacity onPress={() => router.push("/tracking/")}>
								<Text className="text-blue-600 text-[14px] font-gilroyMedium">
									View route
								</Text>
							</TouchableOpacity>
						</View>

						<View className="space-y-2">
							<View className="flex flex-row items-center">
								<Text className="text-[#667085] text-[14px] font-gilroyMedium">
									10:00am
								</Text>
								<Text className="ml-2 text-sm text-gray-500" />
								<Text className="ml-2 text-sm text-gray-500">
									Abuja bus terminal
								</Text>
							</View>
							<View className="flex flex-row items-center">
								<Text className="text-[#667085] text-[14px] font-gilroyMedium">
									10:15am
								</Text>
								<Text className="ml-2 text-sm text-gray-500" />
								<Text className="ml-2 text-sm text-gray-500">Ejuelegba</Text>
							</View>
							<View className="flex flex-row items-center">
								<Text className="text-[#667085] text-[14px] font-gilroyMedium">
									11:00am
								</Text>
								<Text className="ml-2 text-sm text-gray-500" />
								<Text className="ml-2 text-sm text-gray-500">Jiwon park</Text>
							</View>
							<View className="flex flex-row items-center">
								<Text className="text-[#667085] text-[14px] font-gilroyMedium">
									12:10am
								</Text>
								<Text className="ml-2 text-sm text-gray-500" />
								<Text className="ml-2 text-sm text-gray-500">Ogaminana</Text>
							</View>
						</View>
					</View>

					{/* Vehicle details */}
					<View className="mt-4">
						<Text className="text-[16px] text-[#667085] font-gilroySemibold mb-2">
							Vehicle details
						</Text>
						<FlatList
							data={vehicleDetails}
							keyExtractor={(item) => item.label}
							renderItem={renderVehicleDetail}
						/>
					</View>

					{/* Driver details */}
					<View className="mt-4">
						<View className="flex flex-row justify-between items-center mb-7">
							<Text className="text-[16px] text-[#667085] font-gilroySemibold">
								Driver details
							</Text>
							<Text className="text-blue-600 text-[14px] font-gilroyMedium">
								View route
							</Text>
						</View>
						<View className="flex flex-row items-center mt-2">
							{/* Profile Image */}
							<View className="w-[88px] h-[88px] rounded-full overflow-hidden">
								<Image
									source={require("../../../assets/images/user.jpg")}
									contentFit="cover"
									className="w-full h-full"
								/>
							</View>

							{/* Text and Icons */}
							<View className="ml-4 flex-1">
								<View className="flex-row justify-between items-center mb-5">
									{/* Name and Call Icon */}
									<Text className="text-[16px] text-[#28282B] font-gilroySemibold">
										Micheal Adebayo
									</Text>
									<View className="p-2 bg-[#6670851A] rounded-full">
										<Image
											source={require("../../../assets/icons/callIcon.svg")}
											contentFit="contain"
											className="w-6 h-6"
										/>
									</View>
								</View>

								{/* Email */}
								<Text className="text-sm text-gray-500">
									MichealADE@gmail.com
								</Text>

								{/* Location */}
								<Pressable className="flex flex-row items-center gap-1.9 -ml-2 mt-2">
									<Image
										source={require("../../../assets/icons/location.svg")}
										contentFit="contain"
										className="w-6 h-6"
									/>
									<Text className="font-gilroySemibold text-base text-textColor">
										123, test abc, London
									</Text>
								</Pressable>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
			<View className="px-5 w-full py-2">
				<Button label="Cancel booking" />
			</View>
		</>
	);
};

export default BookingDetails;

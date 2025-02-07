import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";

import { Image, Pressable, Text, View } from "@/ui";
import { useState } from "react";

// type Props = {

// };
export const VehicleDetailsDisplay = () => {
	const [showStops, setShowStops] = useState(false);

	return (
		<View className="w-full flex gap-4">
			<Text className="text-base font-gilroySemibold text-textColor">
				Vehicle details
			</Text>

			<View className="flex w-full gap-[20px]">
				<View className="w-full flex flex-row flex-wrap gap-[20px]">
					<Detail title="Vehicle name" subtitle="Mercedes-Benz Tourismo" />

					<Detail title="Price" subtitle="NGN15,000" />
					<Detail title="Vehicle color" subtitle="Yellow" />
					<Detail title="Vehicle type" subtitle="Luxury" />
					<Detail title="Seating capacity" subtitle="14" />
					<Detail title="Luggage size (kg)" subtitle="20kg" />
					<Detail title="Extra luggage charge" subtitle="NGN2,000" />
				</View>

				<Detail
					title="Vehicle description"
					subtitle="It’s designed to offer both comfort and functionality for passengers. It boasts a seating capacity of 14. Passengers can enjoy the modern air conditioning system, which maintains a pleasant temperature throughout the trip. Additionally, free Wi-Fi is available on board, allowing passengers to stay connected. Each seat is equipped with USB charging ports, so devices can be charged on the go."
				/>

				<View className="w-full flex gap-4">
					<View className="w-full flex flex-row items-center justify-between">
						<Text className="text-xs font-gilroyMedium text-subTextColor">
							Station
						</Text>

						<Pressable onPress={() => setShowStops((prev) => !prev)}>
							<Text className="text-xs font-gilroyMedium text-secondary">
								{showStops ? "Hide" : "Show"} stops
							</Text>
						</Pressable>
					</View>

					<View className="flex gap-[10px]">
						<View className="w-full flex flex-row items-center justify-between">
							<View className="flex">
								<Text className="text-xs font-gilroyMedium text-subTextColor">
									Pickup
								</Text>

								<View className="flex flex-row items-center gap-[6px]">
									<Text className="font-gilroyMedium text-sm text-textColor">
										Wuse bus station
									</Text>

									<AntDesign name="down" size={18} color="#28282B" />
								</View>
							</View>

							<Image
								source={require("@/assets/icons/arrow.svg")}
								className="w-[50px] h-[16px]"
								contentFit="contain"
							/>

							<View className="flex">
								<Text className="text-xs font-gilroyMedium text-subTextColor">
									Dropoff
								</Text>

								<View className="flex flex-row items-center gap-[6px]">
									<Text className="font-gilroyMedium text-sm text-textColor">
										Kogi bus station
									</Text>

									<AntDesign name="up" size={18} color="#28282B" />
								</View>
							</View>
						</View>

						<Text className="text-xs font-gilroyRegular text-textColor">
							Behind chicken republic, wuse 2, Abuja
						</Text>

						{showStops && (
							<View className="w-full flex gap-5">
								<Text className="text-xs font-gilroyRegular text-black">
									Bus stops
								</Text>

								<View className="w-full flex">
									<View className="w-full flex flex-row">
										<Text className="font-gilroyMedium text-sm text-subTextColor w-[20%]">
											10:00am
										</Text>

										<View className="w-full h-[76px] border-l-[2px] border-l-[#FD8C00] px-4 relative">
											<View className="w-5 h-5 bg-white absolute left-[-11px] top-0 flex items-center justify-center">
												<Entypo name="location-pin" size={20} color="#FD8C00" />
											</View>

											<Text className="font-gilroyMedium text-sm text-textColor">
												Abuja bus terminal
											</Text>
										</View>
									</View>

									<View className="w-full flex flex-row">
										<Text className="font-gilroyMedium text-sm text-subTextColor w-[20%]">
											10:15am
										</Text>

										<View className="w-full h-[54px] border-l-[2px] border-l-[#FD8C00] px-4 relative">
											<View className="w-3 h-3 rounded-full bg-white absolute left-[-6px] top-1 flex items-center justify-center border border-[#5554ED]" />

											<Text className="font-gilroyMedium text-sm text-textColor">
												Ejuelegba
											</Text>
										</View>
									</View>

									<View className="w-full flex flex-row">
										<Text className="font-gilroyMedium text-sm text-subTextColor w-[20%]">
											11:00am
										</Text>

										<View className="w-full h-[74px] border-l-[2px] border-l-[#FD8C00] px-4 relative">
											<View className="w-3 h-3 rounded-full bg-white absolute left-[-6px] top-1 flex items-center justify-center border border-[#5554ED]" />

											<Text className="font-gilroyMedium text-sm text-textColor">
												Jiwon park
											</Text>
										</View>
									</View>

									<View className="w-full flex flex-row">
										<Text className="font-gilroyMedium text-sm text-subTextColor w-[20%]">
											12:10am
										</Text>

										<View className="w-full border-l-[2px] border-l-transparent px-4 relative">
											{/* <View className="w-3 h-3 rounded-full bg-white absolute left-[-6px] top-1 flex items-center justify-center border border-[#5554ED]" /> */}

											<Text className="font-gilroyMedium text-sm text-textColor">
												Ogaminana
											</Text>
										</View>
									</View>
								</View>
							</View>
						)}
					</View>
				</View>
			</View>
		</View>
	);
};

type DetailProps = {
	title: string;
	subtitle: string;
};
export const Detail = ({ title, subtitle }: DetailProps) => {
	return (
		<View className="flex gap-[4px]">
			<Text className="text-xs font-gilroyMedium text-subTextColor">
				{title}
			</Text>

			<Text className="text-sm font-gilroyMedium text-textColor">
				{subtitle}
			</Text>
		</View>
	);
};

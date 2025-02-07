import AntDesign from "@expo/vector-icons/AntDesign";

import { Image, Pressable, ScrollView, Text, View, WIDTH } from "src/ui";
import { AmenitiesItem } from "./filter-modal";

export const InformationTab = () => {
	return (
		<View style={{ width: WIDTH }} className="flex-1 bg-white p-4">
			<ScrollView
				contentContainerStyle={{ flexGrow: 1, gap: 20 }}
				showsVerticalScrollIndicator={false}
			>
				<View className="w-full flex gap-[10px]">
					<Text className="text-base font-gilroySemibold text-textColor">
						Bus amenities
					</Text>

					<View className="w-full flex flex-row flex-wrap gap-4">
						<AmenitiesItem label="Wifi" />

						<AmenitiesItem label="USB port" />

						<AmenitiesItem label="Reading lights" />

						<AmenitiesItem label="Pillows" />

						<AmenitiesItem label=" Air conditioner" />

						<View className="h-[30px] bg-[#6670851A] flex items-center justify-center rounded-[20px] px-2">
							<Text className="text-sm font-gilroyRegular text-secondary">
								10+
							</Text>
						</View>
					</View>
				</View>

				<View className="w-full flex gap-4">
					<Text className="text-base font-gilroySemibold text-textColor">
						Bus details
					</Text>

					<View className="flex w-full gap-[20px]">
						<View className="w-full flex flex-row flex-wrap gap-[20px]">
							<Detail title="Bus color" subtitle="Yellow" />
							<Detail title="Bus type" subtitle="Luxury" />
							<Detail title="Seating capacity" subtitle="14" />
						</View>

						<Detail
							title="Bus description"
							subtitle="It’s designed to offer both comfort and functionality for passengers. It boasts a seating capacity of 14. Passengers can enjoy the modern air conditioning system, which maintains a pleasant temperature throughout the trip. Additionally, free Wi-Fi is available on board, allowing passengers to stay connected. Each seat is equipped with USB charging ports, so devices can be charged on the go."
						/>

						<View className="w-full flex gap-2">
							<Text className="text-xs font-gilroyMedium text-subTextColor">
								Bus photos
							</Text>

							<View className="w-full flex flex-row gap-2 flex-wrap">
								<View className="w-[70px] h-[60px] flex items-center justify-center rounded-[5px] overflow-hidden">
									<Image
										className="w-full h-full"
										contentFit="cover"
										source={require("../../assets/images/car-1.jpg")}
									/>
								</View>

								<View className="w-[70px] h-[60px] flex items-center justify-center rounded-[5px] overflow-hidden">
									<Image
										className="w-full h-full"
										contentFit="cover"
										source={require("../../assets/images/car-2.jpg")}
									/>
								</View>

								<View className="w-[70px] h-[60px] flex items-center justify-center rounded-[5px] overflow-hidden">
									<Image
										className="w-full h-full"
										contentFit="cover"
										source={require("../../assets/images/car-3.jpg")}
									/>
								</View>
							</View>
						</View>

						<View className="w-full flex gap-4">
							<View className="w-full flex flex-row items-center justify-between">
								<Text className="text-xs font-gilroyMedium text-subTextColor">
									Bus Station
								</Text>

								<Pressable>
									<Text className="text-xs font-gilroyMedium text-secondary">
										Show stops
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
										source={require("../../assets/icons/arrow.svg")}
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
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
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

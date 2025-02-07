import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useState } from "react";
import { Modal, ScrollView, TextInput } from "react-native";

import { Button, Image, Pressable, Text, View } from "src/ui";

// type Props = {

// };
export const FilterModal = () => {
	const [show, setShow] = useState(false);

	return (
		<>
			<Pressable
				onPress={() => setShow((prev) => !prev)}
				className="flex items-center justify-center"
			>
				<Image
					source={require("../../assets/icons/sort.svg")}
					className="w-6 h-6"
					contentFit="contain"
				/>
			</Pressable>

			<Modal animationType="fade" transparent={true} visible={show}>
				<View className="flex-1 bg-black/30 relative">
					<Pressable
						onPress={() => setShow((prev) => !prev)}
						style={{ flex: 1 }}
					/>

					<View className="w-[255px] h-full right-0 absolute top-0 bottom-0 bg-white">
						<View className="w-full h-[91px] border-b border-b-[#6670854D] px-2 py-[15px] flex flex-row items-end">
							<View className="w-full flex flex-row items-center justify-between">
								<Pressable
									onPress={() => setShow((prev) => !prev)}
									className="flex items-center justify-center"
								>
									<AntDesign name="left" size={24} color="black" />
								</Pressable>

								<Text className="text-textColor font-gilroySemibold text-base">
									Filter vehicle
								</Text>

								<View className="w-6 h-6" />
							</View>
						</View>

						<ScrollView
							contentContainerStyle={{ flexGrow: 1, padding: 16, gap: 20 }}
							showsVerticalScrollIndicator={false}
						>
							<View className="flex-1 gap-5">
								<SortBy />

								<Price />

								<Location />

								<Amenities />
							</View>

							<Button
								label="Apply (102 results)"
								onPress={() => setShow((prev) => !prev)}
							/>
						</ScrollView>
					</View>
				</View>
			</Modal>
		</>
	);
};

export const SortBy = () => {
	const [selected, setSelected] = useState("earliest");

	return (
		<View className="w-full flex gap-[10px]">
			<Text className="text-base font-gilroySemibold text-textColor">
				Sort by
			</Text>

			<View className="w-full flex gap-[10px] border border-[#6670854D] rounded-[10px] px-[10px] py-[16px]">
				<Pressable
					onPress={() => setSelected("earliest")}
					className="w-full flex flex-row items-center gap-2"
				>
					{selected === "earliest" ? (
						<View className="w-4 h-4 rounded-full border-[0.6px] flex items-center justify-center border-secondary">
							<View className="w-[10px] h-[10px] bg-secondary rounded-full" />
						</View>
					) : (
						<View className="w-4 h-4 rounded-full border-[0.6px] border-black" />
					)}

					<Text className="text-sm text-subTextColor font-gilroyMedium">
						Departure time:
						<Text className="text-black">Earliest first</Text>
					</Text>
				</Pressable>

				<Pressable
					onPress={() => setSelected("latest")}
					className="w-full flex flex-row items-center gap-2"
				>
					{selected === "latest" ? (
						<View className="w-4 h-4 rounded-full border-[0.6px] flex items-center justify-center border-secondary">
							<View className="w-[10px] h-[10px] bg-secondary rounded-full" />
						</View>
					) : (
						<View className="w-4 h-4 rounded-full border-[0.6px] border-black" />
					)}

					<Text className="text-sm text-subTextColor font-gilroyMedium">
						Departure time:
						<Text className="text-black">Latest first</Text>
					</Text>
				</Pressable>
			</View>
		</View>
	);
};

export const Price = () => {
	return (
		<View className="w-full flex gap-[10px]">
			<Text className="text-base font-gilroySemibold text-textColor">
				Price
			</Text>

			<View className="w-full flex flex-row justify-between gap-[10px]">
				<View className="flex-1 flex flex-row items-center gap-[5px]">
					<Text className="text-sm font-gilroyMedium text-textColor">Min:</Text>

					<View className="flex-1 h-[38px] flex border border-[#6670854D] rounded-[8px]">
						<TextInput
							className="flex-1 px-[12px] font-gilroyRegular text-xs"
							placeholder="0.00"
							placeholderTextColor="#667085"
						/>
					</View>
				</View>

				<View className="flex-1 flex flex-row items-center gap-[5px]">
					<Text className="text-sm font-gilroyMedium text-textColor">Max:</Text>

					<View className="flex-1 h-[38px] flex border border-[#6670854D] rounded-[8px]">
						<TextInput
							className="flex-1 px-[12px] font-gilroyRegular text-xs"
							placeholder="0.00"
							placeholderTextColor="#667085"
						/>
					</View>
				</View>
			</View>

			<View className="w-full flex flex-row justify-between gap-[10px]">
				<View className="flex-1 flex flex-row items-center gap-[5px]">
					<Text className="text-sm font-gilroyMedium text-textColor">Max:</Text>

					<View className="flex-1 h-[38px] flex border border-[#6670854D] rounded-[8px]">
						<TextInput
							className="flex-1 px-[12px] font-gilroyRegular text-xs"
							placeholder="0.00"
							placeholderTextColor="#667085"
						/>
					</View>
				</View>

				<View className="flex-1 flex flex-row items-center gap-[5px]">
					<Text className="text-sm font-gilroyMedium text-textColor">Min:</Text>

					<View className="flex-1 h-[38px] flex border border-[#6670854D] rounded-[8px]">
						<TextInput
							className="flex-1 px-[12px] font-gilroyRegular text-xs"
							placeholder="0.00"
							placeholderTextColor="#667085"
						/>
					</View>
				</View>
			</View>
		</View>
	);
};

export const Location = () => {
	return (
		<View className="w-full flex gap-[10px]">
			<Text className="text-base font-gilroySemibold text-textColor">
				Location
			</Text>

			<Pressable className="w-full h-[28px] border border-[#6670854D] rounded-lg flex flex-row items-center gap-[8px] px-[14px]">
				<Image
					source={require("../../assets/icons/location-active.svg")}
					contentFit="contain"
					className="w-5 h-5"
				/>

				<Text className="text-xs font-gilroyRegular text-[#667085]">
					Boarding point
				</Text>
			</Pressable>

			<Pressable className="w-full h-[28px] border border-[#6670854D] rounded-lg flex flex-row items-center gap-[8px] px-[14px]">
				<Image
					source={require("../../assets/icons/location-active.svg")}
					contentFit="contain"
					className="w-5 h-5"
				/>

				<Text className="text-xs font-gilroyRegular text-[#667085]">
					Destination point
				</Text>
			</Pressable>
		</View>
	);
};

export const Amenities = () => {
	const [selected, setSelected] = useState("");

	return (
		<View className="w-full flex gap-[10px]">
			<Text className="text-base font-gilroySemibold text-textColor">
				Bus Amenities
			</Text>

			<View className="w-full flex flex-row flex-wrap gap-4">
				<AmenitiesItem
					label="Wifi"
					onPress={() => setSelected("wifi")}
					active={selected === "wifi"}
				/>

				<AmenitiesItem
					label="USB port"
					onPress={() => setSelected("usb")}
					active={selected === "usb"}
				/>

				<AmenitiesItem
					label="Reading lights"
					onPress={() => setSelected("lights")}
					active={selected === "lights"}
				/>

				<AmenitiesItem
					label="Pillows"
					onPress={() => setSelected("pillows")}
					active={selected === "pillows"}
				/>

				<AmenitiesItem
					label=" Air conditioner"
					onPress={() => setSelected("air")}
					active={selected === "air"}
				/>
			</View>
		</View>
	);
};

type Props = {
	label: string;
	active?: boolean;
	disabled?: boolean;
	onPress?: () => void;
};
export const AmenitiesItem = ({ label, active, disabled, onPress }: Props) => {
	return (
		<Pressable
			onPress={() => {
				if (disabled) return;
				onPress?.();
			}}
			style={{
				backgroundColor: active ? "#FD8C00" : "#6670851A",
			}}
			className="h-[30px] px-[10px] flex flex-row items-center justify-center gap-[10px] rounded-[10px]"
		>
			<Ionicons name="wifi" size={20} color={active ? "white" : "#FD8C00"} />

			<Text
				style={{
					color: active ? "white" : "#28282B",
				}}
				className="text-xs font-gilroyMedium"
			>
				{label}
			</Text>
		</Pressable>
	);
};

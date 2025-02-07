import { Image, Pressable, Text, View } from "src/ui";

export const TripDetailsHeader = () => {
	return (
		<View
			style={{
				shadowColor: "#000000",
				shadowOffset: {
					width: 0,
					height: 3,
				},
				shadowOpacity: 0.17,
				shadowRadius: 3.05,
				elevation: 4,
			}}
			className="w-full flex gap-[5px] pb-[25px] px-4 bg-white"
		>
			<Text className="text-base font-gilroySemibold text-textColor">
				Mercedes-Benz Tourismo
			</Text>

			<View className="w-full flex flex-row items-center justify-between">
				<Text className="text-sm font-gilroyMedium text-textColor">
					Wuse bus station
				</Text>

				<Image
					source={require("../../assets/icons/arrow.svg")}
					contentFit="contain"
					className="w-[51px] h-2"
				/>

				<Text className="text-sm font-gilroyMedium text-textColor">
					Kogi bus station
				</Text>
			</View>

			<View className="w-full flex flex-row items-center justify-between">
				<Text className="text-xs font-gilroyRegular text-textColor">
					10:00AM
				</Text>

				<Text className="text-xs font-gilroyMedium text-textColor">
					2hr 45min
				</Text>

				<Text className="text-xs font-gilroyRegular text-textColor">
					12:50PM
				</Text>
			</View>
		</View>
	);
};

type Props = {
	label: string;
	active?: boolean;
	onPress?: () => void;
};
export const DetailTabButton = ({ label, active, onPress }: Props) => {
	return (
		<Pressable
			onPress={onPress}
			className="flex-1 h-[56px] flex items-center justify-center relative"
		>
			<Text className="font-gilroyMedium text-sm text-textColor">{label}</Text>

			{active && (
				<View className="absolute bottom-0 w-[70%] h-[2px] bg-[#FD8C00]" />
			)}
		</Pressable>
	);
};

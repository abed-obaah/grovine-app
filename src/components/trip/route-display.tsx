import { Image, Text, View } from "@/ui";

// type Props = {

// };
export const RouteDisplay = () => {
	return (
		<View className="w-full flex gap-[10px]">
			<View className="w-full flex flex-row items-center justify-between">
				<Text className="font-gilroyMedium text-sm text-textColor">
					Wuse bus station
				</Text>

				<Image
					source={require("@/assets/icons/arrow.svg")}
					className="w-[50px] h-[16px]"
					contentFit="contain"
				/>

				<Text className="font-gilroyMedium text-sm text-textColor text-right">
					Kogi bus station
				</Text>
			</View>

			<View className="w-full flex flex-row items-center justify-between">
				<Text className="font-gilroyRegular text-xs text-textColor">
					10:00AM
				</Text>

				<Text className="font-gilroyMedium text-xs text-textColor">
					2hr 45min
				</Text>

				<Text className="font-gilroyRegular text-xs text-textColor text-right">
					12:50PM
				</Text>
			</View>

			<View className="w-full flex flex-row items-center justify-between">
				<Text className="font-gilroyRegular text-xs text-textColor">
					9th Sept, 2024
				</Text>

				<Text className="font-gilroyRegular text-xs text-textColor text-right">
					9th Sept, 2024
				</Text>
			</View>
		</View>
	);
};

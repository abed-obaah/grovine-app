import Feather from "@expo/vector-icons/Feather";

import { Text, View } from "@/ui";

type Props = {
	showCounter?: boolean;
};
export const VehicleFeaturesDisplay = ({ showCounter = true }: Props) => {
	return (
		<View className="w-full flex gap-4">
			<Text className="text-base font-gilroySemibold text-textColor">
				Vehicle features
			</Text>

			<View className="w-full flex flex-row flex-wrap gap-4">
				<Feature name="Wifi" />
				<Feature name="Air conditioner" />
				<Feature name="Pillows" />
				<Feature name="USB port" />
				<Feature name="Reading lights" />

				{showCounter && (
					<View className="h-[30px] bg-[#6670851A] rounded-[20px] flex flex-row items-center justify-center gap-[10px] px-2">
						<Text className="text-sm font-gilroyRegular text-secondary">
							10+
						</Text>
					</View>
				)}
			</View>
		</View>
	);
};

type FeatureProps = {
	name: string;
};
export const Feature = ({ name }: FeatureProps) => {
	return (
		<View className="h-[30px] bg-[#6670851A] rounded-[10px] flex flex-row items-center justify-center gap-[10px] px-4">
			<Feather name="wifi" size={16} color="#FD8C00" />

			<Text className="text-sm font-gilroyRegular text-textColor">{name}</Text>
		</View>
	);
};

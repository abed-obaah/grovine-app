import AntDesign from "@expo/vector-icons/AntDesign";

import { Image, Pressable, Text, View } from "src/ui";
import { router } from "expo-router";

type Props = {
	label: string;
};
export const RouteCard = ({ label }: Props) => {
	return (
		<View className="w-full flex bg-white rounded-[10px]">
			<View className="w-full p-[10px] flex gap-[5px]">
				<View className="w-full flex flex-row items-center justify-between gap-4">
					<Text className="text-base font-gilroySemibold text-textColor">
						{label}
					</Text>
					<Text className="text-xs font-gilroyRegular text-textColor">
						NGN
						<Text className="text-sm font-gilroySemibold">12,000</Text>
					</Text>
				</View>

				<Text className="text-xs font-gilroyRegular text-textColor">
					12 seats
				</Text>

				<View className="w-full flex flex-row items-center justify-between gap-4">
					<View className="flex flex-row items-end gap-1">
						<Text className="text-xs font-gilroyMedium text-textColor">
							5.0
						</Text>

						<AntDesign name="star" size={16} color="#FDC500" />

						<Text className="text-xs font-gilroyMedium text-textColor">
							( 10+ reviews )
						</Text>
					</View>

					<Pressable
						onPress={() => router.navigate("route/details")}
						className="flex flex-row items-center gap-1"
					>
						<Text className="text-sm font-gilroyMedium text-primary">
							More details
						</Text>

						<AntDesign name="right" size={16} color="#5554ED" />
					</Pressable>
				</View>
			</View>

			<View
				style={{
					width: "100%",
					height: 0,
					borderStyle: "dashed",
					borderWidth: 1,
					borderColor: "#667085",
				}}
			/>

			<View className="w-full p-[10px] flex gap-[5px]">
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
		</View>
	);
};

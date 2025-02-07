import Entypo from "@expo/vector-icons/Entypo";
import { LineChart } from "react-native-chart-kit";

import { Pressable, Text, View } from "../../ui";
import { Dimensions } from "react-native";

const chartConfig = {
	backgroundColor: "#fff",
	backgroundGradientFrom: "#fff",
	backgroundGradientTo: "#fff",
	decimalPlaces: 2, // optional, defaults to 2dp
	color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Black text
	labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
	style: {
		borderRadius: 16,
	},
	fillShadowGradient: "white",
	fillShadowGradientOpacity: 0,
	propsForDots: {
		r: "6",
		strokeWidth: "2",
		stroke: "#ffa726",
	},
	propsForBackgroundLines: {
		strokeDasharray: "", // Empty string to remove dash
		strokeWidth: 0, // No lines
	},
};

const data = {
	labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
	datasets: [
		{
			data: [-60, -40, 30, 20, -30, -20],
			strokeWidth: 2,
			color: (opacity = 1) => `rgba(255, 165, 0, ${opacity})`, // Orange line
		},
	],
};

// type Props = {

// };
export const EarningStat = () => {
	return (
		<View className="w-full flex gap-4">
			<View className="ww-full flex flex-row items-center justify-between">
				<Text className="font-gilroySemibold text-base text-black">
					Earning stats
				</Text>

				<Pressable>
					<Text className="font-gilroyMedium text-sm text-secondary">
						View detailed earnings
					</Text>
				</Pressable>
			</View>

			<View className="w-full border border-[#F1F1F1] rounded px-6 py-[14px]">
				<View className="w-full flex gap-2">
					<View className="w-full flex flex-row justify-between">
						<Text className="font-gilroySemibold text-base text-black">
							Balance
						</Text>

						<Pressable className="flex flex-row items-center gap-2">
							<Text className="font-gilroyMedium text-sm text-black">
								This Week
							</Text>

							<Entypo name="chevron-thin-down" size={12} color="black" />
						</Pressable>
					</View>

					<Text className="font-gilroyBold text-[32px] text-secondary">
						5.000,00
					</Text>
				</View>

				<View className="flex items-center justify-center">
					{/* <LineChart
            data={data}
            width={WIDTH - 64} // from react-native
            height={220}
            chartConfig={chartConfig}
            bezier // Adds the smooth curve
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          /> */}

					<LineChart
						data={data}
						width={Dimensions.get("window").width - 64} // from react-native
						height={220}
						yAxisLabel=""
						yAxisSuffix="k"
						yAxisInterval={1} // optional, defaults to 1
						chartConfig={chartConfig}
						bezier
						style={{
							marginVertical: 8,
							borderRadius: 16,
						}}
					/>
				</View>
			</View>
		</View>
	);
};
